


document.getElementById("login-btn").addEventListener("click",function (event) {
    event.preventDefault();
    const acountNumber= document.getElementById("Acount-number").value;
    const pin = document.getElementById("pin").value;
    if (acountNumber.length===11) {
        console.log("yess")
       
        if (pin.length===4) {
            console.log("yess")
        }
            else {
                console.log("need valid pin")
            }
        }
       
        else {
            console.log("need valid acount number")
        }
    
})