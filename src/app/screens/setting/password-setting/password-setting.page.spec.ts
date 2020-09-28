import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PasswordSettingPage } from './password-setting.page';

describe('PasswordSettingPage', () => {
  let component: PasswordSettingPage;
  let fixture: ComponentFixture<PasswordSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
