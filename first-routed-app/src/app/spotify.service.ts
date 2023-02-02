import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './environments/environments.component';
//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) { }
  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({Authorization: environment.oauthToken});

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDdElcw9wp8HR9I1ApiiPvXHLSQcWwqHN32XPMxpAf6PV2KhO-I-s7Yw9yaO0le_8d2D_T-jRpWB_7NgFr3X56rh32RVqot3hW8z_AT9U-MODppASR056EWZXbdMGm7Pi9xULEvEmXnT6CrlRuTiGZ3CiVJO5YgNBCqVpo-hPeuRmjFkVPoa5FYYCwjyYlW1trc'
    });
    
    return this.http.get(url, { headers });
  }
}
