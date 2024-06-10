import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
	phoneNumber = process.env['PHONENUMBER'] || 'Blurred';
	phoneNumberSpaces = process.env['PHONENUMBER_SPACES'] || 'Blurred';
}
