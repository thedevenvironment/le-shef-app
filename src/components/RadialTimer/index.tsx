import type { TimerWithSize } from 'src/types/timer'
import styled from 'styled-components/native'
import TimerCircle from './TimerCircle'
import TimerText from './TimerText'

export default function RadialTimer(timer: TimerWithSize) {
  return (
    <S.Wrapper size={timer.size}>
      <TimerCircle {...timer} />
      <TimerText {...timer} />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.View<{ size: number }>`
    height: ${p => p.size}px;
    width: ${p => p.size}px;
    align-items: center;
    justify-content: center;
  `
}
