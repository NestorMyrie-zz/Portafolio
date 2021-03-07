import react from "react"
import logo from './logo.svg';

import './App.css';

import Nav from "./Componentes/Nav"
import Me from './Componentes/me'
import Skills from './Componentes/skills'
import Services from './Componentes/services'
import Proyect from './Componentes/proyect'
import Form from './Componentes/form'




const Cuerpo =()=>{
return(
<div>
  <Nav></Nav>
  <Me></Me>
  <Skills></Skills>
  <Services></Services>
  <Proyect></Proyect>
  <Form></Form>

</div>
)
}







function App() {
  return (
   <div>
 <Cuerpo></Cuerpo>
   </div>
  );
}

export default App;
