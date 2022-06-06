import { UsuarioCompleto } from './../../../models/usuario-aluguel-filme';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { AluguelRegistrationService } from 'src/app/core/registrations/aluguel-registration.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-meus-filmes',
  templateUrl: './meus-filmes.component.html',
  styleUrls: ['./meus-filmes.component.css']
})
export class MeusFilmesComponent implements OnInit {
  usuarioCompleto$ : Observable<UsuarioCompleto>;
  closeResult = '';
  urlSafe: SafeResourceUrl;
  urlFilme!:string;
  constructor(
    private authService: AuthenticationService,
    private aluguelService: AluguelRegistrationService,
    private router: Router, private modalService: NgbModal,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.usuarioCompleto$ = this.aluguelService.getUsuarioCompleto(this.authService.loggedUser().id);
  }


  assistir(id: number, content){
    console.log(id)
    this.aluguelService.getUrlFilme(id).subscribe(
      (url) => {
        console.log(url.urlVideo)
        this.urlFilme = url.urlVideo;
        console.log(this.urlFilme)
        this.open(content);
    },
    
    (error) => {
      alert("O seu tempo com o filme se esgotou!")
      console.log(error)
      this.router.navigate(["filme"]);
    }
    );
   
  }

  open(content) {
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


  sanitizeVideoUrl() { 
    return this.sanitizer.bypassSecurityTrustResourceUrl( this.urlFilme);
  }

}
