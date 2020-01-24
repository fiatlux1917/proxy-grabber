import * as React from 'react';
import { Select, DropdownProps } from 'semantic-ui-react';
import { SetProtocol } from '../../organisms/Grabber/types';

const protocolsOptions = [
  { key: 'all', value: 'all', text: 'ALL' },
  { key: 'http', value: 'http', text: 'HTTP(S)' },
  { key: 'socks', value: 'socks', text: 'SOCKS4(5)' },
];

interface ProtocolsListProps {
  className?: string;
  setProtocol: SetProtocol;
}

const ProtocolsList: React.FC<ProtocolsListProps> = ({ setProtocol }) => {
  const hanldeSelect = (
    event: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ): void => {
    const protocol = String(data.value);
    setProtocol(protocol);
  };

  return (
    <Select
      placeholder="Select protocol"
      options={protocolsOptions}
      defaultValue="socks"
      onChange={hanldeSelect}
      fluid={true}
    />
  );
};

export { ProtocolsList };
