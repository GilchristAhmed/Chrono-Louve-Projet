import {createLinkedSignal} from "@angular/core/primitives/signals";

export class user {
    constructor(public UserId:string,
                public Nom: string,
                public Prenom: string,
                public Telephone: string,
                public Email: string,
                public Adresse: string,
                public CodePostal: number,
                public Ville: string,
                public Pays: string,
                public Password: string,
                public Role: string,
                public CreateAt: Date,
                public PhotoUrl: string) {

    }

    UpdateUser(): void {}
    RemoveUser(): void {}
}


