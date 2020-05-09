import { Component, OnInit } from '@angular/core';

// Importa bibliotecas do formulário
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserformComponent implements OnInit {

  // Criando formulário
  public userForm: FormGroup;

  constructor(
    // Construtor do ReactiveForms ^^^^ 3 import ^^^^
    private formBuilder: FormBuilder
  ) {
    // Definindo campos do formulário
    this.userForm = this.formBuilder.group(
      {
        // Campo 'id'
        id: [null],
        name: [                     // Nome do campo
          null,                     // Valor inicial 'null'
          Validators.compose([      // Regras de validação
            Validators.required,    // Campo obrigatório
            Validators.minLength(3) // Cumprimento mínimo
          ])
        ],

        // Campo 'email'
        email: [
          null,
       Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$')
     ])
        ],

        // Campo 'avatar'
        avatar: [
          null,
          Validators.compose([
            Validators.required,
       Validators.pattern(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i)
          ])
        ],
        status: [1]

      });
  }

  ngOnInit() { }

  // Método de submit do formulário
  onSubmit() {
    console.log(this.userForm.value);
  }
}
