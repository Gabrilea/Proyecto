import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AyudaSoportePage } from './ayuda-soporte.page';

describe('AyudaSoportePage', () => {
  let component: AyudaSoportePage;
  let fixture: ComponentFixture<AyudaSoportePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyudaSoportePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AyudaSoportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
