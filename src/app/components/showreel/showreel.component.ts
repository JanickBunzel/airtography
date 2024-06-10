import { formatDate } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { faPause, faPlay, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { DeviceService } from 'src/app/device.service';

@Component({
  selector: 'airtography-showreel',
  templateUrl: './showreel.component.html',
  styleUrls: ['./showreel.component.css']
})
export class ShowreelComponent {
	@ViewChild('Showreel') showreelRef!: ElementRef;
	@ViewChild('VideoOverlayButtonReplay') VideoOverlayButtonReplayRef!: ElementRef;
	@ViewChild('VideoOverlayButtonPausePlay') VideoOverlayButtonPausePlayRef!: ElementRef;
	@ViewChild('VideoCopyright') videoCopyrightRef!: ElementRef;

	faPlayPause = faPlay;
	faReplay = faRotateLeft;

	overlayTimer: any;
	readonly mouseRestDurationOnVideoOverlay = 3000; // ms
	hideCursor: boolean = false;
	
	showreel: any;

	devmode: boolean = false;

	userClickedPlay = false;

	isMobile = false;

	constructor(
		private deviceService: DeviceService
	){
		this.isMobile = true; //this.deviceService.isMobile;
	}

	ngAfterViewInit(){
		this.showreel = this.showreelRef.nativeElement;

		const observer = new IntersectionObserver(([entry]) => {
			if(entry.isIntersecting)
				this.showreel.paused ? this.ShowVideoOverlay() : this.HideVideoOverlay();
		});
		observer.observe(this.showreel);

		this.videoCopyrightRef.nativeElement.style.display = "none";
		this.VideoOverlayButtonReplayRef.nativeElement.style.display = "none";
	}

	// Video Controls
	VideoPausePlayButton() {
		this.showreel.paused ? this.VideoPlay() : this.VideoPause();
		if(!this.deviceService.isMobile){
			this.faPlayPause = this.showreel.paused ? faPlay : faPause;
			this.StartVideoOverlayTimer();
		}
	}
	VideoPlay(){
		this.showreel.play();
		if(!this.deviceService.isMobile) this.faPlayPause = faPause;
		if(!this.userClickedPlay){
			this.userClickedPlay = true;
			this.videoCopyrightRef.nativeElement.style.display = "block";
			if(!this.deviceService.isMobile) this.VideoOverlayButtonReplayRef.nativeElement.style.display = "block";
		}
	}
	VideoPause(){
		this.showreel.pause();
		if(!this.deviceService.isMobile) this.faPlayPause = faPlay;
	}
	VideoRestart(){
		this.showreel.currentTime = 0;
		this.showreel.play();
		this.faPlayPause = faPause;
		this.HideVideoOverlay();
	}
	VideoOverlayClicked(){
		if(this.deviceService.isMobile){
			this.showreel.paused ? this.ShowVideoOverlay() : this.HideVideoOverlay();
		}
	}

	// Video Overlay Timer
	StartVideoOverlayTimer(){
		this.CancelVideoOverlayTimer();

		this.overlayTimer = setTimeout(() => {
			if(!this.showreel.paused) this.HideVideoOverlay();
		}, this.mouseRestDurationOnVideoOverlay);
	}
	CancelVideoOverlayTimer(){
		clearTimeout(this.overlayTimer);
	}
	// Video Overlay Appearance
	ShowVideoOverlay(){
		this.VideoOverlayButtonReplayRef.nativeElement.style.opacity = 1;
		this.VideoOverlayButtonReplayRef.nativeElement.style.cursor = "pointer";
		this.VideoOverlayButtonPausePlayRef.nativeElement.style.opacity = 1;
		this.VideoOverlayButtonPausePlayRef.nativeElement.style.cursor = "pointer";
		this.faPlayPause = this.showreel.paused ? faPlay : faPause;
	}
	HideVideoOverlay(){
		this.VideoOverlayButtonReplayRef.nativeElement.style.opacity = 0;
		this.VideoOverlayButtonReplayRef.nativeElement.style.cursor = "none";
		this.VideoOverlayButtonPausePlayRef.nativeElement.style.opacity = 0;
		this.VideoOverlayButtonPausePlayRef.nativeElement.style.cursor = "none";
	}

	ShowreelStats(input: string){
		if(this.devmode) console.log("[showreelStats] " + formatDate(new Date(), "HH:mm:ss.SSS", "de-CH") + ": " + input);
	}

	public SeeStats(){
		this.devmode = true;
		console.log("%cdevmode entered.", "font-style: italic");
		console.log("%cHi Janick", "font-weight: bold");
		// "Use as variable" -> ng.getComponent(temp0).SeeStats()
	}
}
