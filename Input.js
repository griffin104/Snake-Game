let start = document.getElementById('start');
    start.addEventListener("click", function () {
        document.getElementById("title").style.display = "none";
        document.getElementById("game").style.display = "block";
        doDraw.init();
    });

let settings = document.getElementById("settingsButton");
    settings.addEventListener("click", function () {
        document.getElementById("title").style.display = "none";
        document.getElementById("settings").style.display = "block";
    })

let back = document.getElementById("back");
    back.addEventListener("click", function() {
        document.getElementById("title").style.display = "block";
        document.getElementById("settings").style.display = "none";
    })

    document.onkeydown = function (event) {
        key = event.key;
        switch(key) {
            case "ArrowRight":
            if (direction != "left") {
                direction = "right";
            }
            break;

            case "ArrowUp":
            if (direction != "down") {
                direction = "up";
            }
            break;

            case "ArrowLeft":
            if (direction != "right") {
                direction = "left";
            }
            break;

            case "ArrowDown":
            if (direction != "up") {
                direction = "down";
            }
            break;
        }
    }