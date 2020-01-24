import * as React from 'react';
import { Segment } from 'semantic-ui-react';

import './styles.scss';

interface InfoBoxProps {
  className?: string;
}

const InfoBox: React.FC<InfoBoxProps> = () => (
  <Segment>
    <h4>Information</h4>
    <p>
      Source: <a href="https://github.com/JubasNTC/proxy-grabber">Github</a>
    </p>
    <p>
      Reviews: <a href="https://bhf.io/threads/568324/">BHF</a>
    </p>
  </Segment>
);

export { InfoBox };
