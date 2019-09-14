import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';
// import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-email válido.')
    .required('O e-mail é obrigatório.'),
  password: Yup.string()
    .min(6, 'No mínimo 6 dítitos.')
    .required('A senha é obrigatória.'),
});

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="MeetApp" />
      <Form schema={schema}>
        <Input name="email" type="email" placeholder="Seu Email" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Entrar</button>
        <a href="/register">Criar conta</a>
      </Form>
    </>
  );
}
