import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { UserService } from '../user.service';
import { ComponentAComponent } from './component-a.component';

describe('Component A', () => {
  let component: ComponentAComponent;
  let fixture: ComponentFixture<ComponentAComponent>;
  let userService: UserService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ComponentAComponent],
      imports: [],
      providers: [
        { provide: UserService, useClass: UserServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentAComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);
    fixture.detectChanges();
  });

  it ('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should load all users on component init', () => {
    const users = [
      { id: 1, firstName: 'John', lastName: 'Doe' },
      { id: 2, firstName: 'Jane', lastName: 'Doe' },
    ];
    const users$ = of(users);
    spyOn(userService, 'loadAll').and.returnValue(users$);

    component.ngOnInit();

    expect(userService.loadAll).toHaveBeenCalled();
    expect(component.data).toBe(users);
  });

  it ('should show alert', () => {
    // spy on js native method
    spyOn(window, 'alert');

    component.handleClick();

    expect(window.alert).toHaveBeenCalledWith('button clicked');
  });

  it ('should load user by id', () => {
    const userId = 2;
    spyOn(userService, 'loadById').and.returnValue(of({ id: 2, firstName: 'Jane', lastName: 'Doe' }));

    component.loadUserDetails(userId);

    expect(userService.loadById).toHaveBeenCalledWith(userId);
    expect(component.userDetails.id).toEqual(userId);
  });
});

class UserServiceStub {
  loadAll(): Observable<any[]> {
    return of([]);
  }

  loadById(id: number): Observable<any> {
    return of({});
  }
}
