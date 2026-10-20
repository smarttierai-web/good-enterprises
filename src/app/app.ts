import { Component, OnInit } from '@angular/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  isMobileMenuOpen = false;
  isRequirementModalOpen = false;
  isProfileModalOpen = false;

  requirementSubmitted = false;
  profileRequested = false;

  formData = {
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    workforceType: 'ITI Qualified Candidates',
    headcount: 10,
    location: 'Ranipet',
    notes: ''
  };

  profileEmail = '';

  constructor(public modalService: ModalService) {}

  ngOnInit() {
    this.modalService.requirementModal$.subscribe(isOpen => {
      this.isRequirementModalOpen = isOpen;
      if (!isOpen) {
        this.requirementSubmitted = false;
      }
    });

    this.modalService.profileModal$.subscribe(isOpen => {
      this.isProfileModalOpen = isOpen;
      if (!isOpen) {
        this.profileRequested = false;
      }
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  openRequirementModal() {
    this.modalService.openRequirementModal();
    this.closeMobileMenu();
  }

  closeRequirementModal() {
    this.modalService.closeRequirementModal();
  }

  openProfileModal() {
    this.modalService.openProfileModal();
    this.closeMobileMenu();
  }

  closeProfileModal() {
    this.modalService.closeProfileModal();
  }

  submitRequirement() {
    if (!this.formData.fullName || !this.formData.phone || !this.formData.companyName) {
      alert('Please fill in your name, company name, and phone number.');
      return;
    }
    this.requirementSubmitted = true;
    setTimeout(() => {
      // Auto-reset after a few seconds or allow user to close
    }, 4000);
  }

  submitProfileRequest() {
    if (!this.profileEmail) {
      alert('Please provide your corporate email address.');
      return;
    }
    this.profileRequested = true;
  }
}
