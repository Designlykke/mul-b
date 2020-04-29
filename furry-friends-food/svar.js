

function quizHandler(event) {
        //alert('Tak for dit svar!')
        event.preventDefault();
        //event.stopPropagation();
        document.getElementById('msg').innerHTML = 'Tak for dit svar'
        document.getElementById('quiz').reset();
  }

  (function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      // Looper for at stoppe submission ved invalid udfyldte felter
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();