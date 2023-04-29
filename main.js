//Sweet Alert
const alert = document.getElementById("boton");

alert.addEventListener ("click", ()=>{
    Swal.fire ("Bienvenido Usuario");
})

const personalizado = document.getElementById("botonDos");

personalizado.addEventListener ("click", ()=>{
    Swal.fire ({
        title: "Bienvenido Usuario",
        text:  "Ingrese sus datos para inciar sesión",
        imageUrl: "http://placekitten.com/200/300",
        icon: "info",
        confirmButtonText: "Aceptar",
        background: "darksalmon",
        backdrop: "black",
        
        })
})

const logueo = document.getElementById ("botonLogin");

const usuarioAutorizado = "Messi";
const passwordAutorizado = "123";

logueo.addEventListener ("click", ()=>{
    Swal.fire ({
        title: "Login",
        html: ` <input type="text" id="usuario" class="swal2-input" placeholder="usuario">
                <input type="text" id="password" class="swal2-input" placeholder="password">`,
        confirmButtonText: "Enviar",
        showCancelButton: true,
        cancelButtonText: "Salir",
    }) .then((result) =>{
        if(result.isConfirmed){
            const usuario= document.getElementById("usuario").value;
            const password = document.getElementById("password").value;
            Swal.fire({
                title: "Sus datos no coinciden",
                icon: "error",
                confirmButtonText: "Aceptar",
            })
            if(usuario === usuarioAutorizado && password === passwordAutorizado){
                 window.location.href = "login.html";
             }
        }
    })
})



