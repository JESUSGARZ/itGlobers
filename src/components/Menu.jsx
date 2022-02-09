import React, {useContext} from "react";
import { AppContext } from "../containers/Context";
import '../styles/menu.scss'

function Menu(props) {
    const {data} = useContext(AppContext);
    const {handleAgency} = props
  
  return (
      <nav>
          <p>Bienvenido a New Trip, con cual aerolinea te gustaria viajar?</p>
          <ul>
              {
                  data.agencias.map( (agency) => {
                      
                      return(
                          <li onClick={handleAgency} className={agency.name} key={agency.id}>{agency.name}</li>
                      )
                  })
              }
          </ul>
      </nav>
  );
}

export default Menu;