// function to display all the selectable characters
function characters(){
  var fighters = [];
  
  // fighters to choose from
  fighters.push("Jam_Xrd.png");
  fighters.push("Kliff_Underson.png");
  fighters.push("Sol_image_rev.png");
  console.log(fighters)
  // a loop that posts all the imgaes
  for(var i = 0; fighters.length > i; i++){
    var img = new Image(200, 200);
      img.src = "assets/images/" + fighters[i];

      var src = document.getElementById("choices");
      src.appendChild(img);
  }
}
  console.log(characters)
  

  
  
