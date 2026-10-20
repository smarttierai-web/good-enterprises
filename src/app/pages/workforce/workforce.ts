import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

interface WorkforceDetail {
  id: string;
  title: string;
  badgeBg: string;
  icon: string;
  tag: string;
  trades: string[];
  qualifications: string;
  experience: string;
  availability: string;
  industries: string;
}

@Component({
  selector: 'app-workforce',
  templateUrl: './workforce.html',
  standalone: false,
  styleUrl: './workforce.css'
})
export class Workforce {
  selectedTab = 'all';

  categories: WorkforceDetail[] = [
    {
      id: 'iti',
      title: 'ITI Qualified Candidates',
      badgeBg: 'var(--card-gradient-1)',
      icon: 'fa-solid fa-graduation-cap',
      tag: 'technical',
      trades: ['Fitter', 'Electrician', 'Machinist', 'Turner', 'Welder', 'Motor Mechanic', 'Tool & Die Maker'],
      qualifications: 'NCVT / SCVT Certified ITI Diploma',
      experience: 'Freshers to 5+ Years Industrial Experience',
      availability: 'Immediate (24-48 Hours Batch Mobilization)',
      industries: 'Automotive OEMs, Fabrication Units, Engineering Machining'
    },
    {
      id: 'diploma',
      title: 'Diploma Holders',
      badgeBg: 'var(--card-gradient-2)',
      icon: 'fa-solid fa-file-contract',
      tag: 'technical',
      trades: ['Mechanical Engineering (DME)', 'Electrical & Electronics (DEEE)', 'Electronics & Comm (DECE)', 'Automobile (DAE)', 'Civil'],
      qualifications: '3-Year Polytechnic State Board Diploma',
      experience: 'Junior Engineers, Line Supervisors, Quality Inspectors',
      availability: 'Immediate to 3 Days',
      industries: 'Auto Ancillaries, Electronics Manufacturing, Tool Rooms'
    },
    {
      id: 'degree',
      title: 'Degree Graduates',
      badgeBg: 'var(--card-gradient-3)',
      icon: 'fa-solid fa-user-graduate',
      tag: 'operations',
      trades: ['Production Documentation', 'Quality Assurance (QA/QC)', 'Store & Inventory Management', 'ERP Data Entry', 'Office Admin'],
      qualifications: 'B.Sc, B.Com, B.A, BBA, B.Tech / B.E (Non-core & Core)',
      experience: '0 to 4 Years Corporate / Factory Experience',
      availability: 'Immediate',
      industries: 'Logistics Parks, Pharma, Finished Leather, FMCG'
    },
    {
      id: 'school',
      title: '10th & 12th Pass Candidates',
      badgeBg: 'var(--card-gradient-4)',
      icon: 'fa-solid fa-book-open',
      tag: 'operations',
      trades: ['Machine Operators', 'Assembly Workers', 'Packaging & Sealing', 'Barcode Scanning', 'Inspection Assistants'],
      qualifications: 'Secondary (SSLC) / Higher Secondary (HSC)',
      experience: 'Trained & Eager to Learn',
      availability: 'Large Batches (50 to 200+ Personnel)',
      industries: 'Electronics Assembly, Garments & Shoes, Food Processing'
    },
    {
      id: 'gender',
      title: 'Male & Female Employees',
      badgeBg: 'var(--card-gradient-5)',
      icon: 'fa-solid fa-user-group',
      tag: 'operations',
      trades: ['Precision Electronics Soldering', 'Wire Harnessing', 'Pharma Cleanroom Assembly', 'Textile & Leather Finishing'],
      qualifications: 'Trained Workforce with Shift Adaptability',
      experience: 'High Dexterity & Zero-Defect Assembly Focus',
      availability: 'Balanced Ratio Available on Request',
      industries: 'Electronics, Medical Devices, Footwear Manufacturing'
    },
    {
      id: 'housekeeping',
      title: 'Housekeeping Staff',
      badgeBg: 'var(--card-gradient-6)',
      icon: 'fa-solid fa-spray-can-sparkles',
      tag: 'support',
      trades: ['Shop Floor 5S Cleaning', 'Sanitization & Waste Segregation', 'Restroom & Cafeteria Hygiene', 'Admin Block Cleaning'],
      qualifications: 'Trained in Industrial Chemical & Machine Cleaning',
      experience: 'Punctual, Uniformed & Disciplined',
      availability: 'Round-The-Clock Shifts',
      industries: 'All Industrial, Commercial & Corporate Complexes'
    },
    {
      id: 'helpers',
      title: 'Helpers & General Workers',
      badgeBg: 'var(--card-gradient-7)',
      icon: 'fa-solid fa-helmet-safety',
      tag: 'support',
      trades: ['Raw Material Loading & Unloading', 'In-Plant Material Movement', 'Palletizing & Packing', 'Yard Maintenance'],
      qualifications: 'Physically Fit, Verified Identity, Safety Briefed',
      experience: 'Reliable Daily Operations',
      availability: 'Immediate Bulk Deployment',
      industries: 'Warehousing, Metal Fabrication, Foundries, Logistics'
    }
  ];

  constructor(public modalService: ModalService) {}

  get filteredCategories(): WorkforceDetail[] {
    if (this.selectedTab === 'all') return this.categories;
    return this.categories.filter(c => c.tag === this.selectedTab);
  }

  setTab(tab: string) {
    this.selectedTab = tab;
  }

  openRequirementModal(categoryTitle?: string) {
    this.modalService.openRequirementModal(categoryTitle);
  }

  openProfileModal() {
    this.modalService.openProfileModal();
  }
}
