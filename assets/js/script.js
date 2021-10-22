let game = {
    /**
     * Method: Initialize the game
     */
    begin: function() {
    
        //Property to know the location of the question
        this.currLocation = 0;
        //Property to know the actual score
        this.score = 0; 
    
        // get the array of <li> elements
        let arrLi = document.querySelectorAll('.options');    
              
        //Iterate all the <li> elements ,add eventListener and check answer
        arrLi.forEach((element, i) => {
                
          element.addEventListener('click', () => {
            // check correct answer
            this.checkAnswer(i);
          });
        });
        
        // Update the score
        this.updateScore();
        
        // show first question
        this.showQuery(questions[this.currLocation]);
    },
    
    //Show the spanish word and all the alternatives in english
    showQuery: function(q) {
    },
    
    //Verify the option selected by the user
    checkAnswer: function() {
    },
    
    //Update position of the array
    increasePos: function() {      
    },
    
    //Print score on the board game
    updateScore: function() {
    },
    
    //Print result of selection on the board game
    showResult: function() {      
    }
    
  };
  
  // begin the application
  game.begin();
  