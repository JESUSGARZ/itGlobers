import React, { useState } from 'react';
import Form from '../components/Form';
import Menu from '../components/Menu';
import '../styles/app.scss'

const App = () => {
    const [agencys,setAgencys] = useState('');

    const handleAgency = (e) => {
        const  selectedAgency = e.target.className;
        setAgencys(selectedAgency)
          
    }

    return(
        <main>
            <Menu handleAgency = {handleAgency} />
            {
                agencys 
                ? <Form agency = {agencys} />
                : false
            }
        </main>
    )
}

export default App;