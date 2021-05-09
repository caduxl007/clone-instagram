import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  padding: 0 15px;
  margin-top: ${getStatusBarHeight() + 10}px;
  margin-bottom: 4px;
`;

export const TextPage = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-left: 30px;
  margin-right: auto;
`;

export const Content = styled.View`
  flex: 1;
`;

export const InfoPost = styled.View`
  margin-top: 10px;
  padding: 0 10px;
  flex-direction: row;

  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #444;
`;

export const BorderImagePerfil = styled(LinearGradient)`
  width: 45px;
  height: 45px;
  border-radius: 30px;

  align-items: center;
  justify-content: center;

  margin-right: 5px;
`;

export const ImagePerfil = styled.Image`
  width: 41px;
  height: 41px;
  border-radius: 20px;
`;

export const Description = styled.View`
  flex: 1;
  padding-right: 20px;
`;

export const NameUserPost = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 15px;
  margin-right: 10px;
`;

export const TextPost = styled.Text`
  color: white;
`;

export const TextData = styled.Text`
  color: #cccc;
  margin-top: 4px;
  font-size: 11px;
  margin-right: 20px;
`;
