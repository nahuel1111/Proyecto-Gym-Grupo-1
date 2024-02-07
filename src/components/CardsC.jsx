import React from 'react'
import '../css/Card.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'remixicon/fonts/remixicon.css';




const CardsC = ({url,titulo,precio, clase,primera,segunda,tercera,cuarta,quinta,boton}) => {
  return (
   <>
       <Card className={`text-white  ${clase}`} >
       <Card.Img variant="top" src={url} className='w-25' />
      <Card.Body >
        <Card.Title > <h2 >{titulo}</h2></Card.Title>
        <Card.Text>
            <h3 >${precio}</h3>
            <ul >
                <li >
                    {primera}
                </li>
                <li > {segunda}</li>
                <li> {tercera}</li>
                <li > {cuarta}</li>
                <li > {quinta}</li>
            </ul>
        </Card.Text>
        <div className='aver'>
        {boton}
        </div>
      
      </Card.Body>
    </Card>
   </>
  )
}

export default CardsC