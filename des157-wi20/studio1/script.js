(function(){
    "use strict";

    const myForm = document.querySelector("form");

    //Wait for submit button press
    myForm.addEventListener("submit", function(e){
        e.preventDefault();

        //Get all form values
        let myName = document.getElementById("myName").value;
        let adj1 = document.getElementById("adj1").value;
        let ing = document.getElementById("ing").value;
        let adj2 = document.getElementById("adj2").value;
        let adverb = document.getElementById("adverb").value;
        let plrl = document.getElementById("plrl").value;
        let adj3 = document.getElementById("adj3").value;
        let noun = document.getElementById("noun").value;
        let storyBox = document.getElementById("storyBox");

        //Check if all boxes have been filled. If so, replace form with mad lib. Otherwise, create error message.
        if(adj1 && ing && adj2 && adverb && plrl && adj3 && noun){
            let userName = document.createElement("p");
            const userNameText = document.createTextNode(`By ${myName}`);
            const myHeader = document.getElementById("header");
            userName.appendChild(userNameText);
            myHeader.appendChild(userName);

            storyBox.innerHTML = `<p id="myStory">Being a design major is really ${adj1}. I get to spend all of my time ${ing} visual identities and generally not doing any difficult ${adj2} work. However, sometimes things don’t go so ${adverb}. Big ${plrl} pile up and while we don’t have finals, we do have important ${adj3} critiques. Overall, though, I wouldn’t change it for the ${noun}.</p>`;
        } else {
            const errorMessage = document.createElement("p");
            const errorMessageText = document.createTextNode(`Please enter a word in each text box.`);
            errorMessage.appendChild(errorMessageText);
            errorMessage.className = "red";
            storyBox.appendChild(errorMessage);
        }
        
    });
}());