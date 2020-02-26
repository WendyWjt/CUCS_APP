import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MibrahimPage } from './mibrahim.page';

describe('MibrahimPage', () => {
  let component: MibrahimPage;
  let fixture: ComponentFixture<MibrahimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MibrahimPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MibrahimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
