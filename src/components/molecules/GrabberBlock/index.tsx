import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import { ResultList } from '../../atoms/ResultList';
import { СontrolPanel } from '../СontrolPanel';
import {
  ClearLog,
  SetProtocol,
  GrabProxies,
} from '../../organisms/Grabber/types';

interface GrabberBlockProps {
  className?: string;
  protocol: string;
  proxiesList: string;
  grabProxies: GrabProxies;
  setProtocol: SetProtocol;
  clearLog: ClearLog;
}

const GrabberBlock: React.FC<GrabberBlockProps> = ({
  clearLog,
  grabProxies,
  setProtocol,
  proxiesList,
  protocol,
}) => (
  <Grid className="grabber-block" columns={2}>
    <Grid.Column>
      <ResultList proxiesList={proxiesList} />
    </Grid.Column>
    <Grid.Column>
      <СontrolPanel
        setProtocol={setProtocol}
        clearLog={clearLog}
        protocol={protocol}
        proxiesList={proxiesList}
        grabProxies={grabProxies}
      />
    </Grid.Column>
  </Grid>
);

export { GrabberBlock };
