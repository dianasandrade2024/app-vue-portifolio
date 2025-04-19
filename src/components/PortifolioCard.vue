<template>
  <div class="main-container">
 
    <div class="container-one">
     <h1>{{name}}</h1>
     <h2>{{message}}</h2>


    <p>
        
    Clique em         
     <a> <router-link style="text-decoration: none; color: inherit;" to="/about"> About </router-link> </a>      
     para saber mais sobre Diana Andrade  
      
    </p>

    
      <p class="read-the-docs"> Clique nos logotipos Vite e Vue para saber mais sobre as tecnologias estudadas </p>

      <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>

      <a href="https://vuejs.org/" target="_blank">
        <img src="/src/assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>

      <a href="" target="_blank">
        <img src="/src/assets/angular.png" class="logo angular" alt="Angular logo" />
      </a> 
        
     <div class="button-container">
    
      <div class="projects-button-one">
          <router-link style="text-decoration: none; color: inherit;" to="/myeducation">Formação</router-link>  
      </div>

      <div class="projects-button-one">
          <router-link style="text-decoration: none; color: inherit;" to="/myprojects">Projetos</router-link>       
      </div>

      <div class="projects-button-one">
          <router-link style="text-decoration: none; color: inherit;" to="/mycontact">Contato</router-link>       
      </div>

    </div> 
      
    </div>
  </div>
        
</template>

<script>


export default{
  name: 'portifolio-card',
  data: function() {
    return{
      message: 'Software Developed',
      name: "Olá, eu sou Diana Andrade",
    };
  },

}
</script>

<style scoped >


.main-container{
    display:flex;
    justify-content: center;
    flex-wrap: wrap;

}

@media screen and (max-width:600px){
  .main-container{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:column ;
  }
}

.container-one{
    background-color: #2d3e50;
    width: 90%;
    border-radius: 5px;


}

.read-the-docs {
  color:rgb(223, 230, 236);;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2emrgba(3, 27, 16, 0.67));
}

.logo.angular:hover {
  filter: drop-shadow(0 0 2emrgb(238, 16, 24));
}




.button-container{
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    
}

@media screen and (max-width:1000px){
  .button-container{
    margin-top:5%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:column ;
  }
}

.projects-button-one{
  background-color:  rgb(10, 109, 109);
  border-radius: 8px;
  border: 1px solid #18ab29;
  margin: 15px;
  cursor: pointer;
  color:#ffff;
  font-family: Arial;
  font-size: 17px;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
}

.projects-button-one:hover{
  background-color:#00c784;
}

.projects-button-one:active{
  position: relative;
  top:1px;
}



</style>