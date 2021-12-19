import { Conta , ContaService } from './../../servicos/tarefa.service';
import { Component, OnInit } from '@angular/core';
// Importando a biblioteca de rotas do angular , inclusive o pacote que permite pegarmos a rota ativa no momento ( ActivatedRoute)
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  conta: Conta = {
    id_transferencia: '',
    nomeCliente: '',
    valor: '',
    contaCliente: ''

  }

  constructor(private ContaService:ContaService,
              private router:Router,
              private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <any>this.activateRoute.snapshot.params['id']
    console.log("id de entrada:" + id_entrada)
    this.ContaService.getUmaConta(id_entrada).subscribe({
    next: (resultado) => {console.log(resultado)
                          this.conta = resultado},
    error: (erro) => console.error(erro),
    complete: () => console.info("Conta encontrada!")


    })

  }

  modificar(){
    // chamamos a função editTarefa que está no TarefaService e passamos os parâmetros id_tarefa e o objeto que contém os dados das tarefas
    this.ContaService.editConta(this.conta.id_transferencia,this.conta).subscribe({
      next: (resultado) => console.log("Tarefa editada com sucesso"),
      error: (erro) => console.error(erro),
      complete: () => console.info("Edição completada com êxito")


    })
    // Voltamos para a rota do nosso componente inicio
    this.router.navigate(['/inicio'])

  }

}
