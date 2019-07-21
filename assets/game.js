// function to display all the selectable characters
function characters(){
  var fighters = [];
  
  // fighters to choose from
  fighters.push("https://vignette.wikia.nocookie.net/guilty-gear/images/d/de/Jam_Xrd.png/revision/latest/scale-to-width-down/337?cb=20160526230307");
  fighters.push("https://vignette.wikia.nocookie.net/guilty-gear/images/6/60/Kliff_Underson.png/revision/latest/scale-to-width-down/350?cb=20111210045438");
  fighters.push("https://vignette.wikia.nocookie.net/guilty-gear/images/b/b2/Sol_image_rev.png/revision/latest/scale-to-width-down/350?cb=20160526181730");
 
  // a loop that posts all the imgaes
  for(var i = 0; fighters.length > i; i++){
    var img = new Image(200, 200);
      img.src = fighters[i];

      var src = document.getElementById("#choices");
      src.append(img);
  }
}
  console.log(characters)
  

  
  
