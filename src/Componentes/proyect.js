import react, { Component } from "react";

import Cdrimg from '../img/cdr.png'
import ipimg from '../img/ip.png'

class Proyect extends Component {
  state={
    proyects:[
      {
        "img":Cdrimg,
        "link":"https://cdrconsulting.pe/"
      },
      {
        "img":ipimg,
        "link":"https://cdrconsulting.pe/"
      },
      {

      }
      
    ]
  }
  
  render() {
    
  
    return (
      <div>
        <h1 className="prtitle">Proyectos</h1>
        <div className="proyectos" id="project">
       {this.state.proyects.map((e)=>{
         var img ={
           'background':`url(${e.img})`,
           'backgroundSize': 'cover',
           'backgroundPosition': 'center',
           'backgroundColor':'white'
         }
         var link = e.link
         return(
          <div className="proyect" style={img}>
          <div className="view">
            <a href={link} target="_blank">
              Ver Trabajo
             
            </a>
          </div>
        </div>
         )
       })}
        </div>
      </div>
    );
  }
}
export default Proyect;
