let formulario = document.getElementById("formulario");

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    //1. Validación del número de la tarjeta de crédito
    let numeroTarjeta = formulario.inputCard;
    let regexTarjeta = /^[0-9]{12,16}$/;
    let errorTarjeta = {};

    if (numeroTarjeta.value === '') {
        numeroTarjeta.classList.add('is-invalid');
        errorTarjeta['numeroTarjeta'] = 'Debe ingresar solo números';

    } else if (!regexTarjeta.test(numeroTarjeta.value)) {
        numeroTarjeta.classList.add('is-invalid');
        errorTarjeta['numeroTarjeta'] = 'Debe ingresar entre 12 y 16 dígitos';
    } else {
        numeroTarjeta.classList.remove('is-invalid');
        numeroTarjeta.classList.add('is-valid');
        errorTarjeta['numeroTarjeta'] = '¡Correcto!';
    }

    //LOS ERRORES del campo de la tarjeta de crédito
    if (errorTarjeta['numeroTarjeta']) {
        console.log(errorTarjeta);
        if (errorTarjeta['numeroTarjeta']) negativeCardFeedback.innerHTML = errorTarjeta['numeroTarjeta'];
        if (errorTarjeta['numeroTarjeta']) positiveCardFeedback.innerHTML = errorTarjeta['numeroTarjeta'];

    } else {
        evento.target.submit();

    }

    //2. Validación de los números de seguridad de la tarjeta de crédito
    let seguridadNumeros = formulario.CVC;
    let regexCVC = /^[0-9]{3}$/;

    if (seguridadNumeros.value === '') {
        seguridadNumeros.classList.add('is-invalid');
        errorTarjeta['seguridadNumeros'] = 'Debe ingresar solo números';

    } else if (!regexCVC.test(seguridadNumeros.value)) {
        seguridadNumeros.classList.add('is-invalid');
        errorTarjeta['seguridadNumeros'] = 'Debe ingresar 3 dígitos';
    } else {
        seguridadNumeros.classList.remove('is-invalid');
        seguridadNumeros.classList.add('is-valid');
        errorTarjeta['seguridadNumeros'] = '¡Correcto!';
    }

    //LOS ERRORES del campo de los números de seguridad de la tarjeta de crédito
    if (errorTarjeta['seguridadNumeros']) {
        console.log(errorTarjeta);
        if (errorTarjeta['seguridadNumeros']) negativeCVCFeedback.innerHTML = errorTarjeta['seguridadNumeros'];
        if (errorTarjeta['seguridadNumeros']) positiveCVCFeedback.innerHTML = errorTarjeta['seguridadNumeros'];

    } else {
        evento.target.submit();
       
    }

    //3. Validación del monto
    let monto = formulario.monto;
    let regexMonto = /^[0-9]{3,6}$/;

    if (monto.value === '') {
        monto.classList.add('is-invalid');
        errorTarjeta['monto'] = 'Debe ingresar solo números';

    } else if (!regexMonto.test(monto.value)) {
        monto.classList.add('is-invalid');
        errorTarjeta['monto'] = 'Debe ingresar un valor entre $1.000 y $999.999 pesos (sin puntos y sin el signo $)';
    } else {
        monto.classList.remove('is-invalid');
        monto.classList.add('is-valid');
        errorTarjeta['monto'] = '¡Correcto!';
    }

    //LOS ERRORES del campo de los montos comprados
    if (errorTarjeta['monto']) {
        console.log(errorTarjeta);
        if (errorTarjeta['monto']) negativeMontoFeedback.innerHTML = errorTarjeta['monto'];
        if (errorTarjeta['monto']) positiveMontoFeedback.innerHTML = errorTarjeta['monto'];
    } else {
        evento.target.submit();
        
    }


    //4. Validación del Nombre
    let nombre = formulario.first;
    let regexNombre = /^[a-zA-Z]{2,20}$/;

    if (nombre.value === '') {
        nombre.classList.add('is-invalid');
        errorTarjeta['nombre'] = 'Debe ingresar su nombre';

    } else if (!regexNombre.test(nombre.value)) {
        nombre.classList.add('is-invalid');
        errorTarjeta['nombre'] = 'Debe ingresar entre 2 y 20 caracteres';
    } else {
        nombre.classList.remove('is-invalid');
        nombre.classList.add('is-valid');
        errorTarjeta['nombre'] = '¡Correcto!';
    }


    //LOS ERRORES del campo del nombre
    if (errorTarjeta['nombre']) {
        console.log(errorTarjeta);
        if (errorTarjeta['nombre']) negativeNombreFeedback.innerHTML = errorTarjeta['nombre'];
        if (errorTarjeta['nombre']) positiveNombreFeedback.innerHTML = errorTarjeta['nombre'];
    } else {
        evento.target.submit();
    }

    //5. Validación del Apellido
    let apellido = formulario.last;
    let regexApellido = /^[a-zA-Z]{2,30}$/;

    if (apellido.value === '') {
        apellido.classList.add('is-invalid');
        errorTarjeta['apellido'] = 'Debe ingresar su apellido';

    } else if (!regexApellido.test(apellido.value)) {
        apellido.classList.add('is-invalid');
        errorTarjeta['apellido'] = 'Debe ingresar entre 2 y 30 caracteres';
    } else {
        apellido.classList.remove('is-invalid');
        apellido.classList.add('is-valid');
        errorTarjeta['apellido'] = '¡Correcto!';
    }

    //LOS ERRORES del campo del apellido
    if (errorTarjeta['apellido']) {
        console.log(errorTarjeta);
        if (errorTarjeta['apellido']) negativeApellidoFeedback.innerHTML = errorTarjeta['apellido'];
        if (errorTarjeta['apellido']) positiveApellidoFeedback.innerHTML = errorTarjeta['apellido'];
    } else {
        evento.target.submit();
    }


    //6. Validación de la ciudad
    let ciudad = formulario.City;
    let regexCiudad = /^[a-zA-Z]{2,10}$/;

    if (ciudad.value === '') {
        ciudad.classList.add('is-invalid');
        errorTarjeta['ciudad'] = 'Debe ingresar su ciudad';

    } else if (!regexCiudad.test(ciudad.value)) {
        ciudad.classList.add('is-invalid');
        errorTarjeta['ciudad'] = 'Debe ingresar entre 2 y 10 caracteres';
    } else {
        ciudad.classList.remove('is-invalid');
        ciudad.classList.add('is-valid');
        errorTarjeta['ciudad'] = '¡Correcto!';
    }

    //LOS ERRORES del campo de la ciudad
    if (errorTarjeta['ciudad']) {
        console.log(errorTarjeta);
        if (errorTarjeta['ciudad']) negativeCiudadFeedback.innerHTML = errorTarjeta['ciudad'];
        if (errorTarjeta['ciudad']) positiveCiudadFeedback.innerHTML = errorTarjeta['ciudad'];
    } else {
        evento.target.submit();
    }

    //7. Validación del Estado o Región
    let estado = formulario.inputState;
    let regexEstado = /^[a-zA-Z]{2,10}$/;

    if (!regexEstado.test(estado.value)) {
        estado.classList.add('is-invalid');
        errorTarjeta['estado'] = 'Debes elegir un estado';
    } else {
        estado.classList.remove('is-invalid');
        estado.classList.add('is-valid');
        errorTarjeta['estado'] = '¡Correcto!';
    }

    //LOS ERRORES del campo del estado
    if (errorTarjeta['estado']) {
        console.log(errorTarjeta);
        if (errorTarjeta['estado']) negativeEstadoFeedback.innerHTML = errorTarjeta['estado'];
        if (errorTarjeta['estado']) positiveEstadoFeedback.innerHTML = errorTarjeta['estado'];
    } else {
        evento.target.submit();
    }


    //8. Validación del código postal
    let postalCode = formulario.PostalCode;
    let regexPostalCode = /^[0-9]{7}$/;

    if (postalCode.value === '') {
        postalCode.classList.add('is-invalid');
        errorTarjeta['postalCode'] = 'Debe ingresar solo números';

    } else if (!regexPostalCode.test(postalCode.value)) {
        postalCode.classList.add('is-invalid');
        errorTarjeta['postalCode'] = 'Debe ingresar 7 dígitos';
    } else {
        postalCode.classList.remove('is-invalid');
        postalCode.classList.add('is-valid');
        errorTarjeta['postalCode'] = '¡Correcto!';
    }

    //LOS ERRORES del campo del código postal
    if (errorTarjeta['postalCode']) {
        console.log(errorTarjeta);
        if (errorTarjeta['postalCode']) negativeCPFeedback.innerHTML = errorTarjeta['postalCode'];
        if (errorTarjeta['postalCode']) positiveCPFeedback.innerHTML = errorTarjeta['postalCode'];
    } else {
        evento.target.submit();
    }


    //9. Validación del campo de comentarios
    let comentarios = formulario.floatingTextarea2;
    let regexComentarios = /^[0-9A-Za-z]{0,50}$/;

    if (comentarios.value === '') {
        comentarios.classList.add('is-invalid');
        errorTarjeta['comentarios'] = 'Debe ingresar un comentario';

    } else if (!regexComentarios.test(comentarios.value)) {
        comentarios.classList.add('is-invalid');
        errorTarjeta['comentarios'] = 'Debe ingresar un comentario de máximo 50 caracteres.';
    } else {
        comentarios.classList.remove('is-invalid');
        comentarios.classList.add('is-valid');
        errorTarjeta['comentarios'] = '¡Correcto!';
    }

    //LOS ERRORES del campo de comentarios
    if (errorTarjeta['comentarios']) {
        console.log(errorTarjeta);
        if (errorTarjeta['comentarios']) negativeComentariosFeedback.innerHTML = errorTarjeta['comentarios'];
        if (errorTarjeta['comentarios']) positiveComentariosFeedback.innerHTML = errorTarjeta['comentarios'];
    } else {
        evento.target.submit();
    }

    //Validación radio-button

    let checkbox1 = formulario.inlineRadio1;
    let checkbox2 = formulario.inlineRadio2;
    let checkbox3 = formulario.inlineRadio3;
    let checkbox4 = formulario.inlineRadio4;
    //let checkbox = formulario.checkbox;


    if (checkbox1.checked || checkbox2.checked || checkbox3.checked || checkbox4.checked) {
        //checkbox.classList.add('is-valid');
        errorTarjeta['radio-button'] = '¡Correcto!';

    } else {
        checkbox1.classList.add('is-invalid');
        checkbox2.classList.add('is-invalid');
        checkbox3.classList.add('is-invalid');
        checkbox4.classList.add('is-invalid');
        errorTarjeta['radio-button'] = "Debe seleccionar una opción válida";
    }

    //LOS ERRORES del radio button
    if (errorTarjeta['radio-button']) {
        console.log(errorTarjeta);
        if (errorTarjeta['radio-button']) negativeCheckFeedback.innerHTML = errorTarjeta['radio-button'];
        if (errorTarjeta['radio-button']) positiveCheckFeedback.innerHTML = errorTarjeta['radio-button'];
    } else {
        evento.target.submit();
    }

})


