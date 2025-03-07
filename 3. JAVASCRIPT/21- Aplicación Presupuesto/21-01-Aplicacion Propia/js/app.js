const ingresos = [
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta coche', 1500)
];

const gastos = [
    new Gasto('Alquiler', 900),
    new Gasto('Ropa', 400)
];

let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarGastos();
}

let totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalGastos = () => {
    let totalGasto = 0;
    for (let gasto of gastos) {
        totalGasto += gasto.valor;
    }
    return totalGasto;
}

let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalGastos();
    let porcentajeGasto = totalGastos() / totalIngresos();  // Corrección aquí

    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeGasto);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('gastos').innerHTML = formatoMoneda(totalGastos());
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-ES', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 });
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US', { style: 'percent', minimumFractionDigits: 2 });
}

const cargarIngresos = () => {
    let ingresoHTML = '';
    for (let ingreso of ingresos) {
        ingresoHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresoHTML;
}

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
            <div class="elemento_eliminar">
                <button class='elemento_eliminar--btn'>
                    <ion-icon name="close-circle-outline" onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
                </button>
            </div>
        </div>
    </div>`;
    return ingresoHTML;
}

const eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}

const cargarGastos = () => {
    let gastosHTML = '';
    for (let gasto of gastos) {  // Declaración correcta de `gasto`
        gastosHTML += crearGastoHTML(gasto);  // Llamada a `crearGastoHTML` con `gasto` como parámetro
    }
    document.getElementById('lista-gasto').innerHTML = gastosHTML;
}

const crearGastoHTML = (gasto) => {
    let gastoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${gasto.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">- ${formatoMoneda(gasto.valor)}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje(gasto.valor / totalGastos())}</div>
            <div class="elemento_eliminar">
                <button class='elemento_eliminar--btn'>
                    <ion-icon name="close-circle-outline" onclick='eliminarGasto(${gasto.id})'></ion-icon>
                </button>
            </div>
        </div>
    </div>`;
    return gastoHTML;
}

const eliminarGasto = (id) => {
    let indiceEliminar = gastos.findIndex(gasto => gasto.id === id);
    gastos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarGastos();
}

const agregarDato = () => {
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];
    if (descripcion.value !== '' && valor.value !== '') {
        if (tipo.value === 'ingreso') {
            ingresos.push(new Ingreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarIngresos();  // Corregido para cargar ingresos
        } else if (tipo.value === 'gasto') {
            gastos.push(new Gasto(descripcion.value, +valor.value));
            cargarCabecero();
            cargarGastos();
        }
    }
}
