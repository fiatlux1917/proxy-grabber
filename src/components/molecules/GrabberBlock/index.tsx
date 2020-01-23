import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import { ResultList } from '../../atoms/ResultList';
import { СontrolPanel } from '../СontrolPanel';

interface GrabberBlockProps {
  className?: string;
}

const GrabberBlock: React.FC<GrabberBlockProps> = () => (
  <Grid className="grabber-block" columns={2}>
    <Grid.Column>
      <ResultList />
    </Grid.Column>
    <Grid.Column>
      <СontrolPanel />
    </Grid.Column>
  </Grid>
);

export { GrabberBlock };
