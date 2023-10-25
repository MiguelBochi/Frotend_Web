import api from "../plugins/api";
export default class FuncionariosApi {
  async buscarTodosOsFuncionarios() {
    const { data } = await api.get('/funcionarios/');
    return data;
  }
  async adicionarFuncionario(funcionario) {
    const { data } = await api.post('/funcionarios/', funcionario);
    return data;
  }
  async atualizarFuncionario(funcionario) {
    const { data } = await api.put(`/funcionarios/${funcionario.id}/`, funcionario);
    return data;
  }
  async excluirFuncionario(id) {
    const { data } = await api.delete(`/funcionarios/${id}/`);
    return data;
  }
}