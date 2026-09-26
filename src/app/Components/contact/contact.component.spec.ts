import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty values', () => {
    expect(component.contactForm.get('name')?.value).toBe('');
    expect(component.contactForm.get('email')?.value).toBe('');
    expect(component.contactForm.get('subject')?.value).toBe('');
    expect(component.contactForm.get('message')?.value).toBe('');
  });

  it('should mark form as invalid when empty', () => {
    expect(component.contactForm.valid).toBe(false);
  });

  it('should validate name field', () => {
    const name = component.contactForm.get('name');
    expect(name?.valid).toBe(false);

    // Set value to something valid
    name?.setValue('Jo');
    expect(name?.valid).toBe(true);

    // Set value to something too short
    name?.setValue('J');
    expect(name?.valid).toBe(false);
  });

  it('should validate email field', () => {
    const email = component.contactForm.get('email');
    expect(email?.valid).toBe(false);

    // Set value to something valid
    email?.setValue('test@example.com');
    expect(email?.valid).toBe(true);

    // Set value to invalid email
    email?.setValue('invalid-email');
    expect(email?.valid).toBe(false);
  });

  it('should validate subject field', () => {
    const subject = component.contactForm.get('subject');
    expect(subject?.valid).toBe(false);

    // Set value to something valid
    subject?.setValue('Abc');
    expect(subject?.valid).toBe(true);

    // Set value to something too short
    subject?.setValue('Ab');
    expect(subject?.valid).toBe(false);
  });

  it('should validate message field', () => {
    const message = component.contactForm.get('message');
    expect(message?.valid).toBe(false);

    // Set value to something valid
    message?.setValue('This is a valid message with enough characters');
    expect(message?.valid).toBe(true);

    // Set value to something too short
    message?.setValue('Short');
    expect(message?.valid).toBe(false);
  });
});