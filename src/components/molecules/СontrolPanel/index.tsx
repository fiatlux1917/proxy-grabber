import * as React from 'react';
import { Button, Grid, Segment } from 'semantic-ui-react';
import { ProtocolsList } from '../../atoms/ProtocolsList';
import { InfoBox } from '../../atoms/InfoBox';

import './styles.scss';

interface СontrolPanelProps {
  className?: string;
}

const СontrolPanel: React.FC<СontrolPanelProps> = () => (
  <Segment className="control-panel">
    <Grid columns={1}>
      <Grid.Column>
        <Button fluid>Grab</Button>
      </Grid.Column>
      <Grid.Column>
        <Button fluid>Save to txt</Button>
      </Grid.Column>
      <Grid.Column>
        <Button fluid>Clear</Button>
      </Grid.Column>
      <Grid.Column>
        <ProtocolsList />
      </Grid.Column>
      <Grid.Column>
        <InfoBox />
      </Grid.Column>
    </Grid>
  </Segment>
);

export { СontrolPanel };
