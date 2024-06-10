import { Component, ElementRef, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent {
	@ViewChild("auftragFormSection") auftragFormSection!: ElementRef;
	@ViewChild("feedbackElement") feedbackElement!: ElementRef;
	@ViewChild('feebackIncompleteLink') feebackIncompleteLink!: ElementRef;

	showForm = false;

	feedbackTextSuccess = "Vielen Dank! Wir werden uns in Kürze bei Ihnen melden.";
	feedbackTextIncomplete = "Bitte füllen Sie alle erforderlichen Felder aus.";
	feedbackTextError = "Leider ist ein Fehler aufgtreten, wir bitten um Entschuldigung. Gerne können Sie uns direkt eine Email schreiben an: ";
	feedbackText = this.feedbackTextSuccess;

	phoneNumber = process.env['PHONENUMBER'] || 'Blurred';
	phoneNumberSpaces = process.env['PHONENUMBER_SPACES'] || 'Blurred';

	constructor(
		private firestore: AngularFirestore,
	){}

	ShowKontaktForm(){
		this.showForm = true;
	}

	KontaktFromSubmit(form:NgForm) {
		console.log("Form " + (form.valid? "valid." : "invalid."));
		
		// Check if form is valid and all required fields are entered
		if(!form.valid){
			Object.values(form.controls).forEach(control => {
				control.markAsTouched();
				control.markAsDirty();
			});
			this.SetFeedback("incomplete");
			return;
		}

		// Create Collection Document name with timestamp
		const docName = "KontaktAnfrage_" + formatDate(new Date(), "YYYYMMdd_HHmmss", "de-CH");

		// Store data to Firebase
		console.log("Submitting... " + docName);
		this.firestore.collection("KontaktAnfragen").doc(docName).set(form.value)
			.then(() => {
				form.reset();
				this.SetFeedback("success");
				console.log("Submit successful.");
			})
			.catch((error) => {
				this.SetFeedback("error");
				console.log("Error on submit: ", error);
			});
	}

	// Set feedback block below form
	SetFeedback(state: string){
		if(state == "success"){
			this.feedbackText = this.feedbackTextSuccess;
			this.feedbackElement.nativeElement.classList.remove("form-feedback-error");
			this.feedbackElement.nativeElement.classList.remove("form-feedback-incomplete");
			this.feedbackElement.nativeElement.classList.add("form-feedback-success");
		}
		else if(state == "incomplete"){
			this.feedbackText = this.feedbackTextIncomplete;
			this.feedbackElement.nativeElement.classList.remove("form-feedback-success");
			this.feedbackElement.nativeElement.classList.remove("form-feedback-error");
			this.feedbackElement.nativeElement.classList.add("form-feedback-incomplete");
		}
		else{
			this.feedbackText = this.feedbackTextError;
			this.feedbackElement.nativeElement.classList.remove("form-feedback-success");
			this.feedbackElement.nativeElement.classList.remove("form-feedback-incomplete");
			this.feedbackElement.nativeElement.classList.add("form-feedback-error");
			this.feebackIncompleteLink.nativeElement.style.display = "block";
		}
		this.feedbackElement.nativeElement.style.display = "block";
	}

	scrollAuftragAnfragnIntoView(){
		this.auftragFormSection.nativeElement.scrollIntoView({behavior:'smooth'});
	}
}
