import { useTimers } from 'src/hooks/useTimers'
import { Timer } from 'src/types/timer'
import styled from 'styled-components/native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

export default function PauseDeleteButtons(timer: Timer) {
  const togglePauseTimer = useTimers(s => s.togglePauseTimer)
  const deleteTimer = useTimers(s => s.deleteTimer)

  return (
    <S.Wrapper>
      {timer.remaining > 0 && (
        <S.ButtonWrapper paused={timer.paused} onPress={() => togglePauseTimer(timer.id)}>
          <S.Icon name="pause" paused={timer.paused} />
        </S.ButtonWrapper>
      )}
      <S.ButtonWrapper onPress={() => deleteTimer(timer.id)}>
        <S.Icon name="delete-forever" />
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.View`
    flex-direction: row;
    gap: 10px;
  `,
  ButtonWrapper: styled.TouchableOpacity<{ paused?: boolean }>`
    border-width: 1px;
    border-radius: 10px;
    background-color: ${p => (p.paused ? p.theme.primary : 'transparent')};
    border-color: ${p => p.theme.primary};
    padding: 10px;
  `,
  Icon: styled(MaterialCommunityIcons)<{ paused?: boolean }>`
    color: ${p => (p.paused ? '#FFF' : p.theme.primary)};
    font-size: 20px;
  `
}
