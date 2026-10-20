import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  standalone: false,
  styleUrl: './contact.css'
})
export class Contact {
  submitted = false;

  formData = {
    name: '',
    company: '',
    email: '',
    phone: '',
    location: 'Ranipet',
    category: 'ITI Qualified Candidates',
    headcount: 10,
    timeline: 'Immediate (Within 48 Hours)',
    message: ''
  };

  faqs = [
    {
      q: 'What is your turnaround time for mobilizing manpower?',
      a: 'For standard skilled and unskilled profiles (helpers, assembly operators, housekeeping), we mobilize within 24 to 48 hours. For specialized technical engineering profiles, mobilization takes 2 to 4 working days.',
      open: true
    },
    {
      q: 'Do you take care of all statutory labor compliances?',
      a: 'Yes, 100%. Good Enterprises handles PF, ESI, worker compensation insurance, professional tax, and monthly wage disbursement with complete transparency and compliance certificates.',
      open: false
    },
    {
      q: 'What happens if a candidate is absent or unsuitable?',
      a: 'We maintain a buffer standby pool of 10-15% across our operational hubs. Unsuitable or absent candidates are replaced within 24 hours at zero extra charge.',
      open: false
    },
    {
      q: 'Which industrial areas do you currently cover?',
      a: 'We have active workforce networks in Ranipet, Ambur, Vellore, Ambattur Industrial Estate, Sriperumbudur SIPCOT, and Vanagaram Logistics Hub, as well as surrounding Tamil Nadu industrial belts.',
      open: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

  submitContact() {
    if (!this.formData.name || !this.formData.company || !this.formData.phone) {
      alert('Please fill in your name, company name, and phone number.');
      return;
    }
    this.submitted = true;
  }
}
