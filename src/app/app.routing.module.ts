import {NgModule} from '@angular/core';
import {PreloadingStrategy, Router, RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
