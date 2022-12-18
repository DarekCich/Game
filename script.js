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
canvas.width = innerWidth;
canvas.height= innerHeight;
let x = canvas.width/2;
let y = canvas.height/2;
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
    update(){
        this.x=x;
        this.y=y;
    }
}
class Projectile{
    constructor(x,y,radius,color,velocity){
        this.x = x;
        this.y=y;
        this.radius=radius;
        this.color=color;
        this.velocity=velocity;
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius, 0,Math.PI *2,false);
        c.fillStyle=this.color;
        c.fill();
    }
    update(){
        this.x=this.x+this.velocity.x;
        this.y=this.y+this.velocity.y;
        this.draw();
    }

}

const player = new Player(x,y,30,"#676767FF")

const projectiles=[];
window.addEventListener('click',(event)=>{

    const angle = Math.atan2(event.clientY-y,event.clientX-x);
    const velocity={
        x:Math.cos(angle)*2,
        y:Math.sin(angle)*2
    }
    projectiles.push(new Projectile(x,y,5,'red',velocity))

})
window.addEventListener('resize',()=>{
    canvas.width = innerWidth;
    canvas.height= innerHeight;
    x = canvas.width/2;
    y = canvas.height/2;
    player.update();
})
function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    player.draw();
    projectiles.forEach((projectile)=>projectile.update())
}

animate();