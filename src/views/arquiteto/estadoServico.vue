<template>
    <a class="sair" href="/" >
        Sair
      </a>
    <h2>Veja todos os serviços para voce</h2>
   

    <div class="card">
        <h1>Nome do serviço:{{ nome }}</h1>
        <h3>Descrição:{{ descricao }}</h3>
        <p>Prazo Inicial:{{prazoI }}</p>
        <p>Prazo Inicial:{{ prazoF}}</p>
        
    <span>Aceita ou recusa essa oferta de serviço</span>
    
    <button class="btn-aceitar" @click="atualizarEstado">Aceitar</button>
    <button  class="btn-recusar" @click="atualizarEstadorecusado">Recusar</button>
    <span>Achou  esta oferta um absurdo voce pode exlcuir</span>
    <button class="btn-excluir" @click="deleteService">Excluir</button>
    </div>

</template>
<script>
import axios from 'axios';

export default{

    name:"dashboardArquiteto",
    created(){
        this.idUser=this.$route.params.id
    this.estadoAceitar="Aceito"
    this.estadoRecusado="Recusado"
       axios.get("http://localhost:1700/servico/"+this.$route.params.id).then(res=>{
            console.log(res)
            this.nome=res.data.nome;
            this.descricao=res.data.descricao;
            this.prazoI=res.data.prazoI;
            this.prazoF=res.data.prazoF;
             this.id=res.data.id;
             this.arquiteto_id=res.data.arquiteto_id;
             this.cliente_id=res.data.cliente_id;
        }).catch(err=>{
            console.log(err.response)
        })
    },
    data(){
        return{
    estadoAceitar:'',
    estadoRecusado:'',
    nome:'',
  descricao:'',
id:'',
  prazoF:'',
  prazoI:'',
  idUser:'',
 cliente_id:'',
 arquiteto_id:''

    }
    },
   methods: {
atualizarEstado(){
axios.put("http://localhost:1700/servico/"+this.$route.params.id,{
    id: this.id,
    nome: this.nome,
   arquiteto_id: this.arquiteto_id,
   cliente_id: this.cliente_id,
   estado:this.estadoAceitar,
   descricao: this.descricao,
   prazoI: this.prazoI,
   prazoF: this.prazoF

}).then(res=>{
  console.log(res)
  this.$router.push({name: 'dashboardArquiteto'})

}).catch(err=>{
 
  console.log(err)
})

},
atualizarEstadorecusado(){
axios.put("http://localhost:1700/servico/"+this.$route.params.id,{
    id: this.id,
    nome: this.nome,
   arquiteto_id: this.arquiteto_id,
   cliente_id: this.cliente_id,
   estado:this.estadoRecusado,
   descricao: this.descricao,
   prazoI: this.prazoI,
   prazoF: this.prazoF

}).then(res=>{
  console.log(res)
  this.$router.push({name: 'dashboardArquiteto'})

}).catch(err=>{
 
  console.log(err)
})

},
deleteService(){
axios.delete("http://localhost:1700/servico/"+this.$route.params.id).then(res=>{
    console.log(res)
      this.$router.push({name: 'dashboardArquiteto'})

}).catch(err=>{
    console.log(err)
})
}
}

    }
</script>
<style>
.btn-aceitar{
    background: green;
        color:#fff;
    padding:3px;
    cursor:pointer;
    margin:5px;
     border:none;
}
.btn-recusar{
    background: red;
    color:#fff;
    padding:3px;
    cursor:pointer;
    margin:5px;
    border:none;
}
.btn-excluir{
    background: red;
    color:#fff;
    padding:3px;
    cursor:pointer;
    border:none;
    margin:5px;
}
</style>