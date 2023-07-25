// Archivo JavaScript (Countdown.js)
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const finalMessage = document.querySelector('.final-sms');

// Fecha a futuro
const countdownDate = new Date('Sep 22, 2023 00:00:00').getTime();

let interval = setInterval(function() {
    // Obtener fecha actual y milisegundos
    const now = new Date().getTime();

    // Obtener las distancias entre ambas fechas
    let distance = countdownDate - now;

    // Cálculos a días-horas-minutos-segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Escribimos resultados
    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = ('0' + seconds).slice(-2);

    // Cuando llegue a 0
    if (distance < 0) {
        clearInterval(interval);
        finalMessage.style.transform = 'translateY(0)';
    }
}, 1000);


