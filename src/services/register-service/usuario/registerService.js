import api from '../../api';

export async function signUpCliente({email, senha}){
  const response = await api.post('gerencia/usuarios-auth/login-cliente', {email, senha})
  console.log(response.data)
  return response.data
}