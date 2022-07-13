import Api from "./Api";

export async function visualizarContatos(id){
    try{
        const resultados = await Api.get(`/contatos/${id}/`);
        return resultados.data;

    }catch(error){
        console.log(error);
        return [];
    }
}

export async function todosContatos(){
    try{
        const resultados = await Api.get(`/contatos`);
        return resultados.data;

    }catch(error){
        console.log(error);
        return [];
    }
}

export async function cadastrarContatos(id, nome, fone, email){
    try{
        const resultados = await Api.post(`/contatos`, {
            id:id,
            nome:nome,
            fone:fone,
            email:email
        });
        return 'Cadastrado com sucesso.';

    }catch(error){
        console.log(error);
        return [];
    }
}

export async function deletarContatos(id){
    try{
        const resultados = await Api.delete(`/contatos/${id}/`);
        return 'Deletado com sucesso.';

    }catch(error){
        console.log(error);
        return [];
    }
}

export async function alterarContatos(id, nome, fone, email){
    try{
        const resultados = await Api.put(`/contatos/${id}/`, {
            id:id,
            nome:nome,
            fone:fone,
            email:email
        });
        return 'Alterado com sucesso';

    }catch(error){
        console.log(error);
        return [];
    }
}