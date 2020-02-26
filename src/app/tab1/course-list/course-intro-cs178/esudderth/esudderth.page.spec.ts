import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EsudderthPage } from './esudderth.page';

describe('EsudderthPage', () => {
  let component: EsudderthPage;
  let fixture: ComponentFixture<EsudderthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsudderthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EsudderthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
