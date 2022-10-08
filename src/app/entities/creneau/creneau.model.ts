import { Time } from "@angular/common";

export interface ICreneau {
    id?: number;
    heureDebut? : Date ;
    heureFin? : Date ;
	  
   
  }
  export class Creneau  implements ICreneau  {
    constructor(
        public  id?: number,
        public heureDebut? : Date ,
        
        public heureFin? : Date ,
        
        
    
    ) {}
  }