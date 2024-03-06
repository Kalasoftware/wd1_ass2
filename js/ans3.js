
var imagesfiles = ["1.jpg","2.jpg","3.jpg","4.jpg"];

const PATH="/images/"
var imagea=[];
var c=0;
function onLod()
{
    for(var i =0; i<imagesfiles.length; i++)
    {
        imagea[i] = new Image()
        imagea[i].src = PATH + imagesfiles[i];
        console.log(imagea[i]);
    }

    console.log(imagea[0])
    document.getElementById("imgbox").src = imagea[0].src
}

console.log(imagea[0]);

function next()
{
   
    c++
    if(c == imagea.length)
    {
        c =0;
    }
    document.getElementById("imgbox").src = imagea[c].src

}

function prev()
{
   c--
   if(c<0)
   {
    c = imagea.length-1;
   }
   document.getElementById("imgbox").src = imagea[c].src
}

