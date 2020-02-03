import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IharrisPage } from './iharris.page';

describe('IharrisPage', () => {
  let component: IharrisPage;
  let fixture: ComponentFixture<IharrisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IharrisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IharrisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
