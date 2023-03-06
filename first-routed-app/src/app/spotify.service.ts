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
        'Bearer BQBGC-wKMY2VrpdBsSQDIMXXNzXCTQ9dtCq13cip11tFgwZuafUZOmHzG47VWan-td2mf8DXiDnvK5i3KGui-TqLmcpQLiG9iaJqV606W478fbTnoWMx8omV0XUtJmGnYs_o10lRKo9PFLes7xXOctFjLzHxEuKkeUt9RTz-wY4NdMZbjLGP1ukbL_53tSgv-Qer'
    });
    
    return this.http.get(url, { headers });
  }

  getArtist(id: string) {
    const url = `https://api.spotify.com/v1/artists/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBGC-wKMY2VrpdBsSQDIMXXNzXCTQ9dtCq13cip11tFgwZuafUZOmHzG47VWan-td2mf8DXiDnvK5i3KGui-TqLmcpQLiG9iaJqV606W478fbTnoWMx8omV0XUtJmGnYs_o10lRKo9PFLes7xXOctFjLzHxEuKkeUt9RTz-wY4NdMZbjLGP1ukbL_53tSgv-Qer'
    });
    
    return this.http.get(url, { headers });
  }
}
