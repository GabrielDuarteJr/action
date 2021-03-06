import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import Space from '../commons/Space'
import Scroll from '../commons/Scroll'
import Text from '../commons/Text'
import theme from '../theme'
import RaspItem from '../commons/RaspItem'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AddRaspModal from '../commons/AddRaspModal'
import { useQuery } from '@apollo/react-hooks'
import RASPBERRY from '../graphql/queryes/RASPBERRY'

const Wrapper = styled.View`
  flex: 1;
  background: ${(p) => p.theme.background};
  padding-horizontal: 10px;
`

const RowTitle = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const AddButon = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  background: ${(p) => p.theme.secundary};
  border-radius: 7px;
  align-items: center;
  justify-content: center;
`

const ActionsWrapper = styled.View`
  background: ${(p) => p.theme.lightBackground};
  width: 100%;
  border-radius: 7px;
  padding: 15px 20px 15px 20px;
`

const Settings = () => {
  const { data: raspberry } = useQuery(RASPBERRY)

  const [isVIsible, setIsVisible] = useState(false)

  const handleModal = () => setIsVisible(!isVIsible)

  return (
    <Wrapper>
      <AddRaspModal isVisible={isVIsible} setIsVisible={handleModal} />
      <Scroll>
        <Space height={30} />
        <ActionsWrapper>
          <RowTitle>
            <Text color={theme.text} size={15}>
              Raspberries
            </Text>
            <Space width={5} />
            <Icon size={15} color="#C51A4A" name="raspberry-pi" />
          </RowTitle>
          <Space height={10} />
          {!!raspberry?.raspberry && <RaspItem data={raspberry?.raspberry} />}
          <Space height={20} />
          <AddButon onPress={() => handleModal()}>
            <Text bold size={15} color={theme.text}>
              {!!raspberry?.raspberry ? 'Editar' : 'Adicionar'}
            </Text>
          </AddButon>
        </ActionsWrapper>
        <Space height={30} />
        <ActionsWrapper>
          <RowTitle>
            <Icon size={15} color="#C51A4A" name="terminal" />
          </RowTitle>
          <Space height={20} />
          <Text bold color="#C51A4A" size={15}>
            Instalação em seu dispositivo raspberry pi:
          </Text>
          <Space height={20} />
          <Text bold size={15}>
            $ sudo yarn global add action-server
          </Text>
          <Space height={20} />
          <Text numberOfLines={2} size={15}>
            Depois de instalado você pode rodar o servidor com o comando:
          </Text>
          <Space height={20} />
          <Text bold size={15}>
            $ sudo action-server
          </Text>
        </ActionsWrapper>
      </Scroll>
    </Wrapper>
  )
}

export default Settings
