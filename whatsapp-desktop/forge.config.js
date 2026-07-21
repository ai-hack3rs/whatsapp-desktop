module.exports = {
  packagerConfig: {
    asar: true,
    name: 'whatsapp-desktop',
    executableName: 'whatsapp-desktop'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          maintainer: 'User',
          homepage: 'https://web.whatsapp.com'
        }
      }
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'linux', 'win32']
    }
  ]
};
