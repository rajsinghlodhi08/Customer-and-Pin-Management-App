import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() selectedForm: string | undefined;
  @Output() close = new EventEmitter<void>();
  @Output() pinCreated = new EventEmitter<any>();

  ngOnInit(): void {
  }
  // Method to close the modal
  closeModal() {
    this.close.emit();
  }
  // Handle submission of the pin form
  onPinSubmit(isSubmitted: boolean) {
    if (isSubmitted == true) {
      setTimeout(() => {
        this.close.emit();
      }, 1000);
    }
  }
  // Handle submission of the customer form
  onCustumerSubmit(isCustumerSubmitted: boolean) {
    if (isCustumerSubmitted) {
      setTimeout(() => {
        this.close.emit();
      }, 1000);
    }
  }

}
