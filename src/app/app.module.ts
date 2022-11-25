import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemService } from './media-item.service';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    MediaItemService
  ]
})
export class AppModule {}
