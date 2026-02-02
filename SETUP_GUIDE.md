# Student Management System - Complete Setup Guide

## 🚀 Quick Start Guide

### Step 1: Install Node.js and npm
Make sure you have Node.js v18+ and npm installed:
```bash
node --version  # Should be v18 or higher
npm --version   # Should be v9 or higher
```

### Step 2: Install Angular CLI
```bash
npm install -g @angular/cli@20.0.0
```

### Step 3: Install Project Dependencies
Navigate to the project directory and run:
```bash
cd student-management-frontend
npm install
```

### Step 4: Start the Backend Server
Make sure your Spring Boot backend is running on port 8080.

### Step 5: Start the Frontend Development Server
```bash
ng serve
```

Or alternatively:
```bash
npm start
```

The application will open at `http://localhost:4200`

## 📋 Features Overview

### 1. **View All Students**
- Material table with sorting on all columns
- Pagination (5, 10, 25, 100 records per page)
- Real-time search across all fields

### 2. **Add New Student**
- Click "Add Student" button in toolbar
- Fill in the form with validation:
  - First Name (required, min 2 chars)
  - Last Name (required, min 2 chars)
  - Phone Number (required, 10 digits)
  - Email (required, valid email)
  - Department (required, dropdown)
- Click "Save" to create

### 3. **Edit Student**
- Click the edit icon (pencil) on any student row
- Modify fields (Roll No is read-only)
- Click "Update" to save changes

### 4. **View Student Details**
- Click the view icon (eye) on any student row
- All fields are displayed in read-only mode
- Click "Close" to exit

### 5. **Delete Student**
- Click the delete icon (trash) on any student row
- Confirm deletion in the dialog
- Student is removed from the database

### 6. **Delete All Students**
- Click "Delete All" button in toolbar
- Confirm deletion in the dialog
- All students are removed from the database

### 7. **Search/Filter**
- Use the search box at the top of the table
- Search works across all fields (name, email, phone, department)
- Results update in real-time

## 🎨 UI Components

### Material Components Used:
- **mat-table** - Data table with sorting
- **mat-paginator** - Pagination controls
- **mat-dialog** - Modal dialogs for forms
- **mat-form-field** - Form inputs with validation
- **mat-button** - Action buttons
- **mat-icon** - Material icons
- **mat-toolbar** - Top navigation bar
- **mat-card** - Content containers
- **mat-snackbar** - Toast notifications

### Color Scheme:
- Primary: Indigo
- Accent: Pink
- Warn: Red
- Background: Light gray (#f5f5f5)

## 🔧 Configuration

### Backend API URL
Update in `src/app/services/student.service.ts`:
```typescript
private baseUrl = 'http://localhost:8080/StuManageSys';
```

### Enable Network Access (if needed)
If you want to access from other devices on your network:
```bash
ng serve --host 0.0.0.0
```

## 📱 Responsive Design

The application is fully responsive:
- **Desktop**: Full table view with all columns
- **Tablet**: Optimized layout with scroll
- **Mobile**: Stacked cards view (optional enhancement)

## 🧪 Testing the Application

### Test Scenario 1: Create a Student
1. Click "Add Student"
2. Enter:
   - First Name: John
   - Last Name: Doe
   - Phone: 9876543210
   - Email: john.doe@example.com
   - Department: Computer Science
3. Click "Save"
4. Verify success message
5. Check table for new student

### Test Scenario 2: Edit a Student
1. Find the student in the table
2. Click the edit icon
3. Change the department to "Information Technology"
4. Click "Update"
5. Verify success message and updated data

### Test Scenario 3: Search
1. Type "john" in the search box
2. Table should filter to show only matching records
3. Clear search to see all records again

### Test Scenario 4: Delete
1. Click delete icon on a student row
2. Confirm deletion
3. Verify success message
4. Check that student is removed from table

## 🐛 Troubleshooting

### Issue: CORS Error
**Solution**: Make sure your backend has CORS enabled for `http://localhost:4200`

### Issue: Cannot GET /
**Solution**: Make sure you're accessing `http://localhost:4200` not just `localhost:4200`

### Issue: Module not found
**Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install` again

### Issue: Port 4200 already in use
**Solution**: 
```bash
ng serve --port 4201
```

### Issue: Backend not responding
**Solution**: 
1. Check if Spring Boot is running
2. Verify the port is 8080
3. Check backend console for errors

## 📦 Project Structure Explained

```
student-management-frontend/
│
├── src/
│   ├── app/
│   │   ├── components/           # UI Components
│   │   │   ├── student-list/    # Main table view
│   │   │   ├── student-form/    # Add/Edit/View form
│   │   │   └── confirm-dialog/  # Delete confirmation
│   │   │
│   │   ├── models/              # TypeScript interfaces
│   │   │   └── student.model.ts
│   │   │
│   │   ├── services/            # API services
│   │   │   └── student.service.ts
│   │   │
│   │   ├── app.component.*      # Root component
│   │   ├── app.config.ts        # App configuration
│   │   └── app.routes.ts        # Route definitions
│   │
│   ├── environments/            # Environment configs
│   ├── index.html              # Main HTML
│   ├── main.ts                 # Entry point
│   └── styles.scss             # Global styles
│
├── angular.json                # Angular CLI config
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
└── README.md                  # Documentation
```

## 🎯 Best Practices Implemented

1. **Standalone Components** - Using new Angular standalone API
2. **Reactive Forms** - For better form validation and control
3. **Service Layer** - Separation of concerns
4. **Type Safety** - Full TypeScript typing
5. **Material Design** - Consistent UI/UX
6. **Error Handling** - Comprehensive error messages
7. **User Feedback** - Toast notifications for all actions
8. **Confirmation Dialogs** - For destructive actions
9. **Responsive Design** - Works on all screen sizes
10. **Clean Code** - Well-organized and commented

## 🚀 Build for Production

```bash
ng build --configuration production
```

Output will be in `dist/student-management-frontend/`

## 🌐 Deploy to Netlify

1. Build the project:
```bash
ng build --configuration production
```

2. Deploy the `dist/student-management-frontend` folder to Netlify

3. Update the backend CORS to allow your Netlify URL

## 📝 Additional Notes

- Roll numbers are auto-generated by the backend
- All form fields have real-time validation
- Search is case-insensitive
- Table maintains sort order when filtering
- Pagination resets when filtering

## 💡 Tips for Development

1. Use Chrome DevTools for debugging
2. Install Angular DevTools extension
3. Use `ng serve --open` to auto-open browser
4. Use `ng generate component <name>` for new components
5. Check console for any errors

## 📧 Support

For issues or questions:
1. Check the console for error messages
2. Verify backend is running
3. Check network tab in DevTools
4. Review the README sections above

## 🎉 Enjoy Your Student Management System!
