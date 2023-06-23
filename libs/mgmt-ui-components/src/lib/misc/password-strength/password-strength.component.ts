import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MgmtIconLibModule } from '@mgmt-icon-lib';

@Component({
  selector: 'di-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthComponent implements OnChanges {
  @Input() password: string = '';

  @Output() isValid: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  isCorrectLength = false;
  isUpperAndLower = false;
  hasNumeric = false;
  hasSpecial = false;

  ngOnChanges(changes: SimpleChanges) {
    this.checkValid(changes['password'].currentValue);
  }

  checkValid(password: string) {
    const testUpperAndLower = new RegExp("^(?=.*[a-z])(?=.*[A-Z]).+$");
    const testNumeric = new RegExp("^(?=.*[0-9]).+$");
    const testSpecial = new RegExp("^(?=.*[\-\+\_\!\@\#\$\%\^\&\*\.\,\?]).+$");

    this.isCorrectLength = password.length >= 8 && password.length <= 35;
    this.isUpperAndLower = testUpperAndLower.test(password);
    this.hasNumeric = testNumeric.test(password);
    this.hasSpecial = testSpecial.test(password);

    this.isValid.emit(this.isCorrectLength && this.isUpperAndLower && this.hasNumeric && this.hasSpecial);
  }
}

@NgModule({
  imports: [CommonModule, MgmtIconLibModule],
  exports: [PasswordStrengthComponent],
  declarations: [PasswordStrengthComponent],
})
export class PasswordStrengthComponentModule {}