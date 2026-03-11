import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student, ApiResponse } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'https://student-management-backend-production-d7cc.up.railway.app/StuManageSys';

  constructor(private http: HttpClient) { }

  // Get all students
  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/students`);
  }

  // Get student by roll number
  getStudentById(rollNo: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/students/${rollNo}`);
  }

  // Create new student
  createStudent(student: Student): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/student/add`, student);
  }

  // Update student
  updateStudent(student: Student): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.baseUrl}/student/update`, student);
  }

  // Delete student by roll number
  deleteStudent(rollNo: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl}/student/delete/${rollNo}`);
  }

  // Delete all students
  deleteAllStudents(): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl}/delete-all`);
  }
}
