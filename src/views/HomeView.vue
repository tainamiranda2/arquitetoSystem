<template>
  <div >
    <nav>
      <router-link to="/">Home</router-link> |
<router-link to="/login">Login</router-link>
    </nav>
<p>Bem vindo ao sistema que conecta arquitetos com clientes que precisa de um serviço</p>

<h2>Para se cadastrar como arquiteto
   <a class="cad" href="/arquitetoRegister" >
  Cadastrar
</a> </h2>

  <h2>Para se cadastrar como cliente
    <a class="cad" href="/clienteRegister" >
   Cadastrar
 </a>
</h2>
 <div class="card">
  <h3>Nome: Carlos Oliveira </h3>
  <p>Telefone: (82) 99999-9999 </p>
  <p>Idade: 28 anos</p>
 </div>


  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',

}
</script>
<style>
nav{
   
  width: 100%;
background: #f82;

display: inline-block;
padding: 16px;
}


a{
  color:#fff;
    text-decoration: none;
}
 a:hover{
    background:  rgb(247, 239, 239);
    color: rgb(24, 26, 23);
    padding:10px;
  }
  .cad{
    color:#000;
    font-size: 15px;
  }
  .card{
    border: solid 1px #f82;
    margin: 10px;
    transition: 0.3s;
    padding: 2px 16px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    color: #f82;
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        cursor: pointer;
      }
</style>
