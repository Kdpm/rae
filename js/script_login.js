const login_endpoint = "http://127.0.0.1:8000/admin/login"
const conexiones = "http://127.0.0.1:8000/admin/conexiones_activas"

async function login(){
    try {
        const response = await fetch(login_endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
          }),
        });
    
        if (!response.ok) {
          confirm("No se pudo logear correctamente")
        }
        const data = await response.json();
        const token = data.acces_token;
        localStorage.setItem('access_token', token)
        window.location.href = 'inicio_admin.html'
      } catch (error) { 
        confirm("No se pudo logear correctamente")
      }
}




