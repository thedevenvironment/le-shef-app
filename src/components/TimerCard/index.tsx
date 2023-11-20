import type { Timer } from 'src/types/timer'
import styled from 'styled-components/native'
import RadialTimer from 'src/components/RadialTimer'
import PauseDeleteButtons from '../Buttons/PauseDelete'

export default function TimerCard(timer: Timer) {
  return (
    <S.TimerCard>
      {/* Radial Timer */}
      <RadialTimer size={55} {...timer} />

      {/* Timer Name */}
      <S.TimerName>{timer.name}</S.TimerName>

      {/* Pause Delete Buttons */}
      <PauseDeleteButtons {...timer} />
    </S.TimerCard>
  )
}

const S = {
  TimerCard: styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${p => p.theme.foreground};
    margin: 10px 20px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  `,
  TimerName: styled.Text`
    padding-left: 10px;
    font-size: 20px;
    font-weight: 700;
    flex: 1;
    color: ${p => p.theme.primary};
  `,
  TimerToggle: styled.Switch``
}
