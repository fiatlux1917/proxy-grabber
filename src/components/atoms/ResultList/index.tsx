import * as React from 'react';
import { TextArea } from 'semantic-ui-react';

import './styles.scss';

interface ResultListProps {
  className?: string;
  proxiesList: string;
}

const ResultList: React.FC<ResultListProps> = ({ proxiesList }) => (
  <TextArea className="result-list" rows={25} value={proxiesList} />
);

export { ResultList };
