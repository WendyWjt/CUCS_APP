import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AreganPage } from './aregan.page';

describe('AreganPage', () => {
  let component: AreganPage;
  let fixture: ComponentFixture<AreganPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreganPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AreganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
