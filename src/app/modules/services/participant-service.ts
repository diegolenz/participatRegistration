import { HttpClient, HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class ParticipantService {

    readonly apiURL!: string;

    constructor(private http : HttpClient) {
        this.apiURL == 'http://localhost:8081';
    }
    
    get(code?: number) {
        
        this.http.get(`${ this.apiURL }/participant/find-by-id?code=1`)
           .subscribe(resultado => console.log(resultado));
    }
} 