// libraries
import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// components
import Text from '../common/Text';

// hooks

// styles
import styles from '@styles/ReviewsStyles';
import colors from '@styles/Colors';

const Review = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(prevIsExpanded => {
      return !prevIsExpanded;
    });
  };

  const grayStars = 5 - Math.round(review.rating);
  const filledStars = Math.round(review.rating);

  return (
    <View style={styles.review}>
      <Text style={styles.reviewUser}>{review.username}</Text>
      <View style={styles.reviewHeader}>
        <Text style={styles.reviewTitle}>
          (#{review.reviewId}) {review.title}
        </Text>
        <View style={styles.starsContainer}>
          {[...Array(filledStars)].map((_, i) => (
            <MaterialCommunityIcons
              key={i}
              name="star"
              size={20}
              color={colors.secondary}
            />
          ))}
          {[...Array(grayStars)].map((_, i) => (
            <MaterialCommunityIcons
              key={i}
              name="star-outline"
              size={20}
              color={colors.secondary}
            />
          ))}
        </View>
      </View>
      {review.content.length <= 200 ? (
        <Text style={styles.reviewContent}>{review.content}</Text>
      ) : review.content.length > 200 && isExpanded ? (
        <>
          <Text style={styles.reviewContent}>{review.content}</Text>
          <Pressable onPress={toggleExpanded}>
            <Text style={styles.readMore}>Weniger anzeigen</Text>
          </Pressable>
        </>
      ) : (
        <>
          <Text style={styles.reviewContent}>
            {review.content.substring(0, 140)}...
          </Text>
          <Pressable onPress={toggleExpanded}>
            <Text style={styles.readMore}>Mehr anzeigen</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default Review;
