module.exports = {
  packagerConfig: {
    asar: true,
    name: 'whatsapp-desktop',
    executableName: 'whatsapp-desktop',
    icon: './assets/icon'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          maintainer: 'User',
          homepage: 'https://web.whatsapp.com',
          icon: './assets/icon.png'
        }
      }
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'linux', 'win32']
    }
  ]
};
