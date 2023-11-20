import type { TimerWithSize } from 'src/types/timer'
import styled from 'styled-components/native'
import { formatNumber } from 'src/utils/format'

export default function TimerText(timer: TimerWithSize) {
  return (
    <>
      <S.TimeWrapper>
        {timer.remaining <= 0 ? (
          <S.TimeNumber done={true} size={timer.size}>DONE!</S.TimeNumber>
        ) : (
          <>
            <S.TimeNumber size={timer.size}>{formatNumber(Math.floor(timer.remaining / 60_000))}</S.TimeNumber>
            <S.TimeIdentifier size={timer.size}>M</S.TimeIdentifier>
            <S.TimeNumber size={timer.size}>{formatNumber(Math.ceil((timer.remaining % 60_000) / 1000))}</S.TimeNumber>
            <S.TimeIdentifier size={timer.size}>S</S.TimeIdentifier>
          </>
        )}
      </S.TimeWrapper>
    </>
  )
}

const S = {
  TimeWrapper: styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
  TimeNumber: styled.Text<{ size: number, done?: boolean }>`
    color: ${p => p.done ? p.theme.success : p.theme.primary};
    font-weight: 900;
    font-size: ${p => Math.round(p.size / 6)}px;
  `,
  TimeIdentifier: styled.Text<{ size: number }>`
    color: ${p => p.theme.primary};
    font-weight: 900;
    font-size: ${p => Math.round(p.size / 12)}px;
  `
}
