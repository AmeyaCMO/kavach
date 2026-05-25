import { useState } from 'react';
import { Logo } from '../../ui/Logo';
import { Home, Check, AlertTriangle, Ban, Upload, Truck, Bell } from '../../../icons';
import { OverviewTab } from './OverviewTab';
import { DriversTab } from './DriversTab';
import { IncidentsTab } from './IncidentsTab';
import { BlacklistTab } from './BlacklistTab';
import styles from './Dashboard.module.css';

const tabs = [
  { key: 'overview',  label: 'Home',            Icon: Home,           Tab: OverviewTab,  active: true },
  { key: 'drivers',   label: 'Kavach Verified', Icon: Check,          Tab: DriversTab,   active: true },
  { key: 'incidents', label: 'Incidents',       Icon: AlertTriangle,  Tab: IncidentsTab, active: true },
  { key: 'blacklist', label: 'Blacklisted',     Icon: Ban,            Tab: BlacklistTab, active: true },
  { key: 'upload',    label: 'Upload Drivers',  Icon: Upload },
  { key: 'transporters', label: 'Transporters', Icon: Truck },
  { key: 'alerts',    label: 'Alerts & Email',  Icon: Bell },
];

const tabKeys = tabs.filter((t) => t.active).map((t) => t.key);

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const current = tabs.find((t) => t.key === activeTab && t.active);
  const ActivePane = current?.Tab ?? OverviewTab;

  return (
    <div className={styles.window}>
      <div className={styles.chrome}>
        <div className={styles.lights}>
          <span style={{ background: '#FF5F56' }} />
          <span style={{ background: '#FFBD2E' }} />
          <span style={{ background: '#27C93F' }} />
        </div>
        <div className={styles.url}>blackboxkavach.com/dashboard</div>
        <div className={styles.lock}>SSL · Secure</div>
      </div>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.brand}>
            <Logo size="sm" />
            <div className={styles.brandSub}>Admin Dashboard</div>
          </div>

          <nav>
            <ul>
              {tabs.map(({ key, label, Icon, active }) => {
                const isActive = key === activeTab;
                const cls = [styles.navItem, isActive && styles.navItemActive, !active && styles.navItemMuted]
                  .filter(Boolean).join(' ');
                return (
                  <li key={key}>
                    <button
                      type="button"
                      className={cls}
                      onClick={() => active && setActiveTab(key)}
                      tabIndex={active ? 0 : -1}
                    >
                      <Icon size={14} />
                      <span>{label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <div className={styles.main}>
          <ActivePane />
        </div>
      </div>

      <div className={styles.tabbar}>
        {tabKeys.map((key) => {
          const tab = tabs.find((t) => t.key === key);
          const isActive = key === activeTab;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
