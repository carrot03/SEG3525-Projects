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
}

function bookService(serviceName) {
    elem = document.getElementById('selectedService')
    console.dir(elem)
    for (i = 0; i < elem.options.length; i++) {
        if (elem.options[i].value == serviceName) {
            elem.options[i].selected = true
        }
    }
}

function bookingSubmit() {
    fullName = document.getElementById('username')
    email = document.getElementById('userEmail')
    pro = document.getElementById('selectedPro')

    modal = document.getElementById('confirmationModal')
    modalText = document.getElementById('modalText')
    modalText.value = "Thank you " + fullName.value + " for booking with " + pro.value + "... A confirmation Email has been sent to: " + email.value
    modal.role = 'dialog'
    modal.style.display = "block"
        //get Service
        // get Date & time

    // window.alert("Thank you " + fullName.value + " for booking with " + pro.value + "... A confirmation Email has been sent to: " + email.value)

}