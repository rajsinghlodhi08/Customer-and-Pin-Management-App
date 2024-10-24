import { Component, ElementRef, ViewChild, AfterViewInit, OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'app-pins-list',
  templateUrl: './pins-list.component.html',
  styleUrls: ['./pins-list.component.css']
})
export class PinsListComponent implements OnInit {
  @ViewChild('basicModal') basicModal!: ElementRef;
  public pins: any[] = [];
  public displayedPins: any[] = [];
  isModalOpen = false;
  selectedForm: string='';
  pageSize: number = 5; 
  currentIndex: number = 0;
  public getTotalHeight: number= 0;

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.getTotalHeight = window.innerHeight + window.scrollY;
    if (window.scrollY + 1 >= document.body.offsetHeight - window.innerHeight) {
      if (this.currentIndex < this.pins.length) {
        this.loadMorePins();
      }
    }
  }

  ngOnInit(): void {
    this.getPins();
    this.loadMorePins(); // called loadMorePinsto get initial set of pins for display
  }

  // get the pips from the localstorage 
  getPins() {
    const list = localStorage.getItem('pins');
    if (list) {
      this.pins = JSON.parse(list);
    } else {
      console.log('No pins found in localStorage.');
    }
  }
  // 
  loadMorePins() {
    const morePins = this.pins.slice(this.currentIndex, this.currentIndex + this.pageSize);
    this.displayedPins = [...this.displayedPins, ...morePins];
    this.currentIndex += this.pageSize;
  }

  openModal(formType: string) {
    this.selectedForm = formType;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onPinCreated(newPin: any) {
    this.pins.push(newPin); // Add the new pin 
    this.displayedPins.push(newPin); // Add it to displayed list for immediate visibility
    setTimeout(() => {
      this.closeModal();
    }, 1000);

  }
}
