import { LinkProps } from 'next/link';

import {
  getRouteBandcamAndVinyl,
  getRouteDjCharts,
  getRouteDjRussianCharts,
  getRouteMain,
  getRouteMashUp,
  getRouteReleases,
  getRouteRussianCharts,
  getRouteTop100,
  getRouteWav,
  RoutingEnum,
} from '@/shared/consts/routes';

export type TNavLinkProps = LinkProps & { title: string };

export const navLinkConfig: Record<RoutingEnum, TNavLinkProps> = {
  [RoutingEnum.MAIN]: {
    href: getRouteMain(),
    title: 'Главная',
  },
  [RoutingEnum.RELEASES]: {
    href: getRouteReleases(),
    title: RoutingEnum.RELEASES,
  },
  [RoutingEnum.DJ_CHARTS]: {
    href: getRouteDjCharts(),
    title: RoutingEnum.DJ_CHARTS,
  },
  [RoutingEnum.MASH_UP]: {
    href: getRouteMashUp(),
    title: RoutingEnum.MASH_UP,
  },
  [RoutingEnum.TOP_100]: {
    href: getRouteTop100(),
    title: RoutingEnum.TOP_100,
  },
  [RoutingEnum.RUSSIAN_CHARTS]: {
    href: getRouteRussianCharts(),
    title: RoutingEnum.RUSSIAN_CHARTS,
  },
  [RoutingEnum.DJ_RUSSIAN_CHARTS]: {
    href: getRouteDjRussianCharts(),
    title: RoutingEnum.DJ_RUSSIAN_CHARTS,
  },
  [RoutingEnum.WAV]: {
    href: getRouteWav(),
    title: RoutingEnum.WAV,
  },
  [RoutingEnum.BANDCAM_VINYL]: {
    href: getRouteBandcamAndVinyl(),
    title: RoutingEnum.BANDCAM_VINYL,
  },
};
