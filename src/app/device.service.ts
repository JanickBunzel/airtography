import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DeviceService {
	isMobile: boolean;

	constructor() {
		const userAgent = navigator.userAgent.toLowerCase();
		this.isMobile = /iphone|ipad|ipod|android|blackberry|webos|windows phone/i.test(userAgent);
	}
}