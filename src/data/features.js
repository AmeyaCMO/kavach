import { IdCard, Eye, ChartBar, Ban, Bolt, Lock } from '../icons';

export const features = [
  {
    Icon: IdCard,
    tone: 'accent',
    title: 'Verified Digital Identity',
    desc: 'Every worker gets a secure biometric-linked digital profile with verified Aadhaar, PAN, licence, references, and police details.',
  },
  {
    Icon: Eye,
    tone: 'info',
    title: 'Biometric Mapping',
    desc: 'Fingerprint + facial recognition. One person = one identity. No duplicates, no proxy attendance, no identity swapping across contractors.',
  },
  {
    Icon: ChartBar,
    tone: 'success',
    title: 'Living Risk Score',
    desc: 'Safe → Caution → Critical → Blacklisted. Every job, incident, and behaviour continuously updates each driver’s risk profile.',
  },
  {
    Icon: Ban,
    tone: 'danger',
    title: 'Network Blacklisting',
    desc: 'Blacklisted at one company? Flagged across every company in the network. New name, new documents — the biometric never lies.',
  },
  {
    Icon: Bolt,
    tone: 'critical',
    title: 'Real-Time Alerts',
    desc: 'The moment a blacklisted driver’s biometric is scanned anywhere in the network, instant alerts fire to all parties.',
  },
  {
    Icon: Lock,
    tone: 'accent',
    title: 'Privacy Between Companies',
    desc: 'Super Admin sees zero individual company data. Each Admin’s environment is isolated. Only blacklist matches cross boundaries.',
  },
];
