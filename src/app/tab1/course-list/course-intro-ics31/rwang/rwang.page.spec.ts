import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RwangPage } from './rwang.page';

describe('RwangPage', () => {
  let component: RwangPage;
  let fixture: ComponentFixture<RwangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RwangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RwangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
