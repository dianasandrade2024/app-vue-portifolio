<template>
    <div class="main-container">
  
    <h1>Lista de Contatos</h1>

    <div  v-for = "c in contacts"
    
    :key="c.id"
      :value="c.id">
      {{ c.id }}
      {{ c.name }}

      {{ contacts }}
    
    </div>

    
    </div>
          
  </template>
  
<script>

import axios from 'axios';
export default{
  
  data(){
    return{
      id: this.$route.params.id,
      contacts:[],
      
    }   
  },


  //para uso do mysql não apagar//
  //created(){
   // this.getContact()
  //},


  methods: { 
    //para uso do mysql não apagar//
    //async getContact(){
     // let result = await axios.get(`https://api-vue-portifolio.vercel.app/api/indexcontact`);
      //this.contacts = result.data;
      //console.log(this.contacts);
    //}
  },

  mounted(){
    fetch(`https://api-vue-portifolio.vercel.app/api/contacts`).then(resp=>resp.json())  
    .then(resp=>resp.json())
    .then(data=> this.contacts = data)
  }





}

</script>


