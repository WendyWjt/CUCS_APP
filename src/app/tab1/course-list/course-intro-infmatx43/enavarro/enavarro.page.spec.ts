import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnavarroPage } from './enavarro.page';

describe('EnavarroPage', () => {
  let component: EnavarroPage;
  let fixture: ComponentFixture<EnavarroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnavarroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnavarroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
