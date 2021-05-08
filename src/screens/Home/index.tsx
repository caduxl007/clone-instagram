import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import LogoImg from '../../assets/logo.png';

import {
  Container,
  Header,
  Logo,
  IconsHeader,
  Content,
  ContentUserStories,
  ContentPosts,
} from './styles';
import { Post } from '../../components/Post';
import { Storie } from '../../components/Storie';

export function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header>
          <Logo source={LogoImg} />
          <IconsHeader>
            <FontAwesome5
              name="plus-square"
              size={22}
              color="white"
              style={{ marginRight: 15 }}
            />
            <FontAwesome5
              name="heart"
              size={22}
              color="white"
              style={{ marginRight: 15 }}
            />
            <FontAwesome5 name="facebook-messenger" size={22} color="white" />
          </IconsHeader>
        </Header>
        <Content>
          <ScrollView showsHorizontalScrollIndicator={false}>
            <ContentUserStories>
              <ScrollView
                collapsable={false}
                showsHorizontalScrollIndicator={false}
                horizontal
              >

                <Storie />
                <Storie />
                <Storie />
                <Storie />
                <Storie />
                <Storie />
                <Storie />

              </ScrollView>
            </ContentUserStories>

            <ContentPosts>
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </ContentPosts>
          </ScrollView>
        </Content>
      </Container>
    </SafeAreaView>
  );
}
