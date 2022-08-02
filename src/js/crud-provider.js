const urlCRUD = 'https://reqres.in/api/users'

const getUser = async(id) => {
    const resp = await fetch(`${urlCRUD}/${id}`);
    const data = await resp.json();
    return data;
}

const crarUser = async(usuario) => {
    const resp = await fetch(urlCRUD, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
            }
        });

        console.log(await resp.json());
}
const updateUser = async(id, usuario) => {
    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
            }
        });

        console.log(await resp.json());
}

const deletUSer = async (id)=> {
    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: 'DELETE',
        });
        return (resp.ok) ? 'borrado' : 'no se pudo borrar';
}



export {
    getUser,
    crarUser,
    updateUser,
    deletUSer
}