import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { DeviceService } from 'src/app/device.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
	@ViewChild("banner") bannerElementRef!: ElementRef;
	@ViewChild("galleryLoadMoreButton") galleryLoadMoreButtonRef!: ElementRef;

	visibleGalleryImages: any[] = [];

	constructor(
		private meta: Meta,
		private deviceService: DeviceService
	){}

	ngOnInit(){
		// Meta Tags
		this.meta.addTags([
			{
				name: "description",
				content: "Professionelle Drohnen Foto- & Videografie in München und weltweit. Unsere ausgebildeten Piloten verwirklichen Ihre Vision mit Luftaufnahmen. Entdecken Sie die die Welt aus einer neuen Perspektive"
			},
			{
				name: "keywords",
				content: "Drohne, Luftaufnahmen, Drohnen Fotografie, Drohnen Videografie, Luftbildaufnahmen, München, Luftaufnahmen München, Drohnen Fotos München, Drohne Bayen, Drohne Inspektion, Drohnenflug, Drohnen Videos, Drohnen service, Service München, Drohnen Fotografen, Drohne Pilot München"
			}
		]);

		// Banner Volcano Image
		const backgroundImage = new Image();
		backgroundImage.onload = () => this.bannerElementRef.nativeElement.style.backgroundImage = "url('assets/img/Volcano3.jpg')";
		backgroundImage.src = "assets/img/Volcano3.jpg";

		// Gallery Images Mobile
		this.visibleGalleryImages = this.deviceService.isMobile ? this.allGalleryImages.slice(0, 2) : this.allGalleryImages;
	}

	ngAfterViewInit(){
		if(this.deviceService.isMobile) this.bannerElementRef.nativeElement.style.height = (window.innerHeight * 0.85).toString() + "px";
	}

	GalleryLoadMore(){
		this.visibleGalleryImages = (this.visibleGalleryImages.length+2)<this.allGalleryImages.length ? this.allGalleryImages.slice(0, this.visibleGalleryImages.length+2) : this.allGalleryImages;
		
		if(this.visibleGalleryImages.length >= this.allGalleryImages.length) this.galleryLoadMoreButtonRef.nativeElement.style.display = "none";
	}

	allGalleryImages = [
		{
			src: "../../../assets/img/Gallery/LukeHouse.jpg",
			alt: "Drohnen Luftaufnahme eines Grundstück in Neuseeland, mit großem Haus im Fokus"
		},
		{
			src: "../../../assets/img/Surf.jpg",
			alt: "Drohnen Fotografie eines Surfers im Licht der untergehenden Sonne, im Hintergrund erloschener Vulkan",
		},
		{
			src: "../../../assets/img/Gallery/NzRoadtrip.jpg",
			alt: "Seznerie einer Küstenlandschaft in Neuseeland, eine Straße läuft zwischen Bergen und Wasser Richtung Horizont"
		},
		{
			src: "../../../assets/img/Gallery/Trucks.jpg",
			alt: "Zwei Trucks kämpfen sich offroad einen Hügel hoch und wirbeln Sand auf"
		},
		{
			src: "../../../assets/img/Gallery/Golf.jpg",
			alt: "Luftaufnahme eines Golfclubs in Düsseldorf, 9 Löcher mit Bunker, Abschlag etc. Im Hintergrund Düsseldorf's Skyline"
		},
		{
			src: "../../../assets/img/Gallery/LukeRunRocky.jpg",
			alt: "Trainierender Boxer beim Laufen auf Steg am Wasser in aufgehender Sonne"
		},
		{
			src: "../../../assets/img/Gallery/WGF.jpg",
			alt: "Modernes Haus von oben, umgeben von Bäumen. Autos auf der Einfahrt, Teich mit Wasserfall"
		},
		{
			src: "../../../assets/img/Gallery/Surf2.jpg",
			alt: "Zwei Surfer dabei, auf ihre Surfboards aufzusteigen und die Welle zu reiten"
		},
		{
			src: "../../../assets/img/Immobilie.jpg",
			alt: "Drohnen Luftaufnahme einer modernen Immobilie mit Solarzellen auf dem Dach im Sonnenuntergang"
		},
	];
}
