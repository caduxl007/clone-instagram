import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
  margin-top: ${getStatusBarHeight() + 10}px;
  margin-bottom: 4px;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 28px;
`;

export const IconsHeader = styled.View`
  flex-direction: row;
`;

export const Content = styled.View``;

export const ContentUserStories = styled.View`
  width: 100%;
  margin-top: 20px;
  padding-bottom: 8px;
  border-bottom-width: 0.2px;
  border-bottom-color: #444;
`;

export const UserStorie = styled.View`
  align-items: center;
  margin-right: 15px;
`;

export const BorderPhoto = styled.View`
  border: 1px solid #cccc;
  width: 70px;
  height: 70px;
  border-radius: 40px;

  align-items: center;
  justify-content: center;
`;

export const Photo = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 40px;
`;
export const Name = styled.Text`
  margin-top: 2px;
  color: white;
  font-size: 10px;
`;

export const ContentPosts = styled.View``;


