import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';

import { WeddingConfirmationService } from 'src/app/core/services/wedding-confirmation.service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-religious-form',
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
  templateUrl: './religious-form.component.html',
  styleUrls: ['./religious-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ReligiousFormComponent implements OnInit {

  companionTypeList !: {name:string}[];

  civilWeddingBookingForm !: FormGroup;

  isFormSubmitted = false;

  isWeddingConfirmationSubmittedAndNotErrorOnClientSide = false;

  displayMailResponseModal = false;
  success !: Boolean;
  responseMailModalObject : any;

  constructor( 
    private route : Router,
    private fb: FormBuilder,
    private weddingConfirmationService : WeddingConfirmationService 
    ){}

  ngOnInit(): void {
    this.initForm();
    this.getGuestStateData()
    this.initCompanionTypes();
  }

  getGuestStateData() : void {
    const guestData = history.state.guest;

    if(guestData?.firstname){
      this.civilWeddingBookingForm?.get('firstname')?.setValue(guestData.firstname);
    }

    if(guestData?.firstname){
      this.civilWeddingBookingForm?.get('lastname')?.setValue(guestData.lastname);
    }

    if(guestData?.email){
      this.civilWeddingBookingForm?.get('email')?.setValue(guestData.email);
    }

  }

  initForm() : void {
    this.civilWeddingBookingForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      isPresent:['', Validators.required],
      message: [''],
      companions : this.fb.array([])
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
    return this.civilWeddingBookingForm.controls
  }

  get companions(): FormArray {
    return this.civilWeddingBookingForm.get('companions') as FormArray
  }

  addCompanion(): void {
    this.companions.push(this.createCompanionFormGroup());
  }

  createCompanionFormGroup() {
    return this.fb.group({
      type: ['', Validators.required],
      companionFirstname: ['', Validators.required],
      companionLastname: ['', Validators.required]
    })
  }

  removeCompanion(index: number): void {
    this.companions.removeAt(index);
  }

  onSubmitCivilWeddingForm(): void {

    this.isFormSubmitted = true;

    // stop here if form is invalid
    if (this.civilWeddingBookingForm.invalid ) {
      return;
    }

    let guestData: any = {
      firstname: this.civilWeddingBookingForm.get('firstname')?.value,
      lastname: this.civilWeddingBookingForm.get('lastname')?.value,
      email: this.civilWeddingBookingForm.get('email')?.value,
      isPresent: this.civilWeddingBookingForm.get('isPresent')?.value
    }

    if(this.civilWeddingBookingForm.get('message')?.value){
      guestData = {
        ...guestData,
        message: this.civilWeddingBookingForm.get('message')?.value
      }
    }

    if(this.civilWeddingBookingForm.get('companions')?.value.length > 0){

      const companions = this.civilWeddingBookingForm.get('companions')?.value;

      const companionsToSend = companions.map((companion : any) => {
        return {
          type: companion.type.name,
          firstname: companion.companionFirstname,
          lastname: companion.companionLastname
        };
      });

      guestData = {
        ...guestData,
        companions: companionsToSend
      }
    }

    this.isWeddingConfirmationSubmittedAndNotErrorOnClientSide = true;
    this.displayMailResponseModal = true;

    this.weddingConfirmationService.confirmReligiousWedding(guestData).subscribe({
      next : (result : any) => {

        this.responseMailModalObject = result.message

        this.isFormSubmitted = false;

        this.isWeddingConfirmationSubmittedAndNotErrorOnClientSide = false
        this.civilWeddingBookingForm.reset();

      },
      error : () => {
        this.isFormSubmitted = false;
        this.displayMailResponseModal = true;
        this.isWeddingConfirmationSubmittedAndNotErrorOnClientSide = false;
        this.responseMailModalObject = "Erreur lors de l'envois. Vous pouvez re-essayer plus tard et si cela persite contactez nous directement via la page de contact"
      },
      

    })
  }

  onNavigate()  : void {

    this.displayMailResponseModal = false;

    const guestObject = {
      firstname: this.civilWeddingBookingForm.get('firstname')?.value,
      lastname: this.civilWeddingBookingForm.get('lastname')?.value,
      email: this.civilWeddingBookingForm.get('email')?.value,
    }

    this.route.navigate(['confirmation-mariage-civil'], {state : { guest: guestObject}})
  }
  
}
