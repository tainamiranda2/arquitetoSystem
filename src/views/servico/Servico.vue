<template>
    <h1>Cadastre um serviço</h1>
    <div class="form">
      <div class="erro" v-if="msg !=undefined">
        <p >{{msg}}</p>
      </div>
          <Input type="text" 
        v-model="nome" 
        placeholder="Informe o nome"
         text="Informe o nome" />

         <Input type="text" 
        v-model="descricao" 
        placeholder="Informe a descrição"
         text="Informe a descrição"
          />
         <Input type="date" 
        v-model="prazoI" 
        placeholder="Informe data inicial"
         text="Informe a data inicial" />

         <Input type="date" 
        v-model="prazoF" 
        placeholder="Informe data final"
         text="Informe a data final" />
      
        
        <button @click="register">Cadastrar</button>
        </div>
</template>

<script>
import Input from '../../components/input/Input.vue';
//import Button from '../../components/button/Button.vue';
import axios from 'axios';


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Servico',
  created(){
    console.log(this.$route.params.id)
    this.arquiteto_id=this.$route.params.id
  },
  data(){
return{
  nome:'',
  descricao:'',
  estado:'enviado',
  prazoF:'',
  prazoI:'',
  cliente_id:'1',
  arquiteto_id:'',
  msg:''
}
},
  components:{
    Input
 
  },
   methods:{
    register(){

axios.post("http://localhost:1700/servico", 

{
   nome: this.nome,
   arquiteto_id: this.arquiteto_id,
   cliente_id: this.cliente_id,
   estado:this.estado,
   descricao: this.descricao,
   prazoI: this.prazoI,
   prazoF: this.prazoF

}).then(res=>{
  console.log(res)
 
  this.$router.push({name: 'dashboardCliente'})
 
}).catch(err=>{
 
  var msgErro=err.response.data;
  this.msg=msgErro
})
    }
  }

}
</script>