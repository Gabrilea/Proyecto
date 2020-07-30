import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Establecimiento1Page } from './establecimiento1.page';

describe('Establecimiento1Page', () => {
  let component: Establecimiento1Page;
  let fixture: ComponentFixture<Establecimiento1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Establecimiento1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Establecimiento1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
