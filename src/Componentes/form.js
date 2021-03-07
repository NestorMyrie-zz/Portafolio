import react, { Component } from "react";
import emailjs from "emailjs-com";

import img1 from "../img/contactinfo.svg";

import discord from "../img/discord.svg";
import gmail from "../img/gmail.svg";
import facebook from "../img//facebook.svg";


class Form extends Component {
  state = {
    popconfirm: 0,
  };



  confirmText=(e)=>{
    if(e.target.value.length < 3){
      e.target.style.border='3px solid #F4676B'
    }else{
      e.target.style.border='3px solid #00BFA5'
      
    }

    
  }
  rem = () => {
    this.setState({ popconfirm: 0 });
  };
  SendMail = (e) => {
    e.preventDefault();

    if (
      e.target.nombre.value.length > 3 &&
      e.target.apellido.value.length > 3 &&
      e.target.correo.value.length > 3
    ) {
      emailjs
        .sendForm(
          "service_thn34om",
          "template_i2fjxsl",
          e.target,
          "user_Tm5AttXYzU5BuRTJWijHT"
        )
        .then(
          (result) => {
            console.log(result.text);
            this.setState({ popconfirm: 1 });

          
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
    } else {
    }
  };

  render() {
    let close1 = {
      transform: `scale(${this.state.popconfirm})`,
      transition: "all 1s",
    };
    return (
      <div>
        <div class="containerform">
          <div>
            <form method="POST" id="contact" onSubmit={this.SendMail}>
              <span>
                <p>Nombre</p>
                <input
                  type="text"
                  placeholder="Juan Carlos"
                  name="nombre"
                  className="nombre"
                  required
                  onKeyUp={this.confirmText}
                />
              </span>

              <span>
                <p>Apellidos</p>
                <input
                  type="text"
                  placeholder="Ramirez"
                  name="apellido"
                  className="apellido"
                  required
                  onKeyUp={this.confirmText}
                />
              </span>

              <span>
                <p>Correo</p>
                <input
                  type="email"
                  placeholder="Nestormyriee@gmail.com"
                  name="correo"
                  className="correo "
                  required
                  onKeyUp={this.confirmText}
                />
              </span>
              <span>
                <p>Numero</p>
                <input
                  type="text"
                  name="numero"
                  className="numero"
                  placeholder="opcional"
                />
              </span>

              <span className="mensajecontent" required>
                <p>Mensaje</p>
                <textarea
                  className="mensaje"
                  name="mensaje"
                  placeholder="Cuentame Tu priyecto (Opcional)"
                ></textarea>
              </span>
              <input type="submit" value="Enviar" className="enviar" />
            </form>
          </div>
          <div>
            <img src={img1} alt="" />
            <div class="anclas">
              <a href="https://discord.gg/TkMRSwuqMT" target="_blank">
                {" "}
                <img src={discord} alt="" />
              </a>
              <a href="mailto:nestormyriee@gmail.com" target="_blank">
                <img src={gmail} alt="" />
              </a>
              <a href="https://www.facebook.com/nestor.myrie.3" target="_blank">
                <img src={facebook} alt="" />
              </a>
            </div>
          </div>
          <div className="success" style={close1} onClick={this.rem}>
            <i className="far fa-times-circle close"></i>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 223.94 223.94">
              <defs>
                <style>.cls-1{"fill:white;"}</style>
              </defs>
              <title>succefulllimg</title>
              <g id="Capa_2" data-name="Capa 2">
                <g id="Layer_1" data-name="Layer 1">
                  <path
                    class="cls-1"
                    d="M220.36,83.24A112,112,0,1,1,83.24,4.08,112.09,112.09,0,0,1,220.36,83.24ZM137.53,216.07A105.23,105.23,0,1,0,8.65,141.66,105.34,105.34,0,0,0,137.53,216.07Z"
                    transform="translate(-0.25 -0.25)"
                  />
                  <path
                    class="cls-1"
                    d="M198.68,90.74a90.9,90.9,0,0,1-9.14,69.44l-5.82-3.36A84.79,84.79,0,0,0,152.69,41l3.36-5.82A90.86,90.86,0,0,1,198.68,90.74Z"
                    transform="translate(-0.25 -0.25)"
                  />
                  <polygon
                    class="cls-1"
                    points="172.73 66.02 109.82 174.98 51.21 141.14 68.27 111.59 97.33 128.37 143.17 48.96 172.73 66.02"
                  />
                  <path
                    class="cls-1"
                    d="M67.9,187.85l-3.36,5.82a91.51,91.51,0,0,1-33.49-125L36.87,72a84.79,84.79,0,0,0,31,115.82Z"
                    transform="translate(-0.25 -0.25)"
                  />
                </g>
              </g>
            </svg>

            <p>Formulario enviao Correctamente</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
