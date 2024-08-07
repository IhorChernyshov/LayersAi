import {Component, inject, OnInit, Renderer2, signal} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import emailjs from "emailjs-com";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-package-message',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './package-message.component.html',
  styleUrl: './package-message.component.scss'
})
export class PackageMessageComponent implements OnInit {

  private formBuilder = inject(FormBuilder);
  packageForm = new FormGroup({
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
    this.packageForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email, Validators.maxLength(64)]],
        feedback: ['', [Validators.required, Validators.minLength(1),  Validators.maxLength(250)]],
      })
  }

  get fr(): { [key: string]: AbstractControl } {
    return this.packageForm.controls;
  }

  getPackageTextErrorMessage(characters: number): string {
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

  getPackageEmailErrorMessage(characters: number) {
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
  }


  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      if (this.packageForm.controls.feedback.value !== '') {
        this.onSubmit().then(r => console.log('done'));
      }
    }
  }


  async onSubmit(){
    if (this.packageForm.valid) {
      const formData = {
        email: this.packageForm.value.email,
        feedback: this.packageForm.value.feedback
      };

      try {
        const result = await emailjs.send('service_jefebz9', 'template_wx6lws8', formData, '57I5mH830ACUYFSy9');
        console.log(result.text);
        this.packageForm.reset();
        this.showSuccess = true;

        await this.delay(7000);
        this.showSuccess = false;
        await this.delay(1000);

      } catch (error: any) {
        console.error(error.text);
        alert('Failed to send email. Please try again.');
      }
    }
  }

}
