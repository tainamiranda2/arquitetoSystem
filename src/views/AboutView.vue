<template>
  <div class="about">
    <h1>This is an about page</h1>
    <form>
      <input
      type="email" 
      v-model="email" 
      placeholder="Informe o email"
       label="Informe seu email"
        />
        <input type="password" 
      v-model="senha" 
      placeholder="Informe a senha"
       label="Informe a senha" />
      </form>
  </div>
</template>
