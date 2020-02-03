import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LbicPage } from './lbic.page';

describe('LbicPage', () => {
  let component: LbicPage;
  let fixture: ComponentFixture<LbicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LbicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
