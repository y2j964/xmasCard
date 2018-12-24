let button = document.querySelector("button");
let greatestSong = document.querySelector(".videoHidden");
let vimeoPlayer = document.querySelector("iframe");
let songOption = document.querySelector("select");
let barToggler = document.querySelector("i");
let navbarLinks = Array.from(document.getElementsByTagName("li"));
navbarLinks = navbarLinks.slice(1);

barToggler = addEventListener("click", function() {
  // console.log(navbarLinks[0].className)
  for (let i = 0; i < navbarLinks.length; i++) {
    if (navbarLinks[i].className === "navLinkProper") {
      navbarLinks[i].className = "expandedNav";
      // console.log("link " + i + " now expanded")
    } else {
      navbarLinks[i].className = "navLinkProper";
      // console.log("link " + i + " now retracted")      
    }
  }
  })
  
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
  console.log(vimeoPlayer.src)
  const srcFilePath = "https://y2j964.github.io/xmasCard/xmas/?autoplay=1";
  if (vimeoPlayer.src !== srcFilePath) {   
    greatestSong.className = "videoDisplay";
    vimeoPlayer.src += "?autoplay=1";
  } 
}) 
