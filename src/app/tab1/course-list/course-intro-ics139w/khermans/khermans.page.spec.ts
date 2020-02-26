import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhermansPage } from './khermans.page';

describe('KhermansPage', () => {
  let component: KhermansPage;
  let fixture: ComponentFixture<KhermansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhermansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhermansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
