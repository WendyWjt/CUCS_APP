import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseIntroIcs33Page } from './course-intro-ics33.page';

describe('CourseIntroIcs33Page', () => {
  let component: CourseIntroIcs33Page;
  let fixture: ComponentFixture<CourseIntroIcs33Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseIntroIcs33Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseIntroIcs33Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
