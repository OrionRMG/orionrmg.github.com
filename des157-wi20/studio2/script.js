(function(){
    "use strict";

    const bag = document.getElementById("bag");
    const clickArea = document.getElementById("clickArea");
    const items = document.getElementById("items");

    myBag.addEventListener("click", function(e){
        e.preventDefault();

        const books = document.createElement("img");
        const laptop = document.createElement("img");
        const headphones = document.createElement("img");
        const modal = document.getElementById("myModal");
        const popHead = document.getElementById("popHead");
        const popText = document.getElementById("popText");
        const close = document.querySelector("span");

        books.src = "images/books.png";
        laptop.src = "images/laptop.png";
        headphones.src = "images/headphones.png";

        books.width = "150";
        books.height = "211";
        laptop.width = "350";
        laptop.height = "106";
        headphones.width = "200";
        headphones.height = "200";

        books.class = "item";
        laptop.class = "item";
        headphones.class = "item";

        books.id = "books";
        laptop.id = "laptop";
        headphones.id = "headphones";

        bag.innerHTML = `<img src="images/backpackOpen.png" alt="Backpack" id="myBag" width="300" height="332">`;
        items.appendChild(books);
        items.appendChild(laptop);
        items.appendChild(headphones);
        
        books.addEventListener("mouseover", function(){
            books.style.width = "170px";
            books.style.height = "241px";
        });
        books.addEventListener("mouseout", function(){
            books.style.width = "150px";
            books.style.height = "211px";
        });

        laptop.addEventListener("mouseover", function(){
            laptop.style.width = "380px";
            laptop.style.height = "126px";
        });
        laptop.addEventListener("mouseout", function(){
            laptop.style.width = "350px";
            laptop.style.height = "106px";
        });

        headphones.addEventListener("mouseover", function(){
            headphones.style.width = "220px";
            headphones.style.height = "220px";
        });
        headphones.addEventListener("mouseout", function(){
            headphones.style.width = "200px";
            headphones.style.height = "200px";
        });

        books.addEventListener("click", function(){
            popHead.innerHTML = "My Books";
            popText.innerHTML = "I'm currently carrying around three books with me: 'Mediations' by Marcus Aurelius, a classic of philosophy, 'Runaway Horses' by Yukio Mishima, a story about a Japanese judge who meets the reincarnation of his former friend who passed away, and 'Heredity and the Nature of Man' by Theodosius Dobzhansky, a short book on the history of genetics and heredity.";
            modal.style.display = "block";
            close.onclick = function(){
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                  modal.style.display = "none";
                }
              }
        });

        laptop.addEventListener("click", function(){
            popHead.innerHTML = "My Laptop";
            popText.innerHTML = "I usually keep my MacBook on me when on campus. I use it for many things, including design work, emailing, playing games, producing music, and the list goes on. A big chunk of my life is stored on this computer.";
            modal.style.display = "block";
            close.onclick = function(){
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                  modal.style.display = "none";
                }
              }
        });

        headphones.addEventListener("click", function(){
            popHead.innerHTML = "My Headphones";
            popText.innerHTML = "As an avid music enthusiast like most people, I keep my headphones with me at all times. I like to use bluetooth ones because wires get irritating.";
            modal.style.display = "block";
            close.onclick = function(){
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                  modal.style.display = "none";
                }
              }
        });
    });
}());