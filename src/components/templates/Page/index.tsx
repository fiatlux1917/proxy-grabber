import * as React from 'react';
import { Container, Grid } from 'semantic-ui-react';

interface PageProps {
  className?: string;
  children?: React.ReactNode;
}

const Page: React.FC<PageProps> = props => {
  return (
    <Container>
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 500 }}>{props.children}</Grid.Column>
      </Grid>
    </Container>
  );
};

export { Page };
