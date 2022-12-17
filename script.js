function openNav() {
    if(document.getElementById("mySidebar").style.width === "250px"){
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginRight="0px"
    }
    else{
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginRight="250px"
    }

}