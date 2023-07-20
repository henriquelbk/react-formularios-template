import { useState } from "react";


const useForm = (inicialState) => {

const [form, setForm] = useState(inicialState);

  const onChangeInputs = (event) => {
    const {name, value} = event.target
    setForm({...form, [name]: value})
  }


  // para limpar os inputs depois de preenchidos
  const clearField = () => {
    setForm(inicialState)
  }

  return {form, onChangeInputs, clearField}
}

export default useForm