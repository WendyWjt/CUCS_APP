import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IgasskoPage } from './igassko.page';

describe('IgasskoPage', () => {
  let component: IgasskoPage;
  let fixture: ComponentFixture<IgasskoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgasskoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IgasskoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
