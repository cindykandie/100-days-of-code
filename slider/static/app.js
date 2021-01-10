let theImage = document.getElementById('currentImage')
let i = 1
function newPhoto(){
    if(i==1||i<5){
        theImage.src = `static/images/img${i++}.webp` 
    }else{
    theImage.src = `static/images/img${i=1}.webp`
}
}