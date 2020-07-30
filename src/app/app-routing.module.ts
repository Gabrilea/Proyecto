import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'ingresar',
    loadChildren: () => import('./pages/ingresar/ingresar.module').then( m => m.IngresarPageModule)
  },
  {
    path: 'olvide-password',
    loadChildren: () => import('./pages/olvide-password/olvide-password.module').then( m => m.OlvidePasswordPageModule)
  },
  {
    path: 'establecimientos',
    loadChildren: () => import('./pages/establecimientos/establecimientos.module').then( m => m.EstablecimientosPageModule)
  },
  {
    path: 'ingresa-productos',
    loadChildren: () => import('./pages/ingresa-productos/ingresa-productos.module').then( m => m.IngresaProductosPageModule)
  },
  {
    path: 'establecimiento1',
    loadChildren: () => import('./pages/establecimiento1/establecimiento1.module').then( m => m.Establecimiento1PageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'perfil-proveedor',
    loadChildren: () => import('./pages/perfil-proveedor/perfil-proveedor.module').then( m => m.PerfilProveedorPageModule)
  },
  {
    path: 'perfil-password',
    loadChildren: () => import('./pages/perfil-password/perfil-password.module').then( m => m.PerfilPasswordPageModule)
  },
  {
    path: 'perfil-pagos',
    loadChildren: () => import('./pages/perfil-pagos/perfil-pagos.module').then( m => m.PerfilPagosPageModule)
  },
  {
    path: 'calificaciones',
    loadChildren: () => import('./pages/calificaciones/calificaciones.module').then( m => m.CalificacionesPageModule)
  },
  {
    path: 'proveedor',
    loadChildren: () => import('./pages/proveedor/proveedor.module').then( m => m.ProveedorPageModule)
  },
  {
    path: 'reportar-problemas',
    loadChildren: () => import('./pages/reportar-problemas/reportar-problemas.module').then( m => m.ReportarProblemasPageModule)
  },
  {
    path: 'ayuda-soporte',
    loadChildren: () => import('./pages/ayuda-soporte/ayuda-soporte.module').then( m => m.AyudaSoportePageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
