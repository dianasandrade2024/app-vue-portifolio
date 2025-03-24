<template>
  <div class="main-container">
  
    <h1>Lista de Contatos</h1>
    <div  v-for = "l in list" :key="l.id"
      :value="l.id">
      {{ l.id}}
      {{ l.name}}
      {{ l.email}}
      {{ l.subject}}
      {{ l.mensage}}     
    </div>       

  </div>
          
</template>
  
<script>

import axios from 'axios';

export default{
  
  data(){
    return{
      id: this.$route.params.id,
      //contacts:[],
      list:[],      
    }   
  },


  //para uso do mysql não apagar//
  created(){
    //this.getContact()
    this.getList()
  },


  methods: { 
    //para uso do mysql não apagar//
    //async getContact(){
      //let result = await axios.get(`https://api-vue-portifolio.vercel.app/api/api/indexcontact`);
      //let result = await axios.get(`http://localhost:8000/api/indexcontact`);
      //this.contacts = result.data;
      //console.log(this.contacts);
    //},

    async getList(){
      let result = await axios.get(`https://api-vue-portifolio.vercel.app/api/api/testcontact`);
      //let result = await axios.get(`http://localhost:8000/api/testcontact`);
      this.list = result.data;
      console.log(this.list);
    }
  },
}

</script>


