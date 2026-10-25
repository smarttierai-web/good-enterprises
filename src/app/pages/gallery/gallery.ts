import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

export interface WorkforceProfile {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  image: string;
  status: string;
  availableCount: string;
  turnaround: string;
  experience: string;
  shifts: string;
  location: string;
  shortDesc: string;
  skills: string[];
  compliance: string[];
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  standalone: false,
  styleUrl: './gallery.css'
})
export class Gallery {
  activeCategory = 'all';
  previewItem: WorkforceProfile | null = null;

  categories = [
    { id: 'all', label: 'All Workforce', count: '460+' },
    { id: 'assembly', label: 'Assembly & Production', count: '150+' },
    { id: 'technical', label: 'Technical & Machining', count: '105+' },
    { id: 'quality', label: 'Quality & Testing', count: '35+' },
    { id: 'logistics', label: 'Logistics & Warehouse', count: '90+' },
    { id: 'housekeeping', label: '5S Facility & Hygiene', count: '80+' }
  ];

  workforceProfiles: WorkforceProfile[] = [
    {
      id: 'assembly-crew',
      title: 'Automotive & Mechanical Assembly Crew',
      category: 'assembly',
      categoryLabel: 'Assembly & Production',
      image: '/assets/gallery/assembly-workers.jpg',
      status: 'AVAILABLE NOW',
      availableCount: '150+ Candidates Ready',
      turnaround: '24 - 48 Hours',
      experience: '0 - 4 Years Industrial Assembly',
      shifts: 'Rotational Shifts (A / B / C) & General',
      location: 'Ranipet, Ambattur, Sriperumbudur, Oragadam',
      shortDesc: 'Trained line operators proficient in automotive chassis assembly, sub-assemblies, torque wrench operation, wire harness routing, and takt-time adherence.',
      skills: ['Chassis & Component Assembly', 'Pneumatic & Torque Tools', 'Takt Time Adherence', '5S Floor Discipline', 'Safety PPE Certified'],
      compliance: ['Aadhaar Biometric Verified', 'Police Background Checked', 'EPFO & ESIC Enrolled', 'Direct Bank Disbursed']
    },
    {
      id: 'iti-technicians',
      title: 'Certified ITI Fitters & Maintenance Technicians',
      category: 'technical',
      categoryLabel: 'Technical & Machining',
      image: '/assets/gallery/iti-technicians.jpg',
      status: 'AVAILABLE NOW',
      availableCount: '45+ Certified Technicians',
      turnaround: '24 - 48 Hours',
      experience: 'NCVT / SCVT Certified (1 - 5 Years Exp)',
      shifts: 'General Shift & Breakdown Support',
      location: 'Ranipet, Vellore, Ambattur Industrial Hubs',
      shortDesc: 'Skilled mechanical technicians capable of engineering blueprint reading, machine alignment, lathe operations, vernier/micrometer measurement, and preventative plant maintenance.',
      skills: ['Precision Blueprint Reading', 'Machine Maintenance & Tooling', 'Hydraulics & Pneumatics', 'Precision Vernier / Micrometer', 'Fabrication & Fitting'],
      compliance: ['NCVT / SCVT Trade Certified', '100% Identity Verified', 'EPFO Code Linked', '24h Standby Replacement']
    },
    {
      id: 'quality-inspectors',
      title: 'QA / QC Quality Inspection & Testing Staff',
      category: 'quality',
      categoryLabel: 'Quality & Testing',
      image: '/assets/gallery/quality-inspection.jpg',
      status: 'AVAILABLE NOW',
      availableCount: '35+ QA Professionals',
      turnaround: '48 Hours',
      experience: 'Diploma / Science Graduates (1 - 4 Years Exp)',
      shifts: 'Rotational & Laboratory Shifts',
      location: 'Ranipet, Ambattur, Guindy, Sriperumbudur',
      shortDesc: 'Disciplined inspection personnel for incoming raw materials, in-process testing, final visual checks, dimension verification, rejection logging, and cleanroom protocol adherence.',
      skills: ['Digital Calipers & Height Gauges', 'Defect Logging & Rejection Reports', 'Cleanroom Protocol', 'First-Piece & Final Inspection', 'ISO 9001 Familiarity'],
      compliance: ['Degree / Marksheet Verified', 'Clean Background Verified', 'Zero Labor Dispute Undertaking', 'Monthly ECR Linked']
    },
    {
      id: 'warehouse-logistics',
      title: 'Warehouse Handlers & Material Logistics Crew',
      category: 'logistics',
      categoryLabel: 'Logistics & Warehouse',
      image: '/assets/gallery/warehouse-logistics.jpg',
      status: 'AVAILABLE NOW',
      availableCount: '90+ Handlers & Helpers',
      turnaround: 'Immediate (24 Hours)',
      experience: '1 - 3 Years Logistics & Material Movement',
      shifts: '24/7 Shift Coverage (Day, Evening, Night)',
      location: 'Vanagaram Logistics Parks, Sriperumbudur, Ranipet',
      shortDesc: 'High-stamina, disciplined material handlers experienced in container unloading, inventory binning, pallet stacking, barcode scanning, packing, and dispatch preparation.',
      skills: ['HPT & Hand Pallet Movement', 'Barcode Scanning & Binning', 'Container De-stuffing', 'Industrial Packing & Wrapping', 'Physical Fitness Certified'],
      compliance: ['100% Biometric Verified', 'ESIC Medical Cover', 'EPFO Linked', 'Dedicated On-Site Supervisor']
    },
    {
      id: 'housekeeping-crew',
      title: 'Industrial 5S Facility & Office Housekeeping Crew',
      category: 'housekeeping',
      categoryLabel: '5S Facility & Hygiene',
      image: '/assets/gallery/housekeeping-crew.jpg',
      status: 'AVAILABLE NOW',
      availableCount: '80+ Male & Female Personnel',
      turnaround: 'Immediate (24 Hours)',
      experience: 'Trained in 5S & Industrial Floor Scrubbing',
      shifts: 'Round-The-Clock Facility Coverage',
      location: 'Ranipet, Ambur, Vellore, Ambattur Hubs',
      shortDesc: 'Professional, uniformed housekeeping staff specializing in factory floor hygiene, automated floor scrubbing, oil spill cleanup, waste segregation, and office sanitization. Active deployment at Kaizen Research Labs.',
      skills: ['Automated Floor Scrubber Operation', '5S Shop Floor Hygiene', 'Hazardous Spill Control', 'Office & Restroom Sanitization', 'Color-coded Microfiber Tools'],
      compliance: ['Branded Uniforms & ID Badges', 'EPFO & ESIC Enrolled', 'Police Verification Done', 'Supervisor Assigned for 25+']
    },
    {
      id: 'machine-operators',
      title: 'CNC & Production Machine Helpers',
      category: 'technical',
      categoryLabel: 'Technical & Machining',
      image: '/assets/gallery/machine-operators.jpg',
      status: 'AVAILABLE NOW',
      availableCount: '60+ Machine Helpers',
      turnaround: '24 - 48 Hours',
      experience: '6 Months - 3 Years Machine Support',
      shifts: 'Rotational Shifts (A, B, C)',
      location: 'Ranipet SIDCO, Ambattur, Maraimalai Nagar',
      shortDesc: 'Skilled operators for CNC milling/turning loading, stamping presses, drilling machines, injection moulding, and automated packaging lines with strict safety compliance.',
      skills: ['CNC Machine Loading & Unloading', 'Cycle Monitoring & Inspection', 'Emergency Stop & Safety Protocols', 'Deburring & Finishing', 'Production Logbook Entry'],
      compliance: ['Safety PPE Briefed', 'Aadhaar Authenticated', 'EPF & ESI Active', 'Daily Biometric Tracking']
    }
  ];

  constructor(public modalService: ModalService) {}

  get filteredProfiles(): WorkforceProfile[] {
    if (this.activeCategory === 'all') {
      return this.workforceProfiles;
    }
    return this.workforceProfiles.filter(p => p.category === this.activeCategory);
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }

  openPreview(item: WorkforceProfile) {
    this.previewItem = item;
    document.body.style.overflow = 'hidden';
  }

  closePreview() {
    this.previewItem = null;
    document.body.style.overflow = '';
  }

  requestCrew(item: WorkforceProfile) {
    this.closePreview();
    this.modalService.openRequirementModal(item.title);
  }

  openGeneralRequirement() {
    this.modalService.openRequirementModal('Workforce Deployment Request');
  }
}
