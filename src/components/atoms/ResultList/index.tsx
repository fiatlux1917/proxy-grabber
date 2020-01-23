import * as React from 'react';
import { TextArea } from 'semantic-ui-react';

import './styles.scss';

interface ResultListProps {
  className?: string;
}

const ResultList: React.FC<ResultListProps> = () => (
  <TextArea className="result-list" rows={25} />
);

export { ResultList };
