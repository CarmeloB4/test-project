import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Film } from "../../../../shared/models/film.model";

interface UserData {
  sport: string;
  weigth: number;
  timeOfActivity: number;
}

interface DialogData {
  isStay: boolean;
  sport?: string;
  payload?: Film;
  calories?: number;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Output() calculateCalories = new EventEmitter<UserData>();

  public userWeigth = 0;
  public timeOfActivity = 0;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
