const chisteURL = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios =  'https://reqres.in/api/users?page=2';


const key = 'pyhekk9k'; // key cloudinary
const cldURL = 'https://api.cloudinary.com/v1_1/dhvrsldzx/upload'

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


const subirImagen = async(archivoSubir) =>{
    const formdata = new FormData();
        formdata.append("upload_preset", key);
        formdata.append("file", archivoSubir);
    try{ 
        const response = await fetch(cldURL,{
            method: "post",
            body:formdata

        });
        if(response.ok) {
            const cldResponse = await response.json();
            console.log(cldResponse); 
            return cldResponse.secure_url;
        }else{
            throw await response.json();
        }
    }catch(err){
        throw err;
    }

}




export{
    obtenerChiste,
    obtenerUsuarios, 
    subirImagen
}