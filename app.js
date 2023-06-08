function showMore(){
    var x = document.getElementById("showingSerives");
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

     window.alert("Thank you " + fullName.value + " for booking with " + pro.value + "... A confirmation Email has been sent to: " + email.value)
    
    //validate time input
    var timeInput = document.getElementById("timeInput");
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
    }
  }

  function goto($hashtag){
    document.location = "index.html#" + $hashtag;
}