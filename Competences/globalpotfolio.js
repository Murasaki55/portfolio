imagesfull = document.querySelectorAll(".full")
images = document.querySelectorAll(".image")
gimages = document.querySelectorAll(".grandimage")
simages = document.querySelectorAll(".sequenceimage")
dimages = document.querySelectorAll(".imageInDiv")
div = document.querySelector("#divfull")

images.forEach(img => {
    img.addEventListener('click',() => {
        imagesfull.forEach(imgf => {
            if (img.src == imgf.src){
                div.style.display = "block"
                imgf.style.display = "inline"
            }
        });
    })
});

gimages.forEach(img => {
    img.addEventListener('click',() => {
        imagesfull.forEach(imgf => {
            if (img.src == imgf.src){
                div.style.display = "block"
                imgf.style.display = "inline"
            }
        });
    })
});

simages.forEach(img => {
    img.addEventListener('click',() => {
        imagesfull.forEach(imgf => {
            if (img.src == imgf.src){
                div.style.display = "block"
                imgf.style.display = "inline"
            }
        });
    })
});

dimages.forEach(img => {
    img.addEventListener('click',() => {
        imagesfull.forEach(imgf => {
            if (img.src == imgf.src){
                div.style.display = "block"
                imgf.style.display = "inline"
            }
        });
    })
});

div.addEventListener("click", () => {
    imagesfull.forEach(imgf => {
        imgf.style.display = "none"
        div.style.display = "none"
    })
})