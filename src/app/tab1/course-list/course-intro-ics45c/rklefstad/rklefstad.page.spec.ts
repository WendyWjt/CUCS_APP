import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RklefstadPage } from './rklefstad.page';

describe('RklefstadPage', () => {
  let component: RklefstadPage;
  let fixture: ComponentFixture<RklefstadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RklefstadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RklefstadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
