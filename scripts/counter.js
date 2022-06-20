let count = document.getElementById("buttonCountNumber");

document.getElementById("buttonCountPlus").onclick = function() {
    count.innerHTML++;
}

document.getElementById("buttonCountMinus").onclick = function() {
  let countMinus = count.innerHTML;
  if(+countMinus >= 2){
    count.innerHTML--;
  }
}
