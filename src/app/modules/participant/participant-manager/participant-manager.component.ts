import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { genderTypes, EnumType } from '../model/enum';

@Component({
  selector: 'app-participant-manager',
  templateUrl: './participant-manager.component.html'
})
export class ParticipantManagerComponent {

  form: FormGroup;
  loading: boolean = false;
  genders: EnumType[];

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
      mail: [null],
      phoneNumber: [null, Validators.required],
      cpfCnpj: [null],
      gender: [null],
      notAplicateCnpjCpf: [null, Validators.required],
      tokenSms: [null, Validators.required],
      exposedPerson: [null],
      digitalSignature: [null, Validators.required]
    });

    this.genders = genderTypes;
  }

  onBack() {

  }

  onSave() {

  }
}
