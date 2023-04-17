//Funcion para agregar alumno
function agregarAlumno() {
    const matricula = document.getElementById('matricula').value;
    const nombre = document.getElementById('nombre').value;
    const domicilio = document.getElementById('domicilio').value;
    const sexo = document.getElementById('sexo').value;
    const especialida = document.getElementById('especialidad').value;
    if(matricula){
        const alumno = {
            matricula : matricula,
            nombre : nombre,
            domicilio : domicilio, 
            sexo : sexo,
            especialidad : especialida
        }
        axios.post('/insertar', alumno)
        .then((response) => {
            console.log(response.data);
            alert('Se agregó correctamente');
            const res = document.getElementById('tabla');
            res.innerHTML = "<tr><th>ID</th><th>Matricula</th><th>Nombre</th><th>Domicilio</th><th>Sexo</th><th>Especialidad</th></tr>"
            mostrarTodos();
        })
        .catch((error) => {
            console.log(error);
            alert('Surgió un error');
        });
    }
  }


 function mostrarTodos(){
    axios.get('/')
    .then((res)=>{
    mostrar(res.data);
    })
    .catch((error)=>{
        console.log("Surgio un error" + error);
    })
    function mostrar(data){
        const res = document.getElementById('tabla');

            for(item of data){
                    res.innerHTML += '<tr> <td>' + item.id + '</td> <td>' + item.matricula + '</td> <td>' + item.nombre + '</td><td>' + item.domicilio + 
                    '</td> <td>' + item.sexo + '</td> <td>' + item.especialidad + '</td> </tr>';
            }
    }
  }

function buscar(){
const matricula = document.getElementById('matricula').value;
if(matricula){
    axios.get('/buscar', {params: {matricula: matricula}})
    .then((res)=>{
        mostrar(res.data);
    })
    .catch((error)=>{
        console.log(error);
        alert('No se encontró la matricula');
    })
    function mostrar(data){
        const res = document.getElementById('tabla');
        res.innerHTML = "<tr><th>ID</th><th>Matricula</th><th>Nombre</th><th>Domicilio</th><th>Sexo</th><th>Especialidad</th></tr>"

            for(item of data){
                    res.innerHTML += '<tr> <td>' + item.id + '</td> <td>' + item.matricula + '</td> <td>' + item.nombre + '</td><td>' + item.domicilio + 
                    '</td> <td>' + item.sexo + '</td> <td>' + item.especialidad + '</td> </tr>';
            }
    }
}
}

function eliminar(){
const matricula = document.getElementById('matricula').value;
        if(matricula){
            axios.delete('/borrar', {params: {matricula:matricula}})
            .then((response) => {
                console.log(response.data);
                alert('Se eliminó correctamente');
                const res = document.getElementById('tabla');
                res.innerHTML = "<tr><th>ID</th><th>Matricula</th><th>Nombre</th><th>Domicilio</th><th>Sexo</th><th>Especialidad</th></tr>"
                mostrarTodos();
            })
    .catch((error) => {
        console.log(error);
        alert('Algo salió mal');
    });
}

}

function actualizar(){

    const matricula = document.getElementById('matricula').value;
    const nombre = document.getElementById('nombre').value;
    const domicilio = document.getElementById('domicilio').value;
    const sexo = document.getElementById('sexo').value;
    const especialida = document.getElementById('especialidad').value;
        if(matricula){
            const alumno = {
                matricula : matricula,
                nombre : nombre,
                domicilio : domicilio, 
                sexo : sexo,
                especialidad : especialida
            }
    axios.put('/actualizar', alumno)
    .then((response) => {
        console.log(response.data);
        alert('Se actualizó correctamente');
        const res = document.getElementById('tabla');
        res.innerHTML = "<tr><th>ID</th><th>Matricula</th><th>Nombre</th><th>Domicilio</th><th>Sexo</th><th>Especialidad</th></tr>"
        mostrarTodos();
    })
    .catch((error) => {
        console.log(error);
        alert('Algo salió mal');
    });
}
}

  