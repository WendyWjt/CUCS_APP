import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HzivPage } from './hziv.page';

describe('HzivPage', () => {
  let component: HzivPage;
  let fixture: ComponentFixture<HzivPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HzivPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HzivPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
