import { Routes , RouterModule } from "@angular/router";
import { MediaItemComponent } from "./media-item.component";
import { MediaItemListComponent } from "./media-item-list.component";
const appRoutes: Routes = [
  {
    path: 'add',
    component: MediaItemComponent
  },
  {
    path: ':movie' , component:MediaItemListComponent
  },
  {
    path: '', redirectTo: 'all' , pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes);

