import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

interface WorkforceItem {
  id: string;
  title: string;
  iconClass: string;
  badgeBg: string;
  desc: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  standalone: false,
  styleUrl: './home.css'
})
export class Home {
  constructor(public modalService: ModalService) {}

  workforceList: WorkforceItem[] = [
    {
      id: 'iti',
      title: 'ITI Qualified Candidates',
      iconClass: 'fa-solid fa-graduation-cap',
      badgeBg: 'var(--card-gradient-1)',
      desc: 'Fitters, Electricians, Machinists, Welders & Turner trades'
    },
    {
      id: 'diploma',
      title: 'Diploma Holders',
      iconClass: 'fa-solid fa-certificate',
      badgeBg: 'var(--card-gradient-2)',
      desc: 'DME, EEE, ECE, Civil & Automobile technical supervisors'
    },
    {
      id: 'degree',
      title: 'Degree Graduates',
      iconClass: 'fa-solid fa-user-graduate',
      badgeBg: 'var(--card-gradient-3)',
      desc: 'B.Sc, B.Com, BBA, B.Tech graduates for QA, store & office operations'
    },
    {
      id: '10-12',
      title: '10th & 12th Pass',
      iconClass: 'fa-solid fa-book-open-reader',
      badgeBg: 'var(--card-gradient-4)',
      desc: 'Production line operators, packaging helpers & assembly crews'
    },
    {
      id: 'gender',
      title: 'Male & Female Employees',
      iconClass: 'fa-solid fa-people-arrows',
      badgeBg: 'var(--card-gradient-5)',
      desc: 'Balanced teams tailored for electronic, pharma & textile assembly'
    },
    {
      id: 'housekeeping',
      title: 'Housekeeping Staff',
      iconClass: 'fa-solid fa-broom',
      badgeBg: 'var(--card-gradient-6)',
      desc: 'Industrial floor hygiene, corporate pantry & sanitized facility upkeep'
    },
    {
      id: 'helpers',
      title: 'Helpers & General Workers',
      iconClass: 'fa-solid fa-helmet-safety',
      badgeBg: 'var(--card-gradient-7)',
      desc: 'Material handling, loading/unloading, inventory shifting & daily helpers'
    }
  ];

  keyStrengths = [
    {
      title: 'Candidates available for immediate deployment',
      icon: 'fa-solid fa-bolt-lightning',
      desc: 'Ready talent pool mobilized within 24 to 48 hours to prevent factory downtime.'
    },
    {
      title: 'Both skilled & unskilled manpower',
      icon: 'fa-solid fa-gears',
      desc: 'Comprehensive coverage from certified technical engineers to general plant helpers.'
    },
    {
      title: 'Tailored male/female workforce',
      icon: 'fa-solid fa-users',
      desc: 'Customized workforce planning based on shift dynamics, safety, and operational nature.'
    },
    {
      title: 'Local talent for better attendance and stability',
      icon: 'fa-solid fa-location-dot',
      desc: 'Sourced directly from Ranipet, Vellore, Ambur, Sriperumbudur & Ambattur belts.'
    }
  ];

  whyChooseUsList = [
    'Reliable Workforce',
    'Quick Deployment',
    'Local Candidates',
    'Flexible Staffing Solutions',
    'Industrial & Commercial Manpower Support'
  ];

  openRequirementModal(categoryTitle?: string) {
    this.modalService.openRequirementModal(categoryTitle);
  }

  openProfileModal() {
    this.modalService.openProfileModal();
  }
}
