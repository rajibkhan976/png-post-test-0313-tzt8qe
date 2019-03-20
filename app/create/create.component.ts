import { Component, OnInit } from '@angular/core';
import {PostService } from '../post.service';
import { Post } from '../post.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  showForm: boolean = false;
  model: Post = new Post('','','');
  posts: Array<Post> = [];

constructor(private _postService: PostService, private _router: Router) {
  
}
  
  /**
   * Todo: Create a Post Instance and then use that instance to bind the properties with ngModel in the view. 
   */
  ngOnInit(): void {}

  create(): void {
  // Todo: Create the post and then redirect to that posts show page.
          this._postService.create(this.model).subscribe(
            () => { this._postService.index().subscribe((posts) => {
              for (var singlePost in posts) {
                if (this.model.title === posts[singlePost].title)
                    //console.log(posts[singlePost]);
                    this._router.navigate(['/show', posts[singlePost].id]);
                  }
                })
              }  
            );
          }     

  toggleForm(): void {
    this.showForm = !this.showForm;
  }
  getButtonText(): string {
    if(this.showForm) {
      return 'Hide form';
    } else {
      return 'Show form';
    }
  }
}