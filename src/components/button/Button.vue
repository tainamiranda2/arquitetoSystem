<template>

    <button >{{text}}</button>
</template>
<script>
    export default{
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Button',
        props:{
            text:String,
            
        }
    }
</script>
<style>
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