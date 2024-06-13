const obtener_solicitudes_endpoint = "http://127.0.0.1:8000/admin/obtener_solicitudes"


window.onload = function(){
    obtener_solicitudes()
}

function obtener_solicitudes(){
    token = localStorage.getItem('access_token')
    fetch(obtener_solicitudes_endpoint, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}` 
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        return response.json(); // Parse JSON response
    })
    .then(data => {
        console.log(data)
        llenar_tabla_solicitues(data)
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        confirm("No se pudo obtener los datos")
    });
}

function llenar_tabla_solicitues(datos){
    const tbody = document.getElementById("tabla_solicitudes");
    // Limpiar filas existentes
    tbody.innerHTML = "";
    
    // Iterar sobre los datos y agregar filas a la tabla
    datos.forEach(solicitud => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = solicitud.id;
        row.insertCell(1).textContent = solicitud.monto;
        row.insertCell(2).textContent = solicitud.plazo;
        row.insertCell(3).textContent = solicitud.destino;
        row.insertCell(4).textContent = solicitud.identificacion_cliente;
        row.insertCell(5).textContent = solicitud.identificacion_garante;
        row.insertCell(6).textContent = solicitud.estado;
    });
}
