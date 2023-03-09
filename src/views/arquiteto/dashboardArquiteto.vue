<template>
    <a class="sair" href="/" >
        Sair
      </a>
    <h2>Veja todos os serviços para voce</h2>
    <div v-if="servicos.length===0">
        <h2>Não há nenhum serviço cadastrado</h2>
    </div>
    
        <table>
            <tr>
                <td>Nome</td>
                <td>Descrição</td>
                <td>Prazo inicial</td>
                <td>Prazo Final</td>
                <td>Estado</td>
                <td>Ação</td>
            </tr>
 <tr  v-for="serv, index in servicos" :key="index">
    <td>Nome do serviço:{{serv.nome}}</td>
    <td>Descrição:{{serv.descricao}}</td>
    <td>Prazo Inicial:{{serv.prazoF}}</td>
    <td>Prazo Inicial:{{serv.prazoI}}</td>
    <td>Estado:{{serv.estado}}</td>
    <td>
        <RouterLink class="enviar" 
        :to="{name: 'estadoServico',params:{id: serv.id} }" > 
        Alterar Estado</RouterLink>
        
      </td>
</tr>

</table>

 
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
