import { PlatformRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

export const sharedPlatformBrowserDynamic = () => {
    let platform: PlatformRef;
    if ((window as any).platform) {
        platform = (window as any).platform;
    } else {
        platform = platformBrowserDynamic();
        (window as any).platform = platform;
    }
    return platform;
};
