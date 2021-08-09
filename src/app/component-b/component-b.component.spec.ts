import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterService } from '../counter.service';
import { ComponentBComponent } from './component-b.component';

describe('Component B', () => {
  let component: ComponentBComponent;
  let fixture: ComponentFixture<ComponentBComponent>;
  let counterService: CounterServiceStub;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ComponentBComponent],
      imports: [],
      providers: [
        CounterService,
      ],
    })
    .overrideComponent(ComponentBComponent, {
      set: {
        providers: [
          { provide: CounterService, useClass: CounterServiceStub },
        ],
      }
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentBComponent);
    component = fixture.componentInstance;
    counterService = fixture.debugElement.injector.get(CounterService) as CounterServiceStub;
    fixture.detectChanges();
  });

  it ('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should call counterService.add', () => {
    const count = 10;
    spyOn(counterService, 'add').and.returnValue(count);

    component.handleClick();

    expect(counterService.add).toHaveBeenCalled();
    expect(component.count).toEqual(count);
  });

  it ('should call counterService.add 3 times', () => {
    spyOn(counterService, 'add');

    component.handleClick();
    component.handleClick();
    component.handleClick();

    expect(counterService.add).toHaveBeenCalledTimes(3);
  });
});

class CounterServiceStub {
  add(): number {
    return 0;
  }
}
