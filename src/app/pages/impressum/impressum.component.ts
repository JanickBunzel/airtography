import { Component } from '@angular/core';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.css']
})
export class ImpressumComponent {
	addressLine1 = process.env['ADRESS_LINE1'] || 'Blurred';
	addressLine2 = process.env['ADRESS_LINE2'] || 'Blurred';
	
	phoneNumberSpaces = process.env['PHONENUMBER_SPACES'] || 'Blurred';
}
