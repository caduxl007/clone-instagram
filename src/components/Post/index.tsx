import React, { useCallback, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

import {
  Container,
  HeaderPost,
  BorderImagePerfil,
  ImagePerfil,
  NameUserPost,
  ImagePost,
  IconsOptionsPost,
  Footer,
  InfoUser,
  TextPost,
  TextHour,
} from './styles';

export function Post() {
  const [isLiked, setIsLiked] = useState(false);
  const [countTouch, setCountTouch] = useState(1);

  const navigation = useNavigation();

  const toggleLiked = useCallback(() => {
    setIsLiked(oldValue => !oldValue);
  }, []);

  const handleLiked = useCallback(() => {
    setCountTouch(oldValue => oldValue + 1);

    if (countTouch == 2) {
      setIsLiked(true);
    }

    setTimeout(() => {
      setCountTouch(1);
    }, 1500);
  }, [countTouch]);

  const navigateForComments = useCallback(() => {
    navigation.navigate('Comments');
  }, [navigation]);

  return (
    <Container>
      <HeaderPost>
        <BorderImagePerfil
          colors={['#fed373', '#f15245', '#d92e7f', '#9b36b7', '#515ecf']}
        >
          <ImagePerfil
            source={{
              uri: 'https://avatars.githubusercontent.com/u/69374299?v=4',
            }}
          />
        </BorderImagePerfil>
        <NameUserPost>caduxl</NameUserPost>
        <FontAwesome5
          name="ellipsis-v"
          size={20}
          color="white"
          style={{ marginLeft: 'auto' }}
        />
      </HeaderPost>
      <TouchableWithoutFeedback onPress={handleLiked}>
        <ImagePost
          source={{
            uri:
              'https://desafiosdaeducacao.grupoa.com.br/wp-content/uploads/2017/07/instagram-1581266_960_720.jpg',
          }}
        />
      </TouchableWithoutFeedback>
      <IconsOptionsPost>
        <FontAwesome5
          solid={isLiked}
          name="heart"
          size={22}
          color={isLiked ? 'red' : 'white'}
          style={{ marginRight: 15 }}
          onPress={toggleLiked}
        />
        <FontAwesome5
          name="comment"
          size={22}
          color="white"
          style={{ marginRight: 15 }}
          onPress={navigateForComments}
        />
        <FontAwesome5
          name="paper-plane"
          size={22}
          color="white"
          style={{ marginRight: 'auto' }}
        />

        <FontAwesome5 name="bookmark" size={22} color="white" />
      </IconsOptionsPost>
      <Footer>
        <InfoUser>
          <NameUserPost>caduxl</NameUserPost>
          <TextPost>Sei la sei la sei la</TextPost>
        </InfoUser>

        <TextHour>há 1 dia</TextHour>
      </Footer>
    </Container>
  );
}
