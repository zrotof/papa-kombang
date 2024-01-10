import { Injectable,  } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeddingConfirmationService {

  weddingConfirmationBaseUrl = environment.apiBaseUrl+"mails/"
  constructor( private http : HttpClient) { }

  confirmCivilWedding(data : any) : Observable<any> {
    return this.http.post<any>(this.weddingConfirmationBaseUrl+"civil-wedding", data)
  }

  confirmReligiousWedding(data : any) : Observable<any> {
    return this.http.post<any>(this.weddingConfirmationBaseUrl+"religious-wedding", data)
  }
}
