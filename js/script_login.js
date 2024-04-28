document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Aquí puedes hacer una llamada AJAX para enviar los datos de inicio de sesión al servidor
    // Por ahora, simplemente comprobamos si los campos están vacíos
    if (username === "" || password === "") {
        document.getElementById("error-message").innerText = "Por favor, completa ambos campos.";
    } else {
        // Aquí puedes redirigir al usuario a la página de inicio o realizar otras acciones
        alert("¡Inicio de sesión exitoso!");
        // Por ejemplo, redirigir al usuario a otra página:
        // window.location.href = "home.html";
    }
});
