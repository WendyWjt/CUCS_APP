import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DgkayPage } from './dgkay.page';

describe('DgkayPage', () => {
  let component: DgkayPage;
  let fixture: ComponentFixture<DgkayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgkayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DgkayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
