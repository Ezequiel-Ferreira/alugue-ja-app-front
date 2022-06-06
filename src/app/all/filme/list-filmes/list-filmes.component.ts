import { FilmeRegistrationService } from './../../../core/registrations/filme-registration.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Filme } from 'src/app/models/filme';
import { map } from 'rxjs/operators';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-filmes',
  templateUrl: './list-filmes.component.html',
  styleUrls: ['./list-filmes.component.css']
})
export class ListFilmesComponent implements OnInit {
  filter = new FormControl('');
  listFilme$: Observable<Filme[]>; 
  page = 1;
  idFilme!: number;
  valorFilme!: number;
  closeResult = '';
  constructor(private filmeRegService : FilmeRegistrationService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.listFilme$ = this.filmeRegService.getFilmes();
  }
  
  open(content, id: number, valor:number) {
    this.valorFilme = valor;
    this.idFilme = id;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
