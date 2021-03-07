
import service1 from '../img/mantenimiento.svg'
import service2 from '../img/disign.svg'
import service3 from '../img/desarollo.svg'
const Services =()=>{

    return(
        <div>
            <div class="services" id="services">



<div class="card">

  <img src={service1} alt=""/>
  <h1>Mantenimiento Web</h1>
  <p>ofrezco mantenimiento a tu pagina web
    Si esta escrita en los estándares web
    y con los lenguajes de programación web php, o JavaScript , ReactJs</p>
</div>
<div class="card">

  <img src={service2} alt=""/>
  <h1>Diseño de Interfaces</h1>
  <p>Que Mejor manera de Saber el resultado de tu aplicación sin comenzar a codifica, Ofrezco interfaz de usuarios,
    interactiva en AdobeXD
    para que sepas como quedara Gráficamente tu pagina web</p>
</div>
<div class="card">

  <img src={service3} alt=""/>
  <h1>Desarollo Web</h1>
  <p>Creare tu sitios web 100% personalizado, adaptable para cualquier distositivo con las technologies de :
    HML5,Css3, JavaScript,Php,Mysql, React
    & franeworks</p>
</div>
</div>
        </div>
    )
}


export default Services