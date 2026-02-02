import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

export interface DialogData {
  student: Student | null;
  mode: 'add' | 'edit' | 'view';
}

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  studentForm!: FormGroup;
  isViewMode = false;
  isEditMode = false;
  dialogTitle = '';

  departments = [
    'Computer Science',
    'Information Technology',
    'Electronics and Communication',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electrical Engineering',
    'Chemical Engineering',
    'Biotechnology',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Business Administration',
    'Commerce'
  ];

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<StudentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    this.isViewMode = this.data.mode === 'view';
    this.isEditMode = this.data.mode === 'edit';
    
    this.dialogTitle = this.isViewMode ? 'View Student' : 
                       this.isEditMode ? 'Edit Student' : 
                       'Add New Student';

    this.initializeForm();

    if (this.isViewMode) {
      this.studentForm.disable();
    }
  }

  initializeForm(): void {
    this.studentForm = this.fb.group({
      rollNo: [{ value: this.data.student?.rollNo || null, disabled: this.isEditMode || this.isViewMode }],
      firstName: [this.data.student?.firstName || '', [Validators.required, Validators.minLength(2)]],
      lastName: [this.data.student?.lastName || '', [Validators.required, Validators.minLength(2)]],
      phoneNo: [this.data.student?.phoneNo || '', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: [this.data.student?.email || '', [Validators.required, Validators.email]],
      department: [this.data.student?.department || '', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      const studentData: Student = this.studentForm.getRawValue();

      if (this.isEditMode) {
        this.studentService.updateStudent(studentData).subscribe({
          next: (response) => {
            this.showMessage(response.message, 'success');
            this.dialogRef.close(true);
          },
          error: (error) => {
            this.showMessage('Error updating student: ' + error.message, 'error');
          }
        });
      } else {
        this.studentService.createStudent(studentData).subscribe({
          next: (response) => {
            this.showMessage(response.message, 'success');
            this.dialogRef.close(true);
          },
          error: (error) => {
            this.showMessage('Error creating student: ' + error.message, 'error');
          }
        });
      }
    } else {
      this.markFormGroupTouched(this.studentForm);
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }

  private showMessage(message: string, type: 'success' | 'error'): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: type === 'success' ? 'success-snackbar' : 'error-snackbar'
    });
  }

  getErrorMessage(fieldName: string): string {
    const control = this.studentForm.get(fieldName);
    
    if (control?.hasError('required')) {
      return `${this.getFieldLabel(fieldName)} is required`;
    }
    
    if (control?.hasError('minlength')) {
      const minLength = control.errors?.['minlength'].requiredLength;
      return `${this.getFieldLabel(fieldName)} must be at least ${minLength} characters`;
    }
    
    if (control?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    
    if (control?.hasError('pattern')) {
      return 'Please enter a valid 10-digit phone number';
    }
    
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      firstName: 'First Name',
      lastName: 'Last Name',
      phoneNo: 'Phone Number',
      email: 'Email',
      department: 'Department'
    };
    return labels[fieldName] || fieldName;
  }
}
