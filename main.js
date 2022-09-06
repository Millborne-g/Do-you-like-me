const no_button = document.querySelector(".no");
const yes_button = document.querySelector(".yes");
const text = document.querySelector(".text");

no_button.addEventListener('click', function(){
    let top = Math.random() * 100+"%";
    let left = Math.random() * 100+"%";

    no_button.style.top=""+top;
    no_button.style.left=""+left;
    console.log(top+" "+left);
});

yes_button.addEventListener('click', function(){
    text.innerHTML = "Tangina mo!";
    no_button.style.display="none";
    yes_button.style.display="none";
})