import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseIntroIcs32aPage } from './course-intro-ics32a.page';

describe('CourseIntroIcs32aPage', () => {
  let component: CourseIntroIcs32aPage;
  let fixture: ComponentFixture<CourseIntroIcs32aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseIntroIcs32aPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseIntroIcs32aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
