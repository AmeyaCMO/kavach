import { colors } from '../styles/tokens';

export const weeklyUploads = [
  { label: 'Mon', value: 4 },
  { label: 'Tue', value: 7 },
  { label: 'Wed', value: 3 },
  { label: 'Thu', value: 9 },
  { label: 'Fri', value: 5 },
  { label: 'Sat', value: 2 },
  { label: 'Sun', value: 1 },
];

export const riskDistribution = [
  { label: 'Safe',     pct: 52, color: colors.success },
  { label: 'Caution',  pct: 31, color: colors.warning },
  { label: 'Critical', pct: 17, color: colors.danger },
];

export const overviewStats = [
  { label: 'Total Transporters', value: '2',  tone: 'info' },
  { label: 'Kavach Verified',    value: '6',  tone: 'success' },
  { label: 'Caution',            value: '17', tone: 'warning' },
  { label: 'Blacklisted',        value: '1',  tone: 'danger' },
];

export const incidentStats = [
  { label: 'Total Reported', value: '11', tone: 'critical' },
  { label: 'Under Review',   value: '3',  tone: 'warning'  },
  { label: 'Closed',         value: '4',  tone: 'success'  },
  { label: 'Critical',       value: '1',  tone: 'danger'   },
];

export const incidentMatrix = [
  { type: 'Theft of Client Goods',  severity: 'Blacklisted', impact: 90 },
  { type: 'Hit & Run / Accident',   severity: 'Critical',    impact: 30 },
  { type: 'Alcohol / Drug Abuse',   severity: 'Caution',     impact: 15 },
  { type: 'Challans / Rule Breaker',severity: 'Caution',     impact: 15 },
];
