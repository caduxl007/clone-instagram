import React, { useCallback, useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import {
  Container,
  NameUserPost,
  TextPost,
  TextData,
  InfoComment,
  ImagePerfilComment,
  InfoDescription,
  Details,
} from './styles';

export function Comment() {
  const [isLiked, setIsLiked] = useState(false);
  const [countLike, setCountLike] = useState(0);

  const toggleLiked = useCallback(() => {
    setIsLiked(oldValue => !oldValue);
  }, [isLiked]);

  useEffect(() => {
    if (isLiked) {
      setCountLike(1);
    } else {
      setCountLike(0);
    }
  }, [isLiked]);

  return (
    <Container>
      <InfoComment>
        <ImagePerfilComment
          source={{
            uri: 'https://avatars.githubusercontent.com/u/69374299?v=4',
          }}
        />
        <InfoDescription>
          <TextPost>
            <NameUserPost>caduxl</NameUserPost> Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </TextPost>
          <FontAwesome5
            solid={isLiked}
            name="heart"
            size={11}
            color={isLiked ? 'red' : '#cccc'}
            style={{ position: 'absolute', right: 0, top: '30%' }}
            onPress={toggleLiked}
          />
          <Details>
            <TextData>2 d</TextData>
            {!!countLike && <TextData>{countLike} curtidas</TextData>}
            <TextData>Responder</TextData>
          </Details>
        </InfoDescription>
      </InfoComment>
    </Container>
  );
}
