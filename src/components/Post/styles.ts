import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  margin-top: 10px;
`;

export const HeaderPost = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 0 10px;
`;

export const BorderImagePerfil = styled(LinearGradient)`
  width: 40px;
  height: 40px;
  border-radius: 20px;

  align-items: center;
  justify-content: center;

  margin-right: 5px;
`;

export const ImagePerfil = styled.Image`
  width: 37px;
  height: 37px;
  border-radius: 20px;
`;

export const NameUserPost = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 15px;
`;

export const ImagePost = styled.Image`
  margin-top: 5px;
  width: 100%;
  height: 500px;
`;

export const IconsOptionsPost = styled.View`
  flex-direction: row;
  padding: 10px;
`;

export const Footer = styled.View`
  padding: 5px 10px;
`;

export const InfoUser = styled.View`
  flex-direction: row;
`;

export const TextPost = styled.Text`
  margin-left: 4px;
  color: white;
  flex-direction: row;
`;

export const TextHour = styled.Text`
  color: #666;
  margin-top: 4px;
  font-size: 11px;
`;
