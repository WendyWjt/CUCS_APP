import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MdillencourtPage } from './mdillencourt.page';

describe('MdillencourtPage', () => {
  let component: MdillencourtPage;
  let fixture: ComponentFixture<MdillencourtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdillencourtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MdillencourtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
