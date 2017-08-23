import React from 'react';
import { Grid } from 'semantic-ui-react';
import Card from './Card';

const Board = (props) => {

  return (
    <Grid celled columns='equal'>
      <Grid.Row className="js-row-1">
        <Grid.Column>
          <Card card={props.board[0]}/>
          <Card card={props.board['A']}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={props.board[1]}/>
          <Card card={props.board['B']}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={props.board[2]}/>
          <Card card={props.board['C']}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={props.board[3]}/>
          <Card card={props.board['D']}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={props.board[4]}/>
          <Card card={props.board['E']}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="js-row-2">
        <Grid.Column>
          <Card card={props.board[5]}/>
          <Card card={props.board['F']}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={props.board[6]}/>
          <Card card={props.board['G']}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={props.board[7]}/>
          <Card card={props.board['H']}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={props.board[8]}/>
          <Card card={props.board['I']}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={props.board[9]}/>
          <Card card={props.board['J']}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="js-row-3">
        <Grid.Column>
          <Card card={props.board[10]}/>
          <Card card={props.board['K']}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={props.board[11]}/>
          <Card card={props.board['L']}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={props.board[12]}/>
          <Card card={props.board['M']}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={props.board[13]}/>
          <Card card={props.board['N']}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={props.board[14]}/>
          <Card card={props.board['O']}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Board
