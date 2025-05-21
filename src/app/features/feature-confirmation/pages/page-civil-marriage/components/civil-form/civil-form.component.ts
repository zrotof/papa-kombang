import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';

import { Loincloth } from 'src/app/core/models/loincloth';
import { FamillyLoincloth } from '../../../../../../core/enums/familly-loincloth';
import { WeddingConfirmationService } from 'src/app/core/services/wedding-confirmation.service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-civil-form',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    ReactiveFormsModule,
    RouterLink,
    ButtonModule,
    InputTextModule,
    DialogModule,
    RadioButtonModule,
    InputTextareaModule,
    InputNumberModule,
    ProgressSpinnerModule,
    DropdownModule
  ],
  templateUrl: './civil-form.component.html',
  styleUrls: ['./civil-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CivilFormComponent implements OnInit {

  loinclothList !: Loincloth[];
  
  companionTypeList !: {name:string}[];

  messageForm !: FormGroup;

  isFormSubmitted = false;

  isWeddingConfirmationSubmittedAndNotErrorOnClientSide = false;

  isQuantityNotAppropriate = false;

  displayMailResponseModal = false;
  success !: Boolean;
  responseMailModalObject : any;

  constructor( 
    private fb: FormBuilder,
    private weddingConfirmationService : WeddingConfirmationService,
    private route : Router
    ){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() : void {
    this.messageForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    })
  }

  initCompanionTypes(): void {
    this.companionTypeList = [
      {
        name : "Votre conjoint"
      },
      {
        name : "Votre enfant"
      },
      {
        name : "Ami / Amie"
      }
    ]
  }

  get f() {
    return this.messageForm.controls
  }

  onSubmitMessageForm(): void {
    this.isFormSubmitted = true;

    if(this.messageForm.invalid){
      return;
    }
  }
}
