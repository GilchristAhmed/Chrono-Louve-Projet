import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  standalone: true,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{

  nom!: String;
  prenom!: String;
  telephone!: String;
  email!: String;
  adresse!: String;
  codePostal!: number;
  ville!: String;
  pays!: String;
  password!: String;
  role!: String;
  CreateAt!: Date;
  photoUrl!: String;

  ngOnInit(): void {
    this.nom = "nom";
    this.prenom = "prenom";
    this.email = "email";
    this.telephone = "telephone";
    this.adresse = "adresse";
    this.codePostal = 12345;
    this.ville = "ville";
    this.pays = "pays";
    this.password = "password";
    this.role = "utilisateur";
    this.CreateAt = new Date();
    this.photoUrl = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";
  }

}
