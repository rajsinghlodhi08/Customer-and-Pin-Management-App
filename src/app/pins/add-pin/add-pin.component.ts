import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

export interface PinForm {
  title: string;
  image: string | null; // Image can be a string (Base64) or null
  collaborators: string[]; //  collaborators are an array of strings
  privacy: string;
}
@Component({
  selector: 'app-add-pin',
  templateUrl: './add-pin.component.html',
  styleUrls: ['./add-pin.component.css']
})
export class AddPinComponent implements OnInit {
  @Output() pinCreated = new EventEmitter<any>();
  @Output() submit = new EventEmitter<boolean>();
  pinForm!: FormGroup;
  public submitted: boolean = false;
  public uploader: FileUploader;
  public collaboratorsList: any[] = [];
  public successMsg: string = '';
  constructor(private fb: FormBuilder) {
   
    // Initialize the uploader without a URL
    this.uploader = new FileUploader({ url: '' });

    // Listen for file upload
    this.uploader.onAfterAddingFile = (file) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // Set the image as a Base64 string in the form
        this.pinForm.patchValue({ image: e.target.result });
      };
      reader.readAsDataURL(file._file); // Read the file as a Data URL
    };
  }

  ngOnInit(): void {

     // Initialize the form group in ngOnInit
     this.pinForm = this.fb.group({
      title: ['', Validators.required],
      image: [null, Validators.required], // Placeholder for image file
      collaborators: [[], Validators.required],
      privacy: ['', Validators.required]
    });
    this.getCollaborators()
  }

  onSubmitPin() {
    this.pinForm.markAllAsTouched();
    this.submitted = true;
    if (this.pinForm.valid) {
      const pinData = {
        title: this.pinForm.value.title,
        image: this.pinForm.value.image,
        collaborators: this.pinForm.value.collaborators,
        privacy: this.pinForm.value.privacy
      };
      const existingPins = JSON.parse(localStorage.getItem('pins') || '[]');
      existingPins.push(pinData);
      localStorage.setItem('pins', JSON.stringify(existingPins));
      this.pinCreated.emit(pinData);
      this.pinForm.reset();
      this.submit.emit(true);
      this.uploader.clearQueue();
      this.submitted = false;
      this.successMsg = 'Pin added successfully'
    }
    else {
      this.submit.emit(false);
    }
  }
  getCollaborators() {
    const list = localStorage.getItem('customers')
    if (list) {
      // Parse the JSON string into an array of objects
      const customers = JSON.parse(list);

      this.collaboratorsList = customers.map((customer: { title: any; }) => ({
        value: customer.title,
        text: customer.title
      }));
    } else {
      console.log('No customers found in localStorage.');
    }
  }
}
