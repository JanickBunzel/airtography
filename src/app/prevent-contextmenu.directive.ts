import { Directive, HostListener } from "@angular/core";

@Directive({
	selector: "img, video, [preventContextMenu]"
})

export class PreventContextMenuDirective {
	@HostListener("contextmenu", ["$event"])
	onContextMenu(event: Event){
		event.preventDefault();
	}
}