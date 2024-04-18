import { Routes } from '@angular/router';
import { PlayerListComponent } from './model/player/player-list/player-list.component';


export const routes: Routes = [
  { path: 'player/list', component: PlayerListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'player/list' },

];
