import React from 'react';
import { Grid } from 'semantic-ui-react';
import Card from './Card';

const Board = (props) => {
  const cardPositions = {
    '0': null,
    '1': { flipped: true, data: {
      id: 1,
      name: 'The Fan',
      description: 'This person deeply admires someone and seeks every change to sing his or her praises.',
      flipped_name: 'The Secret Admirer',
      flipped_description: 'This person keeps to the shadows, either too shy to publicly admit his or her adoration or because the attention may be unwelcome.',
      image_url: '',
      flipped_image_url:'',
      category_id: 1
    }},
    '2': null,
    '3': null,
    '4': {flipped: false, data: {
      id: 3,
      name: 'The Relative',
      description: 'Whether making soup for the ill or providing a shoulder to cry on, nobody understands or cares like family.',
      flipped_name: 'Meddler',
      flipped_description: 'Even the most genuinely concerned relative can be too eager to assist. This help may be unwelcome or driven by selfish motives',
      image_url:'',
      flipped_image_url:'',
      category_id: 2
    }},
    '5': null,
    '6': null,
    '7': null,
    '8': null,
    '9': {flipped: true, data: {
      id: 5,
      name: 'The Monster',
      description: 'Raw, unthinking destruction, chaos made flesh. This is the bogeyman, the ripper, the source of all fears and nightmares',
      flipped_name: 'The Wolf',
      flipped_description: `Sometimes the Monster is cloaked in a perfectly mundane guise, easily mistaken for one of the sheep. That doesn't make it any less dangerous`,
      image_url:'',
      flipped_image_url:'',
      category_id: 3
    }},
    '10': null,
    '11': null,
    '12': null,
    '13': null,
    '14': null,
  }
  return (
    <Grid celled columns='equal'>
      <Grid.Row className="js-row-1">
        <Grid.Column>
          <Card card={cardPositions[0]}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={cardPositions[1]}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={cardPositions[2]}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={cardPositions[3]}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={cardPositions[4]}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="js-row-2">
        <Grid.Column>
          <Card card={cardPositions[5]}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={cardPositions[6]}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={cardPositions[7]}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={cardPositions[8]}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={cardPositions[9]}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="js-row-3">
        <Grid.Column>
          <Card card={cardPositions[10]}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={cardPositions[11]}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={cardPositions[12]}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={cardPositions[13]}/>
        </Grid.Column>
        <Grid.Column>
          <Card card={cardPositions[14]}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Board
