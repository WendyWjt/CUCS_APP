import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalfaroPage } from './salfaro.page';

describe('SalfaroPage', () => {
  let component: SalfaroPage;
  let fixture: ComponentFixture<SalfaroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalfaroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalfaroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
