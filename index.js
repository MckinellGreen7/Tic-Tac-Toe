// for (var i=0;i<9;i++)
// {
    var keySelected;
    var c=0;
    var f = 0;
    var arr = [[-1,-2,-3],[-4,-5,-6],[-7,-8,-9]]
    for (var i=0;i<document.querySelectorAll(".grid").length;i++)
    {
    document.querySelectorAll(".grid")[i].addEventListener('click',function(){
    move(this.innerHTML);
    }
    )};
document.addEventListener('keydown',function(event){
    move(event.key);
})
    
function move(key){
    keySelected = key;
    if (c%2==0)
    {
        if (arr[Math.floor(keySelected/3)][keySelected%3]>=0 || f==1){
            alert("Not Playable");
            return;
        }
        var cssClass = document.querySelector(".area"+keySelected);
        cssClass.classList.add("circle");
        c = c+1;
        arr[Math.floor(keySelected/3)][keySelected%3]=0;
    }
    else{
        if (arr[Math.floor(keySelected/3)][keySelected%3]>=0 || f==1){
            alert("Not Playable");
            return;
        }
        var cssClass = document.querySelector(".area"+keySelected);
        cssClass.classList.add("cross");
        c = c+1;
        arr[Math.floor(keySelected/3)][keySelected%3]=1;
    }

    var vic = winner(arr,c)
    console.log(arr[Math.floor(keySelected/3)][keySelected%3])
    if(vic!=-1){
        if(vic%2==1){
            setTimeout(function(){
                alert("Circle wins");
            }, 100);
            var animation = bodymovin.loadAnimation({
                container: document.getElementById('play'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: 'https://assets5.lottiefiles.com/packages/lf20_obhph3sh.json' // lottie file path
              })
            }
        else
        setTimeout(function(){
            alert("Cross wins");
        }, 100);
        f = 1
    }
}

function winner(arr,c){
    if(arr[0][0]==arr[0][1] && arr[0][1]==arr[0][2]) return c;
    if(arr[1][0]==arr[1][1] && arr[1][0]==arr[1][2]) return c;
    if(arr[2][0]==arr[2][1] && arr[2][0]==arr[2][2]) return c;

    if(arr[0][0]==arr[1][0] && arr[1][0]==arr[2][0]) return c;
    if(arr[0][1]==arr[1][1] && arr[1][1]==arr[2][1]) return c;
    if(arr[0][2]==arr[1][2] && arr[0][2]== arr[2][2]) return c;

    if(arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2]) return c;
    if(arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0]) return c;
    return -1
}

document.querySelector("button").addEventListener("click",function(){
    arr = [[-1,-2,-3],[-4,-5,-6],[-7,-8,-9]];
    c=0;
    f = 0;
    for (var i=0;i<document.querySelectorAll(".grid").length;i++)
    {
        document.querySelectorAll(".grid")[i].classList.remove('circle');
        document.querySelectorAll(".grid")[i].classList.remove('cross');
    }    
})