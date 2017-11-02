document.addEventListener("DOMContentLoaded", function(){

/* slider with chairs - header */
    var next = document.getElementById('nextPicture');
    var prev = document.getElementById('prevPicture');

    var array = document.getElementsByClassName('slider');


    var index=0;

var visibleElement = array[0].firstElementChild;
visibleElement.classList.add("visible");

nextPicture.addEventListener("click", event1);

function event1(){

 for (i = 0; i < array[0].children.length; i++) {
   if(array[0].children[i].classList = "visible"){
     array[0].children[i].classList.remove('visible')
   }
 }
   array[0].children[index].classList.add('visible')
     index = index + 1;
     if(index>=array[0].children.length){
       index = index - 1;
     }
}

prevPicture.addEventListener("click", event2);

function event2(){

for (i = 0; i < array[0].children.length; i++) {
 if(array[0].children[i].classList = "visible"){
   array[0].children[i].classList.remove('visible')
 }
}

 array[0].children[index].classList.add('visible')
   index = index - 1;
   if(index<0){
     index = 0;
   }
}

/* end of slider */

})
