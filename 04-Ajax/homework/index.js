// ----------------- Con este código ya funciona pero saco la arrow hacia el contexto global
//------------------ Para poder usarla en otros lados
/*$('#boton').click(() => { // Accedemos al boton
    var list = $('#lista'); 
    list.empty(); // Borra luego de mostrar

    $.get('http://localhost:5000/amigos', res => {
        for(let i = 0; i < res.length; i++) {
            list.append(`<li>${res[i].name}</li>`) // agrega hijos al <li>
        }
    })
}) */

// ----- Funcion para poder usar por fuera
var getAmigos = () => { // Accedemos al boton
    var list = $('#lista'); 
    list.empty(); // Borra luego de mostrar

    $.get('http://localhost:5000/amigos', res => {
        for(let i = 0; i < res.length; i++) {
            list.append(`<li>${res[i].name}</li>`) // agrega hijos al <li>
        }
    })
}



$('#boton').click(getAmigos);

$('#search').click(() => { // Accedemos al boton 
    var id = $('#input').val(); // Accedemos al valor del input y lo guardamos en la variable --> getElementById('input').value
    $.get(`http://localhost:5000/amigos/${id}`, res => {
        $('#amigo').text(res.name); //obtené el elemento cuyo id sea #amigo, a ese elemento ponele el texto con lo que vino de res.name
        // getElementById('amigo).innerHTML = res.name
    }) 
})

$('#delete').click(() => {
    var borrar = $('#inputDelete').val(); 
    $.ajax({
        url: `http://localhost:5000/amigos/${borrar}`, // 'palabra' + var --> se puede concatenar para acceder
        type: 'DELETE',
        success: res => {
            $('#sucess').text(`Amigo ${borrar} fue eliminado con éxito`);
            getAmigos(); // Porque ya tengo la lógica afuera
        }
    })
})

