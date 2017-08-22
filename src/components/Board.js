import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

const Board = (props) => {
  return (
    <Grid celled columns='equal'>
      <Grid.Row className="js-row-1">
        <Grid.Column>
          <Segment className="row1 col1"> </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment className="row1 col2"> </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment className="row1 col3"> </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment className="row1 col4"> </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment className="row1 col5"> </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="js-row-2">
        <Grid.Column>
          <Segment className="row2 col1"> </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment className="row2 col2"> </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment className="row2 col3"> </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment className="row2 col4"> </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment className="row2 col5"> </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="js-row-3">
        <Grid.Column>
          <Segment className="row3 col1"> </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment className="row3 col2"> </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment className="row3 col3"> </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment className="row3 col4"> </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment className="row3 col5"> </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Board
