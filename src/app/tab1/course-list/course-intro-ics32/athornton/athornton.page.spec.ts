import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AthorntonPage } from './athornton.page';

describe('AthorntonPage', () => {
  let component: AthorntonPage;
  let fixture: ComponentFixture<AthorntonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthorntonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AthorntonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
