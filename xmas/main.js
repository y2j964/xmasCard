let button = document.querySelector("button");
let greatestSong = document.querySelector(".videoHidden");
let vimeoPlayer = document.querySelector("iframe");


button.addEventListener("click", function() {
  greatestSong.className = "videoDisplay";
  // greatestSong.autoplay = "autoplay";
  vimeoPlayer.src += "?autoplay=1";
})