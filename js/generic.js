/** Login del usuario en la página principal
 * @method login
 * @param user {string} - Nombre de usuario
 * @param pass {string} - Password del usuario
 * */
login = (user, pass) => {
    //Hagamos de cuenta que el admin hizp login
    window.location.href = "nuevoTkd.html";
}

cargarDatos = () => {
    let taeks = 'datos/taekwondistas.json';
    let tbody="";

    fetch(taeks)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el archivo JSON.');
            }
            return response.json();
        })
        .then(taeks => {
            for(let i=0;i<taeks.length;i++){
            console.log(i)
            tbody+="<tr>";
            tbody+=`<td>${taeks[i]["Nombre"]}</td>`;
            tbody+=`<td>${taeks[i]["Apellido"]}</td>`;
            tbody+=`<td>${taeks[i]["Dni"]}</td>`;
            tbody+=`<td>${taeks[i]["Categoría"]}</td>`;
            tbody+=`<td>${taeks[i]["Fecha de Nacimiento"]}</td>`;
            tbody+=`<td>${taeks[i]["Instructor"]}</td>`;
            tbody+=`<td>${taeks[i]["Peso"]}</td>`;
            tbody+=`<td>${taeks[i]["Altura"]}</td>`;
            tbody+=`<td>${taeks[i]["Genero"]}</td>`;
            tbody+=`<td>${taeks[i]["Nacionalidad"]}</td>`;
            tbody+=`<td>${taeks[i]["Foto"]}</td>`;
            tbody+=`<td>${taeks[i]["Celular"]}</td>`;
            tbody+=`<td>${taeks[i]["Email"]}</td>`;
            tbody+="</tr>";
        }
        document.getElementById("taekwondistas").innerHTML = tbody;
        })
}