import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
	@ViewChild("feedbackElement") feedbackElement!: ElementRef;
	@ViewChild("passwordInput") passwordInput: any;

	LoginFormSubmit(form:NgForm) {
		console.log("Form " + (form.valid? "valid." : "invalid."));

		Object.values(form.controls).forEach(control => {
			control.markAsTouched();
			control.markAsDirty();
		});

		this.passwordInput.reset();
		this.feedbackElement.nativeElement.style.display = "block";
	}
}
