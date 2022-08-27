(function () {
  document.addEventListener('DOMContentLoaded', function () {



    const slides = document.querySelectorAll('.slide')
    console.log(slides)

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



  })
})()