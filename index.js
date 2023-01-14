// Using onclick in HTML
function changeImg(newSrc){
    const newSrcNow = newSrc.src;
    const largeImg = document.getElementById('largeImg');
    largeImg.src = newSrcNow;
}


// Using onclick in JS
const largeImg = document.getElementById('largeImg');
const smImg = document.getElementsByClassName('smImg');

smImg[6].onclick = function(){
    largeImg.src = smImg[6].src;
}
smImg[7].onclick = function(){
    largeImg.src = smImg[7].src;
}
smImg[8].onclick = function(){
    largeImg.src = smImg[8].src;
}
smImg[9].onclick = function(){
    largeImg.src = smImg[9].src;
}
smImg[10].onclick = function(){
    largeImg.src = smImg[10].src;
}
smImg[11].onclick = function(){
    largeImg.src = smImg[11].src;
}


