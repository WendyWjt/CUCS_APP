import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SjareckiPage } from './sjarecki.page';

describe('SjareckiPage', () => {
  let component: SjareckiPage;
  let fixture: ComponentFixture<SjareckiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SjareckiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SjareckiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
