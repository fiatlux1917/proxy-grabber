import * as React from 'react';
import { Header } from 'semantic-ui-react';

interface HeaderBoxProps {
  className?: string;
}

const HeaderBox: React.FC<HeaderBoxProps> = () => (
  <Header as="h2" content="Proxy grabber | by JubasNTC" fluid={true} block />
);

export { HeaderBox };
