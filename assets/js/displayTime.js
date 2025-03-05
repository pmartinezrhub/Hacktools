function displayTime() {
    const clock = document.getElementById('actual_date');
    const currentTime = new Date();

    // Obtener el día de la semana en inglés
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[currentTime.getDay()];

    // Obtener el mes en inglés
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[currentTime.getMonth()];

    // Obtener el día del mes
    const dayOfMonth = currentTime.getDate();

    // Obtener la hora, minutos y segundos
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Formatear la hora y la fecha
    const timeString = `${dayOfWeek}, ${month} ${dayOfMonth}, ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Mostrar en el elemento con id 'actual_date'
    clock.textContent = timeString;
}

// Actualizar cada segundo
setInterval(displayTime, 1000);

// Llamar a la función inmediatamente para evitar un retraso inicial
displayTime();