interface Propriedades {

    chave: String;
    valor: number | String;

}

interface DetalhesAluguel {

    chave: String;
    valor: number;
}

export interface Imovel {

id:  number;
url_foto: String;
cidade: String;
nome: String;
estado: String;
adicional: Propriedades [];
tipo: String;
favorito: boolean;
lat:number;
long:number;
aluguel: DetalhesAluguel[];
Preco: number;

}



