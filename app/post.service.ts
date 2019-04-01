import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './post.model';
import { map } from 'rxjs/operators';

@Injectable()
export class PostService {
  constructor(private _http: HttpClient) { }
  baseUrl = 'https://pngtest.eu.ngrok.io/posts/';
  index(author?: string): Observable<Array<Post>> {
    /**
     * Todo: GET /posts?author=string
     * Todo: Map JSON to Array of Posts (only id, author and title)
     * Todo: Return Observable as Array of Posts
     */
    return this._http.get(this.baseUrl).pipe(
      map((body: Array<any>) => {
        return body.map(postBody => { // the index returns an array of posts.
          return this._mapToPost(postBody);
        });
      })
    );
  }

  get(id: number): Observable<Post> {
    /**
     * Todo: GET /posts/id 
     * Todo: Map JSON to Post model (only id, author and title)
     * Todo: Return as Observable<Post>
     */
    return this._http.get(this.baseUrl + id).pipe(
      map((body) => {
        return this._mapToPost(body);
      })
    );
  }

  create(post: Post) : Observable<object> {
    /* 
    * Should POST like this 
    * {
    *   "post": 
    *   {
    *     "title": "Title",
    *     "author": "Author"
    *   }
    * }
    */
    return this._http.post(this.baseUrl, post);
  }

  delete(post: Post) : Observable<object> {
    // Todo: DELETE /post/post.id
    // If it's successful, there will be no response body. 
    return this._http.delete(this.baseUrl + post);
  }

  private _mapToPost(postBody: any): Post {
    
    const post = new Post(postBody.title, postBody.author, postBody.id);
    //Todo map to id, author and title.
    return post;
  }
}
