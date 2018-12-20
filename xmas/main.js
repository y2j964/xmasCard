let button = document.querySelector("button");
let greatestSong = document.querySelector(".videoHidden");
let vimeoPlayer = document.querySelector("iframe");
let songOption = document.querySelector("select");


songOption.addEventListener("change", function(e) {
  greatestSong.className = "videoHidden";
  switch (e.target.value) {
    case "sail":
      vimeoPlayer.src = "https://player.vimeo.com/video/170928574";
      break;
    case "surf":
      vimeoPlayer.src = "https://www.dailymotion.com/embed/video/xu6v84";
      break;
    case "summer":
      vimeoPlayer.src = "https://www.dailymotion.com/embed/video/xu6v71" ;
      break;
    default:
      vimeoPlayer.src= "";
  }  
})

button.addEventListener("click", function() {
  const srcFilePath = "https://y2j964.github.io/xmasCard/xmas/";
  if (vimeoPlayer.src !== srcFilePath) {   
    greatestSong.className = "videoDisplay";
    vimeoPlayer.src += "?autoplay=1";
  } 
}) 
