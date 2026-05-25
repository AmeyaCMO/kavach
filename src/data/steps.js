import { IdCard, Fingerprint, ChartBar, Lock, Check } from '../icons';

export const onboardingSteps = [
  {
    num: '01',
    Icon: IdCard,
    tone: 'accent',
    title: 'Digital Onboarding',
    desc: 'Field agent collects Aadhaar, PAN, DL, biometric, references, and local police station details.',
  },
  {
    num: '02',
    Icon: Fingerprint,
    tone: 'info',
    title: 'Biometric Verification',
    desc: 'Fingerprint and facial recognition lock the identity. One person, one unescapable identity.',
  },
  {
    num: '03',
    Icon: ChartBar,
    tone: 'success',
    title: 'Risk Score Assigned',
    desc: 'Background check complete. A live risk score is assigned — Safe, Caution, Critical, or Blacklisted.',
  },
  {
    num: '04',
    Icon: Lock,
    tone: 'danger',
    title: 'Network Goes Live',
    desc: 'Driver is live across the KAVACH network. Any incident updates their profile instantly.',
  },
];

export const verificationPipeline = [
  { Icon: IdCard,      label: 'Identity Created', tone: 'accent' },
  { Icon: Fingerprint, label: 'Biometric Scan',   tone: 'info' },
  { Icon: ChartBar,    label: 'BG Verification',  tone: 'critical' },
  { Icon: ChartBar,    label: 'Risk Scored',      tone: 'success' },
  { Icon: Check,       label: 'KAVACH Verified',  tone: 'success' },
];
