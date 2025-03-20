<script>

import json from "/src/assets/projects.json"


export default {
  name: "projects-card",
  data: function() {
    return {
        projects: json.projects,         
    };
  },

  mounted: function() {
    console.log(this.projects);
  },

};

</script>

<template>
  <div class="main-container">

    <div class="container-two">     

      <div class="projects-card" v-for="p in projects" :key="p.id">
        <h2>{{ p.title }}</h2>
        <p>{{ p.about }}</p>
        <img :src="(`/src/assets/${p.image}`)" :alt="p.title" class="logo vue" alt="Vue logo" > 
  
        <div class="links">

          <a :href="p.link1"> <img src="/src/assets/git.png" alt="Git">  </a>  
    
          
        </div>    

      </div>   
      
    </div>  

  </div>
    
</template>

<style scoped>

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
.container-two{
  background-color: #334559;
  width: 90%; 
  border-radius: 10px;
  margin-top: 5px;
  padding: 10px;
  border: 5px solid #44505c;
  justify-content: center;
  align-items: center;
  display:flex;
  flex-wrap: wrap;
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


.projects-card{
  width: 50%;
    margin: 10px;
    padding: 10px;
    flex-wrap: 0 0 40%;
    background-color:#eff5f2;
    border-radius: 10px;
    border: 5px solid #44505c;
    color: #334559;
   
}
.projects-card > img{
    height: 10rem;
}
.projects-card > p{
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    color:#044650;
}
.links{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end; 
    -webkit-text-fill-color:rgb(10, 109, 109);
  
}

.links > a > img {
    height: 2rem;
    margin: 5px;
    width: 2rem;  
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


</style>