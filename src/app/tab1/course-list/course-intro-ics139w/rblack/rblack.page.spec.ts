import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RblackPage } from './rblack.page';

describe('RblackPage', () => {
  let component: RblackPage;
  let fixture: ComponentFixture<RblackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RblackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RblackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
