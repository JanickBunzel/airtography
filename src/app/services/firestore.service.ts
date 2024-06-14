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

        console.log("[FirestoreService]: Submitting... " + doc);

        // If not production, choose dev collection
        if (!environment.production) {
            collection = "dev_" + collection;
        }

        // Add timestamp and userId
        form.value.timestamp = new Date();
        form.value.userId = this.userId;

        // Submit to Firestore
        try {
            await this.firestore.collection(collection).doc(doc).set(form.value);
            console.log("[FirestoreService]: Submit successful.");
            return true;
        } catch (error) {
            console.log("[FirestoreService]: Error on submit: ", error);
            return false;
        }
    }

    private SignInAnonymously() {
        console.log("Signing in anonymously...");

        const auth = getAuth();
        signInAnonymously(auth)
            .then(() => {
                if (auth.currentUser) {
                    console.log("User signed in: " + auth.currentUser.uid);
                    this.userId = auth.currentUser.uid;
                } else {
                    console.log("User not signed in.");
                    this.userId = "";
                }
            })
            .catch((error) => {
                console.error("Error signing in: ", error);
            });
        
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("Sign in updated: " + user.uid);
            } else {
                console.log("Signed out");
            }
        });
    }

    public getUserId(): string {
        return this.userId;
    }    
}
