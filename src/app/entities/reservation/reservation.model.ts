import { Creneau } from "../creneau/creneau.model";
import { Formateur } from "../formateur/formateur.model";
import { FormateurModule } from "../formateur/formateur.module";
import { Matiere } from "../matiere/matiere.model";
import { Salle } from "../salle/salle.model";

export interface IReservation {
    id?: number;
    salle? : Salle ;
	  creneau?  : Creneau;
	  matiere?  : Matiere;
    formateur? : Formateur;
    date? : Date;
   
  }
  export class Reservation implements IReservation {
    constructor(
     public id?: number,
     public salle? : Salle ,
	   public creneau?  : Creneau ,
	   public matiere?  : Matiere, 
     public  formateur?  : Formateur,
    public date? : Date,
    ) {}
  }
