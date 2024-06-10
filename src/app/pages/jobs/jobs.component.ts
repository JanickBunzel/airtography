import { Component } from '@angular/core';

@Component({
	selector: 'app-jobs',
	templateUrl: './jobs.component.html',
	styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
	jobs = [
		{
			title: "Drohnenpilot (m/w/d)",
			description: "Als Drohnenpilot/in bei Airtography bist Du für die Erstellung der Luftaufnahmen verantwortlich.\nDu fliegst die Kopter direkt beim Kunden und gewährleisten dabei die sichere Durchführung der Flüge. Dabei sind ein ästhetisches Auge und Erfahrung am wichtigsten.",
			qualifications: "Neben den erforderlichen Lizenzen der EU sind außerdem wichtig:\n - Erfahrung im Fliegen von Drohnen\n - Vertrautheit der Technik und Flugregelungen\n - Einwandfreie Kenntnisse über Sicherheits- und Datenschutzbestimmungen",
			bonus: "Erfahrung in der Fotografie oder Videografie",
			location: "Vor Ort, in München und Bayern",
			application: "Bitte schicke uns einen kurzen Lebenslauf von Dir und ein Portfolio mit einigen bisherigen Arbeiten/Aufnahmen."
		},
		{
			title: "Editor (m/w/d)",
			description: "Als Editor bei Airtography bist du für die professionelle Nachbearbeitung und den Schnitt der Luftaufnahmen, also Fotos und Videos verantwortlich.\nDu verleihst den Aufnahmen den letzten Schliff und sorgst für eine hochwertige visuelle Darstellung. Mit kreativen Auge schaffst Du beeindruckende visuelle Ergebnisse für den Kunden.",
			qualifications: "Natürlich Erfahrung in der Bildbearbeitung und im Videoschnitt, aber auch:\n - Verständnis für Ästhetik und Storytelling\n - Kenntnisse in der Farbkorrektur und Bildbearbeitung\n - Fähigkeit, Aufnahmen zu optimieren und visuelle sowie auditive Effekte hinzuzufügen",
			bonus: "Kenntnisse in relevanten Softwareprogrammen\n(z.B. Adobe Premiere Pro, Final Cut Pro oder vergleichbares)",
			location: "Vor Ort, Hybrid oder Remote",
			application: "Bitte schicke uns einen kurzen Lebenslauf von Dir und ein Portfolio mit einigen bisherigen Arbeiten/Aufnahmen."
		},
		{
			title: "Buchhalter (m/w/d)",
			description: "Als Buchhalter/in bei Airtography bist Du für die Steuer- und Finanzangelegenheiten verantwortlich. Du verwaltest die Buchhaltung, erstellst Finanzberichte, überwachst Budgets und unterstützt das Management bei finanziellen Entscheidungen. Du stellst sicher, dass unsere Finanzprozesse reibungslos ablaufen.",
			qualifications: "Fundierte Kenntnisse im Bereich Buchhaltung, Steuergesetze und Finanzmanagement\nErfahrung in der Erstellung von Finanzberichten, Abrechnungen und Budgetierung\nVertrautheit mit den gängigen Buchhaltungsstandards und -praktiken, vor allem Finanzanalysen",
			bonus: "Kaufmännische Ausbildung oder Studium im vergleichbarem Bereich",
			location: "Vor Ort oder Hybrid",
			application: "Bitte schicke uns einen kurzen Lebenslauf von Dir und mindestens eine Referenz von einem bisherigen Arbeitgeber."
		}
	];
}
