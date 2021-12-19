import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class ContaService {

  url = 'http://localhost:3000/contas'

  constructor(private http: HttpClient) { }

  getConta(){
    return this.http.get(this.url)
    }

    // get para uma tarefa
  getUmaConta(id:any){
    return this.http.get(this.url + '/' + id)

  }

  // adicionar uma tarefa no banco de dados

  addConta(conta:Conta){
      return this.http.post(this.url, conta)
  }

  // Excluir Tarefa

  deleteConta(id:any){
    return this.http.delete(this.url + '/' + id)

  }

  // modificar uma tarefa
  editConta(id:any,conta:Conta){
    return this.http.put(this.url + '/' + id , conta)

  }
}


export interface Conta{
  id_transferencia?:string
  nomeCliente?:string
  valor?:string
  contaCliente?:string
  }



