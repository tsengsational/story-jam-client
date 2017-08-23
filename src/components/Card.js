import React from 'react';
import { Card as MyCard, Icon, Popup, Button, Image } from 'semantic-ui-react'


const Card = (props) => {
    if (props.card){
    const headerName = props.card.flipped ? props.card.data.flipped_name : props.card.data.name
    const headerDescription = props.card.flipped ? props.card.data.flipped_description : props.card.data.description
    const meaning = props.card.meaning
    const image_url = props.card.data.image_url
    const categoryName = props.card.data.category_name
    return (
      <MyCard>
        <Image src={image_url} />
        <MyCard.Content>
          <MyCard.Header>{headerName}</MyCard.Header>
          <MyCard.Meta>{categoryName}</MyCard.Meta>
          <MyCard.Description>{headerDescription}</MyCard.Description>
        </MyCard.Content>
        <MyCard.Content extra>
          <Popup trigger={<Button icon='add' />}
            content={meaning}
          />
        </MyCard.Content>
      </MyCard>
    )
  } else if (props.card == null) {
    return(
      <div></div>
    )
  }
}

export default Card
