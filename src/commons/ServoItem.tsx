import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import theme from '../theme';
import Text from './Text';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Slider from '@react-native-community/slider';
import {remove} from '../services/Storage';

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 140px;
  background: ${(p) => p.theme.terceary};
  border-color: ${(p) => p.theme.background};
  border-radius: 7px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 2%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  elevation: 5;
  overflow: hidden;
`;

const Button = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
`;

const DeleteWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

const TextWrapper = styled.View`
  flex-direction: column;
  max-width: 70px;
`;

interface Props {
  name: string;
  gpio: any;
  id: string;
  isHorizontal: boolean;
}

const GamePadItem = ({name, gpio, id, isHorizontal}: Props) => {
  const [delet, setDelet] = useState(false);
  const [value, setValue] = useState(90);

  const onDelete = async (id: string) => {
    remove(id);
  };

  const addDelet = () => {
    setDelet(true);
    setTimeout(() => {
      setDelet(false);
    }, 5000);
  };

  return (
    <Wrapper>
      <Text color={theme.text} size={30}>
        {value}º
      </Text>
      <Slider
        style={{width: '100%'}}
        minimumValue={1}
        maximumValue={180}
        value={value}
        minimumTrackTintColor={theme.text}
        maximumTrackTintColor={theme.text}
        thumbTintColor={theme.lightBackground}
        onValueChange={(e: any) => {
          setValue(parseInt(e));
        }}
      />
      <DeleteWrapper>
        <TextWrapper>
          <Text color={theme.text}>{name}</Text>
          <Text bold color={theme.text}>
            {`GPIO: ${gpio}`}
          </Text>
        </TextWrapper>
        {delet ? (
          <Button onPress={() => onDelete(id)}>
            <Icon
              color={theme.lightBackground}
              name="exclamation-circle"
              size={30}
            />
          </Button>
        ) : (
          <Button onPress={() => addDelet()}>
            <Icon color={theme.lightBackground} name="trash-alt" size={30} />
          </Button>
        )}
      </DeleteWrapper>
    </Wrapper>
  );
};

GamePadItem.defaultProps = {
  gpio: 23,
  name: 'Test',
};

export default GamePadItem;
