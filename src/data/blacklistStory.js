import { AlertTriangle, Lock, Hourglass, Bell } from '../icons';

export const blacklistStory = [
  {
    Icon: AlertTriangle,
    tone: 'critical',
    title: 'Incident Reported',
    desc: 'Driver commits theft at Transporter 1. Incident logged with evidence. Back office marks blacklist.',
  },
  {
    Icon: Lock,
    tone: 'danger',
    title: 'Biometric Flagged',
    desc: 'Driver’s biometric is permanently flagged in the central repository. No company sees the other’s data.',
  },
  {
    Icon: Hourglass,
    tone: 'info',
    title: 'Six Months Later',
    desc: 'Driver joins Transporter 2 with new name, different documents. Goes through biometric scan on entry.',
  },
  {
    Icon: Bell,
    tone: 'success',
    title: 'Match Detected',
    desc: 'System instantly matches biometric. Alerts fire to Super Admin, both Admins, Back Office, Transporter 1.',
  },
];
