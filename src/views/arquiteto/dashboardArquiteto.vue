<template>
    <a class="sair" href="/" >
        Sair
      </a>
    <h2>Veja todos os serviços para voce</h2>
    <div class="card" v-for="serv, index in servicos" :key="index">
    <h1>Nome do serviço:{{serv.nome}}</h1>
    <h3>Descrição:{{serv.descricao}}</h3>
    <p>Prazo Inicial:{{serv.prazoF}}</p>
    <p>Prazo Inicial:{{serv.prazoI}}</p>
<span>Aceita ou recusa essa oferta de serviço</span>
<select>
<option>Aceitar</option>
<option>Recusar</option>

</select>
</div>
</template>
<script>
import axios from 'axios';

export default{

    name:"dashboardArquiteto",
    data(){
        return{
        servicos:[]
    }
    },
    created: function(){

axios.get("http://localhost:1700/servico").then(res=>{
    console.log(res.data)
    this.servicos=res.data;
})

    }
}
</script>
<style>

h2{
    text-align: center;
    color:#f82
}
.sair{
    background: red;
    padding: 10px;
    margin:5px;
}
</style>