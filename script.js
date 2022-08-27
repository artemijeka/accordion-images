(function () {
  document.addEventListener('DOMContentLoaded', function () {


    function accordionImages(indexActiveSlide = 0) {
      const slides = document.querySelectorAll('.slide')

      slides[indexActiveSlide].classList.add('--active')

      slides.forEach(function (slide) {
        slide.addEventListener('click', () => {

          clearActiveClasses()

          slide.classList.add('--active')
        })
      })

      function clearActiveClasses() {
        slides.forEach(function (slide) {
          slide.classList.remove('--active')
        });
      }
    }

    accordionImages(0)


  })
})()