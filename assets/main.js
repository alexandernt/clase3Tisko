let turnosDisponibles = 0;

while(turnosDisponibles <= 7) {
    let turnoUsuario = prompt("Ingrese su nombre");
    while (turnoUsuario === "alex") {
        alert("su turno ha sido cancelado");
        turnoUsuario = prompt("Ingrese su nombreee");
    }   
        alert("Su turno sigue pactado para hora y fecha")
        turnosDisponibles++;
        if(turnosDisponibles === 7) {
            console.log('Se acabon los turnos');
            alert("ATENCION!!!!!! No hay mas turnos!!!!");
            break;
        }
    console.log(turnoUsuario, turnosDisponibles);
};
