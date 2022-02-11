import React from "react";
import LigthBox from "./LigthBox";
import '../styles/form.scss'



function Form(props) {
  const [values, setValues] = React.useState({
    nombre: '',
    email: '',
    celular:'',
    edad: ''
  })

  const [validations, setValidations] = React.useState({
    nombre: '',
    email: '',
    celular:'',
    edad: ''
  })

  const [formValid, setFormValid] = React.useState(false)

  const {agency} = props

  const validateAll = () => {
    const { nombre, email, celular, edad } = values;
    const validations = { nombre: '', email: '', celular:'', edad: '' };
    let isValid = true;

    if (!nombre) {
      validations.nombre = 'Tu nombre es requerido';
      isValid = false;
    }

    if (nombre && (nombre.length < 3 || nombre.length > 50)) {
      validations.nombre = 'Tu nombre debe tener entre 3 y 50 caracteres';
      isValid = false;
    }

    if (!email) {
      validations.email = 'Tu e-mail es requerido';
      isValid = false;
    }

    if(email && !/\S+@\S+\.\S+/.test(email)) {
      validations.email = 'El formato de tu e-mail debe ser del tipo ejemplo@mail.com'
      isValid = false
    }

    if (!celular) {
      validations.celular = 'Tu numero de contacto es requerido';
      isValid = false
    }

    if (celular && (celular.length < 10 || celular.length > 10)) {
      validations.celular = 'Tu numero debe tener 10 digitos';
      isValid = false
    }
    if (edad === '') {
      validations.edad = 'Debes seleccionar tu rango de edad';
      isValid = false
    }
    
    if (!isValid) {
      setValidations(validations)
    }

    return isValid;
  }

  const validateOne = (e) => {
    const { name } = e.target;
    const value = values[name];
    let message = '';

    if (!value && name === 'nombre') {
      message = `Tu ${name} es requerido`; 
    }

    if (value && name === 'nombre' && (value.length < 3 || value.length > 50)) {
      message = 'Tu nombre debe tener entre 3 y 50 caracteres'
    }

    if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      message = 'El formato de tu e-mail debe ser del tipo ejemplo@mail.com'
    }

    if (value && name === 'celular' && (value.length < 10 || value.length > 10)) {
      message = 'Tu numero debe tener 10 digitos';
    }

    if (value === '' && name === 'edad') {
      message = `Tu ${name} es requerida`;
    }
    
    setValidations({...validations, [name]: message })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({...values, [name]: value })
  }

  const resetForm = () => {
    const resetValues = { nombre: '', email: '', celular:'', edad: '' }
    setValues(resetValues)

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validateAll()
    
    if (!isValid) {
      setFormValid(false);
      return false
    }else {
      document.querySelector('.user-info').reset();
      setFormValid(true)
      resetForm();
      console.log(JSON.stringify(values))
      console.log(values);
      console.log(formValid);
      
    }
  }

  const { nombre, email, celular } = values

  const { 
    nombre: nameVal, 
    email: emailVal, 
    celular: numberVal,
    edad: edadVal 
  } = validations



  return (
   <div className="container">
     <p>Hola, bienvenido, sabemos que quieres viajar con {agency}, por favor 
        diligencia el siguiente formulario:</p>
      {
        formValid 
        ? <LigthBox formValid = {setFormValid} />
        : false
      }
     <form className="user-info" onSubmit={handleSubmit}>
       <div>
          <label>Nombre Completo
            <input
            type='text'
            name='nombre'
            value={nombre}
            onChange={handleChange}
            onBlur={validateOne}
            />
          </label>
          <div>{nameVal}</div>
       </div>
       <div>
          <label>Email
            <input
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            onBlur={validateOne}
            />
          </label>
          <div>{emailVal}</div>
       </div>
       <div>
          <label>Celular
            <input
            type='number'
            name='celular'
            value={celular}
            onChange={handleChange}
            onBlur={validateOne}
            />
          </label>
          <div>{numberVal}</div>
       </div>
       <div>
          <label>Edad
            <select 
            name='edad'
            onChange={handleChange} 
            onBlur={validateOne}>
              <option value=''>seleccionar</option>
              <option value='18 a 30 años'>18 a 30 años</option>
              <option value='31 a 50 años'>31 a 50 años</option>
              <option value='51 a 70 años'>51 a 70 años</option>
              <option value='71 a 90 años'>71 a 90 años</option>
              <option value='10 a 100 años'>10 a 100 años</option>
            </select>
          </label>
          <div>{edadVal}</div>
       </div>
       <button  type="submit">Terminar</button>
     </form>
   </div>
  );
}

export default Form;


