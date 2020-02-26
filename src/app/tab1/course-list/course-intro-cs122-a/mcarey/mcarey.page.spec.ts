import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { McareyPage } from './mcarey.page';

describe('McareyPage', () => {
  let component: McareyPage;
  let fixture: ComponentFixture<McareyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McareyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(McareyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
