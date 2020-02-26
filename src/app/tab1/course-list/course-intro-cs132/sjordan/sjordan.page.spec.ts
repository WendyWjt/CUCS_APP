import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SjordanPage } from './sjordan.page';

describe('SjordanPage', () => {
  let component: SjordanPage;
  let fixture: ComponentFixture<SjordanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SjordanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SjordanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
