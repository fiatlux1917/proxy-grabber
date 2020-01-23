import * as React from 'react';
import { Select } from 'semantic-ui-react';

const protocolsOptions = [
  { key: 'all', value: 'all', text: 'ALL' },
  { key: 'http', value: 'http', text: 'HTTP(S)' },
  { key: 'socks', value: 'socks', text: 'SOCKS4(5)' },
];

interface ProtocolsListProps {
  className?: string;
}

const ProtocolsList: React.FC<ProtocolsListProps> = () => (
  <Select placeholder="Select protocol" options={protocolsOptions} fluid />
);

export { ProtocolsList };
