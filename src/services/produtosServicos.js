class ProdutosService {
    produtos = [
      { id: 1, nome: 'Chanel No.5', categoria: 'Médico', descricao: 'Urologista', valor: 350 },
      { id: 2, nome: 'Dior Sauvage', categoria: 'Médico', descricao: 'Ginecologista', valor: 280 },
      //...
    ];
  
    comentarios = [
      {
        idMedico: 1,
        comentario: "consultas xxxxxxxxx xxxxxxx xxxxxxxx xxxxxx",
        autor: "João Silva",
        data: "2023-11-22"
      },
      {
        idMedico: 2,
        comentario: "Atestado xxxxxxxxx xxxxxxx xx xxx xxxx xxxxxxxxx",
        autor: "Ana Maria",
        data: "2023-12-05"
      },
      

    ];
    getProdutoById(id) {
      return this.produtos.find(produto => produto?.id === parseInt(id));
    }
    getProdutos() {
      return this.produtos;
    }
  
    getComentariosByProdutosId(idProduto) {
      return this.comentarios.filter(comentario => comentario.idProduto === parseInt(idProduto));
    }
  
    addComentario(produto,comentario) {
      this.comentarios.push({...comentario});
      return comentario;
    }
  
  }
  const produtosService = new ProdutosService();

  export default produtosService;
  