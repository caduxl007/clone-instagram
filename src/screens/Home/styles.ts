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

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const ContentUserStories = styled.View`
  flex: 1;
  margin-top: 20px;
  padding-bottom: 8px;
  border-bottom-width: 0.2px;
  border-bottom-color: #444;
`;

export const ContentPosts = styled.View`
  width: 100%;
`;
