export function getBarChartData(rev1, rev2, rev3, rev4) {
  return [
    { service: "VASTR", revenue: rev1 },
    { service: "Spotify", revenue: rev2 },
    { service: "Apple Music", revenue: rev3 },
    { service: "Pandora", revenue: rev4 }
  ];
}

export function getAppleData() {
  return [
    { asset: "Typical Digital Store", amount: 10 },
    { asset: "VASTR", amount: 10 },
    { asset: "Artist", amount: 50 },
    { asset: "Marketplace Fee", amount: 30 }
  ];
}
export function getGoogleData() {
  return [
    { asset: "Typical Digital Store", amount: 10 },
    { asset: "VASTR", amount: 10 },
    { asset: "Artist", amount: 77 },
    { asset: "Marketplace Fee", amount: 3 }
  ];
}
export function getWebsiteData() {
  return [
    //{ asset: "Marketplace Fee", amount: 0 },
    { asset: "Typical Digital Store", amount: 10 },
    { asset: "VASTR", amount: 10 },
    { asset: "Artist", amount: 80 }
  ];
}
