<template>
    <h1>Cadastre um serviço</h1>
    <form>
        
          <Input type="text" 
        v-model="nome" 
        placeholder="Informe o nome"
         label="Informe o nome" />

         <Input type="text" 
        v-model="descricao" 
        placeholder="Informe a descrição"
         label="Informe a descrição"
          />
         <Input type="date" 
        v-model="prazoI" 
        placeholder="Informe data inicial"
         label="Informe a data inicial" />

         <Input type="date" 
        v-model="prazoF" 
        placeholder="Informe data final"
         label="Informe a data final" />
      
        
        <Button text="Cadastrar"/>
        </form>
</template>

<script>
import Input from '../../components/input/Input.vue';
import Button from '../../components/button/Button.vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Servico',
  components:{
    Input,
    Button
  },
  created(){
console.log("tain")
console.log(this.$route.params.id)
  }
}
</script>