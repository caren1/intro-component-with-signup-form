

  var submitBtn = document.querySelector('.btn-primary');
  submitBtn.addEventListener('click', () => {
      var inputs = document.querySelectorAll('input');

    var counter = 0;
    inputs.forEach(element => {
          var elementValue = element.value;
          var errorIcons = document.querySelectorAll('.icon-error');
          var errorTexts = document.querySelectorAll('.error-text');

          if(!elementValue){
              element.classList.toggle('error');
              element.classList.toggle('marginfix');
              errorIcons[counter].classList.toggle('block');
              errorTexts[counter].classList.toggle('block');

              counter++;

              
            //   element.nextSibling.style.display = "block";
          }
      });
  });