console.log("hola des del doc js");

const mostrarReloj = ()=>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;
    
    const meses = ['Ene', 'Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mier', 'Jue','Vie','Sab',];
    const años = ['2023', '2024', '2025'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let ano = fecha.getFullYear();
    let fechaTexto = `${diaSemana}, ${dia} ${mes}, ${ano}`;
    document.getElementById('fecha').innerHTML=fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
};

const formatoHora = (hora)=>{
    if(hora < 10)
        hora = '0' + hora;
    return hora;
};

setInterval(mostrarReloj, 1000);