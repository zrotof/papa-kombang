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

  civilWeddingBookingForm !: FormGroup;

  isFormSubmitted = false;

  isWeddingConfirmationSubmittedAndNotErrorOnClientSide = false;

  isQuantityNotAppropriate = false;

  displayModal = false;

  constructor( 
    private fb: FormBuilder,
    private weddingConfirmationService : WeddingConfirmationService,
    private route : Router
    ){}

  ngOnInit(): void {
    this.getLoinclotchs();
    this.initCompanionTypes();
    this.initForm();
    this.getGuestStateData();
    this.checkForPresenceAndUpdatabeValidators();
    this.checkForDeliveryWhenUserWantClothAndUpdatabeValidators();
  }

  getGuestStateData() : void {
    const guestData = history.state.guest;

    if(guestData?.firstname){
      this.civilWeddingBookingForm?.get('firstname')?.setValue(guestData.firstname);
    }

    if(guestData?.lastname){
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
      isGuestWantLoincloth : [''],
      quantityNadia: [0],
      quantitySamuel: [0],
      deleveryAdress: [''],
      message: [''],
      companions : this.fb.array([])
    })
  }

  checkForPresenceAndUpdatabeValidators(): void{
    this.civilWeddingBookingForm.get('isPresent')?.valueChanges.subscribe({
      next: (res : string) => {
        const isGuestWantLoinclothControl = this.civilWeddingBookingForm.get('isGuestWantLoincloth');

        if(res === 'Oui'){
          isGuestWantLoinclothControl?.setValidators(Validators.required)
        }
        else{
          isGuestWantLoinclothControl?.removeValidators(Validators.required)
        }

        isGuestWantLoinclothControl?.updateValueAndValidity();
      }
    }
    )
  }

  checkForDeliveryWhenUserWantClothAndUpdatabeValidators() : void {
    this.civilWeddingBookingForm.get('isGuestWantLoincloth')?.valueChanges.subscribe({
      next: (res: string) => {

        const deleveryAdressControl = this.civilWeddingBookingForm.get('deleveryAdress');

        if(res === 'Oui'){
          deleveryAdressControl?.setValidators(Validators.required)
        }
        else{
          deleveryAdressControl?.removeValidators(Validators.required)
        }

        deleveryAdressControl?.updateValueAndValidity();
      }
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

  checkLoinclothQuantity() : void {

    this.isQuantityNotAppropriate = false;

    const isUserWantLoincloth = this.civilWeddingBookingForm.get('isGuestWantLoincloth')?.value;

    if(isUserWantLoincloth === 'Oui'){

      const qtyNadia = this.civilWeddingBookingForm.get('quantityNadia')?.value;
      const qtySamuel = this.civilWeddingBookingForm.get('quantitySamuel')?.value;

      if(qtyNadia + qtySamuel <= 0){
        this.isQuantityNotAppropriate = true;

        return ;
      }
    }
  }

  getLoinclotchs() : void {
    this.loinclothList = [
      {
        image: "../../../../../../../assets/img/home/loincloth-nadia.png",
        familly: "Famille de Nadia",
        price: 35
      },
      {
        image: "../../../../../../../assets/img/home/loincloth-sam.jpeg",
        familly: "Famille de Samuel",
        price: 35
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
    this.checkLoinclothQuantity();

    // stop here if form is invalid
    if (this.civilWeddingBookingForm.invalid || this.isQuantityNotAppropriate ) {
      return;
    }

    let guestData: any = {
      firstname: this.civilWeddingBookingForm.get('firstname')?.value,
      lastname: this.civilWeddingBookingForm.get('lastname')?.value,
      email: this.civilWeddingBookingForm.get('email')?.value,
      isPresent: this.civilWeddingBookingForm.get('isPresent')?.value
    }

    if(this.civilWeddingBookingForm.get('isGuestWantLoincloth')?.value === "Oui"){
      let loinclothes = [];

      if(this.civilWeddingBookingForm.get('quantityNadia')?.value > 0){
        loinclothes.push({
          familly : FamillyLoincloth.Nadia_Familly ,
          quantity: this.civilWeddingBookingForm.get('quantityNadia')?.value,
          deliveryAdress: this.civilWeddingBookingForm.get('deleveryAdress')?.value
        })
      }

      if(this.civilWeddingBookingForm.get('quantitySamuel')?.value > 0){
        loinclothes.push({
          familly : FamillyLoincloth.Samuel_Familly ,
          quantity: this.civilWeddingBookingForm.get('quantitySamuel')?.value,
          deliveryAdress: this.civilWeddingBookingForm.get('deleveryAdress')?.value
        })
      }

      guestData = { 
        ...guestData,
        loinclothes : loinclothes
      }

      if(this.civilWeddingBookingForm.get('deleveryAdress')?.value){

      }
      
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
    this.displayModal = true;

    this.weddingConfirmationService.confirmCivilWedding(guestData).subscribe({
      next : () => {

        /*
        this.success = true;
        this.responseMailModalObject = {

          header : "Message transmis",
          icon : faCircleCheck,
          texts: [
            {
              text : "Bonjour,"
            },
            {
              text : "Nous avons bien reçu votre message, nous reviendrons vers vous très prochainement."
            },
            {
              text : "Merci!"
            }
          ]
        };

        this.isContactFormSubmitted = false;
        
        this.isWeddingConfirmationSubmittedAndNotErrorOnClientSide = false
        this.civilWeddingBookingForm.reset();

        */
      },
      error : () => {
        
        /*
        this.displayDialogModal = true;
        this.success = false;
        this.responseMailModalObject = {
          header : "Erreur lors de l'envoie",
          icon : faTriangleExclamation,
          texts: [
            {
              text : "Bonjour,"
            },
            {
              text : "Nous tenons à vous présenter nos excuses car nous rencontrons un problème technique qui empêche la soumisison de votre formulaire. Nous sommes conscients de l'importance de votre demande et nous travaillons activement pour résoudre ce problème technique dans les plus brefs délais."
            },
            {
              text : "Vous pouvez re-essayer de soumettre le formulaire ou nous contacter directement par téléphone au (+237) XXXXXXX ou par email à l'adresse contact_pub@foryoumedia-africa.com."
            },
            {
              text : "Merci!"
            }
          ]
        };
                */
      }
    }
    )
  }

  onNavigate()  : void {

    this.displayModal = false;

    const guestObject = {
      firstname: this.civilWeddingBookingForm.get('firstname')?.value,
      lastname: this.civilWeddingBookingForm.get('lastname')?.value,
      email: this.civilWeddingBookingForm.get('email')?.value,
    }

    this.route.navigate(['confirmation-mariage-religieux'], {state : { guest: guestObject}})
  }
  
}
