const canvas = document.querySelector('canvas');
const c= canvas.getContext('2d');
function openNav() {
    if(document.getElementById("mySidebar").style.width === "250px"){
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginRight="0px";
    }
    else{
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginRight="250px";
    }
}
canvas.width= innerWidth;
canvas.height=innerHeight;
class Player{
    constructor(x,y,radius,color) {
        this.x=x;
        this.y=y;
        this.color=color;
        this.radius=radius;
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius, 0,Math.PI *2,false);
        c.fillStyle=this.color;
        c.fill();
    }
}
const x = canvas.width/2;
const y = canvas.height/2;
const player = new Player(x,y,30,"#676767FF")
player.draw();