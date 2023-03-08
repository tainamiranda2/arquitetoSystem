<template>
  <div>
<h1>Faça login</h1>
<form>
<Input
type="email" 
v-model="email" 
placeholder="Informe o email"
 label="Informe seu email"
  />
  <Input type="password" 
v-model="senha" 
placeholder="Informe a senha"
 label="Informe a senha" />
 <Button text="Entrar"/>
</form>
</div>
</template>

<script>
import Input from '../components/input/Input.vue';
import Button from '../components/button/Button.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
// eslint-disable-next-line
/* eslint-disable */ 
  name: 'Login',
  components:{
    Input,
    Button
  }
 
  
}
</script>
