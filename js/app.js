//Secret Menu Challenge
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var addMc = document.getElementsByClassName("name");
console.log(addMc);

for(var i=0; i<addMc.length; i++){
  addMc[i].addEventListener("click", displayMc);
}

function displayMc(){
  var getMc = this.querySelectorAll(".menu")[0];
  if(getMc.style.display === "none"){
    getMc.style.display = "block";
  }else{
    getMc.style.display = "none";
  }
}
