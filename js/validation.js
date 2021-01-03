function contactUsValidate(event) {
    var nameRegEx = "^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$";
    var name = document.getElementById("name").value;

    console.log(name.match(nameRegEx));
    if (!name.match(nameRegEx)) {
        window.alert("Name must contain only letters!!");
        stopSubmiting(event);

        // return false;
    }

}

function stopSubmiting(event) {
    event.stopPropagation();
    event.preventDefault();
}

function validatePayment(event) {
    var cardNumbers = document.getElementById("card").value.split("");
    var sum = 0;
    for (var i = 0; i < cardNumbers.length; i++) {
        if (i % 2 == 0) {
            cardNumbers[i] *= 2;
            if (cardNumbers[i] > 9) {
                cardNumbers[i] -= 9;
            }
        }


        sum += parseInt(cardNumbers[i]);
    }
    // console.log(sum);
    if (sum % 10 != 0) {
        window.alert("The card you entered is not a valid card please  try again!");
    }
    contactUsValidate(event);

    var number = document.getElementById("tel").value;
    var numberRegex = "^[0-9]+$";
    if (!number.match(numberRegex)) {
        window.alert("Please give a valid number");
    }

    stopSubmiting(event);
}