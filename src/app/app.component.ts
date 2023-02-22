import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgSrc: string;

  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required]),
  });

  constructor(private http: HttpClient) {
    this.imgSrc =
      'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png';
  }

  get f() {
    return this.myForm.controls;
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imgSrc = reader.result as string;
      };
      reader.readAsDataURL(file);
      this.myForm.patchValue({
        fileSource: file,
      });

      console.log(event.target.files);
    }
  }

  submit() {
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource')?.value);
    console.error(this.myForm.get('fileSource')?.value);
    this.http
      .put('http://locahost:4200/api/sample-bk1/example-test.jpeg', formData)
      .subscribe(
        (res) => {
          console.log(res);
          alert('Uploaded Successfully.');
        },
        (err) => {
          console.log(formData);
        }
      );
  }
}
