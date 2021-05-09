import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 10px;
  margin: 10px 0;
`;

export const InfoComment = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const ImagePerfilComment = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 20px;
  margin-right: 5px;
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

export const InfoDescription = styled.View`
  flex: 1;
  padding-right: 20px;
  position: relative;
`;

export const Details = styled.View`
  flex-direction: row;
`;
