import { Component, OnInit } from '@angular/core';
import { faEllipsisVertical, faXmark, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { DeviceService } from 'src/app/device.service';
import { Router } from '@angular/router';
import { env } from 'process';
import { environment } from 'src/environments/environment';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
	maxSpace: any;
	maxBoxShadowOpacity = 0.3;

	outerHeader!: HTMLElement;
	innerHeader!: HTMLElement;

	headerMenuMobile!: HTMLElement;
	isMobileMenuOpened = false;
	faMenuIcon = faEllipsisVertical;

	faPhone = faPhone;
	faMail = faEnvelope;

	phoneNumber = process.env['PHONENUMBER'] || 'Blurred';
	
	constructor(
		private deviceService: DeviceService,
		private router: Router,
        private firestoreService: FirestoreService,
	){}
	
	ngOnInit(){
		if(!this.deviceService.isMobile){
			this.InitiateHeaderScrollAnimation();
		}

		this.headerMenuMobile = document.querySelector(".header-menu-mobile")!;
	}

	InitiateHeaderScrollAnimation(){
		this.outerHeader = document.querySelector("header")!;
		this.innerHeader = document.querySelector(".header-inner")!;

		this.maxSpace = this.outerHeader.getBoundingClientRect().bottom - this.innerHeader.getBoundingClientRect().height;

		window.addEventListener("scroll", () => {
			if(this.outerHeader.getBoundingClientRect().bottom > this.innerHeader.getBoundingClientRect().height){
				this.innerHeader.style.top = ((this.outerHeader.getBoundingClientRect().bottom - this.innerHeader.getBoundingClientRect().height)/2) + "px";
				const shadowOpacity = this.maxBoxShadowOpacity*(1-(this.outerHeader.getBoundingClientRect().bottom - this.innerHeader.getBoundingClientRect().height)/this.maxSpace);
				this.outerHeader.style.boxShadow = "0px 4px 20px rgba(87, 87, 87, " + shadowOpacity + ")";
			}
		});
	}

	ToggleMobileMenu(){
		this.isMobileMenuOpened = !this.isMobileMenuOpened;

		this.faMenuIcon = this.isMobileMenuOpened ? faXmark : faEllipsisVertical;
		this.headerMenuMobile.style.display = this.isMobileMenuOpened ? "flex" : "none";
	}

	RouteToPage(url: string){
		this.router.navigate([url]);
	}
}
