function showMore(hiddenBlock){
    var x = document.getElementById(hiddenBlock);
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
 }

 function btnClick() {
    input = document.getElementById("input")
    console.dir(input)
    console.log(input)
    window.alert("You said : " + input.value)
}

function bookPro(proName) {
    elem = document.getElementById('selectedPro')
    console.dir(elem)
    for (i = 0; i < elem.options.length; i++) {
        if (elem.options[i].value == proName) {
            elem.options[i].selected = true
        }
    }
    goto('booking')
    //window.alert('Coiffeur a été choisi avec succès');

    var alertContainerS = document.getElementById('alertContainerS');
    var message = "Coiffeur a été choisi avec succès";
    alertContainerS.textContent = message;
    alertContainerS.style.display = 'block';
    setTimeout(function() {
        alertContainerS.style.display = 'none';
      }, 2000);
}

function bookService(serviceName) {
    
    elem = document.getElementById('selectedService')
    console.dir(elem)
    for (i = 0; i < elem.options.length; i++) {
        if (elem.options[i].value == serviceName) {
            elem.options[i].selected = true
        }
    }
    goto('booking')
    //window.alert('Service a été choisi avec succès');

    var alertContainerS = document.getElementById('alertContainerS');
    var message = "Service a été choisi avec succès";
    alertContainerS.textContent = message;
    alertContainerS.style.display = 'block';
    setTimeout(function() {
        alertContainerS.style.display = 'none';
      }, 2000);
}

function bookingSubmit() {
    fullName = document.getElementById('username')
    email = document.getElementById('userEmail')
    pro = document.getElementById('selectedPro')
    time = document.getElementById('timeInput')
    date = document.getElementById('dateInput')
    service = document.getElementById('selectedService')
    pass = document.getElementById('Password')

    var alertContainerS = document.getElementById('alertContainerS');
    //alertContainer.style.display = 'block';
    //alertContainer.style.display = 'none';
      

    if (validate(email, pro, time, date, service, fullName, pass)) {
        var message = "Thank you " + fullName.value + " for booking with " + pro.value + " at " + time.value + " on " + date.value  + "... A confirmation Email has been sent to: " + email.value;
        alertContainerS.textContent = message;
        alertContainerS.style.display = 'block';
        setTimeout(function() {
            alertContainerS.style.display = 'none';
          }, 3000);
    }
    //alertContainer.style.display = 'none';
    //validate time input
    /*var timeInput = document.getElementById("timeInput");
    var dateInput = document.getElementById("dateInput");
    var timeValue = timeInput.value;
    var dateInput = dateInput.value;
    var enteredTime = new Date(dateInput+ " " + timeValue); // Assuming a fixed date for comparison
    
    var startTime = new Date(dateInput+" 08:00"); // Define your schedule start time
    var endTime = new Date(dateInput+" 18:00"); // Define your schedule end time
    //console.log(startTime + " "+ endTime)
    if (enteredTime >= startTime && enteredTime <= endTime) {
      timeInput.setCustomValidity(""); // Time is within schedule
    } else {
      timeInput.setCustomValidity("Please enter a time between 08:00 and 18:00"); // Time is outside schedule
    }*/

    //modal display
    /*modal = document.getElementById('confirmationModal')
    modalText = document.getElementById('modaltext')
    modalText.value = "Thank you " + fullName.value + " for booking with " + pro.value + "... A confirmation Email has been sent to: " + email.value
    modal.style.display = "modal" */
    
  }

  function goto($hashtag){
    document.location = "index.html#" + $hashtag;
}

function validate(email, pro, time, date, service, fullname, pass){
    var alertContainerF = document.getElementById('alertContainerF');
    if (email.value == "") {
      var message = "L'espace d'Email doit être remplie";
      alertContainerF.textContent = message;
      alertContainerF.style.display = 'block';
      setTimeout(function() {
        alertContainerF.style.display = 'none';
        }, 2000);
      return false;
    }
    if (pass.value == "") {
        var message = "L'espace du mot de passe doit etre remplie";
        alertContainerF.textContent = message;
        alertContainerF.style.display = 'block';
        setTimeout(function() {
            alertContainerF.style.display = 'none';
          }, 2000);
        return false;
    }
    if (fullname.value == "") {
        var message = "L'espace de Nom et Prenom doit etre remplie";
        alertContainerF.textContent = message;
        alertContainerF.style.display = 'block';
        setTimeout(function() {
            alertContainerF.style.display = 'none';
          }, 2000);
        return false;
    }
    if (pro.value == "") {
        var message = "Un coiffeur doit etre choisi";
        alertContainerF.textContent = message;
        alertContainerF.style.display = 'block';
        setTimeout(function() {
            alertContainer.style.display = 'none';
          }, 2000);
        return false;
      }

    if (service.value == "") {
        var message = "Une service doit etre choisie";
        alertContainerF.textContent = message;
        alertContainerF.style.display = 'block';
        setTimeout(function() {
            alertContainerF.style.display = 'none';
          }, 2000);
        return false;
    }
    if (time.value == "") {
        var message = "Un temps doit etre choisi";
        alertContainerF.textContent = message;
        alertContainerF.style.display = 'block';
        setTimeout(function() {
            alertContainerF.style.display = 'none';
          }, 2000);
        return false;
    }
    if (date.value == "") {
        var message = "Une date doit etre choisie";
        alertContainerF.textContent = message;
        alertContainerF.style.display = 'block';
        setTimeout(function() {
            alertContainerF.style.display = 'none';
          }, 2000);
        return false;
    }
    

    
    return true;

}

document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.rating .star');
  
    stars.forEach(function(star, index) {
      star.addEventListener('click', function() {
        stars.forEach(function(s, i) {
          if (i <= index) {
            s.classList.toggle('checked');
          }
        });
      });
    });
  });
  
  
  
  
  
  
  
  
