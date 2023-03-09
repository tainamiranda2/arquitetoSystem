<template>
    <a class="sair" href="/" >
        Sair
      </a>
    <h2>Veja todos os serviços para voce</h2>
   

    <div class="card">
        <h1>Nome do serviço:</h1>
        <h3>Descrição</h3>
        <p>Prazo Inicial:</p>
        <p>Prazo Inicial:</p>
        
    <span>Aceita ou recusa essa oferta de serviço</span>
    
    <button >Aceitar</button>
    <button>Recusar</button>
    <span>Acho  esta oferta um absurdo voce pode exlcuir</span>
    <button>Excluir</button>
    </div>

</template>
<script>
//import axios from 'axios';

export default{

    name:"dashboardArquiteto",
    created(){
        this.idUser=this.$route.params.id

      /*  axios.get("http://localhost:1700/servico/"+this.$route.params.id).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err.response)
        })*/
    },
    data(){
        return{
        estado:'',
        nome:'',
  descricao:'',

  prazoF:'',
  prazoI:'',
  idUser:''
 
    }
    },
   methods: {
atualizarEstado(){
/*axios.put("http://localhost:1700/servico").then(res=>{
    console.log(res.data)
    this.servicos=res.data;
}).then(res=>{
  console.log(res)
  this.$router.push({name: 'dashboardArquiteto'})

}).catch(err=>{
 
  console.log(err)
})
}

     */

     
}
    
}
   }
</script>
