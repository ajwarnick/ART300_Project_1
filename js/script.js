document.body.addEventListener('click', function(){
    var element = document.getElementById("myTop");
    element.classList.toggle("hidden");
}, true);




var photo1 = document.getElementById("photo1");
photo1.addEventListener('click', function(){
    var element = document.getElementById("text1");
    element.classList.toggle("hide");
}, true);  