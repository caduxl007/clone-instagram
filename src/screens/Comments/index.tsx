import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import {
  Container,
  Header,
  TextPage,
  Content,
  InfoPost,
  BorderImagePerfil,
  ImagePerfil,
  Description,
  NameUserPost,
  TextPost,
  TextData,
} from './styles';
import { Comment } from '../../components/Comment';
import { useNavigation } from '@react-navigation/core';

export function Comments() {
  const navigation = useNavigation();

  const navigateBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container>
      <Header>
        <FontAwesome5
          name="arrow-left"
          size={22}
          color="white"
          onPress={navigateBack}
        />
        <TextPage>Comentários</TextPage>
        <FontAwesome5 name="paper-plane" size={22} color="white" />
      </Header>

      <Content>
        <ScrollView style={{ flex: 1 }}>
          <InfoPost>
            <BorderImagePerfil
              colors={['#fed373', '#f15245', '#d92e7f', '#9b36b7', '#515ecf']}
            >
              <ImagePerfil
                source={{
                  uri: 'https://avatars.githubusercontent.com/u/69374299?v=4',
                }}
              />
            </BorderImagePerfil>
            <Description>
              <TextPost>
                <NameUserPost>caduxl</NameUserPost> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Error, quisquam animi. Culpa
                cupiditate laboriosam accusamus placeat accusantium excepturi
                possimus a, praesentium dolore totam quis. Dignissimos ea
                expedita facere aspernatur eveniet.
              </TextPost>
              <TextData>2 d</TextData>
            </Description>
          </InfoPost>

          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </ScrollView>
      </Content>
    </Container>
  );
}
