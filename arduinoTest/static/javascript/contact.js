
var btnsubmit= document.querySelector("btn-accent")
var swalOverlay  = document.querySelector(".swal-overlay")



        document.getElementById("form").addEventListener("submit",function(){
            e.preventDefault();
           
            swalOverlay.style.opacity = 1
            swal("Thank You!!", "", "success");
            setTimeout(function(){  swalOverlay.style.opacity = 0; }, 3000);
           this.submit()
        })
        



