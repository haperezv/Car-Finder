    const marca = document.querySelector('#marcas');
    const year = document.querySelector('#year');
    const minimum = document.querySelector("#minimo") ;
    const maximum = document.querySelector("#maximo") ;
    const doors = document.querySelector('#puertas');
    const transmission = document.querySelector('#transmision');
    const color = document.querySelector('#color'); 
    const max = new Date().getFullYear();
    const min = max - 10;

   const generarSelectYear = () => {

        for (let i = max; i > min; i--) {
           
            const option = document.createElement('option');
            option.value = i;
            option.innerHTML = i;
            year.appendChild(option);

        }
    }

    generarSelectYear();

    const datosBusqueda ={
        marca: '',
        year: ''
    }

    marca.addEventListener('change', function(e) {
    const marcaInput = e.target.value;
    datosBusqueda.marca = marcaInput;
    filtrarAutos();

    });

    year.addEventListener('change', function(e) {
        const yearInput = e.target.value;
        datosBusqueda.year = yearInput;
        filtrarAutos();

    })

    minimum.addEventListener('change', function(e) {
        const minInput = e.target.value;
        datosBusqueda.min = minInput;
        filtrarAutos();

    })

    maximum.addEventListener('change', function(e) {
        const maxInput = e.target.value;
        datosBusqueda.max = maxInput;
        filtrarAutos();
    })

    doors.addEventListener('change', function(e) {
        const doorsInput = e.target.value;
        datosBusqueda.doors = doorsInput;
        filtrarAutos();
    })

    transmission.addEventListener('change', function(e) {
        const transmissionInput = e.target.value;
        datosBusqueda.transmission = transmissionInput;
        filtrarAutos();
    })

    color.addEventListener('change', function(e) {
        const colorInput = e.target.value;
        datosBusqueda.color = colorInput;
        filtrarAutos();
    })

    const filtrarAutos = () => {
           const resultado = autos.filter(filtrarMarca) .filter(filtrarYear).filter(filtrarMin).filter(filtrarMax).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
           console.log(resultado);
            mostrarAutos(resultado);
    }

    const filtrarMarca = (auto) => {
        
        if (datosBusqueda.marca ) {
            return auto.marca === datosBusqueda.marca;
        }
        return auto;
     }

    const filtrarYear = (auto) => {
            if (datosBusqueda.year) {
                return auto.year === parseInt(datosBusqueda.year);
            }
            return auto;
    } 

    const filtrarMin = (auto) => {
        if (datosBusqueda.min) {   
            console.log(datosBusqueda.min);
            return auto.precio >= parseInt(datosBusqueda.min);
        }
        return auto;
    }

    const filtrarMax = (auto) => {
        if (datosBusqueda.max) {
            return auto.precio <= parseInt(datosBusqueda.max);
        }
        return auto;
    }

    const filtrarPuertas = (auto) => {
        if (datosBusqueda.doors) {
            return auto.puertas === parseInt(datosBusqueda.doors);
        }
        return auto;
    }

    const filtrarTransmision = (auto) => {
        if (datosBusqueda.transmission) {
            return auto.transmision === datosBusqueda.transmission;
        }
        return auto;
    }

    const filtrarColor = (auto) => {
        if (datosBusqueda.color) {
            return auto.color === datosBusqueda.color;
        }
        return auto;
    }


const mostrarAutos = (resultado) => {
    limpiarAutos();
    resultado.forEach(auto => {
        const autosDiv = document.querySelector('#resultado');
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `${auto.marca}- ${auto.modelo}- ${auto.year}- ${auto.precio}- ${auto.puertas}- ${auto.transmision}- ${auto.color} `;
        autosDiv.appendChild(autoHTML);

    })
}

const limpiarAutos = () => {
    const autosDiv = document.querySelector('#resultado');
    autosDiv.innerHTML = '';
}
