import config from '../config';

export function openWindow(link: string) {
  // TODO: (config as any) should be handled by optional chaining i.e config?.basename
  window.open(window.location.origin + (config as any).basename.slice(0, -1) + link, '_blank');
}
