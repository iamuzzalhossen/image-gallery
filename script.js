let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

document.querySelector('.prev').addEventListener('click', function() {
    plusSlides(-1);
});
document.querySelector('.next').addEventListener('click', function() {
    plusSlides(1);
});

function currentSlide(n) {
  showSlides(slideIndex = n);
}

document.querySelectorAll('.demo').forEach(function(demo, index) {
    demo.addEventListener('click', function() {
        currentSlide(index + 1);
    });
});

function showSlides(n) {
  const slides = document.getElementsByClassName("slideshow");
  const thumbnails = document.getElementsByClassName("demo");
  const captionText = document.getElementById("caption");

    if (n > slides.length) {
    slideIndex = 1;
    } else if (n < 1) {
    slideIndex = slides.length;
    }

    Array.from(slides).forEach(slide => slide.style.display = 'none');
    Array.from(thumbnails).forEach(thumbnail => thumbnail.className = thumbnail.className.replace(' active', ''));

    slides[slideIndex - 1].style.display = 'block';
    thumbnails[slideIndex - 1].className += ' active';
    captionText.innerHTML = thumbnails[slideIndex - 1].alt;
}