import { FC, memo } from 'react';

import styles from './Header.module.scss';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => <div className={styles.header}>Header</div>;

export default memo(Header);
