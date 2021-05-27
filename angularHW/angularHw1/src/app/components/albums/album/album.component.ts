import {Component, Input, OnInit} from '@angular/core';
import {Albums} from "../../../models/albumsInterface";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  @Input()
  album:Albums
  constructor() { }

  ngOnInit(): void {
  }

}
