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
        'Bearer BQDfxs2x43s0qnoryEH5BJItmTVyTsSYd3etxBlcSeSEDiUqD4JfNfJf-7CanHPJ2n9yCE0Ha5dTOnCZGgAc0iuImMICXqN5WzkKU_qH8LnZAh-vJ1BTnxFrD5C5IRVzcKOzB62vF4AC_eAilMYL7LmQNeMv70FhNBuIWNLdAInuO0D_Yt4CzgCyWp6uJ6bX-OsC'
    });
    
    return this.http.get(url, { headers });
  }
}
