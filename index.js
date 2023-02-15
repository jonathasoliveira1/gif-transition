var i = 0;
var images = [];
var time = 2000;

images[0] = 'https://i.pinimg.com/originals/4b/29/1d/4b291da9ba6bc3b5a3df6549b4da5c7f.gif';
images[1] = 'https://i.pinimg.com/originals/ba/24/f2/ba24f257a5d37471b0c8d9af18d60032.gif';
images[2] = 'https://i.pinimg.com/originals/ef/8f/f4/ef8ff431794f19ab02d06a2314c1621f.gif';
images[3] = 'https://i.pinimg.com/originals/07/21/06/072106c0be5ef85152a4571abf1d66c2.gif';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;