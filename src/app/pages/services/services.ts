import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

interface ServiceItem {
  icon: string;
  title: string;
  category: string;
  desc: string;
  benefits: string[];
}

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  standalone: false,
  styleUrl: './services.css'
})
export class Services {
  constructor(public modalService: ModalService) {}

  servicesList: ServiceItem[] = [
    {
      icon: 'fa-solid fa-users-gear',
      title: 'Manpower Supply Services',
      category: 'Core Staffing',
      desc: 'Complete industrial workforce solutions providing skilled, semi-skilled, and unskilled talent tailored to the precise shift requirements of factories and plants.',
      benefits: [
        'Production Helpers & Machine Helpers',
        'Assembly Workers & Packers',
        'Warehouse Helpers & Material Handlers',
        'Quality Inspection Staff (QA/QC)',
        'Administrative & Office Support Staff'
      ]
    },
    {
      icon: 'fa-solid fa-broom',
      title: 'Housekeeping & Facility Services',
      category: 'Facility Hygiene',
      desc: 'Professional cleaning and sanitized facility management for manufacturing shop-floors, research laboratories, corporate offices, and cafeterias.',
      benefits: [
        'Industrial Housekeeping & 5S Floor Scrubbing',
        'Office Housekeeping & Pantry Attendants',
        'Chemical-safe sanitization and waste segregation',
        'Active deployment at Kaizen Research Labs'
      ]
    },
    {
      icon: 'fa-solid fa-book-bookmark',
      title: 'Office & Industrial Stationery Supply',
      category: 'Commercial Supplies',
      desc: 'One-stop supply partner providing factory compliance stationery, logbooks, operational forms, and day-to-day office consumables.',
      benefits: [
        'Factory Registers, Logbooks & Compliance Forms',
        'Muster rolls, inspection sheets, and shift registers',
        'Corporate office stationery & computer consumables',
        'Scheduled doorstep monthly delivery'
      ]
    },
    {
      icon: 'fa-solid fa-screwdriver-wrench',
      title: 'Technical & Engineering Manpower',
      category: 'Skilled Trades',
      desc: 'Certified ITI and Diploma technicians ready for precision shop-floor tasks across automotive, leather, heavy machinery, and chemical plants.',
      benefits: [
        'CNC/VMC Operators & Machinists',
        'Industrial Fitters, Turners & Welders',
        'Electrical & Mechanical Maintenance Engineers'
      ]
    },
    {
      icon: 'fa-solid fa-industry',
      title: 'Assembly Line & Production Crews',
      category: 'Manufacturing Support',
      desc: 'High-dexterity male and female workforce teams skilled in continuous assembly line operations, zero-defect quality inspection, and packaging.',
      benefits: [
        'Proven assembly staffing (e.g. SAME DEUTZ-FAHR India, Ranipet)',
        'Shift-ready teams with 98.5% attendance stability',
        'Tailored male/female shift allocation'
      ]
    },
    {
      icon: 'fa-solid fa-file-shield',
      title: 'Payroll & Statutory HR Outsourcing',
      category: 'Compliance Management',
      desc: 'End-to-end administration of wage disbursement, monthly PF & ESI challans, factory act compliance, and worker insurance coverage.',
      benefits: [
        '100% EPFO (TBVLR3986706000) & ESIC (51002739420000999) compliance',
        'GSTIN: 33AVOPY6162A1ZE invoicing with complete challans',
        'Total indemnification against labor notices'
      ]
    }
  ];

  openRequirementModal(serviceTitle?: string) {
    this.modalService.openRequirementModal(serviceTitle);
  }

  openProfileModal() {
    this.modalService.openProfileModal();
  }
}
