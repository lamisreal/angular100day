import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { UserComponent } from './user/user.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorsDetailsComponent } from './authors-details/authors-details.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UserComponent,
    ProgressBarComponent, //ParentComponent to ChildComponent
    AuthorsListComponent, //ChildComponent to ParentComponent
    AuthorsDetailsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
