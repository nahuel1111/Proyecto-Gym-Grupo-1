import React from 'react'
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'; 
import clienteAxios, { jsonConfig } from '../helpers/axiosconfig';
import Button from 'react-bootstrap/Button';

import '../css/AdminPage.css'
const AdminComment = () => {
  const [comment, setComment] = useState([])

  const use = useParams()
  

  const Destacado = async ()=>{
    
  }

const GetAllComments = async ()=>{
  const Allgetcomment = await clienteAxios.get(`/users/comment/${use.id}`) 
  setComment(Allgetcomment.data.comentario)
}


  useEffect(() => {
    GetAllComments()
  },[])

  return (
    <>
    <Container>
    <h2>Comentarios</h2>
    <div> {comment.map ((comentarios)=>
    <p> {comentarios}    <Button variant="primary" onClick={Destacado}>
    Destacar
  </Button>    </p>
    )}  </div><br />      
    </Container>
   
    </>
  )
}

export default AdminComment