import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JlwmaPage } from './jlwma.page';

describe('JlwmaPage', () => {
  let component: JlwmaPage;
  let fixture: ComponentFixture<JlwmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JlwmaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JlwmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
