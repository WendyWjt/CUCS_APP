import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseIntroIcs6dPage } from './course-intro-ics6d.page';

describe('CourseIntroIcs6dPage', () => {
  let component: CourseIntroIcs6dPage;
  let fixture: ComponentFixture<CourseIntroIcs6dPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseIntroIcs6dPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseIntroIcs6dPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
