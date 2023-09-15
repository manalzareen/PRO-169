AFRAME.registerComponent("create-buttons",{
    init:function(){
        var b1 =document.createElement("button")
        b1.innerHTML="ORDER NOW"
        b1.setAttribute("id","order-button")
        b1.setAttribute("class","o-b")

        var b2 =document.createElement("button")
        b2.innerHTML="ORDER SUMMERY"
        b2.setAttribute("id","order-summary-button")
        b2.setAttribute("class","o-b")

        var buttondiv =document.getElementById("button-div")
        buttondiv.appendChild(b1)
        buttondiv.appendChild(b2)
    }
})