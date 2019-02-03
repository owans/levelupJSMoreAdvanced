//write a program to display 10 buttons and 10 anchor tags

(function () {
    var myButton = document.getElementById("button")[i]
    for (var i = 0; i <= 10; i++){
        var button = document.createElement("button")
        button.innerHTML = "Check Out " +i;
        myButton.appendChild(button);
    };
    
})();