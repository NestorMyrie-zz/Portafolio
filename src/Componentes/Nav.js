import react from "react"

const Nav =()=>{
    return(
    <div>
      <header>
        <nav>
      <a href="#me"><i className="fas fa-home"></i> 
  
           Inicio
     </a>
      <a href="#skills"> <i className="fas fa-trophy"></i> Skills</a>
      <a href="#"> <i className="fas fa-share-alt"></i>  Proyectos</a>
      <a href="#contact">  <i className="fas fa-user-circle"></i>Contactame</a>
  </nav>
  <div>
      <div>
      <h1>
          Hola Bienvenid@ a Mi portafolio Web
        </h1>
        <p>Aca encontraras un poco de information profecional general mia, igual te invito a contactarme atraves
          de el Formulario de contacto o mis redes sociales</p>
          <br/>
          <a href="./_NestorMyrieZamora.docx" download="./_NestorMyrieZamora.docx" className="cv"> Descargar CV</a>
      </div>
  </div>
  <div className=""></div>
  </header>
    </div>
    )
  }


  export default Nav