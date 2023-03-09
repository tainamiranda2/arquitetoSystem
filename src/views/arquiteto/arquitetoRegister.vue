<template>
  <a class="sair" href="/" >
    Voltar
  </a>
<h1>Faça seu registro como arquiteto</h1>

<div class="form">
  <div class="erro" v-if="msg !=undefined">
    <p>{{msg}}</p>
  </div>
  <Input type="email" 
  v-model="email" 
  placeholder="Informe o email"
  text="Informe seu email"
    />
  
    <Input type="text" 
  v-model="nome" 
  placeholder="Informe o nome"
  text="Informe o nome" />
  
   <Input type="tel" 
  v-model="telefone" 
  placeholder="Informe o telefone"
  text="Informe a telefone" />
   
   <Input type="number" 
   v-model="idade" 
   placeholder="Informe a idade"
    text="Informe a idade" />

   <Input type="password" 
  v-model="senha" 
  placeholder="Informe a senha"
  text="Informe a senha" />

   <Input type="text" 
  v-model="genero" 
  placeholder="Informe o se genero"
  text="Informe o seu genero" />


 
   <Input type="text" 
   v-model="conhecimento" 
   placeholder="Informe sobre seus conhecimentos"
   text="Informe sobre seus conhecimentos"
     />
   <br>
     <span>Campo opcional</span>
     <br>
     <Input type="text" 
     v-model="experiencia" 
     placeholder="Informe sobre suas experiencias"
     text="Informe sobre suas experiencias"
       />
       <span>Campo opcional</span>
       <br>
       <Input type="text" 
       v-model="habilidades" 
       placeholder="Informe as habilidades"
        text="Informe sobre as habilidades"
         />
         <span>Campo opcional</span>
  <button  @click="register">Cadastrar</button>
  </div>
</template>

<script>
import axios from 'axios';
import Input from '../../components/input/Input.vue';
//import Button from '../../components/button/Button.vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'arquiteto',
  data(){
return{
  
  nome:'',
  idade:'',
  email:'',
  genero:'',
  senha:'',
  telefone:'',
  papel:'arquiteto',
  msg:'',
  experiencia:'',
  conhecimento:'',
  habilidades:''

}
},
  components:{
    Input
   // Button
  },
   methods:{
    register(){

axios.post("http://localhost:1700/arquiteto",{
   nome: this.nome,
   email: this.email,
   senha: this.senha,
   idade: this.idade,
   genero: this.genero,
   papel: this.papel,
telefone:this.telefone,
experiencia:this.experiencia,
conhecimento:this.conhecimento,
habilidades:this.habilidades
}).then(res=>{
  console.log(res)
  this.$router.push({name: 'dashboardArquiteto'})

}).catch(err=>{
 
  var msgErro=err.response.data;
  this.msg=msgErro
})
}

   }
}
</script>
<style>
span{
  color:#333;
  font-size: 12px;
  margin:15px;
}
</style>