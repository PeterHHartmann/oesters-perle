const paths = document.querySelectorAll(".oyster-container svg path");
let i = 0;

// paths.forEach(function(item, index){
//   i++;
//   let pathLength = item.getTotalLength();
//   item.setAttribute("stroke-dasharray", pathLength);
//   item.setAttribute("stroke-dashoffset", pathLength);
//   item.innerHTML = "<animate attributeName='stroke-dashoffset' begin='0s' dur='3s' to='0' fill='freeze' />";
//   console.log(index, pathLength, item.innerHTML);
// })