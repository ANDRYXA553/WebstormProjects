import {Component, Input, OnInit} from '@angular/core';
import {Posts} from "../../../models/postsInterface";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post:Posts

  constructor() { }

  ngOnInit(): void {
  }

}
