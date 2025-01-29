import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IFiles } from '../../../interfaces';

@Injectable({
	providedIn: 'root'
})
export class FilesService {
	apiUrl = `${environment.apiUrl}/files`

	constructor(
		private http: HttpClient
	) { }

	getView(id: string) {
		return `${environment.apiUrl}/files/view/${id}`
	}


	getById(id: string | undefined): Observable<IFiles> {
		if (!id) return of()
		return this.http.get<IFiles>(`${this.apiUrl}/${id}`);
	}

	getByIdView(id: string | undefined): Observable<IFiles> {
		if (!id) return of()
		return this.http.get<IFiles>(`${this.apiUrl}/view/${id}`);
	}

	delete(id: string): Observable<IFiles> {
		return this.http.delete<IFiles>(`${this.apiUrl}/${id}`).pipe(
			tap(() => {
			}),
		);
	}

	deleteForce(id: string): Observable<IFiles> {
		return this.http.delete<IFiles>(`${this.apiUrl}/force/${id}`).pipe(
			tap(() => {
			}),
		);
	}

	// FILE UPLOAD
	uploadImage(file: File): Observable<IFiles> {
		return this.uploadFile(file, 'image');
	}

	uploadDocument(file: File): Observable<IFiles> {
		return this.uploadFile(file, 'document');
	}

	uploadVideo(file: File): Observable<IFiles> {
		return this.uploadFile(file, 'video');
	}

	private uploadFile(file: File, type: 'image' | 'document' | 'video'): Observable<IFiles> {
		const formData = new FormData();
		formData.append('file', file);

		return this.http.post<IFiles>(`${this.apiUrl}/${type}`, formData, {
			headers: new HttpHeaders({
				'enctype': 'multipart/form-data'
			})
		}).pipe(
			tap(response => {
			}),
			catchError(error => {
				console.error('File upload error:', error);
				return throwError(() => new Error('File upload failed'));
			})
		);
	}
}
