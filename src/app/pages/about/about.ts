import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  standalone: false,
  styleUrl: './about.css'
})
export class About {
  constructor(public modalService: ModalService) {}

  locations = [
    { name: 'Ranipet', desc: 'SIPCOT & SIDCO Industrial Hubs, Heavy Engineering, Chemical & Tannery sectors' },
    { name: 'Ambur', desc: 'Global Footwear, Finished Leather & Manufacturing Cluster' },
    { name: 'Vellore', desc: 'Engineering fabrication, auto components & commercial enterprises' },
    { name: 'Ambattur', desc: 'Ambattur Industrial Estate, precision machinery & electronics' },
    { name: 'Sriperumbudur', desc: 'Mega SIPCOT Corridor, automotive OEMs, electronics & giga factories' },
    { name: 'Vanagaram', desc: 'Logistics parks, FMCG warehousing & distribution centers' }
  ];

  stats = [
    { value: '5,000+', label: 'Manpower Deployed' },
    { value: '120+', label: 'Industrial Clients' },
    { value: '98.5%', label: 'Daily Shift Attendance' },
    { value: '100%', label: 'Statutory Compliance' }
  ];

  openRequirementModal() {
    this.modalService.openRequirementModal();
  }

  openProfileModal() {
    this.modalService.openProfileModal();
  }
}
