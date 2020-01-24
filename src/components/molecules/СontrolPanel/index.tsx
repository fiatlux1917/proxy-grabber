import * as React from 'react';
import { Button, Grid, Segment, ButtonProps } from 'semantic-ui-react';
import { ProtocolsList } from '../../atoms/ProtocolsList';
import { InfoBox } from '../../atoms/InfoBox';
import { saveToTxt } from '../../../utils';
import {
  ClearLog,
  SetProtocol,
  GrabProxies,
} from '../../organisms/Grabber/types';

import './styles.scss';

interface СontrolPanelProps {
  className?: string;
  protocol: string;
  proxiesList: string;
  grabProxies: GrabProxies;
  setProtocol: SetProtocol;
  clearLog: ClearLog;
}

const СontrolPanel: React.FC<СontrolPanelProps> = ({
  clearLog,
  grabProxies,
  setProtocol,
  proxiesList,
  protocol,
}) => {
  const handleSave = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: ButtonProps
  ): void => {
    saveToTxt(proxiesList);
  };

  const handleGrab = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: ButtonProps
  ): void => {
    grabProxies(protocol);
  };

  const handleClear = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: ButtonProps
  ): void => {
    clearLog();
  };

  return (
    <Segment className="control-panel">
      <Grid columns={1}>
        <Grid.Column>
          <Button fluid={true} onClick={handleGrab}>
            Grab
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid={true} onClick={handleSave}>
            Save to txt
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid={true} onClick={handleClear}>
            Clear
          </Button>
        </Grid.Column>
        <Grid.Column>
          <ProtocolsList setProtocol={setProtocol} />
        </Grid.Column>
        <Grid.Column>
          <InfoBox />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export { СontrolPanel };
