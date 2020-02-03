import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SsagoPage } from './ssago.page';

describe('SsagoPage', () => {
  let component: SsagoPage;
  let fixture: ComponentFixture<SsagoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsagoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SsagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
