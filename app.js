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
}

function bookingSubmit() {
    fullName = document.getElementById('username')
    email = document.getElementById('userEmail')
    pro = document.getElementById('selectedPro')
    time = document.getElementById('timeInput')
    date = document.getElementById('dateInput')
    service = document.getElementById('selectedService')
    pass = document.getElementById('Password')

    if (validate(email, pro, time, date, service, fullName, pass)) {
        window.alert("Thank you " + fullName.value + " for booking with " + pro.value + " at " + time.value + " on " + date.value  + "... A confirmation Email has been sent to: " + email.value)
    }
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
    if (email.value == "") {
      alert("L'espace d'Email doit être remplie");
      return false;
    }
    if (pro.value == "") {
        alert("Un coiffeur doit etre choisi");
        return false;
      }
    if (time.value == "") {
        alert("Un temps doit etre choisi");
        return false;
    }
    if (date.value == "") {
        alert("Une date doit etre choisie");
        return false;
    }
    if (service.value == "") {
        alert("Une service doit etre choisie");
        return false;
    }
    if (fullname.value == "") {
        alert("L'espace de Nom et Prenom doit etre remplie");
        return false;
    }
    
    if (pass.value == "") {
        alert("L'espace du mot de passe doit etre remplie");
        return false;
    }
    
    return true;

}

