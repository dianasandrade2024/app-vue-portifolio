
<script>

export default {
  name: 'App',
  components: {

  }
}
</script>


<template>

<div id="app">

    <img alt="" src="/src/assets/diana.jpeg">

    <router-view></router-view>

    <div class="page-container">
      <div id="content-wrap">
        <footer id = "footer">
      
          <a href="https://www.linkedin.com/in/diana-andrade-405b50196/"> <img src="/src/assets/linkedin.png" alt="Linkedin"></a>
          <a href="https://github.com/dianasandrade2024">  <img src="/src/assets/git.png" alt="GitHub">  </a >   © 2025 Andrade, Diana. All rights Reserved. 
       
        </footer>
      </div>
    </div>

</div>

</template>




<style scoped>

#page-container{
    position: relative;
    min-height: 5h;
}

#content-wrap{
  padding-bottom: 10rem;
}

#footer{
  position:fixed;
  bottom:0;
  width: 100%;
  height: 2.5rem;
  background-color: #2c3e50; 
  color: #ffff;
  font-family: Arial;
  font-size: 17px;
  align-items: center;
}


#footer > a > img{
  margin-right: 5px;
  width: 20px;
  margin-top: 5px;  
  margin-bottom : 0px;

}

@media screen and (max-width:400px){
  #footer{
    font-size: 14px;

  }

}


</style>
