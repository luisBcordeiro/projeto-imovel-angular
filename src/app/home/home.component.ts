import { Component } from '@angular/core';
import { Imovel } from '../imovel';
import { ImovelService } from '../imovel.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  imoveisDB: Imovel[] = []


  // Norte = false
  // ZS = false
  constructor(private imovelService: ImovelService) {

    this.imoveisDB = this.imovelService.buscarTodosImoveis();
  }


  removerAcentos(str: string) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  // filtroZona(){
  //   if (this.ZS == false){
  //     this.ZS = true
  //     alert("Zona selecionada")
  //   }
  // }

  favoritar(imovel: Imovel) {


    if (imovel.favorito == false) {
      imovel.favorito = true
      const audio = new Audio('zoeira-efeito-caixa-registradora.mp3')
      audio.play()
    } else {
      imovel.favorito = false
    }
  }
  abrirMapa(imovel: Imovel) {
    const lat = imovel.lat;
    const lng = imovel.long;
    const streetViewUrl = `https://www.google.com/maps?q=&layer=c&cbll=${lat},${lng}`;
    //const url = `https://www.google.com/maps?q=${imovel.lat},${imovel.long}`

    window.open(streetViewUrl, "_blank")
  }

  mostrarFavoritos() {

    const listaFiltrada: Imovel[] = []
    for (let i = 0; i < this.imoveisDB.length; i++) {
      const imovel = this.imoveisDB[i]

      if (imovel.favorito == true) {
        listaFiltrada.push(imovel)
      }
    }
    this.imoveisDB = listaFiltrada

  }

  mostrarTodos(desmarcarRadio = false) {
    this.imoveisDB = this.imovelService.buscarTodosImoveis()
    const audio = new Audio("cavalo-ratinho.mp3")
    audio.play()
    if (desmarcarRadio == true) {
      const inputCasa: any = document.getElementById("radioCasa")
      const inputApto: any = document.getElementById("radioApto")

      if (inputCasa || undefined && inputApto || undefined) {
        inputCasa.checked = false
        inputApto.checked = false
      }
    }
  }



  filtrarPorTipo(tipo: string) {

    this.mostrarTodos()
    const listaFiltrada: Imovel[] = []
    for (let i = 0; i < this.imoveisDB.length; i++) {
      const imovel = this.imoveisDB[i]

      if (imovel.tipo == tipo) {
        listaFiltrada.push(imovel)
        const audio = new Audio('pare.mp3')
        audio.play()
      }
    }
    this.imoveisDB = listaFiltrada
  }







  listarImoveisComFiltro(texto: String,) {

    this.imoveisDB = this.imovelService.buscarTodosImoveis()

      const imoveisFiltrados: Imovel[] = []
      for (let i = 0; i < this.imoveisDB.length; i++) {
        const imovel = this.imoveisDB[i]

        const textoM = this.removerAcentos(texto.toUpperCase())
        const cidadeImovelM = this.removerAcentos(imovel.cidade.toUpperCase())
        const estadoImovelM = this.removerAcentos(imovel.estado.toUpperCase())

        if (cidadeImovelM.search(textoM) == 0 ||
          estadoImovelM.search(textoM) == 0) {


          imoveisFiltrados.push(imovel)
        }
      }
      this.imoveisDB = imoveisFiltrados
  }

}
