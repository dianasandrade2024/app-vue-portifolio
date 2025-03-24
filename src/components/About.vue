<template>
  <div class="main-container">  
    <div class="container-one">
      <div class="profile">
        <img src="">
        <h1>HI, I'M</h1>
        <h2>{{name}}</h2>
        <h2>{{message}}</h2>
      </div>

      <div class="about-me">
  
        <h3>
        <p>
          Bacharela em Ciência da Computação pela UFRRJ.
          Atualmente cursando Matemática Computacional. Amo ciências exatas e tecnologia.
          Em Tecnologia da Informação minhas áreas de interesse são: Inteligência Artificial, Análise de Dados,
          Desenvolvimento de Software, Ciência de Dados, Desenvolvimento em ambiente web, Administração de Banco de Dados, Educação e Bioinformática.
        </p>
        </h3>
        </div>   
    </div>
  </div>
        
</template>

<script>


import axios from 'axios';

export default{
  name: 'portifolio-card',
  data: function() {
    return{
      message: 'Software Developed',
      name: "Diana Andrade",
  
    };
  },  
}
</script>

<style scoped>
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
    background-color: #334558;
    width: 90%;
    border-radius: 10px;
    height: 100vh;
    border: 1px solid #44505c;
}

.profile >h1{
    font-family:Avenir, Helvetica, Arial, sans-serif;
    font-size: 50px;
    font-family:Avenir,Helvetica,Arial,sans-serif;
    color: #cfe1f3;
    
}

@media screen and (max-width:600px){
  .profile >h1{
    flex-direction: column;
    font-size:50px
  }
}

.profile >h2{
    font-family:Avenir, Helvetica, Arial, sans-serif;
    font-size: 30px;
    color: #cfe1f3;
}

@media screen and (max-width:600px){
  .profile >h2{
    flex-direction: column;
    font-size:30px
  }
}


.about-me > h3{
    font-size: 25px;
    color: rgb(111, 168, 168);
    font-family:Avenir,Helvetica,Arial,sans-serif;
    align-items: center;
    justify-content: center;

}

</style>