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
  UserStorie,
  BorderPhoto,
  Photo,
  Name,
  ContentPosts,
} from './styles';
import { Post } from '../../components/Post';

export function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header>
          <Logo source={LogoImg} />
          <IconsHeader>
            <FontAwesome5
              name="heart"
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
          <ScrollView style={{ flex: 1}} showsHorizontalScrollIndicator={false}>
            <ContentUserStories>
              <ScrollView
                collapsable={false}
                showsHorizontalScrollIndicator={false}
                horizontal
              >
                <UserStorie>
                  <BorderPhoto>
                    <Photo
                      source={{
                        uri:
                          'https://avatars.githubusercontent.com/u/69374299?v=4',
                      }}
                    />
                  </BorderPhoto>
                  <Name>Seu story</Name>
                </UserStorie>

                <UserStorie>
                  <BorderPhoto>
                    <Photo
                      source={{
                        uri:
                          'https://avatars.githubusercontent.com/u/69374299?v=4',
                      }}
                    />
                  </BorderPhoto>
                  <Name>Seu story</Name>
                </UserStorie>
                <UserStorie>
                  <BorderPhoto>
                    <Photo
                      source={{
                        uri:
                          'https://avatars.githubusercontent.com/u/69374299?v=4',
                      }}
                    />
                  </BorderPhoto>
                  <Name>Seu story</Name>
                </UserStorie>
                <UserStorie>
                  <BorderPhoto>
                    <Photo
                      source={{
                        uri:
                          'https://avatars.githubusercontent.com/u/69374299?v=4',
                      }}
                    />
                  </BorderPhoto>
                  <Name>Seu story</Name>
                </UserStorie>
                <UserStorie>
                  <BorderPhoto>
                    <Photo
                      source={{
                        uri:
                          'https://avatars.githubusercontent.com/u/69374299?v=4',
                      }}
                    />
                  </BorderPhoto>
                  <Name>Seu story</Name>
                </UserStorie>

                <UserStorie>
                  <BorderPhoto>
                    <Photo
                      source={{
                        uri:
                          'https://avatars.githubusercontent.com/u/69374299?v=4',
                      }}
                    />
                  </BorderPhoto>
                  <Name>Seu story</Name>
                </UserStorie>
                <UserStorie>
                  <BorderPhoto>
                    <Photo
                      source={{
                        uri:
                          'https://avatars.githubusercontent.com/u/69374299?v=4',
                      }}
                    />
                  </BorderPhoto>
                  <Name>Seu story</Name>
                </UserStorie>
                <UserStorie>
                  <BorderPhoto>
                    <Photo
                      source={{
                        uri:
                          'https://avatars.githubusercontent.com/u/69374299?v=4',
                      }}
                    />
                  </BorderPhoto>
                  <Name>Seu story</Name>
                </UserStorie>
                <UserStorie>
                  <BorderPhoto>
                    <Photo
                      source={{
                        uri:
                          'https://avatars.githubusercontent.com/u/69374299?v=4',
                      }}
                    />
                  </BorderPhoto>
                  <Name>Seu story</Name>
                </UserStorie>
                <UserStorie>
                  <BorderPhoto>
                    <Photo
                      source={{
                        uri:
                          'https://avatars.githubusercontent.com/u/69374299?v=4',
                      }}
                    />
                  </BorderPhoto>
                  <Name>Seu story</Name>
                </UserStorie>
                <UserStorie>
                  <BorderPhoto>
                    <Photo
                      source={{
                        uri:
                          'https://avatars.githubusercontent.com/u/69374299?v=4',
                      }}
                    />
                  </BorderPhoto>
                  <Name>Seu story</Name>
                </UserStorie>
                <UserStorie>
                  <BorderPhoto>
                    <Photo
                      source={{
                        uri:
                          'https://avatars.githubusercontent.com/u/69374299?v=4',
                      }}
                    />
                  </BorderPhoto>
                  <Name>Seu story</Name>
                </UserStorie>
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
