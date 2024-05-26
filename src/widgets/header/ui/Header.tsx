import { FC, memo } from 'react';

import { Card } from '@/shared/ui/card';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => <Card>Header</Card>;

export default memo(Header);
