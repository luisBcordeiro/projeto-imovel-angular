import { Component } from '@angular/core';
import { Imovel } from '../imovel';
import { ImovelService } from '../imovel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt'

registerLocaleData(localePt)


@Component({
  selector: 'app-imovel-financiamento',
  standalone: true,
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './imovel-financiamento.component.html',
  styleUrl: './imovel-financiamento.component.css'
})
export class ImovelFinanciamentoComponent {


  imovel: Imovel | undefined
  valorEntrada: number | null = null
  prazoMeses = 0
  valorParcela = 0 
  valorImovel = "" 

  constructor(
    private imvServise: ImovelService,
    private route: ActivatedRoute,
    private rt: Router
  ){
    const id = this.route.snapshot.params["id"]
    this.imovel = this.imvServise.bucarImovelPeloid(id)

    if (this.imovel) {
      this.valorImovel = this.formatCurrency(this.imovel.Preco)
    }
  }
  voltarDetalhes(){
    const url = `/detalhes/${this.imovel?.id}`
    this.rt.navigate([url])
  }
  calcular(){
    
    if (this.valorEntrada == null) {
      this.valorEntrada = 0
    }
    if (this.imovel && this.valorEntrada) {
      
      const precoimovel = this.imovel?.Preco - this.valorEntrada
      const parcela = precoimovel/ this.prazoMeses
      this.valorParcela = parcela
    }
    
  }
  formatCurrency(value: number): string {
    if (value === undefined || value === null) return ''
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

}
