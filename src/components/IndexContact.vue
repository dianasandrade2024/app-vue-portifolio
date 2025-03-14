<template>
    <div class="main-container">
  
    <h1>Lista de Contatos</h1>

    <div  v-for = "c in contacts"
    
    :key="c.id"
      :value="c.id">
      {{ c.id }}
      {{ c.name }}
    
    </div>

    
    </div>
          
  </template>
  
<script>

import axios from 'axios';
const baseUrl = "https://api-vue-portifolio.vercel.app";

export default{
  
  data(){
    return{
    contacts:[],
      
    }   
  },


  created(){
    this.getContact()
  },


  methods: {
    
    async getContact(){

      let result = await axios.get(`${baseUrl}/api/indexcontact`);
      this.contacts = result.data;
      console.log(this.contacts);
    }
  },


}

</script>


