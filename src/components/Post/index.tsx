import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

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
  return (
    <Container>
      <HeaderPost>
        <BorderImagePerfil
          colors={[
            '#fed373',
            '#f15245',
            '#d92e7f',
            '#9b36b7',
            '#515ecf',
          ]}
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
      <ImagePost
        source={{
          uri: 'https://avatars.githubusercontent.com/u/69374299?v=4',
        }}
      />
      <IconsOptionsPost>
        <FontAwesome5
          name="heart"
          size={22}
          color="white"
          style={{ marginRight: 15 }}
        />
        <FontAwesome5
          name="comment"
          size={22}
          color="white"
          style={{ marginRight: 15 }}
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
