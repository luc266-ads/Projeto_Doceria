
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class Api {


  private apiUrl = "localhost:3000/api/usuarios";
  private apiUrlPd = "localhost:3000/api/pedidos";
  private apiUrlPr = "localhost:3000/api/produtos";

  constructor(private http: HttpClient) {}

  // ============================
  // TRATAMENTO DE ERROS GLOBAL
  // ============================
  private tratarErro(error: HttpErrorResponse) {
    console.error("Erro na API:", error);

    if (error.error instanceof ErrorEvent) {
      return throwError(() => `Erro no cliente: ${error.error.message}`);
    }

    return throwError(() => error.error?.error || "Erro desconhecido no servidor!");
  }

  // ============================
  // USUÁRIOS
  // ============================

  cadastrarUsuario(dados: any): Observable<any> {
    return this.http.post(this.apiUrl, dados)
      .pipe(catchError(this.tratarErro));
  }

  listarUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(catchError(this.tratarErro));
  }

  deletarUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.tratarErro));
  }

  // ============================
  // PEDIDOS
  // ============================

  cadastrarPedidos(dados: any): Observable<any> {
    return this.http.post(this.apiUrlPd, dados)
      .pipe(catchError(this.tratarErro));
  }

  listarPedidos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlPd)
      .pipe(catchError(this.tratarErro));
  }

  deletarPedidos(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrlPd}/${id}`)
      .pipe(catchError(this.tratarErro));
  }

  // ============================
  // PRODUTOS
  // ============================

  cadastrarProdutos(dados: any): Observable<any> {
    return this.http.post(this.apiUrlPr, dados)
      .pipe(catchError(this.tratarErro));
  }

  listarProdutos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlPr)
      .pipe(catchError(this.tratarErro));
  }

  deletarProdutos(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrlPr}/${id}`)
      .pipe(catchError(this.tratarErro));
  }
}
