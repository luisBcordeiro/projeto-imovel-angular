import { Injectable } from '@angular/core';
import { Imovel} from './imovel';


@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  private  imoveisDB: Imovel[] = [
    {
        "id": 1,
        "url_foto": "1.jpg",
        "nome": "Mansão",
        "cidade": "Passa e fica",
        "estado": "Rio Grande do Norte",
        "favorito": false,
        "tipo": "casa",
        "lat":-25.4042073,
        "long":-49.2652915,
        "adicional": [
            {
                "chave":"informações",
                "valor": "não possui informações adicionais"
            },
        ],
        "aluguel":[
            {
                "chave":"Aluguel mensal",
                "valor":5000.00
            },
            {
                "chave":"Aluguel semestral",
                "valor":35000.00
            },
            {
                "chave":"Aluguel anual",
                "valor":80000.00
            },

        ]
    },
    {
        "id": 2,
        "url_foto": "2.jpg",
        "nome": "Kitnet",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": "apartamento",
        "lat":40.340573,
        "long":-8.5877803,
        "adicional": [
            {
                "chave":"informações",
                "valor": "não possui informações adicionais"
            },
        ],
        "aluguel":[
            {
                "chave":"Aluguel mensal",
                "valor":2000.00
            },
            {
                "chave":"Aluguel semestral",
                "valor":7000.00
            },
            
        ]    
    },
    {
        "id": 3,
        "url_foto": "3.jpg",
        "nome": "Casarão na Mata",
        "cidade": "Punta Cana",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": "casa",
        "lat":63.3546078,
        "long":10.3659183,
        "adicional": [
            {
                "chave":"informações",
                "valor": "não possui informações adicionais"
            },
        ],
        "aluguel":[
            {
                "chave":"Aluguel mensal",
                "valor":15000.00
            },
            {
                "chave":"Aluguel semestral",
                "valor":130000.00
            },
            {
                "chave":"Aluguel anual",
                "valor":650000.00
            },
        ]
    },
    {
        "id": 4,
        "url_foto": "4.jpg",
        "nome": "Casa de Campo",
        "cidade": "Nova Odessa",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": "casa",
        "lat":44.9274604,
        "long":-93.2843931,
        "adicional": [
            {
                "chave": "Quartlos disponiveis",
                "valor": 2
            },
            {
                "chave": "piscina",
                "valor": "Não tem"
            },
            {
                "chave": "banehiros",
                "valor": 1
            },
            {
                "chave": "Faz calor",
                "valor": "Não"
            },
            {
                "chave": "cozinha ",
                "valor": 1
            },
            {
                "chave": "escritorio",
                "valor": 1
            },
            {
                "chave": "sala de estar",
                "valor": 1
            },
            {
                "chave": "Quintal",
                "valor": "sim"
            },
            {
                "chave": "preço",
                "valor": "R$600.000"
            }
        ],
        "aluguel":[
            {
                "chave":"Aluguel mensal",
                "valor":5000.00
            },
            {
                "chave":"Aluguel semestral",
                "valor":35000.00
            },
            {
                "chave":"Aluguel anual",
                "valor":80000.00
            },
        ]    
    },
    {
        "id": 5,
        "url_foto": "5.jpg",
        "nome": "Casa Basica",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": "casa",
        "lat":-17.7819405,
        "long":-63.1478696,
        "adicional": [
            {
                "chave": "Quartlos disponiveis",
                "valor": 2
            },
            {
                "chave": "piscina",
                "valor": "Não tem"
            },
            {
                "chave": "banehiros",
                "valor": 1
            },
            {
                "chave": "Faz calor",
                "valor": "Não"
            },
            {
                "chave": "cozinha ",
                "valor": 1
            },
            {
                "chave": "escritorio",
                "valor": "Não tem"
            },
            {
                "chave": "sala de estar",
                "valor": 1
            },
            {
                "chave": "Quintal",
                "valor": "Não"
            },
            {
                "chave": "preço",
                "valor": "R$300.000"
            }
        ],
        "aluguel":[
            
            {
                "chave":"Aluguel semestral",
                "valor":35000.00
            },
            {
                "chave":"Aluguel anual",
                "valor":65000.00
            },
        ]    
    },
    {
        "id": 6,
        "url_foto": "6.jpg",
        "nome": "Casa do Ofir",
        "cidade": "Cabreúva",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": "casa",
        "lat":-9.6467952,
        "long":-35.7365195,
        "adicional": [
            {
                "chave": "Quartlos disponiveis",
                "valor": 5
            },
            {
                "chave": "piscina",
                "valor": "2"
            },
            {
                "chave": "banehiros",
                "valor": 3
            },
            {
                "chave": "Faz calor",
                "valor": "faz muito"
            },
            {
                "chave": "cozinha ",
                "valor": 2
            },
            {
                "chave": "escritorio",
                "valor": 1
            },
            {
                "chave": "sala de estar",
                "valor": 1
            },
            {
                "chave": "Quintal",
                "valor": "não"
            },
            {
                "chave": "preço",
                "valor": "R$850.000"
            }
        ],
        "aluguel":[
            {
                "chave":"Aluguel mensal",
                "valor":7000.00
            },
            {
                "chave":"Aluguel anual",
                "valor":95000.00
            },
        ]    
    },
    {
        "id": 7,
        "url_foto": "7.jpg",
        "nome": "Casa do moises",
        "cidade": "Sumaré",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": "casa",
        "lat":-6.4368418,
        "long":-35.6403379,
        "adicional": [
            {
                "chave": "Quartlos disponiveis",
                "valor": 2
            },
            {
                "chave": "piscina",
                "valor": "Não tem"
            },
            {
                "chave": "banehiros",
                "valor": 1
            },
            {
                "chave": "Faz calor",
                "valor": "Não"
            },
            {
                "chave": "cozinha ",
                "valor": 1
            },
            {
                "chave": "escritorio",
                "valor": 1
            },
            {
                "chave": "sala de estar",
                "valor": 1
            },
            {
                "chave": "Quintal",
                "valor": "sim"
            },
            {
                "chave": "preço",
                "valor": "R$500.000"
            }
        ],
        "aluguel":[
            
            {
                "chave":"Aluguel anual",
                "valor":95000.00
            },
        ]    
    },
    {
        "id": 8,
        "url_foto": "8.jpg",
        "nome": "Residencia do Elon",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": "casa",
        "lat": -23.5678215,
        "long": -46.5475334,
        "adicional": [
            {
                "chave": "Quartlos disponiveis",
                "valor": 3
            },
            {
                "chave": "piscina",
                "valor": "Não tem"
            },
            {
                "chave": "banehiros",
                "valor": 2
            },
            {
                "chave": "Faz calor",
                "valor": "Não"
            },
            {
                "chave": "cozinha ",
                "valor": 1
            },
            {
                "chave": "escritorio",
                "valor": 2
            },
            {
                "chave": "sala de estar",
                "valor": 2
            },
            {
                "chave": "Quintal",
                "valor": "sim"
            },
            {
                "chave": "preço",
                "valor": "R$2.500.000"
            }
        ],
        "aluguel":[]
        },
    {
        "id": 9,
        "url_foto": "9.jpg",
        "nome": "Triplex do Lula",
        "cidade": "Guaruja",
        "estado": "São Paulo",
        "favorito": false,
        "tipo": "apartamento",
        "lat": -23.5023718,
        "long": -46.8507548,
        "adicional": [
            {
                "chave": "Quartlos disponiveis",
                "valor": 50
            },
            {
                "chave": "piscina",
                "valor": "2"
            },
            {
                "chave": "banehiros",
                "valor": 40
            },
            {
                "chave": "Faz calor",
                "valor": "moderado, depende da cachaça"
            },
            {
                "chave": "cozinha ",
                "valor": 50
            },
            {
                "chave": "escritorio",
                "valor": 0
            },
            {
                "chave": "sala de estar",
                "valor": 35
            },
            {
                "chave": "Quintal",
                "valor": "não"
            },
            {
                "chave": "preço",
                "valor": "R$45.000.000"
            }
        ],
        "aluguel":[
            {
                "chave":"Aluguel mensal",
                "valor":9000.00
            },
            {
                "chave":"Aluguel semestral",
                "valor":70000.00
            },
            {
                "chave":"Aluguel anual",
                "valor":680000.00
            },
        ]   
     },
    {
        "id": 10,
        "url_foto": "10.jpg",
        "nome": "Casa do Bozo",
        "cidade": "Pau Queimado",
        "estado": "República Dominicana",
        "favorito": false,
        "tipo": "casa",
        "lat":-23.4938383,
        "long":-46.8471592,
        "adicional": [
            {
                "chave": "Quartlos disponiveis",
                "valor": 6
            },
            {
                "chave": "piscina",
                "valor": "4"
            },
            {
                "chave": "banehiros",
                "valor": 10
            },
            {
                "chave": "Faz calor",
                "valor": "sim"
            },
            {
                "chave": "cozinha ",
                "valor": 2
            },
            {
                "chave": "escritorio",
                "valor": 3
            },
            {
                "chave": "sala de estar",
                "valor": 5
            },
            {
                "chave": "Quintal",
                "valor": "sim"
            },
            {
                "chave": "preço",
                "valor": "R$5.000.000"
            }
        ],
        "aluguel":[
            {
                "chave":"Aluguel mensal",
                "valor":6000.00
            },
            {
                "chave":"Aluguel semestral",
                "valor":90000.00
            }
            
        ]    
    }
]
 buscarTodosImoveis() :Imovel[] {
  return this.imoveisDB
}

bucarImovelPeloid(id: number) : Imovel | undefined {
  let imovel;

  for (let i = 0; i < this.imoveisDB.length; i++) {
      imovel = this.imoveisDB[i];
      if(imovel.id == id){
          break
      }
  }
  return imovel
}

}
