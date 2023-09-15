AFRAME.registerComponent("markerhandler", {
    init: async function () {
         this.el.addEventListener("markerFound", () => {
              //console.log("marker is found")
              this.handleMarkerFound();
         })
         this.el.addEventListener("markerLost", () => {
              //console.log("marker is lost")
              this.handleMarkerLost();

         })

    },
    handleMarkerFound: function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display="flex";

        var orderButton = document.getElementById("order-button");
        var orderSummeryButton =document.getElementById("order-summary-button")

        orderButton.addEventListener("click",()=>{
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                tittle:"thanks for order !",
                text:" ",
                timer:2000,
                buttons:false
            })
        })
        orderSummeryButton.addEventListener("click",()=>{
            swal({
                icon:"warning",
                tittle:"Order Summary",
                text:"Work in progress ",
               
            })   
        })
    }
    

});
