/// <reference types="react-scripts" />

declare global {
  interface Window {
    AMap: any;
    wfc: any;
    centerLng: number;
    centerLat: number;
  }
}

export {};
