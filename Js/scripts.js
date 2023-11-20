const hamburguesa = document.querySelector('.hamburguesa i');
const navegacion = document.querySelector('.navegacion');
const tarjetas = document.querySelectorAll('.tarjeta img');
const ventana = document.querySelector('.ventana');

tarjetas.forEach(tarjeta =>{
    tarjeta.addEventListener('mouseover', function(){
    ventana.classList.add('ventana-activa');
    })
    tarjeta.addEventListener('mouseout', function(){
    ventana.classList.remove('ventana-activa')
    })
})

function toggleNav() {
    hamburguesa.classList.toggle('fa-bars');
    hamburguesa.classList.toggle('fa-times');
    navegacion.classList.toggle('navegacion-activa');
}

hamburguesa.addEventListener('click', function() {
    toggleNav();
});

function registrarPastelero(form){
    var nombre = form.nombre.value;
    var edad = form.edad.value;
    var empresa = form.empresa.value;
    var correo = form.correo.value;
    var telefono = form.telefono.value;
    var direccion = form.direccion.value;
    localStorage.setItem("nombrePastelero", nombre);
    localStorage.setItem("edadPastelero", edad);
    localStorage.setItem("empresaPastelero", empresa);
    localStorage.setItem("correoPastelero", correo);
    localStorage.setItem("telefonoPastelero", telefono);
    localStorage.setItem("direccionPastelero", direccion);
}

function registrarCliente(form){
    var nombre = form.nombre.value;    
    var telefono = form.telefono.value;
    var direccion = form.direccion.value;
    var correo = form.correo.value;
    localStorage.setItem("nombreCliente", nombre);
    localStorage.setItem("telefonoCliente", telefono);
    localStorage.setItem("direccionCliente", direccion);
    localStorage.setItem("correoCliente", correo);
}

function registrarDelivery(form){
    var nombre = form.nombre.value;
    var telefono = form.telefono.value;
    var direccion = form.direccion.value;
    var correo = form.correo.value;
    var placa = form.placa.value;
    localStorage.setItem("nombreDelivery", nombre);
    localStorage.setItem("telefonoDelivery", telefono);
    localStorage.setItem("direccionDelivery", direccion);
    localStorage.setItem("correoDelivery", correo);
    localStorage.setItem("placaDelivery", placa);
    alert ("Registrado: " + inputValue);
}

function verUltimoPastelero(){
    var nombre = localStorage.getItem("nombrePastelero");
    var edad = localStorage.getItem("edadPastelero");
    var empresa = localStorage.getItem("empresaPastelero");
    var correo = localStorage.getItem("correoPastelero");
    var telefono = localStorage.getItem("telefonoPastelero");
    var direccion = localStorage.getItem("direccionPastelero");
    alert("El ultimo usuario registrado fue: \nNombre: " + nombre + "\nEdad: " + edad + "\nEmpresa: " + empresa+ "\ncorreo: " + correo+ "\ntelefono: " + telefono+ "\ndireccion: " + direccion);
}

function verUltimoCliente(){
    var nombre = localStorage.getItem("nombreCliente");
    var telefono = localStorage.getItem("telefonoCliente");
    var direccion = localStorage.getItem("direccionCliente");
    var correo = localStorage.getItem("correoCliente");
    alert("El ultimo usuario registrado fue: \nNombre: " + nombre + "\nTelefono: " + telefono + "\nDireccion: " + direccion+ "\nCorreo: " + correo);
}

function verUltimoDelivery(){
    var nombre = localStorage.getItem("nombreDelivery");
    var telefono = localStorage.getItem("telefonoDelivery");
    var direccion = localStorage.getItem("direccionDelivery");
    var correo = localStorage.getItem("correoDelivery");
    var placa = localStorage.getItem("placaDelivery");
    alert("El ultimo usuario registrado fue: \nNombre: " + nombre + "\nTelefono: " + telefono + "\nDireccion: " + direccion + "\nCorreo: " + correo + "\nPlaca: " + placa);
}

