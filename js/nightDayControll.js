function checkTime() {
    var hour = new Date().getHours();


    if (7 < hour && hour < 19) {
        document.getElementById('body').style.backgroundColor = "white";
    } else {
        document.getElementById('body').style.backgroundColor = "black";
    }
}