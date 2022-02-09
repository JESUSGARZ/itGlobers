import React, {useState,useEffect}from 'react';
import '../styles/ligthBox.scss';

const LigthBox = (props) => {

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in',
    })

    useEffect(() => {
        setTimeout( () => {
            if (fadeProp.fade === 'fade-in') {
                setFadeProp({
                    fade: 'fade-out'
                })
            } else {
                setFadeProp({
                    fade: 'fade-in'
                })
            }
        

        }, 5000)

    }, [])

     
   
        return(
            <div className={fadeProp.fade}>
                <p >
                    Tu información fue enviada con éxito, estaremos en contacto contigo     
                </p>
            </div>
        )
    
}

export default LigthBox;