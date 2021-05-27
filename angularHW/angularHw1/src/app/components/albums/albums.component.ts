import { Component, OnInit } from '@angular/core';
import {AlbumsFetchService} from "../../services/albums-fetch.service";
import {Albums} from "../../models/albumsInterface";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums:Albums[]
  constructor(private AlbumsFetchService:AlbumsFetchService) { }

  ngOnInit(): void {
    this.AlbumsFetchService.getAlbums().subscribe(value =>this.albums=value )
  }

}
