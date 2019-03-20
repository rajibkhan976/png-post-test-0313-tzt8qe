import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import { Post } from '../post.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  /**
   * Todo: 
   * Show posts
   * Create a form for searching for a author, check CreatComponent for inspiration
   */
  posts: Array<Post> = [];
  constructor(private _postService: PostService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._postService.index().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    })
  }
  navigate(postTitle: string):void {
    for (var postItem in this.posts) {
      if (postTitle === this.posts[postItem].title) {
        this._router.navigate(['/show', this.posts[postItem].id]);
      }
    }
  }

}