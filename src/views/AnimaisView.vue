<script>
import AnimaisApi from '@/services/animais.js'
import RacasApi from '@/services/racas.js'
const animaisApi = new AnimaisApi()
const racasApi = new RacasApi()

export default {
  data() {
    return {
      animais: [],
      animal: {
        idade: '',
        sexo: '',
        nome: '',
        peso: '',
        raca: '',
        selectedRacaId: '' // Initialize selectedRacaId
      },
      racas: []
    }
  },
  async created() {
    this.animais = await animaisApi.buscarTodosOsAnimais()
    this.racas = await racasApi.buscarTodasAsRacas()
    this.animal.selectedRacaId = ''
  },
  methods: {
    async salvar() {
      if (this.animal.id) {
        await animaisApi.atualizarAnimal(this.animal)
      } else {
        this.animal.raca = this.animal.selectedRacaId
        await animaisApi.adicionarAnimal(this.animal)
      }
      this.animais = await animaisApi.buscarTodosOsAnimais()
      this.animal = {}
    },
    async excluir(animal) {
      await animaisApi.excluirAnimal(animal.id)
      this.animais = await animaisApi.buscarTodosOsAnimais()
    },
    editar(animal) {
      Object.assign(this.animal, animal)
    }
  }
}
</script>
<template>
  <article id="animal">
    <div class="title">
      <h2>Animais</h2>
    </div>
    <div class="animal-input">
      <input type="number" placeholder="idade" v-model="animal.idade" @keyup.enter="salvar" />
    </div>
    <div class="animal-input">
      <input type="text" placeholder="sexo" v-model="animal.sexo" @keyup.enter="salvar" />
    </div>
    <div class="animal-input">
      <input type="text" placeholder="nome" v-model="animal.nome" @keyup.enter="salvar" />
    </div>
    <div class="animal-input">
      <input type="number" placeholder="peso" v-model="animal.peso" @keyup.enter="salvar" />
    </div>
    <div class="animal-input">
      <select v-model="animal.selectedRacaId">
        <option v-for="raca in racas" :key="raca.id" :value="raca.id">{{ raca.nome }}</option>
      </select>
    </div>
    <div id="salvar">
      <button @click="salvar">Salvar</button>
    </div>
    <div class="animal-form">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Idade</th>
            <th>Sexo</th>
            <th>Nome</th>
            <th>Peso</th>
            <th>Raca</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="animal in animais" :key="animal.id">
            <td>{{ animal.id }}</td>
            <td>{{ animal.idade }}</td>
            <td>{{ animal.sexo }}</td>
            <td>{{ animal.nome }}</td>
            <td>{{ animal.peso }}</td>
            <td>{{ animal.selectedRacaId }}</td>
            <td>
              <button class="excluir" @click="excluir(animal)">excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>

<style>
#animal {
  width: 900px;
  max-height: 100%;
  min-height: 600px;
  background-color: #555c30;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;
}
.title {
  display: flex;
  justify-content: center;
}

.animal-input {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.animal-input input {
  width: 60%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
}

.animal-input button {
  margin-left: 1%;
  width: 20%;
  height: 40px;
  border: 1px solid #6d8c89;
  border-radius: 10px;
  background-color: #6d8c89;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.animal-form {
  display: flax;
  justify-content: center;
}

table {
  width: auto;
  margin: 2% auto;
  border-collapse: collapse;
}

table tr th {
  border: 1px solid rgb(0, 0, 0);
  padding: 10px;
  font-weight: bold;
}

table tr td {
  border: 1px solid rgb(0, 0, 0);
  padding: 10px;
}

table tr:nth-child(odd) {
  background-color: #ccc;
  color: black;
}
</style>
