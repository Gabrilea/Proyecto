import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngresaProductosPage } from './ingresa-productos.page';

describe('IngresaProductosPage', () => {
  let component: IngresaProductosPage;
  let fixture: ComponentFixture<IngresaProductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresaProductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngresaProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
