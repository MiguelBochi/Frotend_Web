import api from '../plugins/api'
export default class TipoUsuariosApi {
  async buscarTodossTipoUsuarios() {
    const { data } = await api.get('/tipo_usuario/')
    return data
  }
  async adicionarTipoUsuario(tipoUsuario) {
    const { data } = await api.post('/tipo_usuario/', tipoUsuario)
    return data
  }
  async atualizarTipoUsuario(tipoUsuario) {
    const { data } = await api.put(`/tipo_usuario/${tipoUsuario.id}/`, tipoUsuario)
    return data
  }
  async excluirTipoUsuario(id) {
    const { data } = await api.delete(`/tipo_usuario/${id}/`)
    return data
  }
}
