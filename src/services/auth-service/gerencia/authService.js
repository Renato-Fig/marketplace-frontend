import api from '../../api';

export async function signInFornecedor({email, senha}){
  const response = await api.post('gerencia/usuarios-auth/login-fornecedor', {email, senha})
  console.log(response.data)
  return response.data
}