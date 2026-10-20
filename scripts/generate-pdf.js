const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '../public/assets/company-profile.pdf');
const logoPath = path.join(__dirname, '../public/assets/logo.png');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 40, bottom: 40, left: 45, right: 45 },
  bufferPages: true
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Colors
const PRIMARY_DARK = '#260447';
const PRIMARY_PURPLE = '#38065b';
const ACCENT_MAGENTA = '#b81b6c';
const ACCENT_PINK = '#d81b60';
const BG_LAVENDER = '#f7f1fb';
const TEXT_DARK = '#1f2937';
const TEXT_MUTED = '#4b5563';
const TEXT_LIGHT = '#6b7280';
const WHITE = '#ffffff';

// Helper for horizontal rule
function drawRule(y, color = ACCENT_MAGENTA) {
  doc.strokeColor(color).lineWidth(1.5).moveTo(45, y).lineTo(550, y).stroke();
}

// ============================================================================
// PAGE 1: COVER PAGE
// ============================================================================
// Top banner background
doc.rect(0, 0, 595.28, 220).fill(PRIMARY_DARK);

// Accent stripe
doc.rect(0, 215, 595.28, 6).fill(ACCENT_MAGENTA);

// Logo if exists
if (fs.existsSync(logoPath)) {
  doc.image(logoPath, 45, 50, { width: 180 });
} else {
  doc.fontSize(24).fillColor(WHITE).font('Helvetica-Bold').text('GOOD ENTERPRISES', 45, 60);
}

doc.fontSize(12).fillColor('#f9a8d4').font('Helvetica-Bold').text('MANPOWER SERVICE PROVIDER', 45, 125, { characterSpacing: 1.5 });
doc.fontSize(10).fillColor('#e9d5ff').font('Helvetica').text('Reliable Manpower Solutions for Your Organization', 45, 142);

// Industrial presence badges in header
doc.fontSize(8.5).fillColor('#ffffff').font('Helvetica').text('Ranipet  |  Ambur  |  Vellore  |  Ambattur  |  Sriperumbudur  |  Vanagaram', 45, 175);

// Title Block
doc.moveDown(5);
doc.fontSize(28).fillColor(PRIMARY_DARK).font('Helvetica-Bold').text('CORPORATE COMPANY PROFILE', 45, 260);
doc.fontSize(14).fillColor(ACCENT_MAGENTA).font('Helvetica-Bold').text('Industrial Workforce & Staffing Solutions', 45, 298);

doc.fontSize(10.5).fillColor(TEXT_MUTED).font('Helvetica').text(
  'A trusted staffing and manpower management partner powering manufacturing plants, automotive OEMs, engineering fabrication units, electronics assembly facilities, and logistics parks across Tamil Nadu.',
  45, 325, { width: 500, lineGap: 4 }
);

// Key Highlights Boxes (2x2 grid)
const boxY = 410;
const boxW = 240;
const boxH = 75;

// Box 1
doc.roundedRect(45, boxY, boxW, boxH, 8).fillAndStroke(BG_LAVENDER, '#ebd8f5');
doc.fillColor(ACCENT_MAGENTA).fontSize(16).font('Helvetica-Bold').text('5,000+', 60, boxY + 16);
doc.fillColor(PRIMARY_DARK).fontSize(10).font('Helvetica-Bold').text('Workforce Deployed', 60, boxY + 36);
doc.fillColor(TEXT_LIGHT).fontSize(8.5).font('Helvetica').text('Skilled technicians & general plant crews', 60, boxY + 50);

// Box 2
doc.roundedRect(305, boxY, boxW, boxH, 8).fillAndStroke(BG_LAVENDER, '#ebd8f5');
doc.fillColor(ACCENT_MAGENTA).fontSize(16).font('Helvetica-Bold').text('120+', 320, boxY + 16);
doc.fillColor(PRIMARY_DARK).fontSize(10).font('Helvetica-Bold').text('Industrial Clients', 320, boxY + 36);
doc.fillColor(TEXT_LIGHT).fontSize(8.5).font('Helvetica').text('Automotive, leather, electronics & logistics', 320, boxY + 50);

// Box 3
doc.roundedRect(45, boxY + 90, boxW, boxH, 8).fillAndStroke(BG_LAVENDER, '#ebd8f5');
doc.fillColor(ACCENT_MAGENTA).fontSize(16).font('Helvetica-Bold').text('98.5%', 60, boxY + 106);
doc.fillColor(PRIMARY_DARK).fontSize(10).font('Helvetica-Bold').text('Shift Attendance Rate', 60, boxY + 126);
doc.fillColor(TEXT_LIGHT).fontSize(8.5).font('Helvetica').text('Standby buffer pool for zero absenteeism', 60, boxY + 140);

// Box 4
doc.roundedRect(305, boxY + 90, boxW, boxH, 8).fillAndStroke(BG_LAVENDER, '#ebd8f5');
doc.fillColor(ACCENT_MAGENTA).fontSize(16).font('Helvetica-Bold').text('100%', 320, boxY + 106);
doc.fillColor(PRIMARY_DARK).fontSize(10).font('Helvetica-Bold').text('Statutory Adherence', 320, boxY + 126);
doc.fillColor(TEXT_LIGHT).fontSize(8.5).font('Helvetica').text('Full EPF, ESI, Factory Act & WC Insurance', 320, boxY + 140);

// Footer bar on cover
doc.rect(0, 780, 595.28, 62).fill(PRIMARY_DARK);
doc.fillColor(WHITE).fontSize(8.5).font('Helvetica-Bold').text('GOOD ENTERPRISES', 45, 792);
doc.fillColor('#d1c8db').fontSize(8).font('Helvetica').text('Email: goodenterprises2025@gmail.com  |  Phone: 74189 45855 / 95140 88033', 45, 805);
doc.fillColor('#f9a8d4').fontSize(7.5).font('Helvetica').text('Industrial Corridors: Ranipet | Ambur | Vellore | Ambattur | Sriperumbudur | Vanagaram', 45, 818);

// ============================================================================
// PAGE 2: EXECUTIVE SUMMARY & INDUSTRIAL HUBS
// ============================================================================
doc.addPage();

// Header stripe
doc.rect(0, 0, 595.28, 45).fill(PRIMARY_DARK);
doc.fillColor(WHITE).fontSize(10).font('Helvetica-Bold').text('GOOD ENTERPRISES - CORPORATE PROFILE', 45, 17);
doc.fillColor('#f9a8d4').fontSize(9).font('Helvetica').text('EXECUTIVE SUMMARY & COVERAGE', 360, 17);

doc.moveDown(3);
doc.fontSize(18).fillColor(PRIMARY_DARK).font('Helvetica-Bold').text('Who We Are', 45, 65);
drawRule(88);

doc.fontSize(9.5).fillColor(TEXT_MUTED).font('Helvetica').text(
  'GOOD ENTERPRISES is an established manpower service provider specialized in sourcing, screening, mobilizing, and managing skilled, semi-skilled, and general workforce for industrial clients across Tamil Nadu.\n\n' +
  'We bridge the operational gap between fast-growing manufacturing plants and disciplined local talent pools. Our localized recruitment network ensures high attendance stability, reduced worker fatigue, and strict adherence to all statutory labor compliances (EPF, ESI, CLRA, and Minimum Wages Act).\n\n' +
  'Whether your facility operates on continuous 3-shift schedules, requires seasonal manpower surge handling, or demands certified technical operators, Good Enterprises guarantees rapid turnaround and dedicated on-site supervision.',
  45, 98, { width: 500, lineGap: 3.5 }
);

doc.fontSize(16).fillColor(PRIMARY_DARK).font('Helvetica-Bold').text('Strategic Industrial Corridors We Serve', 45, 220);
drawRule(242);

const hubs = [
  { name: '1. Ranipet Industrial Belt', details: 'SIPCOT Phases I-III & SIDCO Estates. Heavy fabrication, chemical, boiler engineering, and leather tanneries.' },
  { name: '2. Ambur Footwear Cluster', details: 'Global leather footwear, finished leather goods, and garment export manufacturing units.' },
  { name: '3. Vellore Engineering Zone', details: 'Precision engineering fabrication, commercial machinery, auto components, and packaging units.' },
  { name: '4. Ambattur Industrial Estate', details: 'One of South Asia\'s premier industrial clusters for auto ancillaries, CNC machining, and light engineering.' },
  { name: '5. Sriperumbudur Mega SIPCOT', details: 'Automotive OEMs, electric vehicle (EV) plants, consumer electronics manufacturing, and giga-factories.' },
  { name: '6. Vanagaram Logistics Belt', details: 'FMCG distribution hubs, central warehouses, cold storages, and supply chain freight terminals.' }
];

let hubY = 255;
hubs.forEach(hub => {
  doc.rect(45, hubY, 500, 34).fillAndStroke('#faf5fc', '#ebd8f5');
  doc.fillColor(ACCENT_MAGENTA).fontSize(9.5).font('Helvetica-Bold').text(hub.name, 55, hubY + 6);
  doc.fillColor(TEXT_MUTED).fontSize(8.5).font('Helvetica').text(hub.details, 55, hubY + 19, { width: 480 });
  hubY += 40;
});

// Value Pillars
doc.fontSize(16).fillColor(PRIMARY_DARK).font('Helvetica-Bold').text('Our Operational Strengths', 45, 515);
drawRule(538);

const strengths = [
  { title: 'Immediate 24-48h Deployment', desc: 'Pre-screened standby candidates ready for urgent batch mobilization.' },
  { title: 'Local Sourcing Advantage', desc: 'Candidates recruited within 15-20km radius for superior shift punctuality.' },
  { title: 'Tailored Gender Ratios', desc: 'Custom male/female workforce tailored for electronics, pharma & textile assembly.' },
  { title: 'Zero Contractor Disruption', desc: 'Dedicated field officer stationed for daily biometric check-in and grievance redressal.' }
];

let strY = 552;
strengths.forEach((str, i) => {
  const colX = (i % 2 === 0) ? 45 : 305;
  const colY = strY + Math.floor(i / 2) * 58;
  doc.roundedRect(colX, colY, 240, 48, 6).fillAndStroke(BG_LAVENDER, '#ebd8f5');
  doc.fillColor(PRIMARY_DARK).fontSize(9).font('Helvetica-Bold').text(str.title, colX + 10, colY + 8);
  doc.fillColor(TEXT_MUTED).fontSize(7.8).font('Helvetica').text(str.desc, colX + 10, colY + 22, { width: 220 });
});

// Page 2 footer
doc.rect(0, 800, 595.28, 42).fill(PRIMARY_DARK);
doc.fillColor('#e2d9eb').fontSize(8).font('Helvetica').text('GOOD ENTERPRISES | Corporate Profile | Page 2', 45, 815);

// ============================================================================
// PAGE 3: WORKFORCE CATEGORIES & SKILL MATRIX
// ============================================================================
doc.addPage();

// Header stripe
doc.rect(0, 0, 595.28, 45).fill(PRIMARY_DARK);
doc.fillColor(WHITE).fontSize(10).font('Helvetica-Bold').text('GOOD ENTERPRISES - CORPORATE PROFILE', 45, 17);
doc.fillColor('#f9a8d4').fontSize(9).font('Helvetica').text('AVAILABLE WORKFORCE MATRIX', 360, 17);

doc.fontSize(18).fillColor(PRIMARY_DARK).font('Helvetica-Bold').text('Our 7 Available Workforce Categories', 45, 65);
drawRule(88);

const categories = [
  {
    title: '1. ITI Qualified Candidates',
    roles: 'Fitters, Electricians, Machinists, Welders, Turners, Motor Mechanics',
    qual: 'NCVT / SCVT Certified ITI Diploma',
    deploy: '24 - 48 Hours Batch Mobilization'
  },
  {
    title: '2. Diploma Holders',
    roles: 'Junior Engineers, Shift Supervisors, Quality Inspectors (DME, DEEE, DECE, Civil)',
    qual: '3-Year State Technical Board Polytechnic Diploma',
    deploy: 'Immediate to 3 Days'
  },
  {
    title: '3. Degree Graduates',
    roles: 'QA/QC Documentation, Store & Inventory Management, ERP Data Operators, Admin',
    qual: 'B.Sc, B.Com, BBA, B.Tech / B.E (Mechanical / Electrical)',
    deploy: 'Immediate'
  },
  {
    title: '4. 10th & 12th Pass Candidates',
    roles: 'Machine Operators, Production Line Workers, Packaging & Barcode Scanning',
    qual: 'Secondary (SSLC) / Higher Secondary (HSC)',
    deploy: 'Bulk Mobilization (50 - 200+ Personnel)'
  },
  {
    title: '5. Male & Female Employees',
    roles: 'Precision Electronics Assembly, Wire Harnessing, Pharma Cleanroom, Footwear Stitching',
    qual: 'Trained & Vetted Operators with High Dexterity',
    deploy: 'Custom Shift Ratios'
  },
  {
    title: '6. Housekeeping Staff',
    roles: '5S Shop Floor Scrubbing, Waste Segregation, Washroom & Cafeteria Hygiene, Admin Cleaning',
    qual: 'Trained in Industrial Mechanized Equipment & Chemicals',
    deploy: '24/7 Shift Rotation'
  },
  {
    title: '7. Helpers & General Workers',
    roles: 'Raw Material Loading/Unloading, Palletizing, In-Plant Movement, Yard Upkeep',
    qual: 'Physically Fit, Safety Briefed, Aadhaar Verified',
    deploy: 'Immediate Bulk Deployment'
  }
];

let catY = 100;
categories.forEach(cat => {
  doc.rect(45, catY, 500, 68).fillAndStroke('#ffffff', '#e5d5f2');
  doc.rect(45, catY, 6, 68).fill(ACCENT_MAGENTA);

  doc.fillColor(PRIMARY_DARK).fontSize(10).font('Helvetica-Bold').text(cat.title, 60, catY + 8);
  doc.fillColor(ACCENT_PINK).fontSize(7.5).font('Helvetica-Bold').text(`Mobilization: ${cat.deploy}`, 380, catY + 9);

  doc.fillColor(TEXT_DARK).fontSize(8.5).font('Helvetica-Bold').text('Roles: ', 60, catY + 24);
  doc.fillColor(TEXT_MUTED).font('Helvetica').text(cat.roles, 98, catY + 24, { width: 430 });

  doc.fillColor(TEXT_DARK).fontSize(8.5).font('Helvetica-Bold').text('Eligibility: ', 60, catY + 44);
  doc.fillColor(TEXT_MUTED).font('Helvetica').text(cat.qual, 115, catY + 44, { width: 415 });

  catY += 76;
});

// Recruitment Verification Pipeline
doc.fontSize(14).fillColor(PRIMARY_DARK).font('Helvetica-Bold').text('4-Stage Candidate Vetting Protocol', 45, 655);
drawRule(675);

const vetSteps = [
  '1. Aadhaar biometric identity & bank account authentication',
  '2. Direct verification of educational marksheets & ITI trade certificates',
  '3. Local police clearance & past employment conduct record check',
  '4. Industrial medical screen & mandatory workplace safety orientation'
];

vetSteps.forEach((step, i) => {
  doc.fillColor(TEXT_MUTED).fontSize(8.5).font('Helvetica').text(`•  ${step}`, 55, 688 + (i * 18));
});

// Page 3 footer
doc.rect(0, 800, 595.28, 42).fill(PRIMARY_DARK);
doc.fillColor('#e2d9eb').fontSize(8).font('Helvetica').text('GOOD ENTERPRISES | Corporate Profile | Page 3', 45, 815);

// ============================================================================
// PAGE 4: STATUTORY COMPLIANCE, SLA & CONTACT
// ============================================================================
doc.addPage();

// Header stripe
doc.rect(0, 0, 595.28, 45).fill(PRIMARY_DARK);
doc.fillColor(WHITE).fontSize(10).font('Helvetica-Bold').text('GOOD ENTERPRISES - CORPORATE PROFILE', 45, 17);
doc.fillColor('#f9a8d4').fontSize(9).font('Helvetica').text('COMPLIANCE, SLA & ENGAGEMENT', 360, 17);

doc.fontSize(18).fillColor(PRIMARY_DARK).font('Helvetica-Bold').text('Statutory & Labor Compliance Assurance', 45, 65);
drawRule(88);

doc.fontSize(9.5).fillColor(TEXT_MUTED).font('Helvetica').text(
  'Good Enterprises operates with 100% legal compliance and transparency. We indemnify our client companies against any labor disputes, non-compliance penalties, or regulatory notices.',
  45, 98, { width: 500, lineGap: 3 }
);

const compliances = [
  { item: 'Employees\' Provident Fund (EPF)', desc: 'Monthly electronic challan return (ECR) submission & proof of 12% deposit.' },
  { item: 'Employees\' State Insurance (ESIC)', desc: '3.25% contribution with individual ESI insurance smart cards for every worker.' },
  { item: 'Contract Labour (CLRA) License', desc: 'Valid Form V registration with jurisdictional labor commissioners.' },
  { item: 'Workmen Compensation & Safety', desc: 'Active insurance policy covering accidental medical hazards and on-site incidents.' },
  { item: 'Minimum Wages Act Compliance', desc: 'Wages structured strictly per Tamil Nadu Gazette revisions for engineering/leather/textile zones.' },
  { item: 'Monthly Statutory Audit Dossier', desc: 'Delivered with monthly invoice: Wage register, PF/ESI challans, and attendance logs.' }
];

let compY = 145;
compliances.forEach(c => {
  doc.rect(45, compY, 500, 32).fillAndStroke(BG_LAVENDER, '#ebd8f5');
  doc.fillColor(PRIMARY_DARK).fontSize(9).font('Helvetica-Bold').text(`✔  ${c.item}`, 55, compY + 6);
  doc.fillColor(TEXT_MUTED).fontSize(8).font('Helvetica').text(c.desc, 55, compY + 18, { width: 480 });
  compY += 37;
});

// Client Service Level Agreement (SLA)
doc.fontSize(16).fillColor(PRIMARY_DARK).font('Helvetica-Bold').text('Service Level Agreement (SLA) Commitments', 45, 390);
drawRule(412);

const slas = [
  { metric: 'Mobilization Speed', standard: '24 to 48 Hours for standard profiles' },
  { metric: 'Shift Attendance Guarantee', standard: '98.5% with instant standby buffer deployment' },
  { metric: 'Unsuitable Candidate Replacement', standard: 'Within 24 Hours at zero administrative surcharge' },
  { metric: 'On-Site Supervision', standard: 'Dedicated Field Officer assigned for plants with 25+ headcount' },
  { metric: 'Wage Disbursement Date', standard: 'Disbursed strictly before the 7th of every month via direct bank transfer' }
];

let slaY = 422;
slas.forEach(s => {
  doc.rect(45, slaY, 200, 24).fillAndStroke('#300657', '#300657');
  doc.rect(245, slaY, 300, 24).fillAndStroke('#ffffff', '#ebd8f5');

  doc.fillColor(WHITE).fontSize(8.5).font('Helvetica-Bold').text(s.metric, 55, slaY + 7);
  doc.fillColor(TEXT_DARK).fontSize(8.5).font('Helvetica').text(s.standard, 255, slaY + 7);
  slaY += 28;
});

// Engagement Contact Box
doc.rect(45, 580, 500, 195).fillAndStroke(PRIMARY_DARK, PRIMARY_DARK);
doc.fillColor(WHITE).fontSize(14).font('Helvetica-Bold').text('Engage Good Enterprises for Your Facility', 65, 600);
doc.fillColor('#f9a8d4').fontSize(9.5).font('Helvetica').text('Submit your manpower requirements or schedule a plant visit today', 65, 622);

doc.strokeColor(ACCENT_MAGENTA).lineWidth(1).moveTo(65, 638).lineTo(525, 638).stroke();

doc.fillColor(WHITE).fontSize(9.5).font('Helvetica-Bold').text('Central Operations Hotline:', 65, 650);
doc.fillColor('#fbcfe8').fontSize(11).font('Helvetica-Bold').text('74189 45855  /  95140 88033', 65, 668);

doc.fillColor(WHITE).fontSize(9.5).font('Helvetica-Bold').text('Corporate Email Address:', 310, 650);
doc.fillColor('#fbcfe8').fontSize(10.5).font('Helvetica').text('goodenterprises2025@gmail.com', 310, 668);

doc.fillColor(WHITE).fontSize(9.5).font('Helvetica-Bold').text('Industrial Hubs Covered:', 65, 695);
doc.fillColor('#ddd4e6').fontSize(8.5).font('Helvetica').text(
  'Ranipet SIPCOT & SIDCO  •  Ambur Leather Cluster  •  Vellore  •  Ambattur Industrial Estate  •  Sriperumbudur SIPCOT  •  Vanagaram Warehousing Hub',
  65, 712, { width: 450, lineGap: 3 }
);

doc.fillColor('#c4b5fd').fontSize(8).font('Helvetica-Oblique').text('ISO & Labor Compliant Manpower Partner | Dedicated 24/7 Shift Mobilization', 65, 750);

// Page 4 footer
doc.rect(0, 800, 595.28, 42).fill(PRIMARY_DARK);
doc.fillColor('#e2d9eb').fontSize(8).font('Helvetica').text('GOOD ENTERPRISES | Corporate Profile | Page 4 (End of Document)', 45, 815);

doc.end();

writeStream.on('finish', () => {
  console.log('Successfully generated company-profile.pdf at:', outputPath);
});
