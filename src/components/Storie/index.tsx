import React from 'react';

import { Container, BorderPhoto, Photo, Name } from './styles';

export function Storie() {
  return (
    <Container>
      <BorderPhoto>
        <Photo
          source={{
            uri: 'https://avatars.githubusercontent.com/u/69374299?v=4',
          }}
        />
      </BorderPhoto>
      <Name>Seu story</Name>
    </Container>
  );
}
