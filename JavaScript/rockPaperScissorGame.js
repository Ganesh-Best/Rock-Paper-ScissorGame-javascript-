  
  let Collection = {
   'rock':document.getElementById('rock'),
   'paper':document.getElementById('paper'),
   'scissor':document.getElementById('scissor')
  };



function Reset(){
        let Flex =   document.getElementById('flex-Box');
        Flex.innerHTML = '';
        Flex.appendChild(Collection.rock);
        Flex.appendChild(Collection.scissor);
        Flex.appendChild(Collection.paper);
  
}
function Game(choice){
 
    var humanChoice = choice;
    var computerChoice = Choice() ;
    var winNumber = decideFunction(humanChoice.id,computerChoice);
    var message = Message(winNumber); 
       
    frontEnd(humanChoice.id ,computerChoice,message);   

 
   function frontEnd(humanChoice,computerChoice,Info){
 
    var imageDatabase ={
    'rock':document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissor':document.getElementById('scissor').src
    };

    
    document.getElementById('paper').remove();
    document.getElementById('rock').remove();
    document.getElementById('scissor').remove();
    
     var humanDiv = document.createElement("div");
     var computerDiv = document.createElement("div");
     var messageDiv = document.createElement("div");
      
     humanDiv.innerHTML =  "<img src=" + imageDatabase[humanChoice]  + "   width='200px' height ='200px'  />" ;
     
     computerDiv.innerHTML =  "<img src=" + imageDatabase[computerChoice]  + "  width='200px' height ='200px'  />" ;
     
     messageDiv.innerHTML = "<h1 style='font-size:60px;color:red;padding-top:60px;'>" + Info + "</h1>";
     
     document.getElementById("flex-Box").appendChild(humanDiv);
     document.getElementById("flex-Box").appendChild(messageDiv);
     document.getElementById("flex-Box").appendChild(computerDiv);
     
     

   } 

    
function Message(number){
  var win ={'0':"You Lose !","1":"You Won :)","0.5":"Draw:"};
 console.log( win[number]);
 return win[number];
}

function decideFunction(humanChoice,computerChoice){
 console.log(humanChoice);
 console.log(computerChoice);
   var database = {
       'rock':{'paper':0,'rock':0.5,'scissor':1},
       'scissor':{'paper':1,'scissor':0.5,'rock':0},
       'paper':{'paper':0.5,'scissor':0,'rock':1}
   };
  
   return database[humanChoice][computerChoice];
}

function Choice(){
   var list =['rock','paper','scissor'];
  
    return list[Math.floor(Math.random()*3)];
}


}

