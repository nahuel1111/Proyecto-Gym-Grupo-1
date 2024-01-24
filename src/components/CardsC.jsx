import React from 'react'

const CardsC = ({titulo,precio,descripcion,boton}) => {
  return (
   <>
       <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
            <h3>{precio}</h3>
            {descripcion}
        </Card.Text>
        <Button variant="primary">{boton}</Button>
      </Card.Body>
    </Card>
   </>
  )
}

export default CardsC