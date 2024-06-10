import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	ngOnInit(){
		console.log("This website was made by Janick Bunzel -> https://janickbunzel.de/");
	}
}
