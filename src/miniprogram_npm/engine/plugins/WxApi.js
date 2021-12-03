import promisify from '../utils/promisify';

const methods = [
  'canvasToTempFilePath',
  'showToast',
  'showModal',
  'showActionSheet',
  'stopPullDownRefresh',
  'setNavigationBarTitle',
  'setNavigationBarColor',
  'setTopBarText',
  'switchTab',
  'login',
  'checkSession',
  'authorize',
  'getUserInfo',
  'getUserProfile',
  'requestPayment',
  'chooseImage',
  'previewImage',
  'getImageInfo',
  'saveImageToPhotosAlbum',
  'uploadFile',
  'downloadFile',
  'startRecord',
  'playVoice',
  'getBackgroundAudioPlayerState',
  'playBackgroundAudio',
  'seekBackgroundAudio',
  'chooseVideo',
  'saveVideoToPhotosAlbum',
  'saveFile',
  'getFileInfo',
  'getSavedFileList',
  'getSavedFileInfo',
  'removeSavedFile',
  'openDocument',
  'setStorage',
  'getStorage',
  'getStorageInfo',
  'removeStorage',
  'getLocation',
  'chooseLocation',
  'openLocation',
  'getSystemInfo',
  'getNetworkType',
  'startAccelerometer',
  'stopAccelerometer',
  'startCompass',
  'stopCompass',
  'makePhoneCall',
  'scanCode',
  'setClipboardData',
  'getClipboardData',
  'openBluetoothAdapter',
  'closeBluetoothAdapter',
  'getBluetoothAdapterState',
  'startBluetoothDevicesDiscovery',
  'stopBluetoothDevicesDiscovery',
  'getBluetoothDevices',
  'getConnectedBluetoothDevices',
  'createBLEConnection',
  'closeBLEConnection',
  'getBLEDeviceServices',
  'startBeaconDiscovery',
  'stopBeaconDiscovery',
  'getBeacons',
  'setScreenBrightness',
  'getScreenBrightness',
  'setKeepScreenOn',
  'vibrateLong',
  'vibrateShort',
  'addPhoneContact',
  'getHCEState',
  'startHCE',
  'stopHCE',
  'sendHCEMessage',
  'startWifi',
  'stopWifi',
  'connectWifi',
  'getWifiList',
  'setWifiList',
  'getConnectedWifi',
  'getExtConfig',
  'showShareMenu',
  'hideShareMenu',
  'updateShareMenu',
  'getShareInfo',
  'chooseAddress',
  'addCard',
  'openCard',
  'openSetting',
  'getSetting',
  'getWeRunData',
  'navigateBackMiniProgram',
  'chooseInvoiceTitle',
  'checkIsSupportSoterAuthentication',
  'startSoterAuthentication',
  'checkIsSoterEnrolledInDevice',
  'requestSubscribeMessage',
  'getChannelsLiveInfo',
  'getGroupEnterInfo',
];

export default class WxApi {
  static install = (config) => {
    // 朋友圈内打开“单页模式”不加载， 否则报错
    if (config?.launchOptions?.scene !== 1154) {
      WxApi.initApis();
    }
  }

  static initApis = () => {
    for (const method of methods) {
      const originMethod = wx[method];
      Object.defineProperty(wx, method, {
        value: (...args) => {
          return promisify(originMethod, ...args);
        },
      });
    }
  }
}