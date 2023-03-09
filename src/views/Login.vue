<template>
  <div class="form" id="form">
    <span>Login ainda esta em andamento, mas experimente o sistema </span>

      <a class="cad" href="/dashboardArquiteto" >
      painel do arquiteto
      </a> |
      <a class="cad" href="/dashboardCliente" >
        painel do cliente
        </a> 
      <h1>Faça login</h1>

<Input
type="email" 
v-model="email" 
placeholder="Informe o email"
 label="Informe seu email"
  />
  <Input type="password" 
v-model="senha" 
placeholder="Informe a senha"
 label="Informe a senha"
  />
 
 <button  @v-on:click="login">Entrar</button>


</div>
</template>

<script>
//import Input from '../components/input/Input.vue';
//import Button from '../components/button/Button.vue';
import axios from 'axios';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
// eslint-disable-next-line
/* eslint-disable */ 
  name: 'Login',
    created: function(){
axios.get("http://localhost:1700/arquiteto").then(res=>{
  console.log(res.data)
    this.arquiteto=res.data;
}).catch(err => {
            console.log(err);
        })

    },
  data(){
        return{
      clinte:[],
      arquiteto:[],
      senha:'',
      senhaV:'',
      emailV:'',
      email:''
     
    }
    },
  methods: {
    login(e){
     e.preventDefault()
      email=this.email
      senha=this.senha
      console.log("teste",senha, email)
    }
  }
}

</script>
