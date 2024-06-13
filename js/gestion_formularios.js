const ingresar_solicitud_endpoint = "http://127.0.0.1:8000/admin/ingresar_solicitud"

function enviar_solicitud(){
    var formData = new FormData(document.getElementById("formulario_solicitud"));
    var formDataJson = {};
    formData.forEach(function(value, key){
        var input = document.querySelector('[name="' + key + '"]');
        if(input.type === 'number'){
            formDataJson[key] = Number(value);
        } else{
            formDataJson[key] = value;
        }
    });
    token = localStorage.getItem('access_token')
    fetch(ingresar_solicitud_endpoint, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json', // Indica que estás enviando JSON en el cuerpo de la solicitud
            'Accept': 'application/json',
            'Origin': 'http://127.0.0.1:5500'
        },
        body: JSON.stringify(formDataJson) // Convierte el objeto a JSON
    })
    .then(response => {
        if (!response.ok) {
            confirm("No se pudo enviar la solicitud")
        }
        document.getElementById("formulario_solicitud").reset();
        return response.json(); // Parse JSON response
    })
    .then(data => {
        console.log(data); // Puedes hacer algo con la respuesta, si es necesario
    })
    .catch(error => {
        confirm("No se pudo enviar la solicitud")
    });
}