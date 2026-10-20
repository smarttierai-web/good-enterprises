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
      icon: 'fa-solid fa-industry',
      title: 'Contractual Industrial Staffing',
      category: 'Manufacturing & Plants',
      desc: 'Flexible staffing solutions designed to scale plant capacity up or down according to seasonal surges, export deadlines, or multi-shift demands.',
      benefits: ['Zero long-term headcount liability', 'Replacement guarantee within 24 hours', 'Pre-screened candidates']
    },
    {
      icon: 'fa-solid fa-screwdriver-wrench',
      title: 'Technical & Engineering Manpower',
      category: 'Skilled Trades',
      desc: 'Certified ITI and Diploma technicians ready for precision shop-floor tasks across automotive, leather, heavy machinery, and chemical plants.',
      benefits: ['CNC/VMC Operators & Machinists', 'Industrial Fitters & Welders', 'Electrical Maintenance Engineers']
    },
    {
      icon: 'fa-solid fa-conveyor-belt',
      title: 'Assembly Line & Production Crews',
      category: 'Electronics & Textiles',
      desc: 'Dedicated male and female workforce teams skilled in high-precision assembly, packaging, labeling, and quality visual inspection.',
      benefits: ['Tailored male/female shift balance', 'Dexterity and high productivity', 'Low attrition & disciplined attendance']
    },
    {
      icon: 'fa-solid fa-boxes-stacked',
      title: 'Warehouse & Logistics Helpers',
      category: 'Supply Chain Hubs',
      desc: 'Robust manpower for logistics parks, freight terminals, and distribution centers in Sriperumbudur and Vanagaram.',
      benefits: ['Loading & Unloading crews', 'Material handling & pallet shifting', 'Inventory cycle counting staff']
    },
    {
      icon: 'fa-solid fa-broom',
      title: 'Industrial Housekeeping & 5S Facility Care',
      category: 'Facility Hygiene',
      desc: 'Professional cleaning staff dedicated to maintaining pristine factory shop-floors, sanitized washrooms, corporate offices, and cafeteria hygiene.',
      benefits: ['Mechanized floor cleaning operators', 'Chemical & safety compliant handling', 'Daily hygiene audit reports']
    },
    {
      icon: 'fa-solid fa-file-shield',
      title: 'Payroll & Statutory HR Outsourcing',
      category: 'Compliance Management',
      desc: 'End-to-end administration of wage disbursement, monthly PF & ESI challans, factory act compliance, and worker insurance coverage.',
      benefits: ['100% statutory indemnification', 'Monthly transparent wage registers', 'Dispute-free workforce relations']
    }
  ];

  openRequirementModal(serviceTitle?: string) {
    this.modalService.openRequirementModal(serviceTitle);
  }

  openProfileModal() {
    this.modalService.openProfileModal();
  }
}
