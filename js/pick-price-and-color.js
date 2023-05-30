const motors = [];

// Xe 1
const motor0 = [];
motor0.push({ price: "254.990.000", imgURL: "../img/motor/pic-1-mau-1.jpg" });
motor0.push({ price: "500.990.000", imgURL: "../img/motor/pic-1-mau-2.jpg" });
// Xe 2
const motor1 = [];
motor1.push({ price: "20.850.000", imgURL: "../img/motor/pic-2-mau-1.png" });
motor1.push({ price: "22.350.000", imgURL: "../img/motor/pic-2-mau-2.png" });
motor1.push({ price: "22.350.000", imgURL: "../img/motor/pic-2-mau-3.png" });
motor1.push({ price: "19.250.000", imgURL: "../img/motor/pic-2-mau-4.png" });
motor1.push({ price: "19.250.000", imgURL: "../img/motor/pic-2-mau-5.png" });
// Xe 3
const motor2 = [];
motor2.push({ price: "720.990.000", imgURL: "../img/motor/pic-3-mau-1.png" });
// Xe 4
const motor3 = [];
motor3.push({ price: "52.490.000", imgURL: "../img/motor/pic-4-mau-1.jpg" });
motor3.push({ price: "55.990.000", imgURL: "../img/motor/pic-4-mau-2.jpg" });
motor3.push({ price: "56.490.000", imgURL: "../img/motor/pic-4-mau-3.jpg" });
motor3.push({ price: "51.990.000", imgURL: "../img/motor/pic-4-mau-4.jpg" });
// Xe 5
const motor4 = [];
motor4.push({ price: "150.990.000", imgURL: "../img/motor/pic-5-mau-1.png" });
motor4.push({ price: "150.990.000", imgURL: "../img/motor/pic-5-mau-2.png" });
motor4.push({ price: "151.990.000", imgURL: "../img/motor/pic-5-mau-3.png" });
motor4.push({ price: "152.490.000", imgURL: "../img/motor/pic-5-mau-4.png" });
// Xe 6
const motor5 = [];
motor5.push({ price: "1.050.500.000", imgURL: "../img/motor/pic-6-mau-1.jpg" });

motors.push(motor0);
motors.push(motor1);
motors.push(motor2);
motors.push(motor3);
motors.push(motor4);
motors.push(motor5);

function pickPriceAndColor(i, j) {
    document.getElementById("change-color").src = motors[i][j].imgURL;
    document.getElementById("change-price").innerHTML = motors[i][j].price + " VND";
}

document.addEventListener("DOMContentLoaded", () => {
    const firstContent = document.getElementsByClassName("color-name")[0];
    holdColor(firstContent);
});


function holdColor(color) {
    const colors = document.getElementsByClassName("color-name");
    Array.from(colors).forEach(c => {
        if (c === color) {
            c.classList.add("hold");
        } else {
            c.classList.remove("hold");
        }
    });
}