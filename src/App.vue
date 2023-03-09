<template>

<nav class="site">site</nav>
  <router-view/>
  <footer>
    <span>&copy;2023 - Tainá Miranda</span>

  
      <a href="https://github.com/tainamiranda2" class="fa fa-github"></a>
      <a href="https://www.linkedin.com/in/tain%C3%A1-miranda-b337b3145" class="fa fa-linkedin"></a>
  </footer>
</template>
<script>
</script>

<style>
*{
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}
.form{
  width:50%;
  color: #f82;
  display: block;
  margin:auto;
  margin-top: 50px;
  margin-bottom: 50px;
  }
footer{
text-align: center;
padding: 5px;
background: #f82;
color: #fff;
position: fixed;
left: 0;
bottom: 0;
width: 100%;
}
.site{
  margin:0;
 padding: 2px;
}
h1,h2{
  color:#f82;
  margin:5px;
  text-align: center;
}
.erro{
  color:red;
}
.sair{
  margin-top: 50px;
  background: red;
  padding: 4px;
 
  
}
table {
  width:100%;
  border:solid 2px #005;
  padding: 10px;
  margin: 5px;
}
td{
  margin: 5px;
  border:solid 2px #005;
  padding: 10px;
}

button{
    background: #f82;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
   width: 100%;
}
</style>
