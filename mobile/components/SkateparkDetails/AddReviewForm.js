// libraries
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import Slider from '@react-native-community/slider';
import { showMessage } from 'react-native-flash-message';

// components
import Text from '../common/Text';
import Button from '../common/Button';
import TextInput from '../common/TextInput';

// hooks
import { useAuthContextState } from '../../contexts/AuthContext';

// styles
import styles from '@styles/SkateparkDetailsStyles';
import colors from '@styles/Colors';

const reviewSchema = yup.object({
  title: yup
    .string()
    .required('Titel leer')
    .min(4, 'Der Titel muss mindestens 4 Zeichen lang sein')
    .max(30, 'Der Titel darf maximal 30 Zeichen lang sein'),
  content: yup
    .string()
    // .required('Inhalt leer')
    .min(
      8,
      'Wenn du einen Inhalt schreibst, musst du mindestens 8 Zeichen schreiben',
    ),
  rating: yup
    .string()
    .required('Bewertung leer')
    .test(
      'is-num-1-5',
      'Bewertung muss zwischen 1 und 5 liegen',
      val => val < 6 && val > 0,
    ),
});

const AddReviewForm = ({ newReview, setModalVisible, parkid }) => {
  const state = useAuthContextState();

  return (
    <Formik
      initialValues={{ title: '', content: '', rating: '3' }}
      validationSchema={reviewSchema}
      onSubmit={async (values, actions) => {
        const review = {
          userid: state.currentUser.userId,
          username: state.currentUser.name,
          parkid,
          title: values.title.trim(),
          content: values.content.trim(),
          rating: parseInt(values.rating, 10),
        };

        console.log(review);

        try {
          const res = await fetch(
            'https://skate-buddy.josholaus.com/api/reviews',
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${state.userToken}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(review),
            },
          );
          const resJson = await res.json();
          if (resJson.success) {
            newReview(review);
            actions.resetForm();
            setModalVisible(false);

            showMessage({
              message: 'Bewertung erfolgreich gespeichert',
              type: 'success',
              icon: 'auto',
            });
          }
        } catch (e) {
          console.log(e);
          showMessage({
            message: 'Bewertung konnte nicht gespeichert werden',
            description:
              'Möglicherweise hast du schon eine Bewertung abgegeben',
            type: 'danger',
            icon: 'auto',
            duration: 3000,
          });
        }
      }}
    >
      {({
        setFieldValue,
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
      }) => (
        <>
          <Text style={styles.inputLabel}>Titel *</Text>
          <TextInput
            name="title"
            icon="alpha-t-box"
            value={values.title}
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            touched={touched.title}
            errors={errors.title}
            color={colors.secondary}
          />

          <Text style={styles.errorText}>{touched.title && errors.title} </Text>

          <Text style={styles.inputLabel}>Inhalt</Text>
          <TextInput
            name="content"
            icon="text-box"
            value={values.content}
            onChangeText={handleChange('content')}
            onBlur={handleBlur('content')}
            touched={touched.content}
            errors={errors.content}
            color={colors.secondary}
            //
            multiline
            numberOfLines={4}
          />

          <Text style={styles.errorText}>
            {touched.content && errors.content}{' '}
          </Text>

          <Text style={styles.inputLabel}>Bewertung *</Text>
          <Text style={styles.ratingValue}>{values.rating}</Text>
          <Slider
            step={1}
            style={styles.ratingSlider}
            minimumValue={1}
            maximumValue={5}
            onSlidingComplete={rating => {
              setFieldValue('rating', rating.toString());
            }}
            value={parseInt(values.rating, 10)}
            minimumTrackTintColor={colors.secondarySoft}
            maximumTrackTintColor="#000"
            thumbTintColor={colors.secondary}
          />

          <Text style={styles.errorMessage}>
            {touched.rating && errors.rating}
          </Text>

          <Button
            onPress={handleSubmit}
            title="Senden"
            style={styles.button}
            icon="send"
            iconType="ii"
            iconSize={20}
          />
        </>
      )}
    </Formik>
  );
};

export default AddReviewForm;
