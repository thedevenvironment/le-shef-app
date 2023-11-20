import styled from 'styled-components/native'
import NewTimerButton from 'src/components/Buttons/NewTimer'
import TimerCard from 'src/components/TimerCard'
import { useTimers } from 'src/hooks/useTimers'
import { useEffect } from 'react'


export default function IndexScreen() {
  const timers = useTimers(s => s.timers)
  const decrementTimers = useTimers(s => s.decrementTimers)

  useEffect(() => {
    const interval = setInterval(() => decrementTimers(), 1000)

    return () => {
      console.log('clear interval')
      clearInterval(interval)
    }
  }, [])

  return (
    <S.Wrapper>
      {timers.map((timer, i) => <TimerCard key={`timer-${i}`} {...timer} />)}
      <NewTimerButton />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.ScrollView`
    padding-top: 10px;
  `
}
