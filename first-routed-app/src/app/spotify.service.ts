import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) { }
  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDB0h2eF0_1PQrMCug1fRPZSj6_iXz10XFaYUq5jJtq1Z1KPceTTuBRmyxF8KDOtcEHUyd2YKz7jZN07d8rrHCYjV3_Be0LlAp0uWWHfjMIMDFU9Jv0SPJFbIAHuFfpH95yVUEt_WBgNzWCzbsYgagq7DU2hscfeWLI9BU3LkUpxF0FG-0gC5mdBPtz4E8IQmMK'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

}
