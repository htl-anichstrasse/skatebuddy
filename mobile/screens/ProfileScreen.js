// librarys
import React from 'react';
import { View, Image, ScrollView, Pressable } from 'react-native';
import * as Keychain from 'react-native-keychain';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// components
import Text from '../components/common/Text';
import Button from '../components/common/Button';

// styles
import styles from '../styles/ProfileStyles';
import gStyles from '../styles/GlobalStyles';
import colors from '../styles/Colors';

// hooks / contexts
import { useAuthContext, useAuthContextState } from '../contexts/AuthContext';

const user = {
  name: 'test1',
  email: 'test1@gmail.com',
  profilePictureId: null,
};

const ProfileScreen = () => {
  const { signOut } = useAuthContext();
  const state = useAuthContextState();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={[styles.userDetailsContainer, gStyles.shadow]}>
          <View style={styles.profilePictureContainer}>
            {/* <MaterialCommunityIcons
              name="cogs"
              size={30}
              color={colors.white}
            /> */}
            <Image
              source={require('../data/defaultUserProfilePicture1.jpg')}
              style={styles.profilePicture}
            />
            {/* <Pressable
              style={styles.editProfileLink}
              onPress={() => alert('edit profile')}
            >
              <MaterialCommunityIcons
                name="cogs"
                size={30}
                color={colors.text}
              />
            </Pressable> */}
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.label}>Username: </Text>
            <Text style={styles.detail}>{user.name}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.label}>Email: </Text>
            <Text style={styles.detail}>{user.email}</Text>
          </View>
        </View>
        <Button
          title="Abmelden"
          onPress={signOut}
          icon="location-exit"
          iconType="mci"
        />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

{
  /* <Button
        title="Print auth state"
        onPress={() => {
          console.log('AuthContextState: ', state);
          Keychain.getInternetCredentials('jwt').then(creds => {
            console.log('Keychain: ', creds);
          });
        }}
      /> */
}
