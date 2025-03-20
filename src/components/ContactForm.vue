<template>
  <div class="main-container">
        
    <div class="container-two">

      <form @submit="checkForm"> 
       

        <h2>Contato</h2>
        <p v-if="errors.length">
          <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>    
          <li v-for = "(error,index) in errors" :key="index"> {{error}}</li>
        </p>
     
        <label for="nome">Nome:</label>              
        <input type="text" id="nome" name="nome" v-model="postData.name" placeholder="Digite o seu nome">
     
        
        <label for="email">E-mail:</label>
        <input type="text" id="email" name="email" v-model="postData.email" placeholder="Digite o seu email">

        <label for="telefone">Telefone:</label>
        <input type="text" id="telefone" name="telefone" v-model="postData.telephone" placeholder="Digite o seu telefone">
        
        <label for="assunto">Assunto:</label>
        <input type="text" id="assunto" name="assunto" v-model="postData.subject" placeholder="Digite o assunto">
                
        <label for="mensagem">Mensagem:</label>          
        <textarea id="mensagem" name="mensagem"  v-model="this.postData.mensage" placeholder="Digite a mensagem"></textarea>

        <div claas="button-container">
          <div> 
            <input class="button-one" type="submit" value="Enviar">    
          </div>
       
        </div>
      </form>    
    </div>

    <div class="container-three">

      <div class = "background-education">
        <img src="/src/assets/email-3249062_1280.png" class="card-img-top" alt="">  
        
        
       </div>
     
      
    </div>
</div>  

</template>

<script>

import axios from 'axios';
export default{
    data(){
        return{
         errors: [],
         postData: {
          name:"", 
          email:"", 
          telephone: "",
          subject:"", 
          mensage:"",   
        }    
      }   
    }, 
    
    methods: {
  	

    checkForm: function(e){
      this.errors= [];
    
      if(!this.postData.name){
        this.errors.push("O nome é obrigatório");
      }  

      if(!this.postData.email){
        this.errors.push("O e-mail é obrigatório");     

      }else if(!this.validEmail(this.postData.email)){
        this.errors.push("Utilize um e-mail válido!");
      }

      if(!this.errors.length){
        this.createContact()
        return true;
      }
      
      e.preventDefault();
    },
    validEmail: function(email){
      var re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);

    },

    createContact() {
        fetch("https://api-vue-portifolio.vercel.app/api/contacts", this.postData)
          .then(response => response.json())
      },
  } 

}
</script>

<style scoped>

.main-container{
  justify-content: center;
  align-items: center;
  display:flex;
  flex-wrap: row;
}

@media screen and (max-width:1000px){
  .main-container{
    justify-content: center;
    align-items: center;
    display:flex;
    flex-direction:column ;
   }
}

.links > a > img {
    height: 2rem;
    margin: 5px;
    width: 2rem;  
}

h2 {  
    margin-top:5px;
    margin-bottom: 10px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: rgb(8, 34, 34);
}


form  #nome {  
    text-align-last: center;
    color: rgb(10, 109, 109);
    width: 400px;
    height: 25px;
    margin-bottom: 15px;
    border-radius: 5px;
    background: #ffffff;
}

form  #telefone {  
    text-align-last: center;
    color: rgb(10, 109, 109);
    width: 400px;
    height: 25px;
    margin-bottom: 15px;
    border-radius: 5px;
    background: #ffffff;
}

form  #email {  
    text-align-last: center;
    color: rgb(10, 109, 109);
    width: 400px;
    height: 25px;
    margin-bottom: 15px;
    border-radius: 5px;
    background: #ffffff;
}

form  #assunto {  
    text-align-last: center;
    color: rgb(10, 109, 109);
    width: 400px;
    height: 25px;
    margin-bottom: 15px;
    border-radius: 5px;
    background: #ffffff;
}

form #mensagem {  
    text-align-last: center;
    color: rgb(10, 109, 109);
    width: 400px;
    height: 200px;
    word-wrap: break-word;
    border-radius: 5px;
    background: #ffffff;

}

label{
    font-weight: bold;
    color: rgb(8, 34, 34);
    margin-bottom: 5px;
    color: #222;
    padding: 5px 5px;
    border-left: 3px solid rgb(10, 109, 109);
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    display:flex;
    flex-wrap: wrap; 
}


.container-two{
  background-color: #334558;
  width: 90%;
  height: 100%;
  border-radius: 10px;
  display:flex;
  flex-wrap: row;
  justify-content: center;
  border: 5px solid #44505c;
  height: 100vh;

 
}

.container-three{
  background-color: #eda736;
  width: 90%;
  border-radius: 10px;
  justify-content: center;
  display:flex;
  flex-direction:wrap ;
  margin-left: 2px;
  border: 5px solid #44505c;
  height: 100vh;
}


@media screen and (max-width:1000px){
    
  .container-three{
    margin-top: 5px;
  }
}

form{
  width: 90%;
  height: 100%;
}

@media screen and (max-width:600px){
  form #nome{
    width: 200px;
    margin-bottom: 15px;
    border-radius: 5px;
    background: #ffffff;

  }
  form #email{
    text-align-last: center;
    color: rgb(10, 109, 109);
    width: 200px;
    margin-bottom: 15px;
    border-radius: 5px;
    background: #ffffff;
  }
  form  #telefone {  
    text-align-last: center;
    color: rgb(10, 109, 109);
    width: 200px;
    margin-bottom: 15px;
    border-radius: 5px;
    background: #ffffff;

}

  form #assunto{
    text-align-last: center;
    color: rgb(10, 109, 109);
    width: 200px;
    margin-bottom: 15px;
    border-radius: 5px;
    background: #ffffff;
  }

  form #mensagem{
    text-align-last: center;
    color: rgb(10, 109, 109);
    width: 200px;
    height: 100px;
    word-wrap: break-word;
    margin-bottom: 15px;
    border-radius: 5px;
    background: #ffffff;

 }
}


@media screen and (max-width:300px){
  form #nome{
    width: 100px;
    margin-bottom: 15px;
    border-radius: 5px;
    background: #ffffff;

  }
  form #email{
    text-align-last: center;
    color: rgb(10, 109, 109);
    width:  100px;
    margin-bottom: 15px;
    border-radius: 5px;
    background: #ffffff;
  }
  form  #telefone {  
    text-align-last: center;
    color: rgb(10, 109, 109);
    width:  100px;
    margin-bottom: 15px;
    border-radius: 5px;
    background: #ffffff;

}

  form #assunto{
    text-align-last: center;
    color: rgb(10, 109, 109);
    width:  100px;
    margin-bottom: 15px;
    border-radius: 5px;
    background: #ffffff;
  }

  form #mensagem{
    text-align-last: center;
    color: rgb(10, 109, 109);
    width:  100px;
    height: 100px;
    word-wrap: break-word;
    margin-bottom: 15px;
    border-radius: 5px;
    background: #ffffff;

 }
}

@media screen and (max-width:600px){
  label{
    margin-left: 0px;
  }
}

.button-container{
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    
}

.button-one{
  background-color:  rgb(10, 109, 109);
  border-radius: 8px;
  border: 1px solid #18ab29;
  margin: 15px;
  cursor: pointer;
  color:#ffff;
  font-family: Arial;
  font-size: 17px;
  padding: 10px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
 
}

.button-one:hover{
  background-color:#00c784;
}

.button-one:active{
  position: relative;
  top:10px;
}


.background-education > img{
  border-radius: 5px;
  justify-content: center;
  width:99.9%;
  height: 100vh;

 
}


@media screen and (max-width:800px){
  .background-education > img{
    width:99.9%;
    height: 100vh;

   }
}



</style>