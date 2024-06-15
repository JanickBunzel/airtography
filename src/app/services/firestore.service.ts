import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { getAuth, signInAnonymously, onAuthStateChanged } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FirestoreService {
    private userId = "";

    private submits = 0;
    private readonly maxSubmits = 5;

    constructor(
        private firestore: AngularFirestore
    ) {
        this.SignInAnonymously();
    }

    public async SubmitForm(collection: string, doc: string, form: NgForm): Promise<boolean> {
        // Simple spam protection
        if (this.submits >= this.maxSubmits) {
            console.log("[FirestoreService]: Maximum number of submits reached.");
            return false;
        }

        // If not production, choose dev collection
        if (!environment.production) {
            collection = "dev_" + collection;
        }

        // Add further details
		const docName = doc + "_" + formatDate(new Date(), "YYYYMMdd_HHmmss", "de-DE");
        form.value.timestamp = new Date();
        form.value.FIREBASE_userId = this.userId;
        form.value.FIREBASE_passcode = process.env['FIREBASE_passcode'] || 'Not loaded from env';

        // Submit to Firestore
        console.log("[FirestoreService]: Submitting... " + docName);
        try {
            await this.firestore.collection(collection).doc(docName).set(form.value);
            console.log("[FirestoreService]: Submit successful.");
            return true;
        } catch (error) {
            console.log("[FirestoreService]: Error on submit: ", error);
            return false;
        }
    }

    private SignInAnonymously() {
        console.log("[FirestoreService]: Signing in anonymously...");

        const auth = getAuth();
        signInAnonymously(auth)
            .catch((error) => {
                console.error("[FirestoreService]: Error signing in: ", error);
            });
        
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("[FirestoreService]: Sign in updated: " + user.uid);
            } else {
                console.log("[FirestoreService]: Signed out");
            }
        });
    }

    public getUserId(): string {
        return this.userId;
    }    
}
