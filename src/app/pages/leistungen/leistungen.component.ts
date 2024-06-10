import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { faWrench, faHandshakeAngle, faToolbox, faCertificate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-leistungen',
  templateUrl: './leistungen.component.html',
  styleUrls: ['./leistungen.component.css']
})
export class LeistungenComponent implements OnInit{
	@ViewChild('LeistungenVideo') videoRef!: ElementRef;
	@ViewChild('realEstateExample') realEstateExampleRef!: ElementRef;
	
	faWrench = faWrench;
	faHandshake = faHandshakeAngle;
	faToolbox = faToolbox;
	faCertificate = faCertificate;

	exampleImageLoaded:boolean = false;

	constructor(
		private meta: Meta
	){}

	ngOnInit(){
		this.meta.addTags([
			{
				name: "description",
				content: "Immobilien, Inspektionen, Events oder Industrie - Professionelle Drohnen Foto- & Videografie von Airtography, in München und weltweit. Unsere ausgebildeten Piloten verwirklichen Ihre Vision mit Luftaufnahmen."
			},
			{
				name: "keywords",
				content: "Immobilien Fotografie München, Immobilien Drohne, Drohnen Inspektion, Event Fotografie Drohne, Drohne Inspektion München, Luftaufnahmen, Drohnen Fotografie, Drohnen Videografie, Luftbildaufnahmen, Luftaufnahmen München, Drohnen Fotos München, Drohne Bayern"
			}
		]);

		// Example Image
		const exampleImage = new Image();
		exampleImage.onload = () => setTimeout(() => this.realEstateExampleRef.nativeElement.style.backgroundImage = "url(../../../assets/img/RealEstateHamburg.jpg)", 200);
		exampleImage.src = "../../../assets/img/RealEstateHamburg.jpg";
	}

	// Prevent Rightclick on the Video
	preventContextMenu(event: MouseEvent) {
		event.preventDefault();
	}

	// Enable Pausing the video on click
	LeistungenVideoClicked() {
		const video = this.videoRef.nativeElement;

		if(video.paused){
			video.play();
		}
		else{
			video.pause();
		}
	}

	showItems = [
		{
			title: "Immobilien",
			description: "Präsentieren Sie Ihre Immobilie in ihrer besten Perspektive. Unsere Drohnenfoto- & Videografie erfasst beeindruckende Luftaufnahmen, die die Architektur, den umliegenden Bereich und die besonderen Merkmale Ihrer Immobilie hervorheben. Lassen Sie potenzielle Käufer oder Mieter sich von der Schönheit und Einzigartigkeit Ihrer Immobilie überzeugen.",
			imageSrc: "../../assets/img/Immobilie.jpg",
			imageAlt: "Drohnen Luftaufnahme einer modernen Immobilie mit Solarzellen auf dem Dach im Sonnenuntergang",
			reverse: false
		},
		{
			title: "Natur",
			description: "Erkunden Sie die unberührte Schönheit der Natur aus der Vogelperspektive. Unsere Drohnen ermöglichen es Ihnen, atemberaubende Landschaften, majestätische Berge, weite Meere und andere natürliche Wunder in fesselnden Bildern festzuhalten. Tauchen Sie ein in die Natur und lassen Sie sich von ihrer Pracht begeistern.",
			imageSrc: "../../assets/img/Surf.jpg",
			imageAlt: "Drohnen Fotografie eines Surfers im Licht der untergehenden Sonne, im Hintergrund erloschener Vulkan",
			reverse: true
		},
		{
			title: "Industrie & Gewerbe",
			description: "Gewinnen Sie neue Einblicke in die industrielle Welt. Unsere Drohnenfoto- & Videografie eröffnet Ihnen die Möglichkeit, beeindruckende Aufnahmen von Fabrikanlagen, Baustellen, Energieerzeugungsanlagen und vielem mehr zu erhalten. Nutzen Sie diese Perspektive, um Ihre Projekte, Fortschritte und Leistungen im industriellen Bereich zu dokumentieren und zu präsentieren.",
			imageSrc: "../../assets/img/Industrie.jpg",
			imageAlt: "Drohnenaufnahme eines Containerschiffes von hinten, welches in den Neusser Hafen einläuft. Außenrum Gewerbe & Industrie",
			reverse: false
		},
		{
			title: "Events",
			description: "Halten Sie besondere Momente fest, die in Erinnerung bleiben. Unsere Drohnenfoto- & Videografie fängt die Aufregung und Atmosphäre von Events wie Hochzeiten, Konzerten, Sportveranstaltungen und Firmenfeiern aus der Luft ein. Verleihen Sie Ihrem Event eine einzigartige Perspektive und erschaffen Sie bleibende Erinnerungen für sich und Ihre Gäste.",
			imageSrc: "../../assets/img/Events.jpg",
			imageAlt: "Drohnenfotografie des Events Osterfeuer, darum herum eine Menschenmenge, außerdem Food trucks und die Feuerwehr",
			reverse: true
		},
		{
			title: "Individuell",
			description: "Ihre Visionen, unsere Umsetzung. Wir bieten Ihnen maßgeschneiderte Drohnenfoto- & Videografie, die auf Ihre individuellen Bedürfnisse zugeschnitten ist. Egal ob für besondere Projekte, kreative Ideen oder spezielle Anforderungen - wir arbeiten eng mit Ihnen zusammen, um Ihre Vorstellungen zu verwirklichen und einzigartige Ergebnisse zu liefern, die Ihre Erwartungen übertreffen.",
			imageSrc: "../../assets/img/Drone.jpg",
			imageAlt: "Nahaufnahme einer Drohne mit Kamera, im Hintergrund Sonnenuntergang",
			reverse: false
		}
	];
}
