import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusSetting } from 'src/app/comman/setting';

export interface CustomerForm {
  title: string;   // Title of the customer
  email: string;   // Email address of the customer
  region: string;   // Selected region
  country: string;  // Selected country
}

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerOverlayComponent {
 
  @Output() submitCustomer = new EventEmitter<boolean>();
  @Output() notify = new EventEmitter<boolean>();
  customerForm!: FormGroup;
  public regions: string[] = [];
  public countries: any[] = [];
  public selectedRegion: string | null = null;
  public success: string=''
  public emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
  public filteredCountries: string[] = []; // For displaying countries based on selected region

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      title: ['', Validators.required], // Ensure it's a string
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]],
      region: ['', Validators.required],
      country: ['', Validators.required]
  });


    // Fetch regions on initialization\\ Extract unique regions from the country data
    const uniqueRegions = new Set<string>();
    for (const country of Object.values(StatusSetting.countryData.data)) {
      uniqueRegions.add(country.region);
    }
    this.regions = Array.from(uniqueRegions);

    // Fetch countries
    this.countries = Object.entries(StatusSetting.countryData.data).map(([code, info]) => ({
      code,
      name: info.country,
      region: info.region // Store region for filtering
    }));
  }


  onRegionChange(selectedRegion: any) {
    this.selectedRegion = selectedRegion;
    this.filteredCountries = this.countries.filter(country => country.region === selectedRegion);
  }
  onSubmit() {
    this.customerForm.markAllAsTouched();
    if (this.customerForm.valid) {
      const newCustomer = this.customerForm.value;
      this.storeCustomer(newCustomer);
      this.customerForm.reset();
      this.success = 'Customer Added sucessfully.'
      this.notify.emit();
      this.submitCustomer.emit(true);
    }
    else {
      this.submitCustomer.emit(false);
    }
  }

  storeCustomer(customer: any) {
    const customers = JSON.parse(localStorage.getItem('customers') || '[]');
    customers.push(customer);
    localStorage.setItem('customers', JSON.stringify(customers));
    setTimeout(() => {
      this.success = '';  // Clear success message after 3 seconds
    }, 1000);
  }
}
