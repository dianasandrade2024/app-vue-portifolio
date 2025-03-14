<template>
    <div class="main-container">
  
    <h1>Lista de Usuários</h1>

    <div  v-for = "i in users"
    
    :key="i.id"
      :value="i.id">
      {{ i.id }}
      {{ i.name }}
    
    </div>

    
    </div>
          
  </template>
  
<script>

import axios from 'axios';

export default{
  
  data(){
    return{
    users:[],
      
    }   
  },


  created(){
    this.getUser()
  },


  methods: {
    
    async getUser(){

      let result = await axios.get(`http://127.0.0.1:8000/api/indexuser`);
      this.users = result.data;
      console.log(this.users);
    }
  },


}

</script>


