import '../css/ContactPage.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xiycpx2', 'template_sa98hb7', form.current, {
        publicKey: '1b92zdRw9s9x777PS',
      })

      .then(
        () => {
          Swal.fire({
            title: "Se mando el email correctamente",
            icon: "success"
          });
          
          form.current.from_name.value=""
          form.current.email_id.value=""
          form.current.message.value=""

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <main className="fuenteTexto d-flex justify-content-center" style={{ backgroundColor: '#101616' }}>
      <div className="w-100 container-fluid d-flex justify-content-center align-items-center shadow px-lg-5">
        <div className="row mt-5 mb-5">
          <div className="col-12 col-md-3 pe-md-0">
            <div className="d-flex flex-column align-items-center justify-content-md-center py-4 h-100"
              style={{ backgroundColor: '#1C1F1D' }}>
              
              <h2 className="text-white text-center w-75 fs-3 mb-4">Síguenos en nuestras redes!</h2>
              <div className="d-flex justify-content-evenly w-75">
           
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9 ps-md-0">
            <div className="text-white px-4 py-3" style={{ backgroundColor: '#ABCF2F' }}>
              <h2 className="text-center mb-4">Envía un mensaje</h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="inputName" name="from_name" aria-describedby="emailHelp"
                    minLength="5" maxLength="20" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" name="email_id"
                    aria-describedby="emailHelp" maxLength="35" required/> 
                </div>
                <div className="input-group d-flex flex-column mb-3">
                  <label htmlFor="mensaje" className="form-label">Mensaje</label>
                  <textarea className="form-control rounded-2 w-100" aria-label="With textarea" name="message" id="mensaje"
                    maxLength="200" rows="7" required></textarea>
                </div>
                <button type="submit" className="btn w-100 btnPagAnt shadow" value="Send">Enviar Mensaje</button>
              </form>
            </div>
          </div>
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1258.6848878505218!2d-65.20792987783052!3d-26.836819914955942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses!2sar!4v1698431957752!5m2!1ses!2sar"
              width="100%" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage