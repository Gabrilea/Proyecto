import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProveedorPage } from './proveedor.page';

const routes: Routes = [
  {
    path: '',
    component: ProveedorPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: ( ) => import('../home/home.module').then(m => m.HomePageModule),
          }
        ]
      },
      {
        path: 'establecimiento',
        children: [
          {
            path: '',
            loadChildren: ( ) => import('../establecimiento1/establecimiento1.module').then(m => m.Establecimiento1PageModule),
          }
        ]
      },
      {
        path: 'productos',
        children: [
          {
            path: '',
            loadChildren: ( ) => import('../productos/productos.module').then(m => m.ProductosPageModule),
          }
        ]
      },
      {
        path: 'perfil-proveedor',
        children: [
          {
            path: '',
            loadChildren: ( ) => import('../perfil-proveedor/perfil-proveedor.module').then(m => m.PerfilProveedorPageModule),
          }
        ]
      }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProveedorPageRoutingModule {}
