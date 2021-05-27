import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Posts} from "../models/postsInterface";

@Injectable({
  providedIn: 'root'
})
export class PostsFetchService {
  private url: string = 'https://jsonplaceholder.typicode.com/posts'


  constructor(private httpClient: HttpClient) {
  }

  getPosts() {
   return  this.httpClient.get<Posts[]>(this.url)

  }

}
