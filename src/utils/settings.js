const SETTINGS = {
  car: { position: [0, -0.5, -0.2], scale: 0.015 },
  gallery3D: {
    position: [-6, 0.8, 0],
    rotation: [0, Math.PI / 2, 0]
  },
  orbitControls: {
    minPolarAngle: Math.PI / 2.105,
    maxPolarAngle: Math.PI / 2.105
  },
  animations: {
    inTime: {
      overviewStep: 800,
      logo: 2000,
      navigation: 2600,
      lightButtonOverviewStep: 3000
    }
  }
}

export default SETTINGS
