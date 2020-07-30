import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportarProblemasPage } from './reportar-problemas.page';

describe('ReportarProblemasPage', () => {
  let component: ReportarProblemasPage;
  let fixture: ComponentFixture<ReportarProblemasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportarProblemasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportarProblemasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
