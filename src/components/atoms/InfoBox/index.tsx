import * as React from 'react';
import { Header } from 'semantic-ui-react';

import './styles.scss';

interface InfoBoxProps {
  className?: string;
}

const InfoBox: React.FC<InfoBoxProps> = () => (
  <Header
    className="info-box"
    as="h4"
    content="Coded by JubasNTC"
    subheader="Reviews on BHF"
    block
    fluid
  />
);

export { InfoBox };
