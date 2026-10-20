import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

interface Pillar {
  icon: string;
  title: string;
  desc: string;
  points: string[];
}

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.html',
  standalone: false,
  styleUrl: './why-choose-us.css'
})
export class WhyChooseUs {
  constructor(public modalService: ModalService) {}

  pillars: Pillar[] = [
    {
      icon: 'fa-solid fa-users-gear',
      title: 'Reliable & Disciplined Workforce',
      desc: 'Our candidates are thoroughly briefed on factory etiquette, safety SOPs, and shift punctuality before reporting to your facility.',
      points: ['98.5% historical attendance rate', 'Zero unauthorized absence guarantee', 'Backup personnel standby for unexpected leaves']
    },
    {
      icon: 'fa-solid fa-bolt',
      title: 'Quick Deployment (24 - 48 Hours)',
      desc: 'Avoid costly machinery idle time. We maintain active, pre-vetted candidate inventories across Ranipet, Vellore, and Sriperumbudur.',
      points: ['Immediate batch deployment within 24-48 hours', 'Rapid ramp-up for production spikes', 'Fast-track replacement of unsuitable workers']
    },
    {
      icon: 'fa-solid fa-location-crosshairs',
      title: 'Local Candidates for High Retention',
      desc: 'We recruit within a 15-25 km radius of your plant, minimizing transportation fatigue and maximizing long-term stability.',
      points: ['Localized sourcing in Ranipet, Ambur, Vellore, Ambattur & Sriperumbudur', 'Low migration and family stability', 'Better relationship with local community']
    },
    {
      icon: 'fa-solid fa-sliders',
      title: 'Flexible Staffing Solutions',
      desc: 'Adapt to market dynamics without permanent overheads. Scale workforce up or down smoothly with clear service level agreements.',
      points: ['Short-term peak season contracts', 'Long-term plant operational support', 'Customized male/female ratios as per line requirement']
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Industrial & Commercial Support',
      desc: 'End-to-end expertise spanning complex heavy engineering factories, clean electronic rooms, and fast-paced warehousing hubs.',
      points: ['100% PF, ESI, and statutory labor compliance', 'Regular labor officer audits & complete documentation', 'Comprehensive worker safety insurance']
    }
  ];

  comparisonPoints = [
    { feature: 'Statutory Compliance (PF/ESI/Factory Act)', goodEnterprises: '100% Guaranteed & Audited Monthly', others: 'Frequently non-compliant / Risk of notices' },
    { feature: 'Deployment Turnaround', goodEnterprises: '24 to 48 Hours for urgent requirements', others: '10 to 15 days or unpredictable' },
    { feature: 'Candidate Verification', goodEnterprises: 'Aadhaar, Police check & Marksheets verified', others: 'Unverified / Raw unvetted labor' },
    { feature: 'Attendance Guarantee', goodEnterprises: '98.5% with immediate standby replacements', others: 'High absenteeism without backup' },
    { feature: 'Dedicated Field Coordinator', goodEnterprises: 'Assigned on-site officer for shift checks', others: 'No supervisor presence' }
  ];

  openRequirementModal() {
    this.modalService.openRequirementModal();
  }

  openProfileModal() {
    this.modalService.openProfileModal();
  }
}
