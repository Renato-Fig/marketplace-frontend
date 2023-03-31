import api from '../../api';

export async function listagemCatalog(){
  const response = await api.get('fornecedor/fornecedores')
  console.log(response.data)
  return response.data
}