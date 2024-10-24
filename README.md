# Customer and Pin Management App
<h1 align="center">Customer and Pin Management App</h1>
<p align="center">
  <i>This Customer and Pin Management App is designed for managing customers and pins with a focus on reusability, coding standards, and appropriate validations. The project incorporates overlays for adding customer and pin details and efficiently handles data using LocalStorage.</i>
  <br>
</p>

## Features
- **Reusable Components**: Created reusable components that can be shared throughout the system, promoting consistency and reducing redundancy.
- **Separate Modules**: Established separate modules for customers and pins to enhance maintainability and organization.
- **Overlays**: Developed overlays for adding customers and pins. The overlay for customer fields opens when the "+ Add Customer" button is clicked, while the overlay for pin fields opens with the "+ Add Pin" button.
- **Data Handling**: Copied API data into an array to avoid CORS errors, allowing for fetching country data based on region selection from the API array.
- **Table Display**: Data is displayed in a structured table format for the "List of Pins."

## Libraries Used
- Select & Multi-Select: ngx-select-ex
- File Upload: ng2-file-upload
## Storage
- LocalStorage: Utilized LocalStorage to store module-related data for efficient data retrieval and management.
## Styling
-Bootstrap: Used Bootstrap for styling the application, ensuring a responsive and visually appealing interface.

## Technologies Used
- Angular 16.x
- Bootstrap
- TypeScript
- HTML/CSS

### Prerequisites
Minimum System Requirements:
- 4 GB RAM
- 128 GB SSD
- Core i3 Processor

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

