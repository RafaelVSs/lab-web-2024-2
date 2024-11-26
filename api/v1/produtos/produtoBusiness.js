const produtoModel = require('./produtoModel');

const save = async (produto) => {
    
    const saved = await produtoModel.Produto.create(produto)

    return produto;
}

const list = async(filters) => {

    
    return await produtoModel.Produto.findAll();
}

const update = async (id, produto) => {
    const [updated] = await produtoModel.Produto.update(produto, {
        where: { id: id }
    });
    return updated ? await produtoModel.Produto.findByPk(id) : null;
}

const remove = async (id) => {
    const deleted = await produtoModel.Produto.destroy({
        where: { id: id }
    });
    return deleted; 
}

module.exports = {save, list}, update, remove;