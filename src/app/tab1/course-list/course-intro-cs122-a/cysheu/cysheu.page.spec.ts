import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CysheuPage } from './cysheu.page';

describe('CysheuPage', () => {
  let component: CysheuPage;
  let fixture: ComponentFixture<CysheuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CysheuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CysheuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
