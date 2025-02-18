import React, { useState } from "react";
import { ContainerForm, ContainerSignup, Input } from "./styled";
import useForm from "../../hooks/useForm";

export default function Signup() {
  //logica substituida

  // const [nomeUsuario, setNomeUsuario] = useState("")
  // const [email, setEmail] = useState("")
  // const [senha, setSenha] = useState("")
  // const [confirmaSenha, setConfirmaSenha] = useState("")

  // const onChangeNome = (e) => {
  //     setNomeUsuario(e.target.value)
  // }
  // const onChangeEmail = (e) => {
  //     setEmail(e.target.value)
  // }
  // const onChangeSenha = (e) => {
  //     setSenha(e.target.value)
  // }
  // const onChangeConfirmaSenha = (e) => {
  //     setConfirmaSenha(e.target.value)
  // }

  const { form, onChangeInputs, clearField } = useForm({
    nomeUsuario: '',
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const enviarCadastro = (event) => {


    //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
    if (form.senha === form.confirmaSenha) {
      console.log( form );
      clearField()
    }
  };

  return (
    <ContainerSignup>
      <ContainerForm onSubmit={enviarCadastro}>
        <label htmlFor="nome">Nome de usuario:</label>
        <Input
          name="nomeUsuario"
          id="nome"
          value={form.nomeUsuario}
          onChange={onChangeInputs}
          placeholder="username"
          type="name"
          required
        />
        <label htmlFor="email">Email:</label>
        <Input
          name="email"
          id="email"
          value={form.email}
          onChange={onChangeInputs}
          placeholder="nome@email.com"
          type="email"
          required
        />
        <label htmlFor="senha">Senha:</label>
        <Input
          name="senha"
          id="senha"
          value={form.senha}
          onChange={onChangeInputs}
          placeholder="Crie sua senha"
          type="password"
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$"
          title="deve conter ao menos um número, uma letra minúscula, uma letra maiúscula, um caractere especial e ao menos 8 dos caracteres mencionados"
          required
        />
        <label htmlFor="confirma-senha">Confirmação de senha:</label>
        <Input
          name="confirmarSenha"
          id="confirma-senha"
          value={form.confirmaSenha}
          onChange={onChangeInputs}
          placeholder="Confirme a senha"
          type="password"
          title="deve ser igual a senha anterior"
          required
        />
        <button>Cadastrar</button>
      </ContainerForm>
    </ContainerSignup>
  );
}
