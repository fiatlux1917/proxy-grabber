import * as React from 'react';
import { SetProtocol, ClearLog, GrabProxies } from './types';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import { GrabberBlock } from '../../molecules/GrabberBlock';
import { HeaderBox } from '../../atoms/HeaderBox';

interface GrabberProps {
  className?: string;
  protocol: string;
  proxiesList: string;
  fetching: boolean;
  grabProxies: GrabProxies;
  setProtocol: SetProtocol;
  clearLog: ClearLog;
}

const Grabber: React.FC<GrabberProps> = ({
  clearLog,
  setProtocol,
  fetching,
  protocol,
  proxiesList,
  grabProxies,
}) => {
  return (
    <Segment>
      <Dimmer active={fetching} inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
      <HeaderBox />
      <GrabberBlock
        setProtocol={setProtocol}
        clearLog={clearLog}
        protocol={protocol}
        proxiesList={proxiesList}
        grabProxies={grabProxies}
      />
    </Segment>
  );
};

export { Grabber };
