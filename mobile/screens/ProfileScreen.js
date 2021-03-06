// librarys
import React, { useEffect } from 'react';
import { View, Image } from 'react-native';

// components
import Text from '../components/common/Text';
import Button from '../components/common/Button';

// styles
import styles from '../styles/ProfileStyles';
import gStyles from '../styles/GlobalStyles';

// hooks / contexts
import { useAuthContext, useAuthContextState } from '../contexts/AuthContext';

const ProfileScreen = () => {
  const { decodeToken, signOut } = useAuthContext();
  const state = useAuthContextState();

  useEffect(() => {
    decodeToken(state.userToken);
  }, [state.userToken, decodeToken]);

  return (
    <View style={styles.container}>
      <View style={[styles.userDetailsContainer, gStyles.shadow]}>
        <View style={styles.profilePictureContainer}>
          {/* <MaterialCommunityIcons
              name="cogs"
              size={30}
              color={colors.white}
            /> */}
          <Image
            source={require('../data/defaultUserProfilePicture.jpg')}
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
        {state.currentUser && (
          <>
            <View style={styles.detailContainer}>
              <Text style={styles.label}>UserId: </Text>
              <Text style={styles.detail}>
                {JSON.stringify(state.currentUser.userId)}
              </Text>
            </View>
            <View style={styles.detailContainer}>
              <Text style={styles.label}>Username: </Text>
              <Text style={styles.detail}>{state.currentUser.name}</Text>
            </View>
            <View style={styles.detailContainer}>
              <Text style={styles.label}>Email: </Text>
              <Text style={styles.detail}>{state.currentUser.email}</Text>
            </View>
          </>
        )}
      </View>
      <Button
        title="Abmelden"
        onPress={signOut}
        icon="location-exit"
        iconType="mci"
      />
      {/* <Button
          title="Print auth state"
          onPress={() => {
            console.log('AuthContextState: ', state);
            Keychain.getInternetCredentials('jwt').then(creds => {
              console.log('Keychain: ', creds.password);
            });
          }}
        />
        <Button
          title="Reset auth state"
          onPress={() => {
            Keychain.resetInternetCredentials('jwt');
            console.log('jwt Keychain resetted');
          }}
        /> */}
    </View>
  );
};

export default ProfileScreen;
