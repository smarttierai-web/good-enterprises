import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface RequirementForm {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  workforceType: string;
  headcount: number;
  location: string;
  notes: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private requirementModalOpen = new BehaviorSubject<boolean>(false);
  requirementModal$ = this.requirementModalOpen.asObservable();

  private profileModalOpen = new BehaviorSubject<boolean>(false);
  profileModal$ = this.profileModalOpen.asObservable();

  openRequirementModal(defaultCategory: string = 'General Workforce') {
    this.requirementModalOpen.next(true);
  }

  closeRequirementModal() {
    this.requirementModalOpen.next(false);
  }

  openProfileModal() {
    this.profileModalOpen.next(true);
  }

  closeProfileModal() {
    this.profileModalOpen.next(false);
  }
}
