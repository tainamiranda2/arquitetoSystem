<template>
<h1>Faça seu registro como arquiteto e solicite serviços</h1>
<a href="/" >
  Voltar
</a>
<div class="form">
  <div v-if="msg !=undefined">
  <p>{{msg}}</p>
</div>
<Input type="email" 
v-model="email" 
placeholder="Informe o email"
 label="Informe seu email"
  />

  <Input type="text" 
v-model="nome" 
placeholder="Informe o nome"
 label="Informe o nome" />

 <Input type="tel" 
v-model="telefone" 
placeholder="Informe o telefone"
 label="Informe a telefone" 
 />

 <Input type="number" 
v-model="idade" 
placeholder="Informe a sua idade"
 label="Informe a sua idade"
  />

 <Input type="text" 
 v-model="genero" 
 placeholder="Informe qual genero voce se identifica"
  label="Informe qual genero voce se identifica"
   />


  
 <Input type="password" 
v-model="senha" 
placeholder="Informe a senha"
 label="Informe a senha" />

<button @click="register">Cadastrar</button>
</div>
</template>

<script>
import Input from '../../components/input/Input.vue';
//import Button from '../../components/button/Button.vue';
import axios from 'axios';

export default {
  
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'cliente',
  data(){
return{
  nome:'',
  idade:'',
  email:'',
  genero:'',
  senha:'',
  telefone:'',
  papel:'cliente',
  msg:''

}
  },
  components:{
    Input
  },
   methods:{
    register(){
 
axios.post("http://localhost:1700/cliente",{
   nome: this.nome,
   email: this.email,
   senha: this.senha,
   idade: this.idade,
   genero: this.genero,
   papel: this.papel,
telefone: this.telefone

}).then(res=>{
  console.log(res)
}).catch(err=>{
 
  var msgErro=err.response.data;
  this.msg=msgErro
})
}

   }
}
</script>
<style>
.form{
width:50%;
color: #f82;
display: block;
margin:auto;
margin-top: 50px;
margin-bottom: 50px;
}
h1{
  margin:5px;
  text-align: center;
}
</style>