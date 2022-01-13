function trafficTimeframe() { 
    const children = document.getElementById("timeframes").children;

    for (let i=0; i<children.length; i++) {
        children[i].addEventListener("click", function(){
            for (let j=0; j<children.length; j++) {
                children[j].style.backgroundColor = ""
                children[j].style.color = ""
            }
            children[i].style.backgroundColor = "#81c98f"
            children[i].style.color = "white"
        }); 
    }
}

trafficTimeframe()