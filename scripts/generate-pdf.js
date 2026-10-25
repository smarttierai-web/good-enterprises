const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '../public/assets/company-profile.pdf');
const logoPath = path.join(__dirname, '../public/assets/logo.png');

// Use zero margins so PDFKit NEVER automatically inserts empty pages!
// All page additions are strictly controlled via doc.addPage().
const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 0, bottom: 0, left: 0, right: 0 },
  bufferPages: true,
  autoFirstPage: true
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Theme Colors
const PRIMARY_DARK = '#1f0338';
const PRIMARY_PURPLE = '#38065b';
const ACCENT_MAGENTA = '#b81b6c';
const ACCENT_PINK = '#d81b60';
const BG_LAVENDER = '#f7f1fb';
const TEXT_DARK = '#1f2937';
const TEXT_MUTED = '#4b5563';
const TEXT_LIGHT = '#6b7280';
const WHITE = '#ffffff';

function drawRule(y, color = ACCENT_MAGENTA) {
  doc.strokeColor(color).lineWidth(1.5).moveTo(40, y).lineTo(555, y).stroke();
}

function drawFooter(pageNumber, subtext = '') {
  doc.rect(0, 805, 595.28, 36.89).fill(PRIMARY_DARK);
  doc.fillColor('#e2d9eb').fontSize(8).font('Helvetica').text(`GOOD ENTERPRISES  |  Page ${pageNumber} of 4`, 40, 818);
  if (subtext) {
    doc.fillColor('#f9a8d4').fontSize(7.5).font('Helvetica').text(subtext, 220, 818, { width: 335, align: 'right' });
  }
}

// ============================================================================
// PAGE 1 OF 4: CORPORATE IDENTITY, ABOUT US, MISSION & WHY CHOOSE US
// ============================================================================
// Top Banner
doc.rect(0, 0, 595.28, 160).fill(PRIMARY_DARK);
doc.rect(0, 156, 595.28, 4).fill(ACCENT_MAGENTA);

if (fs.existsSync(logoPath)) {
  doc.image(logoPath, 40, 20, { width: 180 });
} else {
  doc.fontSize(22).fillColor(WHITE).font('Helvetica-Bold').text('GOOD ENTERPRISES', 40, 25);
}

doc.fontSize(10.5).fillColor('#fbcfe8').font('Helvetica-Bold').text(
  'YOUR TRUSTED PARTNER FOR MANPOWER & INDUSTRIAL SUPPORT SERVICES',
  40, 90, { characterSpacing: 0.5 }
);

// Tagline Badge
doc.roundedRect(40, 110, 280, 24, 4).fillAndStroke('#3d1163', '#a2216e');
doc.fontSize(9.5).fillColor(WHITE).font('Helvetica-BoldOblique').text('"Providing the Right People for the Right Job"', 48, 117);

doc.fontSize(8).fillColor('#e9d5ff').font('Helvetica').text(
  'Industrial Hubs: Ranipet | Ambur | Vellore | Ambattur | Sriperumbudur | Vanagaram',
  40, 142
);

// ABOUT US
doc.fontSize(15).fillColor(PRIMARY_DARK).font('Helvetica-Bold').text('ABOUT US', 40, 178);
drawRule(196);

doc.fontSize(9).fillColor(TEXT_DARK).font('Helvetica').text(
  'Good Enterprises is a professionally managed service organization providing reliable manpower solutions and industrial support services to manufacturing industries, engineering companies, research laboratories, and commercial establishments.\n\n' +
  'With a commitment to quality, compliance, and customer satisfaction, we deliver skilled, semi-skilled, and unskilled workforce solutions tailored to the specific requirements of our clients. Our objective is to support organizations in achieving operational excellence through dependable manpower deployment and efficient facility support services.',
  40, 206, { width: 515, lineGap: 3 }
);

// Mission & Vision Cards (Side by Side)
const cardY = 285;
const cardW = 250;
const cardH = 80;

// Mission Card
doc.roundedRect(40, cardY, cardW, cardH, 6).fillAndStroke(BG_LAVENDER, '#ebd8f5');
doc.rect(40, cardY, 5, cardH).fill(ACCENT_MAGENTA);
doc.fontSize(11).fillColor(PRIMARY_DARK).font('Helvetica-Bold').text('Our Mission', 54, cardY + 10);
doc.fontSize(8.2).fillColor(TEXT_MUTED).font('Helvetica').text(
  'To provide reliable manpower and industrial support services that enhance productivity, operational efficiency, and business growth for our clients.',
  54, cardY + 28, { width: 225, lineGap: 2.5 }
);

// Vision Card
doc.roundedRect(305, cardY, cardW, cardH, 6).fillAndStroke(BG_LAVENDER, '#ebd8f5');
doc.rect(305, cardY, 5, cardH).fill(PRIMARY_PURPLE);
doc.fontSize(11).fillColor(PRIMARY_DARK).font('Helvetica-Bold').text('Our Vision', 319, cardY + 10);
doc.fontSize(8.2).fillColor(TEXT_MUTED).font('Helvetica').text(
  'To become one of the most trusted manpower and industrial service providers in Tamil Nadu by delivering excellence, integrity, and customer satisfaction.',
  319, cardY + 28, { width: 225, lineGap: 2.5 }
);

// WHY CHOOSE GOOD ENTERPRISES? (From Page 2 of User Document)
doc.fontSize(14).fillColor(PRIMARY_DARK).font('Helvetica-Bold').text('WHY CHOOSE GOOD ENTERPRISES?', 40, 385);
drawRule(402);

const whyPoints = [
  { title: 'Experienced and Professional Team', desc: 'Specialized management with deep industrial staffing and factory shift operations background.' },
  { title: 'Timely Manpower Deployment', desc: 'Rapid mobilization within 24 to 48 hours to minimize plant downtime and handle production spikes.' },
  { title: 'Cost-Effective Service Solutions', desc: 'Transparent statutory wage models without hidden surcharges or administrative burdens.' },
  { title: 'Quality-Focused Operations', desc: 'Rigorous 4-stage candidate screening, background verification, trade tests, and safety briefings.' },
  { title: 'Reliable and Prompt Service Support', desc: 'Dedicated on-site field coordinators for biometric attendance, discipline, and grievance redressal.' }
];

let whyY = 412;
whyPoints.forEach((item, idx) => {
  doc.rect(40, whyY, 515, 25).fillAndStroke((idx % 2 === 0) ? '#fbf6fd' : '#ffffff', '#ebd9f5');
  doc.fillColor(ACCENT_MAGENTA).fontSize(8.8).font('Helvetica-Bold').text('•  ' + item.title, 48, whyY + 7);
  doc.fillColor(TEXT_MUTED).fontSize(7.8).font('Helvetica').text(item.desc, 240, whyY + 7, { width: 305 });
  whyY += 28;
});

// Key Metrics Bar
const mY = 562;
doc.roundedRect(40, mY, 515, 52, 6).fillAndStroke(PRIMARY_DARK, PRIMARY_DARK);
const metrics = [
  { val: '5,000+', lbl: 'Workforce Deployed' },
  { val: '120+', lbl: 'Industrial Clients' },
  { val: '98.5%', lbl: 'Shift Attendance' },
  { val: '100%', lbl: 'Statutory Compliance' }
];
metrics.forEach((m, i) => {
  const mx = 45 + i * 128;
  doc.fontSize(13).fillColor('#f472b6').font('Helvetica-Bold').text(m.val, mx, mY + 10, { width: 120, align: 'center' });
  doc.fontSize(7.5).fillColor(WHITE).font('Helvetica').text(m.lbl, mx, mY + 28, { width: 120, align: 'center' });
});

// Quick Business Summary Box
const bY = 626;
doc.roundedRect(40, bY, 515, 165, 6).fillAndStroke('#faf5fc', '#ebd8f5');
doc.rect(40, bY, 515, 24).fill('#300657');
doc.fillColor(WHITE).fontSize(9.5).font('Helvetica-Bold').text('OFFICIAL BUSINESS REGISTRATION SUMMARY', 50, bY + 6);

doc.fillColor(PRIMARY_DARK).fontSize(8.5).font('Helvetica-Bold').text('Registered Office:', 50, bY + 34);
doc.fillColor(TEXT_DARK).fontSize(8.2).font('Helvetica').text(
  'No. 2/144, 1st Floor, Ponnai Main Road, New Ahravaram, Mukundarayapuram (Post), Ranipet District – 632405',
  145, bY + 34, { width: 395 }
);

doc.fillColor(PRIMARY_DARK).fontSize(8.5).font('Helvetica-Bold').text('Official Mobiles:', 50, bY + 54);
doc.fillColor(ACCENT_MAGENTA).fontSize(8.8).font('Helvetica-Bold').text('7418945855  |  8122045855  |  7845545855', 145, bY + 54);

doc.fillColor(PRIMARY_DARK).fontSize(8.5).font('Helvetica-Bold').text('Corporate Email:', 50, bY + 72);
doc.fillColor(TEXT_DARK).fontSize(8.2).font('Helvetica').text('goodenterprises2025@gmail.com', 145, bY + 72);

doc.fillColor(PRIMARY_DARK).fontSize(8.5).font('Helvetica-Bold').text('GSTIN:', 50, bY + 90);
doc.fillColor(PRIMARY_PURPLE).fontSize(9).font('Helvetica-Bold').text('33AVOPY6162A1ZE', 145, bY + 90);

doc.fillColor(PRIMARY_DARK).fontSize(8.5).font('Helvetica-Bold').text('EPFO / ESIC:', 50, bY + 108);
doc.fillColor(TEXT_DARK).fontSize(8.2).font('Helvetica').text('EPFO Code: TBVLR3986706000  |  ESIC Code: 51002739420000999', 145, bY + 108);

doc.fillColor(PRIMARY_DARK).fontSize(8.5).font('Helvetica-Bold').text('MSME / PAN:', 50, bY + 126);
doc.fillColor(TEXT_DARK).fontSize(8.2).font('Helvetica').text('UDYAM-TN-35-0045928 (Micro Services)  |  PAN: AVOPY6162A', 145, bY + 126);

doc.fillColor(PRIMARY_DARK).fontSize(8.5).font('Helvetica-Bold').text('Proprietrix:', 50, bY + 144);
doc.fillColor(TEXT_DARK).fontSize(8.2).font('Helvetica-Bold').text('PERIYASAMY YASODHA', 145, bY + 144);

drawFooter(1, 'goodenterprises2025@gmail.com  |  7418945855 / 8122045855 / 7845545855');

// ============================================================================
// PAGE 2 OF 4: OUR SERVICES & OUR VALUABLE CUSTOMERS
// ============================================================================
doc.addPage();

// Header Stripe
doc.rect(0, 0, 595.28, 42).fill(PRIMARY_DARK);
doc.fillColor(WHITE).fontSize(10).font('Helvetica-Bold').text('GOOD ENTERPRISES - CORPORATE PROFILE', 40, 16);
doc.fillColor('#f9a8d4').fontSize(9).font('Helvetica').text('SERVICES & REPUTED CLIENTELE', 380, 16);

doc.fontSize(15).fillColor(PRIMARY_DARK).font('Helvetica-Bold').text('OUR SERVICES', 40, 58);
drawRule(76);

// 3 Service Columns / Cards matching Page 1 of user PDF
// 1. Manpower Supply Services
doc.roundedRect(40, 88, 250, 235, 6).fillAndStroke('#ffffff', '#ebd8f5');
doc.rect(40, 88, 250, 24).fill(PRIMARY_PURPLE);
doc.fillColor(WHITE).fontSize(9.5).font('Helvetica-Bold').text('Manpower Supply Services', 50, 95);

const manpowerList = [
  'Skilled Manpower (Fitters, Electricians, Machinists)',
  'Semi-Skilled Manpower (Line Operators)',
  'Unskilled Manpower (General Plant Support)',
  'Production Helpers',
  'Machine Helpers',
  'Assembly Workers',
  'Helpers & Packers',
  'Warehouse Helpers',
  'Quality Inspection Staff (QA/QC)',
  'Administrative & Office Support Staff'
];

let mpY = 120;
manpowerList.forEach(item => {
  doc.fillColor(ACCENT_MAGENTA).fontSize(8).font('Helvetica-Bold').text('•', 50, mpY);
  doc.fillColor(TEXT_DARK).fontSize(7.8).font('Helvetica').text(item, 60, mpY, { width: 220 });
  mpY += 19;
});

// 2. Housekeeping & Facility Services
doc.roundedRect(305, 88, 250, 110, 6).fillAndStroke('#ffffff', '#ebd8f5');
doc.rect(305, 88, 250, 24).fill(ACCENT_MAGENTA);
doc.fillColor(WHITE).fontSize(9.5).font('Helvetica-Bold').text('Housekeeping & Facility Services', 315, 95);

const hkList = [
  'Industrial Housekeeping (5S Floor Hygiene & Maintenance)',
  'Office Housekeeping (Admin Blocks, Sanitization & Pantry)',
  'Active deployment at Kaizen Research Labs'
];

let hkY = 122;
hkList.forEach(item => {
  doc.fillColor(PRIMARY_PURPLE).fontSize(8).font('Helvetica-Bold').text('•', 318, hkY);
  doc.fillColor(TEXT_DARK).fontSize(7.8).font('Helvetica').text(item, 328, hkY, { width: 215 });
  hkY += 24;
});

// 3. Office & Industrial Stationery Supply
doc.roundedRect(305, 210, 250, 113, 6).fillAndStroke('#ffffff', '#ebd8f5');
doc.rect(305, 210, 250, 24).fill(PRIMARY_DARK);
doc.fillColor(WHITE).fontSize(9.5).font('Helvetica-Bold').text('Office & Industrial Stationery Supply', 315, 217);

const stList = [
  'Office Stationery Items (Corporate Supplies & Consumables)',
  'Factory Registers & Forms (Statutory Logbooks & Forms)',
  'Muster rolls, inspection sheets & shift registers'
];

let stY = 244;
stList.forEach(item => {
  doc.fillColor(ACCENT_PINK).fontSize(8).font('Helvetica-Bold').text('•', 318, stY);
  doc.fillColor(TEXT_DARK).fontSize(7.8).font('Helvetica').text(item, 328, stY, { width: 215 });
  stY += 24;
});

// OUR VALUABLE CUSTOMERS SECTION (Exact Table from Page 2 of User PDF)
doc.fontSize(15).fillColor(PRIMARY_DARK).font('Helvetica-Bold').text('OUR VALUABLE CUSTOMERS', 40, 342);
drawRule(360);

doc.fontSize(8.8).fillColor(TEXT_MUTED).font('Helvetica').text(
  'We are proud to serve reputed organizations and contribute to their operational success:',
  40, 370
);

// Customer Table
const tblY = 388;
doc.rect(40, tblY, 515, 26).fill(PRIMARY_DARK);
doc.fillColor(WHITE).fontSize(9.5).font('Helvetica-Bold').text('Customer Name', 52, tblY + 7);
doc.fillColor(WHITE).fontSize(9.5).font('Helvetica-Bold').text('Deployed Workforce / Service', 310, tblY + 7);

// Row 1: SAME DEUTZ-FAHR
doc.rect(40, tblY + 26, 515, 32).fillAndStroke('#faf5fc', '#ebd8f5');
doc.fillColor(PRIMARY_DARK).fontSize(9).font('Helvetica-Bold').text('SAME DEUTZ-FAHR India Pvt. Ltd., Ranipet', 52, tblY + 36);
doc.fillColor(ACCENT_MAGENTA).fontSize(9).font('Helvetica-Bold').text('Assembly Workers', 310, tblY + 36);

// Row 2: KAIZEN RESEARCH LABS
doc.rect(40, tblY + 58, 515, 32).fillAndStroke('#ffffff', '#ebd8f5');
doc.fillColor(PRIMARY_DARK).fontSize(9).font('Helvetica-Bold').text('KAIZEN RESEARCH LABS INDIA PVT. LTD.', 52, tblY + 68);
doc.fillColor(ACCENT_MAGENTA).fontSize(9).font('Helvetica-Bold').text('House Keeping Workers', 310, tblY + 68);

// Industries We Power Across Tamil Nadu
doc.fontSize(14).fillColor(PRIMARY_DARK).font('Helvetica-Bold').text('Key Industrial Sectors Served', 40, 502);
drawRule(520);

const sectors = [
  { name: 'Automotive OEMs & Ancillaries', desc: 'Assembly line operators, component fabricators, and store helpers.' },
  { name: 'Heavy Engineering & Machining', desc: 'Certified ITI fitters, CNC/VMC machinists, welders, and maintenance.' },
  { name: 'Research Laboratories & Pharma', desc: 'Disciplined housekeeping, sanitized facility upkeep, and office staff.' },
  { name: 'Finished Leather & Footwear', desc: 'Skilled stitching operators, cutting helpers, and packaging crews.' },
  { name: 'Logistics Parks & Warehousing', desc: 'Material loading/unloading, inventory counting, and pallet movement.' },
  { name: 'Electronics & Cleanroom Plants', desc: 'Male & female assembly crews with high dexterity and zero-defect focus.' }
];

let secY = 534;
sectors.forEach((sec, idx) => {
  const colX = (idx % 2 === 0) ? 40 : 305;
  const colY = secY + Math.floor(idx / 2) * 50;
  doc.roundedRect(colX, colY, 250, 42, 6).fillAndStroke(BG_LAVENDER, '#ebd8f5');
  doc.fillColor(PRIMARY_DARK).fontSize(8.5).font('Helvetica-Bold').text(sec.name, colX + 10, colY + 7);
  doc.fillColor(TEXT_MUTED).fontSize(7.5).font('Helvetica').text(sec.desc, colX + 10, colY + 20, { width: 230 });
});

// Candidate Screening Pipeline
const pipeY = 700;
doc.roundedRect(40, pipeY, 515, 88, 6).fillAndStroke('#faf5fc', '#ebd8f5');
doc.fillColor(PRIMARY_DARK).fontSize(9.5).font('Helvetica-Bold').text('4-STAGE CANDIDATE VETTING PIPELINE', 52, pipeY + 10);
const pipeSteps = [
  '1. Aadhaar biometric identity & bank account authentication',
  '2. Direct verification of educational marksheets & ITI trade certificates',
  '3. Local police clearance & past employment conduct record check',
  '4. Industrial medical screen & mandatory workplace safety orientation'
];
pipeSteps.forEach((st, i) => {
  const sx = (i % 2 === 0) ? 52 : 305;
  const sy = pipeY + 30 + Math.floor(i / 2) * 26;
  doc.fillColor(TEXT_DARK).fontSize(7.8).font('Helvetica').text(st, sx, sy, { width: 240 });
});

drawFooter(2, 'Valued Clients: SAME DEUTZ-FAHR India | KAIZEN RESEARCH LABS INDIA');

// ============================================================================
// PAGE 3 OF 4: STATUTORY LICENSES & REGISTRATION DOSSIER
// ============================================================================
doc.addPage();

// Header Stripe
doc.rect(0, 0, 595.28, 42).fill(PRIMARY_DARK);
doc.fillColor(WHITE).fontSize(10).font('Helvetica-Bold').text('GOOD ENTERPRISES - CORPORATE PROFILE', 40, 16);
doc.fillColor('#f9a8d4').fontSize(9).font('Helvetica').text('STATUTORY REGISTRATIONS & COMPLIANCE', 340, 16);

doc.fontSize(15).fillColor(PRIMARY_DARK).font('Helvetica-Bold').text('STATUTORY REGISTRATION DOSSIER', 40, 58);
drawRule(76);

doc.fontSize(8.8).fillColor(TEXT_MUTED).font('Helvetica').text(
  'Good Enterprises operates with 100% legal compliance across all labor, tax, and enterprise regulatory bodies of the Government of India and the Government of Tamil Nadu:',
  40, 88, { width: 515 }
);

// BUSINESS REGISTRATION DETAILS BOX (Exact from Page 2 of User PDF)
const bizY = 118;
doc.roundedRect(40, bizY, 515, 115, 6).fillAndStroke('#faf5fc', '#ebd8f5');
doc.rect(40, bizY, 515, 24).fill('#300657');
doc.fillColor(WHITE).fontSize(9.5).font('Helvetica-Bold').text('OFFICIAL BUSINESS REGISTRATION DETAILS', 52, bizY + 6);

doc.fillColor(PRIMARY_DARK).fontSize(8.5).font('Helvetica-Bold').text('Office Address:', 52, bizY + 32);
doc.fillColor(TEXT_DARK).fontSize(8.2).font('Helvetica').text(
  'No. 2/144, 1st Floor, Ponnai Main Road, New Ahravaram, Mukundarayapuram (Post), Ranipet District – 632405',
  145, bizY + 32, { width: 395 }
);

doc.fillColor(PRIMARY_DARK).fontSize(8.5).font('Helvetica-Bold').text('Contact Mobiles:', 52, bizY + 54);
doc.fillColor(ACCENT_MAGENTA).fontSize(9).font('Helvetica-Bold').text('7418945855  |  8122045855  |  7845545855', 145, bizY + 54);

doc.fillColor(PRIMARY_DARK).fontSize(8.5).font('Helvetica-Bold').text('Email Address:', 52, bizY + 72);
doc.fillColor(TEXT_DARK).fontSize(8.2).font('Helvetica').text('goodenterprises2025@gmail.com', 145, bizY + 72);

doc.fillColor(PRIMARY_DARK).fontSize(8.5).font('Helvetica-Bold').text('GSTIN:', 52, bizY + 90);
doc.fillColor(PRIMARY_PURPLE).fontSize(9.5).font('Helvetica-Bold').text('33AVOPY6162A1ZE', 145, bizY + 90);

// STATUTORY LICENSES TABLE (From Pages 3 to 11 of User PDF)
doc.fontSize(14).fillColor(PRIMARY_DARK).font('Helvetica-Bold').text('Statutory Certificates & Establishment Codes', 40, 252);
drawRule(270);

const certs = [
  {
    authority: 'Goods & Services Tax (GST)',
    regNo: '33AVOPY6162A1ZE',
    form: 'Form GST REG-06 | Regular Proprietorship',
    details: 'Jurisdictional Office: CHENNAI (Centre), Date of Issue: 25/10/2025',
    color: '#440e6c'
  },
  {
    authority: 'Employees\' Provident Fund (EPFO)',
    regNo: 'TBVLR3986706000',
    form: 'Regional Office: VELLORE (Sathuvachari, Phase-III)',
    details: '100% Monthly ECR filing & individual UAN linkage for all deployed workers',
    color: '#5c117d'
  },
  {
    authority: 'Employees\' State Insurance (ESIC)',
    regNo: '51002739420000999',
    form: 'Regional Office: Chennai | Branch: SIPCOT Ranipet',
    details: 'Branch Office: ESI Dispensary Complex, SIPCOT, Ranipet - 632403',
    color: '#811874'
  },
  {
    authority: 'UDYAM MSME Registration',
    regNo: 'UDYAM-TN-35-0045928',
    form: 'Micro Enterprise (Services - Employment Placement Agencies)',
    details: 'NIC: 7810 / 78100 | DIC: Ranipet | MSME-DFO: Chennai | Dt: 28/08/2025',
    color: '#390f5d'
  },
  {
    authority: 'Permanent Account Number (PAN)',
    regNo: 'AVOPY6162A',
    form: 'Income Tax Department, Government of India',
    details: 'Assessee: PERIYASAMY YASODHA (Proprietrix)',
    color: '#6d1678'
  },
  {
    authority: 'Primary Banking Partner',
    regNo: 'A/C: 188100050305693',
    form: 'Tamilnad Mercantile Bank Ltd (IFSC: TMBL0000188)',
    details: 'Automated direct bank wage disbursement strictly before 7th of every month',
    color: '#260447'
  }
];

let certY = 282;
certs.forEach(c => {
  doc.rect(40, certY, 515, 42).fillAndStroke('#ffffff', '#ebd8f5');
  doc.rect(40, certY, 5, 42).fill(c.color);

  doc.fillColor(PRIMARY_DARK).fontSize(9).font('Helvetica-Bold').text(c.authority, 54, certY + 6);
  doc.fillColor(ACCENT_MAGENTA).fontSize(9.5).font('Helvetica-Bold').text(c.regNo, 320, certY + 6);

  doc.fillColor(TEXT_MUTED).fontSize(7.8).font('Helvetica').text(c.form, 54, certY + 19);
  doc.fillColor(TEXT_LIGHT).fontSize(7.2).font('Helvetica-Oblique').text(c.details, 54, certY + 29);

  certY += 48;
});

// Leadership & Compliance Undertaking
const leadY = 582;
doc.roundedRect(40, leadY, 515, 105, 6).fillAndStroke(BG_LAVENDER, '#ebd8f5');
doc.rect(40, leadY, 5, 105).fill(ACCENT_MAGENTA);

doc.fillColor(PRIMARY_DARK).fontSize(9.5).font('Helvetica-Bold').text('LEADERSHIP & COMPLIANCE UNDERTAKING', 54, leadY + 10);
doc.fillColor(TEXT_DARK).fontSize(8.2).font('Helvetica').text(
  'Proprietrix: PERIYASAMY YASODHA\n\n' +
  'Good Enterprises guarantees complete statutory indemnification to all client companies. We ensure zero non-compliance penalties, timely monthly statutory returns, and transparent documentation.\n\n' +
  'Monthly invoice submissions are accompanied by original wage registers, bank disbursement statements, and verified PF/ESI challans.',
  54, leadY + 28, { width: 490, lineGap: 2.5 }
);

// Secondary Registered Unit Box
const unitY = 700;
doc.roundedRect(40, unitY, 515, 88, 6).fillAndStroke('#ffffff', '#ebd8f5');
doc.fillColor(PRIMARY_DARK).fontSize(9).font('Helvetica-Bold').text('REGISTERED MSME UNIT (UDYAM):', 52, unitY + 10);
doc.fillColor(TEXT_DARK).fontSize(8).font('Helvetica').text(
  'Unit Name: GOOD ENTERPRISES\n' +
  'Address: No. 34, Annasamy Street, Rasathupuram, Melvisharam, Ranipet District – 632509, Tamil Nadu.\n' +
  'Classification: Micro Enterprise | Activity: Services (NIC 78100 - Employment Placement Agencies)',
  52, unitY + 26, { width: 490, lineGap: 3 }
);

drawFooter(3, 'GSTIN: 33AVOPY6162A1ZE  |  EPFO: TBVLR3986706000  |  ESIC: 51002739420000999');

// ============================================================================
// PAGE 4 OF 4: SERVICE LEVEL AGREEMENTS & ENGAGEMENT CONTACT
// ============================================================================
doc.addPage();

// Header Stripe
doc.rect(0, 0, 595.28, 42).fill(PRIMARY_DARK);
doc.fillColor(WHITE).fontSize(10).font('Helvetica-Bold').text('GOOD ENTERPRISES - CORPORATE PROFILE', 40, 16);
doc.fillColor('#f9a8d4').fontSize(9).font('Helvetica').text('SLA COMMITMENTS & CONTACT', 380, 16);

doc.fontSize(15).fillColor(PRIMARY_DARK).font('Helvetica-Bold').text('SERVICE LEVEL AGREEMENTS (SLA)', 40, 58);
drawRule(76);

const slaTable = [
  { item: 'Deployment Turnaround', commit: '24 to 48 Hours for standard assembly, helper, and housekeeping crews' },
  { item: 'Shift Attendance Guarantee', commit: '98.5% daily attendance backed by active standby reserve manpower' },
  { item: 'Unsuitable Candidate Replacement', commit: 'Replacement within 24 hours at zero additional placement surcharge' },
  { item: 'Statutory Invoice Dossier', commit: 'Delivered monthly with PF ECR, ESIC challan, and bank remittance proof' },
  { item: 'On-Site Shift Supervision', commit: 'Dedicated field officer assigned for facilities with 25+ deployed personnel' },
  { item: 'Emergency Surge Mobilization', commit: 'Capacity to mobilize 50 to 150+ personnel within 3 to 5 business days' }
];

let slaY = 90;
slaTable.forEach(s => {
  doc.rect(40, slaY, 160, 24).fillAndStroke('#300657', '#300657');
  doc.rect(200, slaY, 355, 24).fillAndStroke('#ffffff', '#ebd8f5');

  doc.fillColor(WHITE).fontSize(8.2).font('Helvetica-Bold').text(s.item, 48, slaY + 7);
  doc.fillColor(TEXT_DARK).fontSize(8).font('Helvetica').text(s.commit, 210, slaY + 7, { width: 335 });
  slaY += 28;
});

// Strategic Industrial Hubs
doc.fontSize(14).fillColor(PRIMARY_DARK).font('Helvetica-Bold').text('Strategic Industrial Corridors We Serve', 40, 275);
drawRule(293);

const hubsList = [
  'Ranipet Industrial Estate (SIPCOT Phase I, II, III & SIDCO)',
  'Ambur Footwear & Finished Leather Manufacturing Cluster',
  'Vellore Engineering, Machining & Fabrication Hub',
  'Ambattur Industrial Estate (Auto Component OEMs & Electronics)',
  'Sriperumbudur Mega SIPCOT (Automotive, EV & Electronics Hub)',
  'Vanagaram Logistics Parks & Central Warehousing Hub'
];

let hubY = 308;
hubsList.forEach(h => {
  doc.fillColor(ACCENT_MAGENTA).fontSize(8.5).font('Helvetica-Bold').text('•', 48, hubY);
  doc.fillColor(TEXT_DARK).fontSize(8.2).font('Helvetica').text(h, 60, hubY);
  hubY += 18;
});

// Central Contact & Requisition Box
const cY = 435;
doc.rect(40, cY, 515, 345).fillAndStroke(PRIMARY_DARK, PRIMARY_DARK);

doc.fillColor(WHITE).fontSize(14).font('Helvetica-Bold').text('ENGAGE GOOD ENTERPRISES', 60, cY + 18);
doc.fillColor('#f9a8d4').fontSize(9.5).font('Helvetica').text('Submit your manpower requirements or schedule a facility consultation today', 60, cY + 38);

doc.strokeColor(ACCENT_MAGENTA).lineWidth(1).moveTo(60, cY + 54).lineTo(535, cY + 54).stroke();

// Mobile numbers
doc.fillColor(WHITE).fontSize(9).font('Helvetica-Bold').text('Official Contact Numbers:', 60, cY + 68);
doc.fillColor('#fbcfe8').fontSize(10.5).font('Helvetica-Bold').text('7418945855  |  8122045855  |  7845545855', 60, cY + 84);

// Email
doc.fillColor(WHITE).fontSize(9).font('Helvetica-Bold').text('Corporate Email Address:', 310, cY + 68);
doc.fillColor('#fbcfe8').fontSize(9.5).font('Helvetica').text('goodenterprises2025@gmail.com', 310, cY + 84);

// Office Address
doc.fillColor(WHITE).fontSize(9).font('Helvetica-Bold').text('Registered Office Address:', 60, cY + 110);
doc.fillColor('#e2d9eb').fontSize(8.5).font('Helvetica').text(
  'No. 2/144, 1st Floor, Ponnai Main Road, New Ahravaram,\nMukundarayapuram (Post), Ranipet District – 632405, Tamil Nadu.',
  60, cY + 126, { width: 450, lineGap: 2.5 }
);

// Secondary unit
doc.fillColor(WHITE).fontSize(9).font('Helvetica-Bold').text('Registered MSME Unit Address:', 60, cY + 160);
doc.fillColor('#e2d9eb').fontSize(8.5).font('Helvetica').text(
  'No. 34, Annasamy Street, Rasathupuram, Melvisharam, Ranipet – 632509, Tamil Nadu.',
  60, cY + 176, { width: 450 }
);

// Registration codes summary
doc.rect(60, cY + 205, 475, 42).fillAndStroke('#2f0452', '#a2216e');
doc.fillColor('#fbcfe8').fontSize(8.2).font('Helvetica-Bold').text('GSTIN: 33AVOPY6162A1ZE  |  EPFO: TBVLR3986706000  |  ESIC: 51002739420000999', 70, cY + 213);
doc.fillColor('#d1c8db').fontSize(7.8).font('Helvetica').text('UDYAM: UDYAM-TN-35-0045928  |  PAN: AVOPY6162A  |  Bank: TMB Ltd (IFSC: TMBL0000188)', 70, cY + 228);

// Tagline quote at bottom of box
doc.fillColor('#fbcfe8').fontSize(10).font('Helvetica-BoldOblique').text('"Providing the Right People for the Right Job"', 60, cY + 265, { width: 475, align: 'center' });
doc.fillColor('#d1c8db').fontSize(8).font('Helvetica').text('ISO & Labor Compliant Manpower Partner  •  24/7 Shift Mobilization', 60, cY + 285, { width: 475, align: 'center' });

drawFooter(4, 'GOOD ENTERPRISES | "Providing the Right People for the Right Job"');

doc.end();

writeStream.on('finish', () => {
  console.log('Successfully generated clean 4-page company-profile.pdf at:', outputPath);
});
