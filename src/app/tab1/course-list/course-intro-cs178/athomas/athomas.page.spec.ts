import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AthomasPage } from './athomas.page';

describe('AthomasPage', () => {
  let component: AthomasPage;
  let fixture: ComponentFixture<AthomasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthomasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AthomasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
