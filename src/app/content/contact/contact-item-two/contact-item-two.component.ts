import {Component, HostBinding, inject, OnInit, Renderer2, signal} from '@angular/core';
import {NgClass} from "@angular/common";
import {AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import emailjs from "emailjs-com"

@Component({
  selector: 'app-contact-item-two',
  standalone: true,
  imports: [
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './contact-item-two.component.html',
  styleUrl: './contact-item-two.component.scss'
})
export class ContactItemTwoComponent implements OnInit {
  @HostBinding('class.load') isLoading = false;
  private formBuilder = inject(FormBuilder);
  renderer =inject(Renderer2)
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    feedback: new FormControl('')
  });
  content = [
    'Log In',
    'Email',
    'Password',
    'Sign Up',
    'User Name',
    'Password Confirmation',
    'You must enter a email',
    'Not a valid email',
    'Email must be no more than 64 characters but now:',
    'You must enter a password',
    'Password must be 8-40 char. long, but now: ',
    'Password must be no more than 40 char., but now: ',
    'Forget Password?',
    'You must enter a name',
    'Not a valid name',
    'Name must be no less than 1 characters but now: ',
    'Name must be no more than 64 characters but now: ',
    'You must enter a message',
    'Message must be no less than 1 characters but now: ',
    'Message must be no more than 250 characters but now: ',

  ];
  contentTr = signal<string[]>(this.content);
  showSuccess = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 10);

    this.contactForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(64)]],
        email: ['', [Validators.required, Validators.email, Validators.maxLength(64)]],
        feedback: ['', [Validators.required, Validators.minLength(1),  Validators.maxLength(250)]],

      })
  }

  get fr(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  getContactNameErrorMessage(characters: number): string {
    if (this.fr['name'].hasError('required')) {
      return this.contentTr()[13];
    } else if (this.fr['name'].hasError('pattern')) {
      return this.contentTr()[14];
    } else if (this.fr['name'].hasError('minlength')) {
      return `${this.contentTr()[15]} ${characters}`;
    } else if (this.fr['name'].hasError('maxlength')) {
      return `${this.contentTr()[16]} ${characters}`;
    } else {
      return '';
    }
  }

 getContactTextErrorMessage(characters: number): string {
    if (this.fr['feedback'].hasError('required')) {
      return this.contentTr()[17];
    } else if (this.fr['feedback'].hasError('minlength')) {
      return `${this.contentTr()[18]} ${characters}`;
    } else if (this.fr['feedback'].hasError('maxlength')) {
      return `${this.contentTr()[19]} ${characters}`;
    } else {
      return '';
    }
  }

  getContactEmailErrorMessage(characters: number) {
    if (this.fr['email'].hasError('required')) {
      return this.contentTr()[6];
    } else if (this.fr['email'].hasError('email')) {
      return this.contentTr()[7];
    } else if (this.fr['email'].hasError('maxlength')) {
      return `${this.contentTr()[8]} ${characters}`;
    } else {
      return '';
    }
  }

   delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async closeSuccess() {
    this.showSuccess = false;
   /* await this.delay(1000);
    const successElement = document.querySelector('.success');
    const successBodyElement = document.querySelector('.success__body');
    if (successElement) {
      this.renderer.setStyle(successElement, 'display', 'none');
    }
    if (successBodyElement) {
      this.renderer.setStyle(successBodyElement, 'display', 'none');
    }*/
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      if (this.contactForm.controls.feedback.value !== '') {
        this.onSubmit().then(r => console.log('done'));
      }
    }
  }

  async onSubmit(){
    if (this.contactForm.valid) {
      const formData = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        feedback: this.contactForm.value.feedback
      };
      console.log('Data; ', formData)

      try {
        const result = await emailjs.send('service_jefebz9', 'template_wx6lws8', formData, '57I5mH830ACUYFSy9');
        console.log(result.text);
        this.contactForm.reset();
        this.showSuccess = true;

        await this.delay(7000);
        this.showSuccess = false;
        await this.delay(1000);

       /* const successElement = document.querySelector('.success');
        const successBodyElement = document.querySelector('.success__body');
        if (successElement) {
          this.renderer.setStyle(successElement, 'display', 'none');
        }
        if (successBodyElement) {
          this.renderer.setStyle(successBodyElement, 'display', 'none');
        }*/
      } catch (error: any) {
        console.error(error.text);
        alert('Failed to send email. Please try again.');
      }
    }
  }
}
