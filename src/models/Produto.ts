import Categoria from "./Categoria";

interface Produto {
    id: number;
    nomep:	string;
    descricao: string;
    preco:	number;
    duracao: string;
    categoria?: Categoria| null; 
}

export default Produto;