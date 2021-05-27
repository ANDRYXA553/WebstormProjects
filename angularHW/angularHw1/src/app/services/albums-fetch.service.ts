import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Albums} from "../models/albumsInterface";

@Injectable({
  providedIn: 'root'
})
export class AlbumsFetchService {
private url='https://jsonplaceholder.typicode.com/albums'
  constructor(private httpClient:HttpClient) {

  }
  getAlbums(){
   return this.httpClient.get<Albums[]>(this.url)
  }
}
