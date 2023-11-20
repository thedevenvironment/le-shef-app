import type { TimerWithSize } from 'src/types/timer'
import { useRef } from 'react'
import Svg, { Circle } from 'react-native-svg'
import { appTheme } from 'src/assets/styles/theme'

export default function TimerCircle(timer: TimerWithSize) {
  const strokeWidth = useRef(timer.size / 8)
  const radius = useRef((timer.size - strokeWidth.current) / 2)
  const circumference = useRef(radius.current * 2 * Math.PI)
  const xy = useRef(timer.size / 2)

  return (
    <Svg height={timer.size} width={timer.size} style={{ position: 'absolute', top: 0, left: 0 }}>
      <Circle
        cx={xy.current}
        cy={xy.current}
        r={radius.current}
        stroke="rgba(255, 255, 255, 0.2)"
        strokeWidth={strokeWidth.current}
        fill="transparent"
      />
      <Circle
        cx={xy.current}
        cy={xy.current}
        r={radius.current}
        stroke={timer.remaining <= 0 ? appTheme.success : appTheme.primary}
        strokeWidth={strokeWidth.current}
        strokeDasharray={circumference.current}
        strokeDashoffset={Math.ceil(circumference.current - circumference.current * (timer.remaining / timer.totalTime))}
        strokeLinecap="round"
        fill="transparent"
      />
    </Svg>
  )
}
