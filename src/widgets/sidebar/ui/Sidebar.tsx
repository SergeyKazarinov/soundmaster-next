'use client';

import { FC, memo } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Card } from '@/shared/ui/card';

import { navLinkConfig, TNavLinkProps } from '../config/navLinkConfig';

import styles from './Sidebar.module.scss';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const route = usePathname();
  const getNavLink = (navLinkItem: TNavLinkProps) => (
    <Link
      href={{
        pathname: String(navLinkItem.href),
        query: { page: 1 },
      }}
      key={String(navLinkItem.href)}
      className={classNames({ [styles.activeLink]: route === navLinkItem.href })}
    >
      {navLinkItem.title}
    </Link>
  );

  return (
    <Card tagName="nav" className={styles.sidebar}>
      {Object.values(navLinkConfig).map(getNavLink)}
    </Card>
  );
};

export default memo(Sidebar);
