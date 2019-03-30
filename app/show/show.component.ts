import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post.model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  showPost: Array<Post> = [];

  constructor(private _postService: PostService,
   private _route: ActivatedRoute,
   private _router: Router) { }

  ngOnInit() {
    // Todo: Read id from params, and then use that ID to get via PostService
    this._route.params.subscribe(params => {
       this._postService.get(params.id)
       .subscribe(
         (response) => {
           this.showPost = response;
         },
         (error) => console.log(error),
         () => console.log('Successful')
       );
    })
  }

  delete(postId: number) {
    // Todo: Delete the post via PostService and then redirect to home
    this._postService.delete(postId).subscribe(
      () => {
        this._router.navigate(['/index']);
        alert("Post deleted successfully!");
      }
      
    );
  }
}