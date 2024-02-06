import React from 'react'
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'; 
import clienteAxios, { jsonConfig } from '../helpers/axiosconfig';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

import '../css/AdminPage.css'
const AdminComment = () => {
  const [comment, setComment] = useState([])
  const [update,setUpdate]= useState(false)

  const use = useParams()
  
  const destacarComentario = async (comentario, event) => {
    try {
      event.preventDefault()
      const nuevoDestacado = comentario.Destacado === 'false' ? 'true' : 'false'

      const updateComment = await clienteAxios.put(`/comment/${comentario._id}`, { Destacado: nuevoDestacado }, jsonConfig)
  if (updateComment.status === 200){
    if(update==false){
      setUpdate(true)
    }else{
      setUpdate(false)
    }
    Swal.fire({
      title: "comentario actualizado con exito!",
      icon: "success"
    });
      } 
    } catch (error) {
      console.error('Error al agregar el comentario destacado:', error)
    }
  }


const GetAllComments = async ()=>{
  const Allgetcomment = await clienteAxios.get(`/comment/${use.id}`) 
  setComment(Allgetcomment.data.commentUser)
}


  useEffect(() => {
    GetAllComments()
  },[update])

  return (
    <>
    <Container>
    <h2>Comentarios</h2>
    <div> {comment.map ((comentarios)=>
    <p> {comentarios.comentario}  <Button variant="primary" onClick={(event) => destacarComentario(comentarios, event)}>
   {comentarios.Destacado == 'true' ? 'Quitar Destacado' : 'Destacar'}
  </Button>  </p>
    )}  </div><br />      
    </Container>
   
    </>
  )
}

export default AdminComment