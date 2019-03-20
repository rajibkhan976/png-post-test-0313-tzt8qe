Help us create an app to show our posts! 

!!! Fork this project !!!

* First we need to setup our Post model to contain three properties (id, author and title). This should be done in the post.model.ts file.

* We need to map the properties in the PostService (post.service.ts) index, get and post method

* We need to show the values in the index.component.html. Using <li *ngFor="let post of posts"> {{post.title}} </li> should get you started, but you can use any method you like to achieve this. 

* Each post should have a link to it's own show page

* The show page (show.component.*) needs to fetch the post and show it's data. A button (or similar) should trigger a delete of that post. A confirmation of some kind would be nice :). To get the id of the post from the route, you need to read the route params. This section of the official angular guide should cover it https://angular.io/tutorial/toh-pt5#routable-herodetailcomponent


* We need to setup a form for both the search and create. We have scaffolded a simple form in create.component.html but we need to do some bindings to make it work. The search is up to you, if you feel like doing it. 

* The PostService is incomplete, all methods are in need of some tuning. Make sure you don't forget to return the correct type!  

Each file that needs work also have a simple todo list.

If you feel that any of this is unclear or you need help(it's ok), don't hesitate to ask us. Don't feel overwelmed by this assignment, this is an opportunity for you to get a glimpse on the tools we use. 

Don't worry about styling, only style what you want to style. 

The Rails API can be access through chrome or Postman using the following routes:

GET https://pngtest.eu.ngrok.io/posts -> Post Index
GET https://pngtest.eu.ngrok.io/posts/:id -> Post Show
POST https://pngtest.eu.ngrok.io/posts -> Post Create
PATCH https://pngtest.eu.ngrok.io/posts/:id -> Post Edit (Not covered in this App, but you can use it)
DELETE https://pngtest.eu.ngrok.io/posts/:id -> Post Delete
