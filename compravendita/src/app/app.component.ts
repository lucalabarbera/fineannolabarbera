import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from "./user";
import { Utenti } from './mock-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm: FormGroup;
  LoginForm: FormGroup;
  utenti = Utenti;
  hide: boolean = false;
  listaUtenti: boolean = false;
  nomeUtenteOnline: string = null;
  cognomeUtenteOnline: string = null;
  username:string = null;
  logoutEffettuato: boolean = false;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({'nome': ['Nome', Validators.required], 'cognome': ['Cognome', Validators.required], 'username': ['username', Validators.required], 'password': ['12345678', Validators.required], 'email': ['example@email.com', Validators.compose([Validators.required, Validators.email])]});
    this.LoginForm = fb.group({'username': ['username', Validators.required], 'password': ['12345678', Validators.required]});
  }

    toggleVar(){
      if(!this.hide){
        this.hide = true;
        document.getElementById("btnLogin").innerHTML = "Registrazione";
        document.getElementById("loginEffettuato").style.display = "none";
      } else {
        this.hide = false;
        document.getElementById("btnLogin").innerHTML = "Login";
      }
    }

    toggleListaUtenti(){
      if(!this.listaUtenti){
        this.listaUtenti = true;
        document.getElementById("btnListaUtenti").innerHTML = "Mostra lista utenti";
      } else {
        this.listaUtenti = false;
        document.getElementById("btnListaUtenti").innerHTML = "Nascondi lista utenti";
      }
    }


    onSubmit(): boolean {
      if(this.myForm.valid){
        let utente : User = new User();
        utente.nome = this.myForm.controls['nome'].value;
        utente.cognome = this.myForm.controls['cognome'].value;
        utente.username = this.myForm.controls['username'].value;
        utente.password = this.myForm.controls['password'].value;
        utente.email = this.myForm.controls['email'].value;
        this.utenti.push(utente);
        this.logoutEffettuato = false
      } else {
        console.log("Il form non è valido");
      }

      return false;
    }

    login(): boolean {
      if(this.LoginForm.valid){
        let userFound = false;
        for(let i of this.utenti){
          if(this.LoginForm.controls['username'].value == i.username){
            if(this.LoginForm.controls['password'].value == i.password){
              userFound = true;
              this.cognomeUtenteOnline = i.cognome;
              this.nomeUtenteOnline = i.nome;
              this.username = i.username;
              document.getElementById("loginEffettuato").style.display = "block";
              this.logoutEffettuato = false;
              break;
            }
          }
        }
      } else {
        console.log("Il form non è valido");
      }

      return false;
    }

    logout(){
      if(this.username != null){
        this.nomeUtenteOnline = null;
        this.cognomeUtenteOnline = null;
        this.username = null;
        this.logoutEffettuato = true;
      } else {
        console.log("Non hai ancora eseguito il login")
      }
    }
}


