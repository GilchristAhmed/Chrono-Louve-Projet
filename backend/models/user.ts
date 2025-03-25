export class user {
    constructor(public UserId:String, public Nom: String, public Prenom: String, public Telephone: String, public Email: String, public Adresse: String, public CodePostal: number, public Ville: String, public Pays: String, public Password: String, public Role: String, public CreateAt: Date, public PhotoUrl: String) {

    }

    UpdateUser(): void {}
    RemoveUser(): void {}
}
