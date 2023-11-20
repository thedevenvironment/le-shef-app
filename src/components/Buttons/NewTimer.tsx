import styled from 'styled-components/native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useTimers } from 'src/hooks/useTimers'
import {randomUUID} from 'expo-crypto'

export default function NewTimerButton() {
  const addTimer = useTimers(s => s.addTimer)

  const handlePress = () => {
    addTimer({ id: randomUUID(), name: 'Billy', paused: false, remaining: 1000 * 60 * 2, totalTime: 1000 * 60 * 2 })
  }

  return (
    <S.AddButton onPress={handlePress}>
      <S.AddTimer name="alarm-add" />
      <S.AddButtonText>NEW TIMER</S.AddButtonText>
    </S.AddButton>
  )
}

const S = {
  AddButton: styled.TouchableOpacity`
    background-color: ${p => p.theme.primary};
    flex-direction: row;
    margin: 10px 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
  `,
  AddButtonText: styled.Text`
    text-align: center;
    color: ${p => p.theme.foreground};
    font-weight: 900;
    padding: 15px;
  `,
  AddTimer: styled(MaterialIcons)`
    color: ${p => p.theme.foreground};
    font-size: 18px;
    text-shadow: #ffb54d 0px 0 15px;
  `
}
