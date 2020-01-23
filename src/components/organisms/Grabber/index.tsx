import * as React from 'react';
import { GrabberBlock } from '../../molecules/GrabberBlock';

interface GrabberProps {
  className?: string;
}

const Grabber: React.FC<GrabberProps> = () => {
  return <GrabberBlock />;
};

export { Grabber };
