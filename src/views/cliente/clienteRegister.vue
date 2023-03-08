<template>
<h1>Faça seu registro como arquiteto e solicite serviços</h1>
<a href="/" >
  Voltar
</a>
<form>
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
 label="Informe a telefone" />

 <Input type="password" 
v-model="senha" 
placeholder="Informe a senha"
 label="Informe a senha" />

<Button text="Cadastrar"/>
</form>
</template>

<script>
import Input from '../../components/input/Input.vue';
import Button from '../../components/button/Button.vue';
export default {
  
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'como cliente',
  components:{
    Input,
    Button
  }
}
</script>