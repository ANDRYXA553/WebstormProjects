import { Component, OnInit } from '@angular/core';
import {PostsFetchService} from "../../services/posts-fetch.service";
import {Posts} from "../../models/postsInterface";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 posts:Posts[]
  constructor(private postsFetchService:PostsFetchService) { }

  ngOnInit(): void {
    this.postsFetchService.getPosts().subscribe(value =>this.posts=value )

  }

}
