import api from '../../api';

export async function signInCliente({email, senha}){
  
  const response = await api.post('cliente/clientes-auth/login-cliente', {email, senha})
  console.log(response.data)
  return response.data
}