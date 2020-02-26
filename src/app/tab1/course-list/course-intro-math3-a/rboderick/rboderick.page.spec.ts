import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RboderickPage } from './rboderick.page';

describe('RboderickPage', () => {
  let component: RboderickPage;
  let fixture: ComponentFixture<RboderickPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RboderickPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RboderickPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
