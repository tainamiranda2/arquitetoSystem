<template>
  <div>
<h1>Faça login</h1>
<p>{{ msg }}</p>
<input
type="email" 
v-model="email" 
placeholder="Informe o email"
 label="Informe seu email"
  />
  <input type="password" 
v-model="senha" 
placeholder="Informe a senha"
 label="Informe a senha"
  />
 <select v-model="papel">
  <option >Cliente</option>
  <option>arquiteto</option>

 </select>
 <button  @click="login">Entrar</button>


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
 
  data(){
        return{
      senha:'',
      email:'',
      papel:'',
      msg:''
    }
    },
    
    methods: {
login(){
axios.get("http://localhost:1700/arquiteto",{
  
  
}).then(res=>{
  //console.log(res.data)

  this.$router.push({name:'dashboardArquiteto'})

}).catch(err => {
          this.msg=err
        })

}
  }
  
}

</script>
