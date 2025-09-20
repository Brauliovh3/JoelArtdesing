// Funcionalidad para la galería de imágenes
document.addEventListener('DOMContentLoaded', function() {
    // Galería de imágenes
    const galleryImages = document.querySelectorAll('.gallery-image');
    const prevBtn = document.querySelector('.gallery-btn.prev');
    const nextBtn = document.querySelector('.gallery-btn.next');
    let currentImage = 0;

    // Función para mostrar imagen
    function showImage(index) {
        galleryImages.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    // Botón anterior
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentImage = currentImage === 0 ? galleryImages.length - 1 : currentImage - 1;
            showImage(currentImage);
        });
    }

    // Botón siguiente
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentImage = currentImage === galleryImages.length - 1 ? 0 : currentImage + 1;
            showImage(currentImage);
        });
    }

    // Auto-play de la galería cada 4 segundos
    setInterval(() => {
        if (galleryImages.length > 0) {
            currentImage = currentImage === galleryImages.length - 1 ? 0 : currentImage + 1;
            showImage(currentImage);
        }
    }, 4000);

    // Función para alternar entre video y galería
    window.toggleVideoGallery = function() {
        const video = document.querySelector('video');
        const gallery = document.querySelector('.image-gallery');
        
        if (video && gallery) {
            if (video.style.display === 'none') {
                video.style.display = 'block';
                gallery.style.display = 'none';
            } else {
                video.style.display = 'none';
                gallery.style.display = 'block';
            }
        }
    };

    // Detectar si el video local no se puede cargar
    const video = document.querySelector('video');
    if (video) {
        video.addEventListener('error', function() {
            console.log('Video local no encontrado, mostrando galería...');
            const gallery = document.querySelector('.image-gallery');
            if (gallery) {
                video.style.display = 'none';
                gallery.style.display = 'block';
            }
        });
    }
});

// Función para el botón CTA
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
        });
    }
});