import styles from './Button.module.css';

export function Button({
  as: Tag = 'a',
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...rest
}) {
  const cls = [styles.btn, styles[variant], styles[size], className].filter(Boolean).join(' ');
  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  );
}
