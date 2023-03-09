import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit{
  routeObs!: Observable<ParamMap>; 
  album : any; //Qui salverò la traccia selezionata
  spotifyServiceObs!: Observable<Object>;
  constructor(
    private route: ActivatedRoute,
    private service: SpotifyService){}


  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  //Ogni volta che viene invocata la route tracks/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let albumId = params.get('id'); //Ottengo l'id dai parametri
    console.log (albumId); //Stampo su console
    //spotifyServiceObs va dichiarato
    if(albumId != null)
    {    
      this.spotifyServiceObs = this.service.getAlbum(albumId) ;
      this.spotifyServiceObs.subscribe((data)=>this.album = data)}

  }
}
