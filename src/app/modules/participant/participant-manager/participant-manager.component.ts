import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-participant-manager',
  templateUrl: './participant-manager.component.html'
})
export class ParticipantManagerComponent {

  form: FormGroup;
  loading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { 
    this.form = this.formBuilder.group({
      code: {
          value: null,
          disabled: true,
      },
      status: [null],
      name: [null, Validators.required],
      externalCode: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      digitalSignature: [null, Validators.required],
      cpfCnpj: [null, Validators.required]
  });
  }

  onBack() {

  } 
  
  onSave() {

  }
}
