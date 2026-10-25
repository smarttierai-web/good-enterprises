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

  businessDetails = {
    enterpriseName: 'GOOD ENTERPRISES',
    proprietrix: 'PERIYASAMY YASODHA',
    tagline: 'Providing the Right People for the Right Job',
    address: 'No. 2/144, 1st Floor, Ponnai Main Road, New Ahravaram, Mukundarayapuram (Post), Ranipet District – 632405',
    mobiles: ['7418945855', '8122045855', '7845545855'],
    email: 'goodenterprises2025@gmail.com',
    gstin: '33AVOPY6162A1ZE',
    epfo: 'TBVLR3986706000',
    esic: '51002739420000999',
    udyam: 'UDYAM-TN-35-0045928',
    pan: 'AVOPY6162A'
  };

  customers = [
    { name: 'SAME DEUTZ-FAHR India Pvt. Ltd., Ranipet', service: 'Assembly Workers', icon: 'fa-solid fa-industry' },
    { name: 'KAIZEN RESEARCH LABS INDIA PVT. LTD.', service: 'House Keeping Workers', icon: 'fa-solid fa-flask-vial' }
  ];

  registrations = [
    { title: 'GST Registration (GSTIN)', code: '33AVOPY6162A1ZE', desc: 'Form GST REG-06 | Jurisdictional Office: Chennai (Centre)' },
    { title: 'EPFO Establishment Code', code: 'TBVLR3986706000', desc: 'Regional Office: Vellore (Sathuvachari, Phase-III, Vellore – 632009)' },
    { title: 'ESIC Registration Code', code: '51002739420000999', desc: 'Branch Office: ESI Dispensary Complex, SIPCOT, Ranipet – 632403' },
    { title: 'UDYAM MSME Certificate', code: 'UDYAM-TN-35-0045928', desc: 'Micro Enterprise (Services - Employment Placement Agencies, NIC 7810 / 78100)' },
    { title: 'Income Tax PAN', code: 'AVOPY6162A', desc: 'Government of India | Assessee: Periyasamy Yasodha' }
  ];

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
