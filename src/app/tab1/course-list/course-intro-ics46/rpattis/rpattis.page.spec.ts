import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RpattisPage } from './rpattis.page';

describe('RpattisPage', () => {
  let component: RpattisPage;
  let fixture: ComponentFixture<RpattisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpattisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RpattisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
