import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from "../post";
import { Posts } from '../mock-posts';
import { Comment } from '../comment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() nomeUtenteOnline;
  @Input() cognomeUtenteOnline;
  @Input() username;
  oggettoForm: FormGroup;
  posts = Posts;

  constructor(fb: FormBuilder) {
    this.oggettoForm = fb.group({'nome': ['nome', Validators.required], 'tipo': ['tipo', Validators.required], 'prezzo': ['0', Validators.required], 'descrizione': ['descrizione', Validators.required]});
  }

  ngOnInit() {
  }

  aggiungiOggetto(): boolean {

    if(this.oggettoForm.valid){
      if(this.username != null){
        let post: Post = new Post();
        post.nome = this.oggettoForm.controls['nome'].value;
        post.tipo = this.oggettoForm.controls['tipo'].value;
        post.prezzo = Number(this.oggettoForm.controls['prezzo'].value);
        post.descrizione = this.oggettoForm.controls['descrizione'].value;
        post.nomeUtente = this.nomeUtenteOnline;
        post.cognomeUtente = this.cognomeUtenteOnline;
        post.username = this.username;
        let date: Date = new Date();
        post.data = date.getHours() + ':' + date.getMinutes() + ', il ' + date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
        post.commenti = [];
        this.posts.push(post);
        document.getElementById("loginPerOggetti").style.display = "none";
      } else {
        document.getElementById("loginPerOggetti").style.display = "block";
      }
    } else {
        console.log("Il form non è valido");
    }

    return false;
  }

  commenta(commento: HTMLInputElement, post: Post){
    if(this.username != null){
      if(commento.value != ''){
        let comment = new Comment();
        comment.testo = commento.value;
        comment.nomeUtente = this.nomeUtenteOnline;
        comment.cognomeUtente = this.cognomeUtenteOnline;
        comment.username = this.username;
        let date: Date = new Date();
        comment.data = date.getHours() + ':' + date.getMinutes() + ', il ' + date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
        post.commenti.push(comment);
      } else {
        console.log('Il commento non può essere vuoto');
      }
    } else {
      console.log("Devi prima effettuare il login");
    }
  }

}
