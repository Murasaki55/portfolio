footer = document.querySelector('footer')

if (window.matchMedia("(max-width: 600px)").matches){
       footer.style.position = "static"
   }
else{
      footer.style.position = "absolute"
            }