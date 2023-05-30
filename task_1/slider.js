let count=0;

let images=document.querySelectorAll(".image")

showimage(count)
function showimage(index)
{
    count+=index
    
    for(let i=0;i<images.length;i++)
    {
        images[i].style.display="none";
    }
    if(count > images.length-1)
    {
        count=0
    }

    if(count <0 )
    {
        count=images.length-1
    }

    images[count].style.display="block"

}
