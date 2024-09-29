import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

type Props = {
  endValue: number;
}

export const CounterUpPage: React.FC<Props> = ({endValue}) => {

  return (
    <h2 className='heading--h2' >
      <CountUp start={500} end={endValue} duration={2} delay={0} />{' +'}
  </h2>
  )
}