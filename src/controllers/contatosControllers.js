const { response, request } = require("../app");
const contatosJson = require("../models/contatos.json");

const home = (request, response) => {
    response.status(200).send({
        "mensagem": "lista de contatinhos"
    });
};

const getAll = (request, response) => {
    response.status(200).send(contatosJson);
};

const getById = (request, response) => {
    const requestedId = request.params.id;
    const filteredId = contatosJson.find(unitContatosJson => unitContatosJson.id == requestedId);
    response.status(200).send(filteredId);
}

const getByNome = (request,response) => {
    const requestedNome = request.query.nome.toLowerCase();
    const filteredNome = contatosJson.find(unitContatosJson => unitContatosJson.nome.toLowerCase().includes(requestedNome));
    response.status(200).send(filteredNome);
    /*if(filteredNome == "" || filteredNome == undefined) {
    } else {
    };*/
}

const createContact = (request, response) => {
    const requiredName = request.body.nome;
    const requiredMobile = request.body.celular;
    const requiredSocialMedia = request.body.redesSociais;
    const newContact = {
        id: "3",
        nome: requiredName,
        celular: requiredMobile,
        redesSociais: requiredSocialMedia
    };
    contatosJson.push(newContact);
    response.status(200).send(newContact);
};

const deleteContact = (request, response) => {
    const requestedId = request.params.id;
    const filteredId = contatosJson.find(unitContatosJson => unitContatosJson.id == requestedId);
    response.status(200).send(filteredId);
    const indice = contatosJson.indexOf(filteredId);
    contatosJson.splice(indice, 1);
    response.status(200).send(
        [
            {
                "message": "contato deletado com sucesso!"
            },
            contatosJson
        ]
    )

}


module.exports = {
    home,
    getAll,
    getById,
    getByNome,
    createContact,
    deleteContact
}