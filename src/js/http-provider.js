const chisteURL = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios =  'https://reqres.in/api/users?page=2';

const obtenerChiste = async() =>{

    try{
        const response = await fetch(chisteURL);
        if(!response.ok) throw('No se opudo realizar la peticion');
        const {icon_url, id, value} = await response.json();
        return  {icon_url, id, value};
    }catch(err){
            throw err;
    }

}


const obtenerUsuarios = async() =>{ 
    const response = await fetch(urlUsuarios);
    const {data:usuarios} = await response.json();
    return usuarios;
     }

export{
    obtenerChiste,
    obtenerUsuarios
}