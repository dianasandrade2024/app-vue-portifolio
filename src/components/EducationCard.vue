<template>
  <div class="main-container">
    <div class="container-two"> 
           
      <div class = "background-education">
         
        <img src="/src/assets/campus-ni.jpg" class="card-img-top" alt="">  
        <h1 class="card-title">UFRRJ - Universidade Rural do Rio de Janeiro</h1>  
        <h2 class="card-title">Campus Nova Iguaçu</h2>  
        <h3 class="card-title">Curso de Ciência da Computação</h3>  
         
      </div>
  </div> 
  <div class="container-two"> 
           
           <div class = "background-education">
              
             <img src="/src/assets/campus-ni.jpg" class="card-img-top" alt="">  
             <h1 class="card-title">UFRRJ - Universidade Rural do Rio de Janeiro</h1>  
             <h2 class="card-title">Campus Nova Iguaçu</h2>  
             <h3 class="card-title">Curso de Matemática Computacional</h3>  
              
           </div>
       </div> 
  


 </div>



</template>

<script>
export default{
  name: 'portifolio-card',
  data: function() {
    return{
      message: '',
      name: "",
    };
  },

}
</script>

<style scoped >

.main-container{
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width:600px){
  .main-container{
    justify-content: center;
    align-items: center;
    display:flex;
    flex-direction:column ;
  }
}

.container-one{
  background-color: #00c784;
  width: 90%;
  border-radius: 5px;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5px;
  border: 5px solid #41b883;
}
 
.links{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center; 
}

.links > a > img {
    height: 2rem;
    margin: 5px;
    width: 2rem;  
    margin: 10px;
}


.container-two{
  background-color: #4789d5;
  width: 90%; 
  border-radius: 10px;
  margin-top: 5px;
  padding: 10px;
  border: 5px solid #44505c;
}

.background-education > img{
  border-radius: 20px;

}

.background-education >h1{
  color: #b9e0e0;
  font-size:35px;

}
.background-education >h2{
  color: #8fafaf;
  font-size:25px;
}

.background-education >h3{
  color: #d8e7e7;
  font-size:20px;

}


@media screen and (max-width:800px){
  .background-education > img{
    width:90%
   }
}




.container-four{
 background-color: #00c784;
 width: 90%;
 border-radius: 5px;
 display:flex;
 flex-wrap: wrap;
 justify-content: center;
 margin-top: 5px;
 margin-bottom: 5px;
 border: 5px solid #41b883;
}

</style>