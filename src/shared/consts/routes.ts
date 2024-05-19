export enum RoutingEnum {
  MAIN = 'Main',
  RELEASES = 'Releases',
  DJ_CHARTS = 'DJ Charts & Albums',
  MASH_UP = 'Mash-Up',
  TOP_100 = 'Top 100',
  RUSSIAN_CHARTS = 'Russian Charts',
  DJ_RUSSIAN_CHARTS = 'DJ Russian Charts',
  WAV = 'Wav',
  BANDCAM_VINYL = 'Bandcamp & Vinyl',
}

export const getRouteMain = () => '/';
export const getRouteReleases = () => '/Releases';
export const getRouteDjCharts = () => '/dj-charts';
export const getRouteMashUp = () => '/mash-up';
export const getRouteTop100 = () => '/top-100';
export const getRouteRussianCharts = () => '/russian-charts';
export const getRouteDjRussianCharts = () => '/dj-russian-charts';
export const getRouteWav = () => '/wav';
export const getRouteBandcamAndVinyl = () => '/bandcamp';
