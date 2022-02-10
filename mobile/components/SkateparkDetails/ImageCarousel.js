// libraries
import React, { useState, useRef } from 'react';
import { View, Dimensions, Pressable, Image, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// components
import Text from '@components/common/Text';
import CarouselHeader from './CarouselHeader';

// hooks

// styles
import styles from '@styles/CarouselStyles';
import colors from '@styles/Colors';
import gStyles from '@styles/GlobalStyles';

const ImageCarousel = ({ pictures }) => {
  const items = [
    {
      name: 'Item 1',
    },
    {
      name: 'Item 2',
    },
    {
      name: 'Item 3',
    },
    {
      name: 'Item 4',
    },
    {
      name: 'Item 5',
    },
  ];

  const renderItem = ({ item, index }) => {
    let url = 'https://skate-buddy.josholaus.com/api/skateparkpictures/';
    url += item.skateparkId;
    url += '/';
    url += item.picId;

    return (
      <Image
        source={{
          uri: url,
          width: Dimensions.get('window').width - 80,
          height: 200,
        }}
        //"https://cdn.pixabay.com/photo/2022/01/25/12/58/conifer-6966140_960_720.jpg"
        style={{
          flex: 1,
        }}
      />
    );
  };

  const carouselRef = useRef(null);
  const [autoplayEnabled, setAutoplayEnabled] = useState(false);
  const [lastSnap, setLastSnap] = useState(Date.now());
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={[styles.container, gStyles.shadow]}>
      <CarouselHeader />
      <Carousel
        ref={carouselRef}
        data={pictures}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width - 80}
        //
        slideStyle={styles.carouselItemContainer}
        //
        loop={true}
        loopClonesPerSide={2}
        //
        scrollEnabled={false}
        autoplay={autoplayEnabled}
        autoplayDelay={500}
        autoplayInterval={3000}
        //
        onSnapToItem={index => {
          if (index === 0) {
            carouselRef.current.snapToItem(0, false, false);
          }
          setCurrentIndex(index);
        }}
      />
      {carouselRef.current && (
        <Pagination
          dotsLength={pictures.length}
          activeDotIndex={currentIndex}
          carouselRef={carouselRef}
          tappableDots={!autoplayEnabled}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          dotColor={colors.secondary}
          inactiveDotColor={colors.secondary}
          dotContainerStyle={styles.dotContainer}
          containerStyle={styles.paginationContainer}
        />
      )}

      <Pressable
        style={[styles.autoplayButton, gStyles.shadow]}
        onPress={() => {
          if (autoplayEnabled) {
            carouselRef.current.stopAutoplay();
            setAutoplayEnabled(false);
          } else {
            carouselRef.current.startAutoplay();
            setAutoplayEnabled(true);
          }
        }}
      >
        <MaterialCommunityIcons
          name={autoplayEnabled ? 'animation-play' : 'animation-play-outline'}
          size={30}
          color={autoplayEnabled ? colors.primary : colors.error}
        />
      </Pressable>

      {!autoplayEnabled && (
        <>
          <Pressable
            style={[styles.nextButton, gStyles.shadow]}
            onPress={() => {
              if (Date.now() - lastSnap > 300) {
                carouselRef.current.snapToNext();
                setLastSnap(Date.now());
              }
            }}
          >
            <MaterialCommunityIcons
              name="chevron-right"
              size={50}
              color={colors.secondary}
            />
          </Pressable>
          <Pressable
            style={[styles.prevButton, gStyles.shadow]}
            onPress={() => {
              if (Date.now() - lastSnap > 300) {
                carouselRef.current.snapToPrev();
                setLastSnap(Date.now());
              }
            }}
          >
            <MaterialCommunityIcons
              name="chevron-left"
              size={50}
              color={colors.secondary}
            />
          </Pressable>
        </>
      )}
    </View>
  );
};

export default ImageCarousel;
