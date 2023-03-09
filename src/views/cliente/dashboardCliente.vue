<template>
    
 
    <a class="sair" href="/" >
      Sair
    </a>
    <h2>Todos os arquitetos cadastrados</h2>
    <p>Para pode cadastrar um serviço é preciso que voce escolha o arquiteto</p>

    <table>
        <tr>
          <td>Nome</td>
          <td>Telefone</td>
          <td>Email</td>
          <td>Genero</td>
          <td>Idade</td>
          <td>Experiencia</td>
          <td>Habilidades</td>
          <td>Conhecimento</td>
          <td>Ação</td>

        </tr>
        <tr v-for="arq, index in arquiteto" :key="index">
          <td>{{arq.nome}}</td>
          <td>{{arq.telefone}}</td>
          <td>{{arq.email}}</td>
          <td>{{arq.genero}}</td>
          <td>{{arq.idade}}</td>
          <td>{{arq.experiencia}}</td>
             <td>{{arq.habilidades}}</td>
                <td>{{arq.conhecimento}}</td>
          <td>
            <RouterLink class="enviar" 
            :to="{name: 'servico',params:{id: arq.id} }" > 
            Enviar serviço</RouterLink>
          </td>
        </tr>
      </table>
      
      
</template>
<script>
import axios from 'axios';

export default{
name: 'dashboardCliente',
data(){
        return{
        arquiteto:[]
    }
    },
    created: function(){

axios.get("http://localhost:1700/arquiteto").then(res=>{
  // console.log(res.data)
    this.arquiteto=res.data;
}).catch(err => {
            console.log(err);
        })

    }
}
</script>
<style>
.button-gree{
    width: 30%;
    background:#005;
}

.enviar{
  background: #005;
  padding: 10px;
}
</style>