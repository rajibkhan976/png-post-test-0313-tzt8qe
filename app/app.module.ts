import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './app.routes';
import { PostService } from './post.service';
@NgModule({
  imports:      [ HttpClientModule, BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, ShowComponent, CreateComponent, IndexComponent ],
  providers: [PostService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
