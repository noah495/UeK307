import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) {
  }

  public showErrorSnackbar(errors: string[]) {
    let errorString: string = '';
    errors.forEach(err => errorString += err + '\n')
    this.open(errorString);
  }

  private open(errorString: string) {
    this.snackbar.open(errorString, '' ,{
      duration: 2000,
      panelClass: ['error-snackbar']
    });
  }
}
