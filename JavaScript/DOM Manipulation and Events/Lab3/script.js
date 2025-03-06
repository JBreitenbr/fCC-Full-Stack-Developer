const galleryItems = document.querySelectorAll(".gallery-item");
const lightBox = document.querySelector(".lightbox");
const lightBoxImage = document.getElementById("lightbox-image");
const closeBtn=document.getElementById("close");

const itemClick = (event) => {
  const imageThumbnail = event.target.src;
    lightBox.style.display = "flex";
      const image = imageThumbnail.replace("-thumbnail", "");
        lightBoxImage.src = image;
          event.stopPropagation();
          };

          galleryItems.forEach((galleryItem) => {
            galleryItem.addEventListener("click", itemClick);
            });

            closeBtn.addEventListener("click", (e) => {
              if (lightBox.style.display === "flex" && e.target !== lightBoxImage) {
                  lightBox.style.display = "none";
                    }
                    });
lightBox.addEventListener("click",(e)=>{
  if(lightBox.style.display!=="none"){
    lightBox.style.display="none";
  }
})
