document.addEventListener('DOMContentLoaded', () => {
    
    const mainProductImage = document.getElementById('mainProductImage');
    const thumbnailsContainer = document.querySelector('.thumbnails');
    const thumbnailImages = document.querySelectorAll('.thumbnail-image'); 

    if (mainProductImage && thumbnailsContainer && thumbnailImages.length > 0) {
        thumbnailsContainer.addEventListener('click', (e) => {
            const clickedThumbnail = e.target.closest('.thumbnail'); 
            if (clickedThumbnail) {
               
                const currentActive = document.querySelector('.thumbnail.active-thumbnail');
                if (currentActive) {
                    currentActive.classList.remove('active-thumbnail');
                }

             
                clickedThumbnail.classList.add('active-thumbnail');

               
                const newImageSrc = clickedThumbnail.querySelector('.thumbnail-image').dataset.fullImage;
                
                
                mainProductImage.src = newImageSrc;
            }
        });
    }


});