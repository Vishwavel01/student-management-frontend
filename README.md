# Student Management System - Angular Frontend

This is a modern Angular 20.0 frontend application with Angular Material for the Student Management System.

## Features

- ✅ View all students in a sortable, paginated table
- ✅ Search/filter students by any field
- ✅ Add new students with form validation
- ✅ Edit existing student records
- ✅ View student details in read-only mode
- ✅ Delete individual students with confirmation
- ✅ Delete all students with confirmation
- ✅ Responsive Material Design UI
- ✅ Toast notifications for all operations
- ✅ Complete error handling

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI 20.0

## Installation

1. Install dependencies:
```bash
npm install
```

2. Make sure your backend is running on `http://localhost:8080`

## Running the Application

Start the development server:
```bash
ng serve
```

Or use npm:
```bash
npm start
```

The application will be available at `http://localhost:4200`

## Build for Production

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── student-list/          # Main list view with table
│   │   ├── student-form/          # Add/Edit/View dialog
│   │   └── confirm-dialog/        # Confirmation dialog
│   ├── models/
│   │   └── student.model.ts       # Student interface
│   ├── services/
│   │   └── student.service.ts     # HTTP service for API calls
│   ├── app.component.*            # Root component
│   ├── app.config.ts              # App configuration
│   └── app.routes.ts              # Routing configuration
├── index.html                      # Main HTML file
├── main.ts                         # Application entry point
└── styles.scss                     # Global styles
```

## API Endpoints Used

- `GET /StuManageSys/students` - Get all students
- `GET /StuManageSys/students/{rollNo}` - Get student by ID
- `POST /StuManageSys/student/add` - Create new student
- `PUT /StuManageSys/student/update` - Update student
- `DELETE /StuManageSys/student/delete/{rollNo}` - Delete student
- `DELETE /StuManageSys/delete-all` - Delete all students

## Technologies Used

- **Angular 20.0** - Frontend framework
- **Angular Material 20.0** - UI component library
- **RxJS** - Reactive programming
- **TypeScript** - Programming language
- **SCSS** - Styling

## Key Features Implemented

### Student List Component
- Material table with sorting and pagination
- Real-time search/filter functionality
- Action buttons for view, edit, and delete
- Responsive design

### Student Form Component
- Reactive forms with validation
- Dynamic mode (Add/Edit/View)
- Material form fields with icons
- Error messages for validation
- Department dropdown selection

### Confirm Dialog Component
- Reusable confirmation dialog
- Used for delete operations
- Material design styled

### Service Layer
- Centralized API communication
- Observable-based HTTP calls
- Error handling
- Type-safe responses

## Form Validations

- **First Name**: Required, minimum 2 characters
- **Last Name**: Required, minimum 2 characters
- **Phone Number**: Required, must be 10 digits
- **Email**: Required, valid email format
- **Department**: Required, dropdown selection

## Styling

The application uses:
- Angular Material's Indigo-Pink theme
- Custom SCSS for component-specific styles
- Responsive grid layouts
- Material icons
- Custom scrollbars
- Smooth animations

## Backend Configuration

Make sure your Spring Boot backend has CORS enabled for `http://localhost:4200`. The backend should be configured as shown in your `CorsConfig.java`.

## Development Tips

1. **Hot Reload**: The dev server supports hot module replacement
2. **Debugging**: Use Chrome DevTools with Angular DevTools extension
3. **Code Quality**: The project uses strict TypeScript configuration
4. **Material Theme**: Customize in `styles.scss` by changing the theme import

## Common Issues

### CORS Errors
Make sure your backend CorsConfig allows `http://localhost:4200`

### Port Already in Use
Change the port in `angular.json` or use:
```bash
ng serve --port 4201
```

### Module Not Found
Run `npm install` to install all dependencies

## Future Enhancements

- [ ] Add authentication and authorization
- [ ] Implement student profile pictures
- [ ] Add export to Excel/PDF functionality
- [ ] Implement advanced filtering
- [ ] Add student attendance tracking
- [ ] Create student dashboard with statistics

## License

This project is created for educational purposes.
