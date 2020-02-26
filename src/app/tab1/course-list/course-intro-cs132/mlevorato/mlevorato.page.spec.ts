import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MlevoratoPage } from './mlevorato.page';

describe('MlevoratoPage', () => {
  let component: MlevoratoPage;
  let fixture: ComponentFixture<MlevoratoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlevoratoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MlevoratoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
