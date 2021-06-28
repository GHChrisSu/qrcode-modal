var safeJsonUtils = require('safe-json-utils');
var windowGetters = require('window-getters');
var detectBrowser = require('detect-browser');
var QRCode = require('qrcode');
var React = require('preact/compat');

function open(uri) {
  QRCode.toString(uri, {
    type: "terminal"
  }).then(console.log);
}

var WALLETCONNECT_STYLE_SHEET = ":root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 30px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, \"SF Pro Rounded\", \"SF Pro Text\", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell,\n    \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url(\"images/wc-logo.svg\") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 5vw;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n";

var WALLETCONNECT_LOGO_SVG_URL = "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E";

var WALLETCONNECT_HEADER_TEXT = "WalletConnect";
var ANIMATION_DURATION = 300;
var DEFAULT_BUTTON_COLOR = "rgb(64, 153, 255)";
var WALLETCONNECT_WRAPPER_ID = "walletconnect-wrapper";
var WALLETCONNECT_STYLE_ID = "walletconnect-style-sheet";
var WALLETCONNECT_MODAL_ID = "walletconnect-qrcode-modal";
var WALLETCONNECT_CLOSE_BUTTON_ID = "walletconnect-qrcode-close";
var WALLETCONNECT_CTA_TEXT_ID = "walletconnect-qrcode-text";
var WALLETCONNECT_CONNECT_BUTTON_ID = "walletconnect-connect-button";
var MOBILE_LINK_LOCALSTORAGE_KEY = "WALLETCONNECT_PERSISTED_MOBILE_LINK_CHOICE";

function Header(props) {
  return React.createElement("div", {
    className: "walletconnect-modal__header"
  }, React.createElement("img", {
    src: WALLETCONNECT_LOGO_SVG_URL,
    className: "walletconnect-modal__headerLogo"
  }), React.createElement("p", null, WALLETCONNECT_HEADER_TEXT), React.createElement("div", {
    className: "walletconnect-modal__close__wrapper",
    onClick: props.onClose
  }, React.createElement("div", {
    id: WALLETCONNECT_CLOSE_BUTTON_ID,
    className: "walletconnect-modal__close__icon"
  }, React.createElement("div", {
    className: "walletconnect-modal__close__line1"
  }), React.createElement("div", {
    className: "walletconnect-modal__close__line2"
  }))));
}

var MOBILE_REGISTRY = [{
  "name": "ChainBow",
  "shortName": "ChainBow",
  "color": "rgb(0, 30, 89)",
  "logo": "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAMAAABIw9uxAAADa2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xMDI0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjEwMjQ8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlBpeGVsbWF0b3IgUHJvIDIuMC44PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjEtMDUtMjFUMTA6MTg6NTFaPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cu4hRoMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAH7UExURUdwTEFnqT9jo0BkpVmO60FnqVeK5kx4x056zE17yzxem1uS8z1gnT1hn017y1qQ70x4x0NqrUdwuFOE20x5yFuT812V+F6W+Up1wV2V+F6X+1KC2F6W+leL5lSF3FeK5V6W+VmP7VqR8FKD2FiM6FiN6VqQ8FuS8////12U9kZvtkdwuD5hnzxemz1gnlGA01GA1EdwuVyT9VqQ8FSG3lWH4FB/0jtcl0hxu0x4x0p0wEt3xUx5yEt2wz1fnE57zF2V91B+0V6X+099z0lzvkBlpf7+/1OD2ViN6lOE212V+FSF3FOE2kFmp1aJ41KC116W+liM5zxdmUJoq1GB1VOD2FeK5UNprVGB1kRrsFuR8UVutP7//1yS80p1wlWI4T9joU16ykhyvU58zT9jokBkpFqP7lmO7EFnqFiM6EFnqUNqrkRssUVts/r8/m+W2VKA0kl60GOHxEBrtVp+vUFrtPT3/Ex+1OPr9+vy+mKN2F+Y/NDe8trl9kt/21aF2Ul81zNYmrfO8U2C3sXX9ER0yLTH5VOC1ajD74qs5cTT6kBuwD5ru0NyxJu560d506i83UZ2zYOg0Jiz4DxotHOUyX+j32mV4ZOs1HWe5EJuvFKM8lWO9F6N3lmCyTdfpU6F5FCI7FV2rjplrl+J0Gmc84uy9WqHt3mm85FNxPQAAAAodFJOUwBblHdHQ2cZCC3nf7DMiZmq6cK92qi38+np3ujEz/Tr1PHR0/jg6Mcv8qYNAAC0DElEQVR42uxbvXLiOhS+RYZshoIKGBgK7jaLWj+BxgWFKtV38CukzCRD0mRSpNoX2G2TyWNe2bJs/RrbmIDN92VCQB86B4nzHR3Jzj//AMPG7e3dzc1oNB6PJ5PpdLZardfL5XKxWMwF9gLpX/FSNK7Xq9VsOp1MxJtHo5ubu9tbzB8A9Aw/UsWPJ0Ls62UmcROx9beani/XIilMxmk++IG5BYBLXenTZX4yWwnN69KOY6+8DToOJQO7fb5czUR5cHODygAALkP3d2K1n66WpmhjV/q51mNPZigJL629LMoDvlxNRVVwh0wAAGeq80eT2XoemyJVK3qsvdQeY/OdGl2+tGitc0mXtubr2WSE3QEAfJ/yRaW/5Gadr2QqnxV/9Eat2aGdzqX8A3TeWHyEpdgbIA8AwCmlPxrP1rxUniZIU56FdgP03qT3bme392Hb4oevZ+MR0gAAdC/9Jd+bmlPadVtjf1ZoQTfunCYPvkQaAIBOcHsznq75Pt6fWrndJo00DaynY1wuAIAjtD9bxnG1Fs+Bmp8o20mIYgBZAACaa38R7/eXJ/4W6WK/XyALAEDN/b6o+Zf5ORznmYR4nP/l5aP5zKa5y+ZEjc41aH6IdpNAvBQ7ApwLAEDFwj+arLimJkdIptjCdJCNj7edPvJGrnmRkPhqMkIpAAAu7kbTRXm6piSUa4p7legs24bKPTQ3SgOrYoj9ruNuXJfN+8V0dIfvGwC0qn+W3tJnyIZzU6hFg0WX79IFbXdWLQHbcch2wHXc0LVpO72BcIb9AAAo8cu6mbtqyX+Vrmyple8waaOzTntsK4L7aB5yHftdB2x7XSMJANde9gvxcwlZn2e7a6WoWL2QStehxJm3x7HLxubr3EpcRTu9Y5dVrgOduc92bHxQgxZJANsB4DoP/KaLKpHbyuKuDrWE4WM9zf6E0c61136Fa6/tPc/OBHAwCFxX3T9Z8/2eN5BdHVEepIPp4oyu5cN6gt0AcC11/4odEM0VYh+zFXYDwPCX/iWH+EPFAl+iEAAGvOufzaH+Q4XAfIYTAWCIhf+a72MovE4hEK+xGQCGhJvJArpulgMWkxvEDTCMbT/U3wxM/lngQADovfqnatvPIOzGZUC8mCIHAL1WvxQ+S/8gBbQoA/gcOQDorfp18UP/LS8M7JEDgN6e+rE8A1BkgGOAM0GgN7gbL/VClnKe/UL/R90jxJe4NghcPm6t6/1FBkAJcPxNQusx7hECLnnjP1rpx1hM/kr1O/ov6MAhWEkzT+qo7h1kWUPXAZq1cO2hWwxrNcJxAHCpG/95KVZWqDb7Y1UArLoYqEuzFr09LGvxydgxn9s96683rOxAZY7jAOAiS3/mWauzAkDAin4z7vNlj3kjn1Wu5sxHM9c292pLc827cM38rplH1IxVLvZVbMyxFQAurPSfMWMZk3HPjJcHaaYR3t76S2a+u65rr20Wth1wzbpy3XZYdIatAHApp/6ThYxMFZ/qlRIRC9DcpMscwExaXxG99GHbinI6s5a2m7nmXbnWZnQxwVUB4BLO/VgZ3CXyhbKMYpd1ae6nWbh3wDVv5JprLuq41lPSEcOq7F1rRnEiCJx58R8vmC9Qrch3aB/BvKpwJeQlKnsfojnj7TsfNyze8HNbb+QL3BwAnO/Yf3YgdHlYcqwbyZ2mc3+GJV7PcFEAOMux/4IBFwAuygBcFAC+efGfUkjvckCnKAOA78NoZYZfOBnQapodQ5/S9kHX9KSuW3TGgSDwjbV/GYLpM2rHZvaoBEpt2upMfZ1NmoZpj2va0DWtcu39ZF7b0nWTYVW4bjGj2AkA33DuP5k7MU0ppWaTITYPzfy0Y0LSPkIJoqFr2pXrJqMO2KbhYbWc0TluDQBOfu5frEFlOOZaMdc3qq+Gzvpmdab+zm1sV9L05K6b2KYh221nFNcEgNPhx2hdxKUKQvWKmnFZ0OZ6VbRYnakhN+rSXtttXNOGrk87LJmSOnXN2RqHAcAp5D9eME5L2GFYhKBGm2Fd1bmSZj7bbVyzxq6p33Wgc9NRs8auaw1rMUYKALo++ZvbAWkEJ/WybngHoXa+FQ4qO9ei/T4aD6uda9qFa1bP9hzngUC3J390CGDDdO2xzXEeCHQm/+mhdQ64vFzH2RQpAOji4J9y6KmP4ByXBIBj5b8yg4qcMGDJN/S4PNenHdYKKQA4Tv7EikxSNBBfoGq0L5YL+lBn4hGERZNq17S262bDIl0Nq92M0oaukQKA1vInKqysqC8biU/mZSPxRSYhZmfikYOXtlwHbdNQ5wrXtBvXzYZ1+hlNgRQAtC3+9YAixIkthzAXbuJ/zKPbQwdtB1yThq5JyHWTYdHQsGjVsEiIPuWwlFekAKCp/H8RCWtxUk3EpNUTi7ZXtoKmYZr4entsV7imVa5POawzug7OqHzPL6QAoFHxX8Yb8Tw3m2iIpYWeDZo6PcK2K2nqd03DnWmDYQVYIpdcH10xLHr8sFR10G5GUQUANXE305YWaw3S495aZOzgU3tfP+21TV3bjsZquA52rnBNTui6o2ERShsPS3c9w30BQA35T81CvBaavv9MOOOwTum67nspbg0CDuB2cj6l0/5kBtLPhEfJBP8jAFTJf06AIYPOkQKAAH6Mq+UfnS9uo2HK8SzDmuOfhQEfRgs3IqNI/oYCuJI+qrNJR125jrr5ZNG3jPpUthcjRDtgX/n7GWkhEpEylGRjTpXxZdF2+EWR21kTtM82Cdsmftudue5oWAGaXNyMrnFNELCu/JUhJVe4yFxT8nBSsWXRRueSNjrrtMd2GfUO7bWdy8fvOmroutmwVAVQ3zW5uBnFNUFAP/rX4yxS8MZZ5Kedzn5pVtsmIdvNXJMWrusPixRD+3bXHdomEU4DAXX2V4ZIHmjECSi1TAbizYg1RycO7dgmhdu6tkmRMDw08bpWoiAHt8nduibq1zej0dlmFKeBQHr2t4z8sAMwchNABapoEmJJQ9skItWufaeA0SHb9qlhwHX9QTcf1rfMaBItcRp49Zv/X/WF7BNPde8gS0I0CbmOKt9qeS0X9Cj6K/BH4G+GjKb0w0V227LqkHXJ3x/p1roe1ulnNKqc0V84CrjuzX80IOiil/qNIvrx9fX5+fn7/fX17e355eXxqcCDDvFStj6+vDy/vb2+vr///vz8+vqgJMrSQSgZ9H7OcBRwxdX/YljCl0KNyIfQ/Pv7qxC80PX9dpNiJ7HZbeXrtGWbN27Fz2aXNm3TJwqbzfZepIbH5zeRDkQ2+BA+VCoYUBrAXQFXipufg1C+En662AvZp6p/uN/kCs6lvt1u77clUr1njUZb+WSXvv0+zRQqE6SZ4z7PBSITUDMR9HwW6U/cFXCF1f80Ij2XfpKkys8WfLHcvzyJtb6QvVR8quqsYbcrtFwiKwg2drOSvOyjckJRR6Rp4f7pJU8EicwDPU8DJJpiH3BlUJf+errqp9vyv5ny354z4W802W8zYW9svbfHLk8iW1lJFM1pIsjyQL71IP3NqbgkeF3V/zpK+ql9KX1R7f9+fXt8kOLcbvLiXYp1c0Ls8i1FlgxUZrh/fBb1QJoGZDXQv5lNxA/uDsbZ/2WLXxb8qfSfH+83asnPhX9a3fuKAlVxqJSwfXp+/f31QXpaDCQJbg3E2f/FIl33SVrwvzzktf25lO/NBtln2cpqIN0UZMVAEvWsGsB/CV4D7mY9qv5TDWW346TaF8t+fqmu3IZfCLIsJC8vZM/EnuDzi6h7B3oE/IvQwPFj3Ke9f5Iern1I7Svp7zYXDZWedrv7x+f3zw8xhL9Jj+qABIeBQz/860MGICRKlSOK/ldR86dn+j3QvgaZBcTnfXh8+51tCJKeVFw4DBz2pf9ebEWTVPwfX+9vT/dKTf3RvpUF0vOKp7QUEMXMf3JTcyF7q2AGwE0BQ13+F3XD71xRmiRy5RdV//PTZlcspf2Fulq4eXqRSSD55v1A0uZbWKAIuJLlX+0HAvsCh06MgDrUu5ltuefPxP+gxL/bDAEqiz3IJCC2A0SbUc+kJF3NaPDbSpzMULjOijAUAYO+9ie/Ze0rN0NKhogWL0a4Gp0lHYVtJz7bkWVbvInIPf/7W3aZb9Pzhd+fBNJ09vCskkDFjCZVMxrVmVF/5xq0eoorgkNb/guxJeWj9v07dBSii84l7bVdRuZB26n6k4/fb0/ZydngxG9VArunt/evSOwGIpL4ZzSqmtGjvy2VtA98WygCBrT8/2t+1dZqYkeCvT6bKcNDR1oQ2qVB4nGdaEuRPPH7fH3JrvIPVvxaEpDXCF9lIUAaz2hSPaMdfJmyGbcFDWb5n+Vfqvb9F191ztSmzTBSdt3Odm+v7WzXn3yJpX+QZX9lEsh2A19JuhnocEbrfFuJlmBcM7rtGYqAgSz/iV1WOrDoqJpuxLp07uO/P3/Erv8lv9a3uSpk/7O4276IQuCPSALWhLWcUYdOwr0Dtg3X0b8oAgaw/BMtqXtWiMRPJ37aLiXCtg/QQv2i8H/UVsRrw06dCGQ54PgZ9X5bkdvZ7l1hO0IR8D97V8ybuLKFm9UmqxQpnrLFlaK9iTbZvHb9H5BbGooRtGO5SYmCFBpEwWtor67YgilA/pmPsbE9M54xNnhsY3/nvRDwh1c3c77zzTlnZuDa1/5fJ2fZ74k9C8v+Q/QfEv8eTv3ZROBQDCyjhsAFI2rLCPYEXLHd3h+n/1ZZFP3T/k79uo7A++fqIg2wqNf3OB1wrdP/X+2jE9n82a0/Ef0ZDRiP3+eroJUa8BeSgKuc/u8mhLQt+g9zP9/nN0b0axoC48F0zvMA0jbRxhHBK7Rvz22bSI6Z/xhzv1kDBuPp5/qgAW3z3d/4nIArszvyu1UMOnB6v5gh8y+yMMB7gm0rBcgdYuq6Fv/aZM6GBOGKH6K/oAbMFvtJyzQAC4LXtfhH2pT6r+aD3q/4ld0u/MFbgi3xYvif8Ype4NV0/9qTOf7Z/Dcu/BHZZTQgXBpsSSlAwv9N0Au8ju7frzat+QXHwh8xfZYGzBYB4WkAaTwDCP8L8F3C7bdw638bpozJn81uz1P/rnyuR0MaMF81ngakCoQTgm1P/+9zirgmJv8xJv8LJWA8ni73k7rSAHJCASbYF9jq9P9vxXG5nCGn4Mm5sJNM/ojhCjRgMOZpwGZiyVul4N/YEtDi9J/oFZzoXSy+W4GJjgFkQkwzBJH3+wUrVP5VrgzyA0OLwEnSgIy3ZMckcI63yhBlIhGFoAxob/pPsmFJTFM9id1tRrMwyYfDNf/98h3RX303YDA/VAKOYbLWOzPWBaO3FGcWJArKgFam/8+pj1QWRCKgwiI9NLDofwFWOUJiheE/zma3+sDkb21R4FgJVOStUzeLqQQR4WeUAe3b/PMkybT4THsxIYj2onAzycwQWpg/bDbBYoq2v00NmC6jSiDjzEkpZ5Ynigw/YVNQ69L/38dsP3W04DHRlwks67wA66aBmGV6mIvDxkHuX0cl8BlVAhc6swxR5HQiYgLKgDbZzS9CUnelprwuDk/07w7LCd27J85msp8j96+hIXh4+FjvDhJw0lvnub7ou3/hbEB70v/XhAc6m5iAAmghOC39kfvXkwbMot1BZztzoiVLOaLgbEBb7E6YCHSOI5btzyH8Z5j8a24GLILNhjRrOCLcivL/oVkWJJ0/BGa9EvC+bFwCHtAIaL78f+aecByNe5KLzik4D82HD+GPzl9jzYDP/Z+N4uFiznSIUwVRJs9oBLSj/Nea4K98VmSQXFS4mYf/AKV/U2nA2/htvnc2Jgen1ws58yyioBHQrH1NvOPoo9YRGZCBpZsFpc+H0+R//xnyENZgJXCQAOYU8JZCFKcUUYiZKNgY3Hz5nzgv+a1hhPBSgpV3xXD2spIlbpxD+I/HCP+2SIBj9pbBmZUQBY2Ahsv/0BHcFYef6Ff6mMCEpD8C7Ig3yzBR/22SAPwnDH+U/u2RgI3ZW1pnliMKySMKGgFNlf+Ok7rFCePfET2lwI4e1ryT6OGUJFHyj/BvVxaQhHXiOWJiAilJFJJLFDQCGin/qZMTzMozYrqo939KFBXm6r/ZBAj/FkoA3ahUIAZOaD1sJopziigUjYD6d/9ILnGy3pFQkg9notz4bxOHd/7Hb6j92ygBG6ajQp6rCxKF5BKFEgd7gupu/+lkPcfL56AamFAWLfwh5NooAZ/BZlOZr1XlNxrlOFqB9bb/nCaMULZbvCP8W7sv4O1tGTCP1M0LyjUArcD67NtrA9FPw/CfIvzbLQGD5Y5R0sT08IpPCamr/f/k0AYEgJHwyA/CrOUSMF00JAH4lJCa2n/1e5dSwuj+A5t+r0MCZivCGhCACUUrsIb2330D0z9f+J9j5e86jC/QfOwpa4AnFJ8TZD3+vzdS/AdLhP+VrQkGbNNAHfAdCmC7/U/rL/556x/hf2USMG6mG4jFAKvt/5cGin9njd7fdXYDV5PaWwEUiwF22/+1F/8sLP7R+7vObuCeMlK7AmAxwFb80/qL/x2K/6tuBXwG9dYBfE8QhQJYsa+07vqfkRX2/V25BAwWO+bUShzqODgbZMHu82v1fJSWvpnSDdt/IPw7UAesKbNIFA1MJtgQUPny3wNX1nCIxURAcknWP2fD1Dlm/yj+OyAB84BRdZKujCjq+6NXOBtkYfk/GlpqCH9HRdPnVHezzqvxJd77X01R/HdmSTCsAyRfV0MUPlNowp9Sig0BlS7//6I0GXXVSzGUUQYJzno04YFy8+G5h+y/UxIwfpvtvQ2pnigmEh4e8dVhVW7/iXWVKu5QZFd1h4yqMDXByP47WAfw9QAnlyiOiSjH5r4Z1vIIW4Kq2/5DKaVplB8lIB7r2ISLCuwoF+PL8s3HV2TjrWfI/rtXB0xXlDn0HKKITCnGo1BLXrAlqJr4f03ENvGSOOqODNMsnEFprCSZmx3Kwg/8Q8h0MAn4CJgnxnpRohhhIwkjocGmwGq2/1FL5miuMbrCvv9u2phvCpgwWqPhEwLaHP86Y8Ec03+nNwXsmUegAFcU/16d4U8WAzT/Oi4B/JBgfeZBAS7c/ltn/GPtrw/NQJ4E1MgqbAu+kvhnZIG1PyQBUIC+xv9h+se3fSAJsNBrhgK0P/6j6R/BgSQACtAau6uvU8OCD6z9IQmwttyMw4Gtjn9GVwNM/71LAurcEwAFaHP8B3NU/0gCrKaYUIDWxr/n8q1/CIh+JgGUIQdopd3XJMyU7bDzv8dJwDxgtKaJ5h5RXSb+vVORW1H3bz/F2n+fk4D3letVxycoQFX5v2eMfC9fAE4Ihye908XiH8oAZUHQyxBFR8ITsP4iqoAS9b/nxcLsRZa4J74Yh7SICheTZ1QHR+k/Fv96b+NjL9BEFC/lm5FHhTkKBSgW//Fgxr/SMQy1V4DTmf140ZOeCTdTFaYuun8woRfoGYjiJTmnp9JMmmtEEmo4Gl6AAhSK/3SoPTWg01GXYWm8TTeLvkX3Dyb3Ag1E0ZOwPEejK1CA0/t/vfOMCo9GODW2nyH8YXESMF2zUwyqwKhHsSv4ZPzTy4a40Ltcd4XpH6aWAV4NBgWwMv+XUwme/mPvH0wqAz4CKEA/4h/pP8xQBrgUCtCkfXFrGH/XXeHoD6zBMgCfEmaK/591TP9kifIfZlgN2NlXANdzoQD6+H+qYexZgPQfZi4D9sw6Bz0XnxWss29P5qQ9+rkcdtkam39geWXAykClCknoufjGEE38v2rHUR7UfDjrBBn2mIe9/7ATZcAnYV4+j1KauXxC13PUzb0ZCqDazUs4MulgufLQuinMBzcCtHAKSC8P/2e7OY7+wU4lAfwLxI7xm/DI1bEsl6NeLkfdF3xzqBz/z+nwxI+S3EqwkE7JsHJzCoXxj/IfVkQB3tdMpZmGhBdyFN8dLNrto6iORxNG2ZVhNdZF6Y1vzsBsjdU/WMH1wCP7BB5lSOiaSZjD0fTmx1vEfRL/35PAVc3LIvHwGmDt3Z7vLnD0F1awETDmjYB8FqZzlJ6j3qmb/e9QgNgetIPk5Y6heCkfDlf/Uf7DyjYCqiShBvYfEPmR3bm2DeU/rKQCTPfMOi1xODg6AOB6tuN/j9V/WNlGwMq6AuBYAK//v1gXWn+F1X9Y6UbA29L17U5NOBYQHgCwrLLMW6L8h52TBMx3zHJy+rP3CvDtyXb6z9t/YDOsvL2/zYKtZQV46vmWwJsX17c6/2/R/oNd0grcWi5P+70l8PbR8vy/5V/8ASbDzlWAwdqyArjPPd4OcPsf2/n/eoz4h13UClyMfLsk/U9/FeDe7sgOGXb/wdq+GOD19zvD7G4A8nwf7X9YFYsBlNntVPV0Q9AXu+2/kfeJ9B9WxWLAx87qniDf7+Vi4De7GwC2uw/EP6yaHGAWbK3mAD97uBh482JTU10s/8GuaDnwtXeLgeICoH8iQcpEt58HR/N/gOU/WIUK8J67HHgWRyW4d58O8KCMiq8dU984wL7mlS8s/+P0D6xSBXhbsSo4aoR7djb4LvrzhUf+kP4cL/nSewRYuTmGwl+uv13j9A+sUhsP3hZM5ulZHJVulvjfq6WAr8IQHFU0uiBc9t30ogZ29TC/ylZY/odVrwDLoiRMqavA6l0JzJ/16GxweAJQHLLjuKQvpYvy0Ar5gib8Dw/Y/gOzUwYswySzAo66Org/JwNvfkR/+tHc5JWcYPnRcKfvFWDXFy8mz/j2v9EC239gdnKAT28kR7zvmjnqZzmqRY+64Ps/erIUcPvo+75WALSmQV09zJ+N+PY/kBVmJwcINwWez1HXz727J0sB9741c0cutv/BrAnA4O3jn61rj769OBXw1V78+yOKT/+AWc0BZrutRQL3oBH4ZVjFQOn/EfYPtv/CLOcAs3/tKYDb/VMBNz8uj3Pj/I/4h9WQAwTb8zl6yrreCEwagMNk3A7P+IuhNJDJqxhSYF8DY/6H1aIA00gB8jk61HLUDB8veB1vBD5oRmMojIMCD315mPRyEMHbHY7/wGpUgJCEQxNHMxSNYTODw5vdTu8JvhP+eOFRvqgAWlj9JxD/sIZygOIczVJdeEyfdHhP8JdYH1MdjMwXn2ZgX4UzN/vD7b+If1gDOUAJjoZhXoD/nW0E3vyQ/+j0t5Q9SbBYQknjPRRhH/EPq1UB3v+3jZhn4qivcjTVhVP872oj8PZxmPz1qhmBYu9F/MPqVoD9NpejZRitWkcbgXd5A5Y/Xvkw5n9YIzmARMvLKCzBP++72QC4RBTzDPEPa0IBgu3QlnWwDfDtyfC3jkZ5I5GPhjDiH9ZUJ7AoR0vCo+59ZeDtY/mxGA1HOli5jPU/WJMKUISjBbRgJMOdawPcZ8N7JA2JOjZHWDt0I+HmLfb/wZpUgNFpjuqnt3z+d6wN8HU0CkWR/8r86fzq/9m7fh7FeSbeoP2jk24LtOXdFe+etB/A/groPa1kKU0qJJev3oYSgQQpMAU0lIsokFKdno/54NhJ7MRJgHWIg2eeZyFkgLPHMz/PjMdG3jKwAxM744L9A3WJAIc4CJt0VGcbFDxla/p/VxsDn9+SbmUdDwtXxpthmAnJwBbfB/t/gDpHgHodLarwufp/Tz8W8vRbgbq0jyUhqAiYQaLuQylsGWjB/n+gThFgzhGgWkfLKny2/v++nzTASyhJuvvyWj7nt0KdHRS5OTuQ3wb2D9Q1AuzjGh3VVfh8/ecXL/eUAAjTWD8RgrhOn0V2IL9WLzMhaeyUCed/AXWOALP/pVOVSUczBde1PyizCzdPdCdpgMe3DNlMCCi7XfQADPLQPxOEBM7/BHIAAZaBrreVrkAY1HkKxbcG4a+7SAM8/dB7b0TAsHAzMMlD/0wQr8D+gVxAgEX1zF64qHtfaca7k2qAbwXjt+EB8Htg/0BOEP/NIFIz8V/jAYj3BuEdnA0wUKDPogcQxBuwfyBXfIBVfLYHEJ7tAXDq/aaAx1+qJZtn83oPIDR6DfEOfv8HyCUECILKid9IRnZpxuv92QBDQ8e1mb+GXSm2IIj/gv0DuYQAm7i4Rl2augLtP/PMVtL+4R2sAKbTeGC2+cCQCyiwC39B/M8Efv8TyCkE2MUmn7XOByiwzfr/316vBT6/hWf1/TIK4sMUEgBAbmUC+SFhFyt40Py+PpcEyxVAyxTEe9gADOScC5BsDLKq6OKxx2uB38JWCAqAgVxEgGJRsC3q7VrgoB37hwJgIDcRYBaQNhCA9HQt8Ol3K+YfQwEwkKMIsAxJGyrf032BL+3YPxQAATlKk/d13IbOkxcIANQCINA0IFd9gFUrCNDHgkBZAmh7/t+OoAAIyFkAEOUA9qmHBYHDVuZ/KAAAcpnGo/G2FQToXUHgQyvzPxQAADnuA4ytlwP08nCQVgIAEkIBAJDzaYD5nkAQMGzFAYAFQKAeIEAri4H/H/oeAMAJAEA9QYB2FgMf/A4AAgY7gIF6QRN1b7CXQUAbAUB8mMIOYKB+LAW8/41D+3HA0NsAgMACAFCfgoDR9GA/CiBvD/0JAFT0I/VQWM0mGZeEBHYAAfUoDTALiFHByQX6X2STngQBrxXmf7oqdza5k1p6iZ3dgCOAgfqFAAtq0P+QVNp3hf5rbPrajz0A3NLzyZuo3SPFrhPV+EmZLR5gBwBQ3xBA7go4R//TuZE0msegJwEAKQJA/oqUkUHlklLXT8T+mcACAFC/0gDvu7ik/6Ra/xvY8k09CAJetE7kXSLCLyBmdn5ZYCfzPyQAgfq3FDA5xKGm/6mGV5gHqTIP9Z3ObwwekMydKT2qHkCBrd8sMAhUAAP1MAiYH2lISnodms2jTv9VkHA8CHj6IXujkNpPA2UCqOBCAhCor4nA+Hz9r2UrXMePCP1GrqOw8nbIfEkAjk6BI6Q67ikIeN+w8GxFP9NQqNNHhD6/EcvkTwXgSODcCQTA37kbBNiy0LZFOP07AUPbvSU4mL17Yv+r/W61nMocMrgC9zCmo+k+tmwQ1OWK4AdiHe982QLM141jxuh+u1nMAQTuZlSX1qdE4u62wMdf1vvqSwKA279I9TAWHw+79XwCIHAf48psGwV1thjgxb79H/z4EdDE/rOsL2UsDg+71QxA4A5Gdmc/DeBoMcDAvrdz9KMCSLH/NClMY8bI4e9qNpUgALbU00TgVNYD2fQBnCwGECUAkACwYP/pypBICqyWEwCBHg/uLKS2DcPJYoAH+wHAxhf7N8WJNAMB7gkACEAawO084OPPNhIAYy8UJG4okkpAYLeeydUBSAl4nwb46V4e8BUSAFeqx7rO/qn4S0Ag5KsD4Aj0boR5GsB2ecyrexlAbLmPbO2H/S8oJbQOAah8TEDgeNgsIC/YtzFeEstpAOpcHtBuBpAS4kcFAD9EntYLguYgIDyBJC84gmjA4zQAJfiHcxlASmvwqold4iIvtgDwn5HBBYdfF1n5f5KmBCAa6AvxXwxkxRE+xzxoFZcS4lQeMK8BpFRpd6nl+csmthdnAPDokOW9LsskGXsqPABxkb6JRwPbDawN9Avoac1YX2Yejh0O9KLilOil3niNXe6bAnLima38CAD+MkIrhGKUKFUSg4RXCYAj0JdUT1xj2yX9r9IEle1QPeBz3ixKs5i12J2MXcA0Rb3lJWHbsRf2v2Ek6zWpExnVFCULmShmLPjcJHsIoWTY7bHeMWLWf1LUfz0i1DRB9Q7ps0sZQCopV1KaPmbPabBfYJPs06l64/38fezDrIBJ3uvM1lWRNUqUEMoYBkfA/TTA5MAIMel/Gt4VNCE3D6qbR6YozuQBH/RWJxOURiX1LnCJ1mVPVgD5mXGIVgulWaI5PGCeEVjNRoABDg/3UgwkMY/1eZqgEsaO5AGffhdaTC8l/RN+rACOR6MtI9fIh5q1hDF62C2mgAHOIsCKkarBvNxmOP12Y0vAt+vsvJLi/XTkQwCwKdr/15AzwYB4v02DATA5x2hyPuKfRxg5cT7g409ql5AXK4DvC0StE6GIsePnaikwAJKCrsV82OpwYye2BLxY1mEv9gDy0+IYbYUIYYwcNosJBAOOBgEWEeDFhSVAjHGalTC3soGtc/3YA5isCl0vsno2TVcGICHg2qgbggA5iNcNNep+KXBoNOhKV8fQEaxf+xEArJlBB6pkVnvfLFGOASxNCEwAA9wY9vF8j64YzGrrIZ0fETxQGpVdqZ3R2OXOJDdx+hL7EwCg8ohi6UydK1FcLdFEOTASq4OQEHAR+EuDaZopq9i5onS9K/A/WLQj/8Np+8x/4kG/nV1SP04BTQIARQiK4CpEZpQorpao/KKkQoB8bmZjwAB3ggBsHkxFEyrMQ2WntzquBnrIG5U2M3uh3s5aXcmWU5cnKwBM7bUqlJLIcJ3ImiXKb/IKAbFvCDCgc99vvkeG0aJlTagYzJKidFoN9PQL42KLsZibVD3O2PlbSmz+5NEKQFFkuEpkX5No+mnGcIYBkBDoOggojxYuawLOxrdWUdCvLquBvhValMIVNnaHmu6rH+YBgA86sIlIUWTVQvmSRDUMQIcd+AEuBAG0abQuYndYDfT4E19GtIHtRwAwo02CsCZRXYn4wkBaLQwY0NlKwBFZHd8Oq4G+Y6sUeXEMOD8dhuJuiGIWAQa4EwTYoe+9cQDqyZcSoDXD3REl0g8QsQDYoytBwBforSsX4MWubnqxB2AsM4D2XPtLpZzHAoABHQHARUHAGUPaUUHws92pKfLkGOBN1GzchEUMYdp+LAAY0IkOrKw6gaijguBXuwHA3otjgM9JAbHNfL07tA0CBLMInTBgBBhwcy0YfdoNAl67cQBs+jHUl98B2TU5AJRtk3emINBeOMBjgQgdNkvAgJsvBFkdyA/chQswtKqLJ63343dAGmHzg7tCwhwTEKDcE6D2QQBlsUCKAbBnyK1A8ALqYE/QwK42Hud+nAO8bYz+ZC50nILAbLXbY8aQdUcASRDgGIAPm9k7lAneLgaYHOymAQb9dgBw5MnvACwah10thkhBYLJcbffIckoA5RAgMWA1BwxwSBPcdgEGVjXRjxrgJPlzhiRGhQ8JEFhsPo9JXtCi/asggFl03AIG3M4XtBsEDPrsACC89McBQPWSmJkkMRL4mKQEBAYgKzkApNg/xjQ5P2ANZYI3oPHIcjHAsL8ZAORJCcDJoT8wjOrWc2uqocfCJkc8GrDgCKQOgLzIcUApFQYzbXU2WEW4vy7AsFa3LtRO5MU54GkRMKqthq41O+mbTxfcEYi+5ghIBEBqMCC+DXEM4NsGIRRoNx60mwcc3t4BQEiZu5RXys1m9ukx8qIEQIw4Ss3WLJPmUEha5Uw4AlUCN3x36Z9GWiYQoRQQMKYsYrAs0Pp8sERikKrNA11iW4NbOwAIYb1paVsUhsZWW6s8ss+xF/af7QJShKKJDJ8ZCimOABaOADYJHJUFjnQ2kn8YlUeLRfhTpgTBWFtSiF2Em80DVQ+mbno3dAEGshWpUmWNU7QMZUqlsNW+yefTlRcZwFMQnzgARpFJJLygGlqAwOjkCBylI6AI3PDdlaMlp/7SaJ0e+bLAGtIBrQFAUhaOUOaCnTlalezBDR0AhPIJRGuiggHqTY2tY4IfGUCxBICwIgRFJuL1haGQdATm652oEVC/svjdGgiXGRWjJdIBsGOozTygPjDnjVaF6Q1v5wBILUMVNp42r8DGOTd/9mMTEMf7T6b2viSyJAN4YS5UVgpNlhsZDOQQXBiO2n86a0J5MBMM2CzfYWWwjaTQRGaFNAg4Z7TMpncrF2CIipQ2Tdo+rmLj8if9qAGUKZ8qkQkAWFwlCYEBYxkMSKVBdVT+p7UPKGwZmkQorRIEDLDtFZrGo360qtnDGzoAdU1C55MnxwCJyq/6cY6u3w41Hk3SYCDDAEskp5osHQAbhm6qFRfSoCMH4AJlKtKV017/RnrWJB06+9JiiCgWnCx2hyQhgOwSTwdEIh0AK4OW84AW6SYuwLNNvYqc3gV8CtJGgqws+dRL4uu5ULkykCYEbGMAUqoDIBSwNTFsbLoANzkX4NWiUn0cZw7PJyPduL6ABPwYuI9aSfw5zm1IYpyWCX0eo+gPagEDoDrAJiVHRFocode+OQAuHwR+QufP3Wa1Xs7m0xISWAZ6m5IQScH5anvCAOvBAP6IoiOEAhaVbB1ZnFA/2ncBXixqE3N5E8DofckiTgwd94ftCQoWy9n0SiCYNOD8H7uLoaJh8/V2z/0A2xjwh68MzsANsDRUB5tBQOsHBD/+tAdXTi8BjsWhLRKpIgEFKRLM5hMdCL4G8x8tuEIpBsiFAeuhAIJQwNY8YzNUa/1ngr7bdAAOTicAuNf+oS+3fvxJoIDh4/5zu1kv/mXvanYVx5XwpnWmWy31jNTLI82mN+cBOK8Qy7IlVkgskO4bsORyJIgtmgVs2IwEYpF3vZTj38T5d3Iyl2Q0fSAFSVWl6svncjkYRiDqhavCYu81HpIAOBiw2fWDAWYoMFUEuwVa0KnAnn8m6GtAAjDqKUDRuEMsZZ0pMQUEghEcjnsXBzzHIkMTgCEwAJtZgSmPO0Ta9p2Euyh/9/tjwS8BA2jUU4AwAChErplqlZdA8J5kccChA5VzgDjZ9LcgskcMELMC03qhzghwCUkBXnolAK/h7v9kzKsAq8r2oD5RSCBx4DfgwOmw0/UB0UWwehxrk+DSY/U9GWIwAAfEAAIugFmB22VaK9Ap1j6ScGWA/7x+/XcQgFGvAkw790kFhKUfIPJzCgdIcrs+6MB2E2kYOMQV3RD9PxNdrhoSPCDYvIB0AY5xulZg6hPu5W4zIgrwK5yaeMS/BAAzAHEdDqPJgHxHoECQ0oEZ0IHjfgN0oPRgZCgoXDkYEIrGETkUSM7HqTmgLQCE7AZ6/9XvMiBCqnhhLenICcAhA8k+s4hiAIIMyzdE3BXf5YRBCgOnci5BZtuhXGEwIO0TbH0xiRwCyFeCBkzNAV3iTcZR+9wy4v6WBP10lSTEVYsoMVEBkhcHbn3tsS6bN2tWbZZygBZjKBLmxfbbYYuhgAHR2+aoMKDUrMJrTUQBQLMgeC2aA6aKYLstLTmT4jgiNVMPLubPXruACTF5TvK6GGn+X2KJx9wEDDOzebNIkVmOTyQeuHmed4p97MFnQ1MesDmeE4sHNL2Yeavhj6kITkndKOJEpxjxO9wJwjpX61t/XcC5G4GLTZ77m41NJkPG3AQMV8O+FK2tNpfFwxj0l+P7JyTLSvUKW2uG2l5MV4xjPPUItqjRXuNZgUcbBaEYjf3ZZxewSQ0rtAkh+p24VZIZKRKLXSNuAo4iMSvjMavUarPLEee+bOoG8k188DUPDYYBh+u7GKMEM2smegT3qwkCGt10dr+VZ4sCpVbqiYFZT/3A350TErNlY0FiUYn49209YgJwiWftzCJZ8azaZfi2VvN0g7skrdlvD1cSxzPHinKzSJFZymo9MThhQO2ou8ZlHm2UevR7P01AzoldNTNblXTMBOCBxZLANDBr5vfJrNplOLmfD7ttJDNyaGCUGHC6Q4vQrKZZpMosUQ1IzrtogoDaYbfHtXOrMvV6aQZ6IcG2+L4e7xTA+h4XAUAvm5gnSG7n03G7VioMigLywcJiWiCgXTABcj9NNKBB5Tmc8/toBvoVLjRG/Ftg0JU1YPY7KPB+u170goJBCwOqVViUBAOaNdGANhQgwNZDM9CXsARgpBUAeEojJp+zpS2EBBqJh0eB9MHC6dRgMP4zY4YGTG3Cg1KA8M1AfwW4zSkAGDMBqLgK/aIDm80wjjknyd2gwHogFNDTAqQOBtR1xIzEPDkfo2m10KAU4K/gc4ClQYCxsxcLCc6K8fgJwNsuthTH2GMw9lud34l9eVJ8bNtFgAKxiwKDdNnbJcFCs7C8xrXNmmE+0YCmN596gZJLPR2joWcCv6tTWSc06QD/5sQkLxb/jJcARGkFEMLbZxYuMiub5mYnxp5LqHeWeBRunVkUiIZAATEUiHa+kqDvYvqs9pkFNGB6flAlBcD1PVoRo6FnAl9tHdKTYn9wpBKfON0HBGC0l+DAXT82sVpIsV/qinGtYxsugJPr5SAfPzZAv4DAgPXxnPBYKufRzGNWucumSYEaFIC3CRRv6r0GLgFiF2m0mlhvllgJSF6Mx0wA4MkMWcUzVheZZfuk8MtGTIrFeY9KFIA5AgsF+p8WgHIAjw0EVJslr71XTGwaMGV7cRWgrkdxeYyGLQP+zEU9zp7felsohvy/r0fcA8il6iRvFi4zKyfFakDm+zJpcGxzN0hRwPQL9IsCaUlwf7r/5vYVlZoRC8KK9XZsSN/yeGoRrKgCdAsU/TromsBv/vsbtnfmxDgrFv+NmQDsNa4WmkV8Yk/yGwgoEHuPXeJR3S/AY/JAgd1H/yAgjr2G7gCe0aeRWW6gAA2YFgyWRGBjjxalXsg1gT9woI3Et/FWAFZX7ua5z4BGuxs6p85nBApwHif3f3RxsD8UUAuHZ2IoEMQ4oAFI0ICpIOilAIFSLeQDwr++BgMAfhgvATjWcH6oy9Pp2AoF0O1+Oe7Xaopg1R8GwMwgj0kY64XyEw0omoYOFU4BFwS8FJ2DNtSJxaN9DoB4DiBpZ1bAjTYDAWgaMgMC+RvhvQwFIlgswHFLDKA57RHHV3h80AQBThSurjURoDpQ6EvAEuAzEIADJ5U5N47kN4CqygKZboE+hwI4jBeE4tNTBPukAMHKgN9EdNL0/6LgtcW0QEziZDNSAIiiTeJxvW0WQXGsi3Eeq8t90k1MS8SgD4o5x8n1dNTrioMTLTUUQBwRgkNYDQVBIh8mPOW+8vI9F4atAyVUGfAHlcdPT6VORm0NLHEqox4x4afxEoCTJADGl65ZsHL/lpCYcx7HyACBZTV2raZ5lxUcu4ZHcd6j1IhBFwpUYHY7H3Y9UQEzKxBTgQElmtUxi2JCKH/QgGleMFuJaunRTOr9CFcCpBbOqFc0DXB3p1DO/qwlxmi0vwUAqwArzIIJzM3H/ng4nSUQxCIRBA5Qv9Vel+H8sdt5lAqQ0V/WVIAm0DKU1gbXYalAumZQNQh5rG4SKFJp0R40PUFMbetbTNp61I05Guh3Ar94w1Vjjj+arc/onYRfxksARA8QNYpnzKKEq6d3w20QgOByvicsJQQaBxyrC1xGJYJ7XNbUozR/OSAvkWoW6GGacCWHArdYDAVcs0qtLjILCoLofthM84K6FlXLozUCJUw34E8ZsurI+q+8C1EbmYw0ExjwWbIdawXgbUsUqGYyUdsDyj+iP1pblfbNdgeEQOBAHM8FDthW51zmpkNGjBt6FBeJFRWYGyoQBaQCciiQrhXIaVYQKB6PUq13Oi84FQTToLrFtTxaI1CClAH/cC+a9QpbOywxzWy6BMjP4yUAZ06K9E5D1C1fROp3wFcKBy7nW0JTOsD0sCDnMuWiMB4VkIF9YuFvQwX2ofsG5VqBO+VzQgpcVmmWrTgh86kgaKpRgQKFBlgU/PXFd+DyDRd8Yz9aArCvsKiggWElcSCVPMYFUB+YiWEBJYwxggs91NSjrTbCBAjwWFCBKCgIpGsFLjfOKWlvFrYgQBUEV089EoAlaYiG8CilJEQrwK8wcYkJv46ZALBSsxgvW8KgcEAPCy7XW2JgoK9Mr/tZQuiccz67n2WvQCAQkM0BaUUwhKqETR2Csh4V6OL/ClECpBQhVHaWcqkSs9EuA3oQAFRuFuPXGiEZRSaz1ikMpEVCShlhLVwWTgw4JCYIbldrHdEqDAbIiiALESgMcXQ9PHWHYPS2tX3SxaMUdS8D/tmKe3r0gnXAq38FAfDpX3/0ssrDgGgemFPKytkAov1ucPp0HVHA8UBaETyeGdCd5sbldzPK+XN3CHorUi1Tr/OvhH39O3NEC3MKb5s+ARttF/CDAMxLsw+x5vOXNgxstrvT5ZqI5EM5MmA8ipp5VOxsTAYYYTAeYLez1TscoiJ4ui9TGtAxUACoYs7Ou6eFAOgH9jmuhUfnnVsBXtIDI30KWwvkqqXFyIpNJZ6PtwsYCICdKcjNLERR2wYmFwagRJhA9s0RZayhRwvFNP9t43+UFxsqYI8Huq0lXOmJQU5ZA7OoJ1DEK4b48v60I4EounOG5ACgWerlPNq1DPhTxRhCyPqrcgSZk+m/auBifbLVTXTQCoCjLHLNYh07mAEE5I/+rD/2MCaA9FsiOSSo51FKPUpWilFWbKT58UCn1mE1MTjn8xTcqs1CvkCRu8RIIG0NeL5HCUMzELPd1yH1OrYC/IHsq6OQxlHNI7ZVU99g21ETgEwY2law5W0T4EYkWgdsMsBSMiBQoLlHfZejltg6NoDAPIbxwOWwX3cFAUEDot1F0IBcoNBGZsFrxqA14Bl/WGj1trktaaDU69YK8F2SCoTsZLZOZxSzxOZzSsxG2wQEBCBrFnLMClm9gAlDTQZ2h8tdNA8tkeYCtT2KtJ6u3q64xCyNzIyhJefodj7JokD7pkFBdB40AAENqBEotNwsGAnEz9gkDM1ArFXq5TyKX7o2AThxltmMUvblQ/kARPFu3BWAYrMYD/4cc5sMiCEBAxSYuyOCKo9WXA+P1BZkxBIEEl0UaA0Csj9I0gDUWG8lVuirRwLPRAOity2TLmiYenlxp1aAbyjM1kMSBXV13r227v30L6wMCqxhSCBQIIYbMkN9bRTRYhljaM75EpoGP9YdJgmBBkQbQwNyHq2pqsamOcwJrJ+qGOC7LbXdujwV4EcwABjvHOCl3NOMX1e9Pn1bhXUkUCDhnEPiMEbRJ2xwWpgkvF8O2w4gYGgAChHG1kjgeWYCl6GuaZenArwG0mE51jlAaLyel9+J5gMMXnTtbbXdOSjwOSCAAATQrUvnsDMpEAQC1EjgOYoB6UxgENbX4TeCvpQfelF395jnAE8ePy9s1QerXpo8+9hBx4BCgUJH9woConN4riuDLUDA0IBFCAhgSxgJPMuDQ9RMYNfUg+1LgBGAOvJiUXpCIV7kd6P9WAnAJlnmzXK2YVXXiZZyAV0XKLjg5dBQX7wooAJLURSQlcHGIKBowDJHA8o1W/jFbP483UEqMpumnmcj7ccAr+aki/QUjhaWNCte2OKeh9FdcTZrlmXF4nOmL3WmrTUKLCEfcw4v0Nt7tWyzyq6WK05BgCd2z2BTDFjt/1HVgHqnXhSEmRgJiHUC//8QYIpTXVJPvHrtMgJYLBYutmT0SMWLUnFfdfTuFbi39e2/zIOvMgYXgxMAPwpAdRCprqHM5c7k+P/Yu3pdt3El3BzsJk02QMqU27i7qu4j+BR3ATYkwELPYCGNaRs+kGEYoZ3iEAsDNlzkXa/4I4mUSIqSnRNKCZM4tsfi38x8mhkOKVR13EXu4labnHPzuwCB2+thAAjoZoB2izKkytL0s71n0hP4BXYM8/wUifC9uGWd0aE+wEekaYNsyHhtglDZB9QAIXxdppF6AAeJsq3BqRH87PyltESB+XJ1eL18L3MH66lu9l67ZbiHZSG4malMoVwkLorE4d4goHYK5DvynIc0jVqDU++kUQJ24DL9s4PS9MKF8z7Vk+SPQzcCqgqqqmtQQQiVuKATSsAyfhdxCLCcY2NY9aiLlwiCF3XCAM8aun3nfjlAed6YZvMd8g/LxsxnOzPr3ykQyDNt90AaDgGz9TEj3Axo96fVtGNYCtukJ7CeNgRI9xTdpXrqdeCWwCek7AhU90G3LJBeWmSN9s8q1hDgC0D2YcnXiBKYq+TBdCnCAkSmDiLdCfSx47liZhe3kPHrZt08L4fI3QPVaaNpIIypcwOwcGN8TdcS99wkV73A5dlB6WQBYPkd36t66qungR4AatxPGs017yfN3siPebRHgc1nZ46xtn4rfAVxrV5UGwkW68PxtCnugwSI2GBTgVzscJJ1XNDINlzgLM0B5iBwrkEgZJrEToHV8arWBe11e/ptkqtlwakmCIow4F2qV77+7+MwDwB1lufun6BoQ4AiCcg3sDh3MFUOwaJ2CHITBe7iV+DvJQig66lPyqAyAy5IMwOGd1UuC042GCAM1MewcpAP8IQeU8BmGesEH3d+vcGxHmNchwXWap2QYBQIAg8sRYsKBMKzhar0IILu72+OyISDAfP0Rh7E06fhHgBCwKnaQTyKNQQo1gD9Pb9ELVfVNoIFXyHYALYjuBMEwI8BAaCDQBpgBqh1wQc0jyd7kLAKAz6CjQN8gHefy7bMxvwf5WegdxREmwV40PDVNiwS6xZmm0OwfNmfMp4+zE2B3Dms/sy0fASCwxpVgAAOBwGhrGJdsDQD7uhoAQFoko8U4T4qHq56Gvmfz+8GeADPreqBG3gMMtBvo7c01uk9FfhqHZb8HO0WZkt0rZB9cUD39njZ4NIhCORWf3JbQUtLQIBAGRPohAAREDTNAH/TDmqOdmSKOcJSRO/lliD39wH+MrQBgLouU9fbZAN9ot0IzA8CAMgzrGiDl851wtoUuOXKFGiKh4uZwM1M7eKabJkyxHMTENlJdyAABMqAIMP5vU1PNBgwn20JQgNVzyAnfw3ZB1A2WP8HdMQxvjbIdW8RztexAsCR5Y5hiRGQa6zPMehGgbmIChC+TChMATCQmcacBJFRjgDZMQ0EPGaUNANeN8ITMDrobdpKRgjv8vPUMgNEmKqP6iHHlPXeD/CkVWJpDnjI3EUsv4r4LEAZAnQOK2fH2SjvJoYpkOWEKVPAw0xk5av09V3z45YEpEBArA7M/SBQBgTJDtc4JX1ZAHo2DXLM0LQeJ7AQd6lhqteYsr4+wAfQKDXg1l/ZyUbz5DBbxBoCRPZhSYXAm+VsvHJUosBiLU0Bxk2BGgRao0Z2XiPQnJpKyW0EoBupeQkCKz8IyLOETzkj5n3dXTdwknPAgwHTiQcWfioaqHpNct89wZ9Bd0HdvyDXxSyNc2pPu9zT85y9zkYuRNXTCNYvx9MV7RjBKHdoLgI/oPAAPdmxPDvvV6knJlAFBIlPu0PbnFQwIJ1ddugR/Oq7J/j9Y0QgWjWaz9Y59mIbWs0mIEJpCQKL1f71lmO2IyBHP0TdHfrIQYDxDUT7tbRJrJopAoL7C2b4ERDANvz0sCk8ZXwx2+8exK3393kAAwuJNgngK/MZACja2MUgU0Ca3/P14cgThqQpAN4SBRQIHNapCwQEUG3PyhO4sz3MJvJswa4bVQ8ToJ8P8LdxMcbeTjipiGSLWO+Mtx3yDGsUSUD9BqwlDF3z0h/owcwQsntGea4QYSQvDxWx7B9K5ZbhK98yjAY03YAALM4MGPtOocJVZWgoOwxyr+cD/GnUIv70K/L3iB1jDQG+YOAZVrzIda8pwMc+m6++Ff4AqfwB50RgP38tX/uukJYAyS+vrjMGVWoA9wT6SVu7YQTYLht/chA/swYNUD1L6fOMsD/sOGLFm/rLFhmjaE8CeGXIMyw01jXAUFOgsMSFP8CDAlgLDHqY2ZCEDrKLihDAO0b4GYPWrGG5V+i8aXkC4mrsvOlZmhbBgLHHA+ez5YYMUD0Luc8zwj6pi+tpFW/LfyU7sNlYRZbigdHuMo90CWB5JerG0R4W/zbW9KVHTUDpD2y/nq4yKKAvDzSYCdq8bk0Zrm/FfkGpQWBzqY8cN+OW4vCg3U7FurWrrdxykzkE5DweOGIImM/O3AcIVT03OfnU5ygAoz71xmykagg3ydWbiD2ALamxqj0sxM6z6R87W6YKiHwhxnYYIASczGzyuv2lb0abgsKbIoyRjTVruOkJGFcDe9N2GeXBAHQac36gkNVw1cN2bvH56XEowFNZgXptN6URLOSSkEfrAZylB+Aa1tRCgF0gwFOHb/mOMdIEgYYktLV8uKAIENgxXOcK1SCgPIGcd+i+pgHCDF4Oo33IuPABULDqARu31O+f+iwCYr2A1mffRxlewxixS6yHAXO/yj0OSrJf6Em0aal36y1PGlQgANy87WC94yOw/hqIuCBD2VkeNqyFBKQncCXcDBhUd/WOxwPHu1lQxat6qZ59jsIXAj9jW2k25iKXfUAs2o2AB0Y9w5pwCNBjCgjF40mDAgQwRdKWGyAKoYJSfpQgoK8QNjwBiExl7900DwaMNT+w9FfDVM9HDk4GfI8fUUDEGwFPGqaOqONv4w8sX76erpiDAEAOicKPLlSuEG6qxQGVulR5Aoje1zSlKj9wdBAw51sCHzPjocmAHx7DU3aZxe0BODt++hX13wSB1f6c0Z0AAfp4fbeiCkWUSBDQNhKrNYErYxjdWT9fEpD7hcfnA9CHzHCoD/DJvA5CWL2zVFt/qd5BDKUeResBbAnVO94YFo11B+ObgYC8/crtA4SRpAIBbcq8ohAmKG0yoAgQxuCmPGt4Ubgmcp/AjTAseuG4OKBpgBIGZIpwOioA4OsAgarnJQcuBL5rwo2LcVLTXXxN4vUAzswDAIBslrN09muXanlgfZAgQAQIDAQAv6A0vgSUQsIYzc57sXOAJw2LfQJ8xzCl9os9MmrUjSAjYklgRCnC4vRacMeMVu9o2ELgk60+xXH91aTWBPk+Yg9A86ksw6Lj3wj86OUBnjMoI4MCBCB0S0IfQXGSIaVVXFCFBLjCrl43GgRoF0NX3bBdN4WMZPtR7RKQ6wDhqmebUfmbsIXAD2UtVd0moGhk+9d4FB5AZTY1+k9/lSSAUFNAvC63Bgi0JAF6ZtQvKNBGhhwEuCVA8jJfkD8UabnPlCdwh4zyeOB1TKuCKhfovhnl/wUGAf6Wl8hqWnhf/4M2vBf/BNDGmgW04DEV97Ao3weU/tb8BghwZdFBgBqScIeg6BfrZPGXUprIfEEREuDZPHxZMCkhIKRpS91iSWA8q4Ipj1rTO2dUfBm0I/BPWE9rXbD5lWwGYu2jSabsNo/1eSAZAdA5LBpr/nIkywPbr5cNZIxA5Q6ECgp2CIp5sZJi9XtBpRTzuGB2/raSXRHLgpTC+mJn3bWENshgVKuCfN2aBquea0Z5CdkR+AeETZbaGN38UYNMY02mmc9WQJMby7BefnsA/qAATxTIShBoar9LULBDUGxypOutVFcRF8xvah/x6rhhDFBDQq1NY7eMcggQq4IjgACZuRaqer4ZDdkR+LFHvW4qjPWBQIvZvkbTdqHktpj/9gC6QGAuthBZQcAhKHi49ErGUAoZY2oLoVgWhCok6aq7o3JAIaOnMSQGiMwVGqp6HioIeUTYZ/iAEm86vWFOWTr+2wMItgR0EKDwDQrlzjsjfPdQ4QmcqPQE7qmQrwpu44eADqENLwHZwO8fw6p4TwM1wNRSfnsAMYMALbMEXrdL7gmQe+uDjNzEXsE0agDYPwYAArKB/7i7kaT4A2NYS0stZZFuiRe4ssIDmFL5gbM6ny+EsbRcFSCQSBCAbwcC+WV/OGY0GSyjZW2MZfJZAm89lT0AYJ0nNGRYXaU7CPAp0Wrh78Xn6g3UyOaXGjmhZPPz1tL4efjOyE7KFwHdw5pkFpCYjx88qgUHAcrEHdkqKNAmKB45gi6ypFJK/8v+pdnllg+U0bpn3LEQxwcGTeVi/hOMhXR2YRQGDKtjRruPBXpHWzWasGJt0CAnSUJ/0pE6qfb8mYJV1nKzGlNqWJRsF8vFpIo2IY+QXFsTy+VyIVYHjqdN4hCUxD7hbjHqkDIBApB8SXLjfh5Qt5JRXcBVYsAbT2UvE+DIaJDqdcxoVzbwu/c1MPLqSpxMNJZYyDrHJAD8hCfrqmdgpMuXw/H1dMmuG2v5T9Vv2B5WAjcTK9fscno9fntZeh7L0eNGtLjknsayLE/CBQWa1LYcWciNuil11l1e7ag7MesWENA5lbfT+bh/WYY8//zRAPBCkxDV65zRriDAhyQxWFjZXLLeRCebaKNRIdm89UYgsWeMG6Ln2wYS9i9j5AuxlqZZ2hgWmVxhjFvm+e2s0unuuHnxLCrmbauPoOhi1iDDphAmvouhu26njDbr5tZfR/lCvvC5TPizzl4Wb4wB84zAENXrmtEPnSGAsj7j/xJIkib5/+xdO2/juBPHAYtNtlkEuO0CXHONOqpi9QcWggB9gvw7Nwf3Mtk4tpEgQJA1kxTxCQEMpM8HPVOyXhQfojRUHkseNpd4LI7mx5nhcPiqP2yQGZ14I1DeEMu7p3wUehkyxkvzzWosmFmsi9qNinpWjcNaZFbWzcI2ua2bLXKn7posYS2pO9TV3ewqCzC4H7hYPOebawbrbb6MkulZ2yjKhfCtUqzKjXTI0rqH6GioYK1FNIcyDC9rKKfaUpQUuasxiOafIlMS4K9wdDngtNtOOZmebxi/et7wret5A4nvM0QGxYcXVt+/CEEKSEUcGX7exvPV8Ntzjw4AFNHw4yFaQEk3D3eTbSlKgjvKLgDE+suwCgAGXzbhZPrxGPlLPgsFpB4azQTjMHHdpebyDXaLwftgcgfw/oR7i9bKE4d0c7+axgXkG4IAXhuF33qkAMYWupjU/FfPNzt6wd7Wtt6kDBGL+4Cb52F6yx0A/QyeEIR17gPyxcQTuIB8MSCEWPqVAGcg/cx0k+m5+bMdZqEvFg2Edyx3ASMcgC95h3qAMsxdgGtNT4PtDkLLI30S4FwvLupFZnSiScAkCdZPufn3fLNRYr27ukewZuGOPa2te67KASCPaAPK8Hnt3AUkwYqBiHVuTgF0ams3t4TcHmXgiU4DPPC43TR6/y4KpvdWkJFMLNQgmesOrSAzIWpVdz/WDO82t7ZqK0QAIxUFORBrWkRR6QJu7lPnKs/TLwBiaVcCfK2+1360o/f5TyT3Nfw0wGm6/9WeXrK2+FJXiKzEahMEMlKkVqxZS+tGKu9tU3eoEqtFQiG73O1XdkFAHQFYK4oS0dAS0fAdIYqO/zG8e7l2nAkoJwJ1pqfBrKbqkgBnSFkn/4GQEskGeZodtbz7v6kQEVBpYsH1QGzOIWIp6g4H1K0gI0vWo8Vi9MYuCCgcwEdCtH/d48RiNLx3OwxIgzsKgaj2TIDzIoxD9c/yH6rra5ArapMchhNMAibB8qEY/LdZd967tqr+YpWiScjSupWsFXUrWIdqRG1Z9xSL4d3D0qKxygjASixUhQBvgCiyRnSgohyg3Dsd+c6C9Q0OTabXA9FzbQqglrLxW/2BQEYy8hQ7AZNgtaAsFFkL731sOmQrloYcqqRGcjIIosq6Q1ndVqzZbmFxeGvuAIYgij4Komg4omy3cdrzJbM9ZYPEQi1F0RwM+KV+pCxHE2pGEyK1wZT/m+JmrTS42pRgGN8MhRBilTWpydKnwVhL6x7CWqib0Zv+RzccI4BPjKgSMmR+MXbJHh2qfsp3BEIg+odyK+B3JC9infIvHclkd+s6BZAEt/iSydpB/mIhgFg6cmj98BuyFsiEXV72vsGhjADeoVhgrEc8zDC9d3e0EL8eAALR/6v3A/2NAApGri8ESIItxQz5AlMYptueLXZ0AL4oCkF8DdzMWdprgyHeUnk7wCmBqJ66vliD27/XNcgS0p5nuHsHYHQB1KUHqJIAo16RqA4F+QbSn7g+DCgNbr0OQhfab/umdwBm8zrEAKmzJAAFCXwVS4FOvyIshBj53/WHArn4UyAT6jYFkASPVMFa82ZIRwaQWkrGcHVjx6zDXa/0VeUAsBWitq31hoii0azJbuuoB0yCqxgCUeVSoLNOFQ1U2nVUmHTb3m0K4AACwgjLm0987x5kiVjahzFE3XaIasTCEGIVcuE+cwGFA7CW2r1YYIhCKMqlo60wPAkQQSCqWgp0rvEdWOvpG//nKYDEof2vNzTEctbS99b3nb3FMpJtWdvVjS3FsmWNCd30cNy5AyDOEcUfBVG5WLGr4zB4EgCNF4solgKdNBuv+Hd8rv5IILf/zCvPnK4CSNIXyrCcdfe9DWSlWLj7sF5qFWsMgGhVEYZgrRSL0EVqXMxeDgGgxCpe9LMheoBy6WRfAE8CEAhE5UuBvuDWI7guYm0aMnKaAkiCp4xh9ZsJL4ZbjY1kZKlYSC41UoOCLFlbIFrVL6kbW4mFpZ6zJLPMfIpDEQEMQBQ7RRTBIQqiKK56wSS4omggoq33/iI/DagtMtYVFZkQ7HA5JAeAIIQVzNHw9xbJyOppJGeNLFnrvoA0jDt1I7VYSC0WocY0QJkDcIwoskQUwSGqeDE7RPNMeOIqCTBEwwVFkS8F+nO0+fMUwGbpbBVAkiw3FA16MWQpltJOkGPPgyE8zzCxeNsZItcyAoBE1KVYQxAFEAuT+HXtYhDAtwOg8YqiOBXoHABB5DIFcBwAIISmN7VGKPhWrJ2LRYyDgIYD+ABivSFr5sYO0oMFIACxpFnAEwxQCHV3FkASXGNf3BbD+E3qAHyRGoKL23HzMTDE651Ic4AQhbpLASTBPkMWTaAuCBEymDzqYSPZQd39IUOmC10KB/A+xHoL1jYOYJG6cABrhiE8wBdTDvBYokhXS5dKYnd3gnHvh6NeL4Z5u0fUF14ibgM9G9PUb82CdJP9xlDmS137mQfLnOQBjxGYgnNP84giWRbw7Pic+HD1YUFokOtvl2RC9zOHAUAZ/kQNKbtvRkhEs4zebBa+LBabGw5GdOy91I2Z/0noQnt1IL8c1ENJWtahQNRNCJAGzxmRml7ZtoJ3qsjtppatBTyP2o9Vz4jmJtWe4g+SPbkMAEjFuhuIlFISTDPCb29cLdO3uKH8fZU0Xa6ub58XjCsux03RmGVTE/OJ7rPZ7wllwqF8fHphNIeyMjgVosRFCJAEt3wYLDG9YzN2bb1D4D8lWcCTtisp/pU/IxwpyFFV+AfE3Y0ASbKnpMEaC6yP5h9l0ct2FfjSLqvtS5xFBIuQlY1ZN+AiTWYeL3UIFKxu9yTLvWlbC0VEnUCZBNdHe466+i82Ztc8ars9keYAq0qbj5cVCjW2Ci7JZOVsJ9Qdt38N65w9xfyalvzi5sQrcpBfm368xPr6gRQhVBsyAVFCHwMfOGmg5OBcP7MMk6NxKBF1EQLwpUBUrf9K88BRu9OMu1nAr7KutaqzExI0w4Ka7G4nEF8CQRrRSIc1RzzO9tfT3tr+YeJXjsn1nsYkksZ3uGxqN0PXTwfl6oHm/VEVXksQ5VCC90F8KozI9R/jVlwgkAWz7u4IPovGF3c7gYopgEZEIuNOXx+nuq35QypuEDy+ZkSCHG614a0PAXpAebfJoVQoI3YXAjxJmzBqeXJz6WYB/wZxAPfOHMCeEqnCNpgvVt78DXq7epGrT3MU1WNXoIcyCdZ7jSXmiLqIppLgTss20jikZumcC3gaQTgAJ8ufjgGAOfpIJ7iQ6GOXA0IPJv3xIUBPleQzcgalhE+o8DtCASw1jsRzAb9BOID4de3sJAQD2Af7T7ze9lFbkwcg5j1BvhRBwJMBSuxiIoAvBQKwVfFcwD9AAgBHCSQ++WHqtvY+cO2ntqnZl269K+3nAczO9Ao+BNhnAA4gFG8H+f6ec4BGpHmv5ZW2J5bLjaEL8SFAb2dq6I1Jtod3APcQDqCzGBhmEmDr6CCUFYkNg48rb//98ynxW+VyPx2UK2MWAHpzXLkgZmS5EKcBfrzjHKBxsEWyZ6+xFnCaslexDwH6JlXvTZr5AO4AViwGMNYfDiYBqJscYDJbvs71CsvWXmEtItf1q16FsA8B+kK53BhUE35tbLqg420VC9MAIJMAdOEoA7A1udknr6+QEVXk6ESrzwjl5LoJlAUUpgFAJgEc5QBnplRLzNYzr642IdXaEFJ5l2oRAlBDWAycngbKAgqXhMNMAty7OQr10QcAU2eSvU+FCwG2sOvTUpM9DJoGgJkEuHOxFC+Z6UOe2CvrgKzKxocAU0AZRzHfIAfrcq4JQBZQuB/sR/m+Y9YBOtkLfJA31r6X11UfArxfKOP8jAxYF2AadQyYBjitelO9VmjJPzepE4DzSSs1a6+qw4auphDAz6zaQtnV0Zh3i9CLgfjGODvL5OTuF05bkwBxVU9RV+NnXIUGAlngCr/qKZe2SFgpWXtNHTp0jXSNyeM571d7hwCxxjziCDYy5l2iaM96yyzIglm3pgG+CI/WFUgfrchNvm4sMU+y6FjHZOUdgHWZ5dlrdWN6x2qRBeDLKjTmAT1GTfO8o7yvVjSm1KybhwJ9rYiVXTV8WtzwZk3ykRqXGrN1kAOcpYtMy9rtbcSfuN+6zbsRRWNG3rNaQPl07KMUOjqH3aiS8r3xYmvpLFNh1o1DgU6/F9+Pmw82vh/JyS0nEUcuFgLzgwC0rOP42qvpoKErX1BWISp4/Pxz71p7j1JJV0ebiGagN2bzxcBzsbVUrFvkllm3bgj98/itOG7X16yi+Wv5e/OjOVu5cAAPWaRh7Sbx8PuEAKrGLPTF+1arQbnKPLiSgp4KkObTAF1jjeu+utuYHbNu3hD6Ix5dIupgEoBfhTSX8Kp+I5nfBjg0C5AuMn2L+hCgr5Zem6wD1JXyxcDReIttzAOexgAOwEVfzPMdkZapP8Z+uBo9GtXIhwAgFhnBJlSLiGN8qecBv4E4APis8Wxm6KWAR1c+BHDv0z+nA6gyVfLCz6sB7RZ/QTiAeh7wC4QD+AU/CdALWK+ig9G9ywyNOvcDrJ42afClGeTpoPxMEACLbVwO8hWiOge3gplinSj71yvoCHh9CACfUVU4gD2oA1gRAIOd1/OA3yGqg582ngXL1/nEPH0I0PbqPgToh+TylU6oqenrTwCTrecBzyACgNclNKypIU3l09RjswCJIZ3sQ4DeHuDJoKqwW+UX2XiL/fkn5CxgnC0mT676/sl1jsVD3D8qjwzmkUKOAR4ApgHm9TzgHGIS4AH+AOQ10b7ZP/4ey7EQm0OAhT8bDKSzmgNOqabBvxDTAPPS/k/i8R4g+vUEPQmQGBcBbP0coOMQYO4it/s75lMiyB1BaXA7fghwsPkT0GUADmbk9SOdn64uIvMdV6P8z4cAPa1yo/Wl/2zS/9i7mt22dSzsAve26CYIbrPofjZ+BSEcEBcC9BTBAAT3du8miINkE4RBmkJFPQGMWWXlBx1Rv6RIHlLWcVAkR0VtWbRJ5fx854eHFJq0VriN4LTLvhAAowxAok8Z67BKvnLl0TsEgFt4nqUi8xOROYmSEbdc3CACQCQ4nlgIgFEGgD8jVywfYYpSlcrR80kSO331ptOAkFJKTHt1gTMPyD/OLAOQlj9+uUQuyi+qCECGh6b0FJILAGWAZIXs5AKgRFMCs2r1QkfHs52AE7QyAKnV8XUlU5cek1ziuAAAwstckguQmJl7ipQDY8YAIb9tEiicDrsBSFn/lzIQ4A///c34FSOrJgIIDS3lN0oBIrmultRYBK8RIFd3ROkUQl7uBaQ9VQywQhvrZxMexzUTav7i1AE1X/b8TPqaLXuMnpErrDkAZ2hFVYBo1kR5JKQnuMy31+QCJBHyWf3dy6hLUYYXA+j1gD5u5YGh+2ZLrfudwdtL/U+Hb7Wv7sVurP4Vey1gEwHI4ND5luanUV0Ai+Emh6v/W4q20kRWtjLrqEf9ihcD1FUHAfXIcy8zpavWsq0E+iQb2BrZ2e5VJjVvn7AfgPSo8mFke2idUsFPOr5ny+Ww2jIagh4XnkRIvbpSGoSzKZrjeckaa/zc8g9t3ZPR3FQCfTa9lrFmd73I3G3u3/UJ+pzcQEzf0IqKANDktrj6ZvLaInhLbXIBko1WK6O5S9EqlEIyWk0hQIBbMsDM3G1uKoE+SPjI3Y49X9ogP/zAFMrx/VSHoCIAXBcAZG7lb5ELkBZMQTrDsYRWFwIIOenw3c/fzROCP5qGHvixp7W/gu2RFzrLYSOZdWzXtAoAkdibb9w1HeZH9Uh4m+JL7YJIqp1oxPUyReMgO9zyIU8eRPemEuhEzj+0QuICwG4LGCVNShJIRGr/hF0ASS5AWgzwANKRrQu0GGCn8vlq21QCnWrnhEPf47FmqXbYNql1cUIj0361mOS+2PQepZ/guaLN1w5ypWyK5lj18qs2aoMVM9p82gNAd+VAJMGelW+mOQJ3w7XDQdL4ui7AP3t6BnMKku5UK6PcqyZYk+XDJJmjHGGtce+nAYB/DUDhRYzh4qiZ9xdz5N0ACgfgrKHJHh3LBQjymoKuiakr7tGeXO3QPIA7bSG5PEhx+4tNJdDZcEF/kfPm1fph12Q1G90i1wFdrK639h8yGpoiAGzJfVRegvdcFt/IBUiOAcbq0VFU58oLnIHut15uBYeWHrVuHw7E+8ucG98wzvrWcXN/grtiTNc5cMmtGzPvnSIAfBfgsnYBHIL3J1R5kRwDuMTrKCqx6lcrDfGph1+DDR0eaTCvnwtm6pfX4nIQUprXG1wAeFAyPDS5o0dyXrlL8IHVnFZfJUquRz2w69dqV8OvHobeDs3cp9bVq3462OfhQn84HyPNXF4hP/1QNQ7AeKjmM1UBHcUF2EpIEsgFSJLcq7wVXJ+2oPmu9dJDv3pIv6L6lelzBwBexR53EW4V3y5Rn3yy0X+d8cfYQ7NrqgJKSKMUE4neugAmwS1h4vkVZQGiZCzWSvo0pqMojqW80A8jc8fxK2tYcWsA+IPPP3ALAesMx0j8jINMUbIwTvry5fV2THFJdJ8su7+UDCuK3lsByXrtoHFSD70r4Mf53dSeDR4A6CoH6I/DXnn4Jj36za9NRcliiujeRURKSHIBErJzAtIUrIKZeheH+YZb1wKfIAAAaiGgfm61irgbJIdRQ/Rj/3ipkSD9NyvXBRiZL9qEJcF8XW9B4cWqBHpGAAB+ggMAuJKhM5wCRhsSw6gDsBdC7R+mQECSC0Ckj1IRdl85TgmLfjgQEgCcYgDAM6JTXiyfFOhu0AOBUiLRnEvWQkCyC7DeRvlMABBNYMFJABzp1euOEJJ3pzgAwNUvRJ2MpQA4maGoEDaTRBoCrh9WqRCgkZdcgPn+68sr+K8Vr7YIsbsGgC8YAIBolC+WBZgCwF55/CaF8LHTZMnU+i4VAqIugCQXIIH4O0h8GU4SoFjeMATF1fsCnyH0g1kJHE0BPFMEEIPQy70hHVu1frpImhOMuK/V8c8LrQiIOrCPr5AEiMw2pM4CnCEBALvBBIB7MLpR9KCaSdk8IaVS6/uksgCrjMUbAtA6zATbLI6fwqrMJILecg0AAgMAUB9+DqYABJWkx0k48uQlz9T6JgECYuBbz8FeUAAWIf+eHb0SIOInp9l/zoVeDIiBAIi5Ib2xGg/elFTrgiQwgqD3BgG790ztEiCggAvMRG3ACH/nJAEylEL2wg7zDkaAxeITRiUw4p7ATQZbhAWQUgDLCUos2n9ccsXiEADnlkQNwPSYoBgAPwRBVBtdlH3BiuXqms3Xf/6pAgAxr4s6s3mJCACwCCpaCRgj4JUUI5lrOaVEFAJg86V7yYgB0fwc7ENhVLK3c2ViLgJ8Wnzmwu5l9BFoFt3HDPHJxwZ+Cs/Q4oVSADH5M3IoNQU7CBBSQ8BtOv669Bd41ezvIgngUFBgTaW6SA3rcUCtPy/+dOz5AWUAiFPzepWDHNxXdyjannpacNgHAQ0IKP4ddEFrwRKA0RA5FQMli7DPY1ZrPAAQAZ/cwzZ/w5/tauAWD2yY6D8Jf3P/dr5GS8vphc7KGtp+pxRA1IO6U5b1F4Or1tDwxxMMALfM4fXwoTqjmcAUJ9YimfWOEzCvapQZ991wPDi0y8w/Fh+sH4ta20V31uu5CDULgbs8p1hu5DC0c2dUBZDuGprcEo3/XutvJIvXugDd70xJaBBF+3vEAziM6tDW1LyBorcoAPBcevrmQrjK01oAHzM/1NsB9ErdtfVyI7jvp1azlilMALhn3OjbHpr8z5QMVBf3e7kVhdA6CyD4IE22JFTvlIeNebE6CrNIZtnT8g4FAH4qj2Zyh1uGrfao9cfFR9Ed3VesC/1Fp7WDjOql/I7ml+tljjw4tLY+VAUQTQEGucXjDkDnAjQ/ahg8YgelAaMIsFMWybqzJiJDyQLqimM+1kwu+JhbnQPI/Wr9cXFiNhg+owiiwSAJ3XuJF5gb0ucbmmQvRr/VtQ2gI2by+J5UlQugTJfSkQT2QjuyxKxYyf0ijJYFrNcDhzQzMLTbyE4MADj4QMzMXSwbAQ6ORHVoUeXlEK/U9WV0hxC9IkCMQH4iiLx3LjyFuYCUBdQLPty+J+suEgCgbQdQLDc5A4Zi9EigCP2+gwCQhKCg/ArcnM8b5cImF0eWYs2k+aqrAYAjAMADHgDcgPpP2wFG008ZKHopdVQXOo4AOU6p2AgbCoiAKFNZet0WCgCcIvSCBwBVZFNCEcCaBG+W7S6T8k+r5WPJXwfx36wjBorxMwYA3GAAwCkOANxh6WWhZzePS7n3K3j6SHI+9bZWjGKA49mxHQYA3LLfBAAYanXOGswB3pHgzYgAkiUvBiRZTisyIv45pJ3/RlgRXCyvEABAni6+YHgASM88bUooKAd4rLgwGakr/zITFAPMyQJKMBMzP4eCAwDir8VfGLMAWKVh1V/FGZQDJMNzeAAlRJb8BDf9bBaI5eWONmYFDRmcRkVQmEpVEPRffFmczZ4FYCLDAwDQhFEOMEK91V4JBqYAV6ldPYBQwmhVdoR+O4h+COUsEVuZepwtzhBgJMPyzCPJk5LqAGfkhdiECKoSLzANKBQ9nxEW5F9hQWaJkzGxKOP3AQB2heYBgJMAJdUBHix1tQOVvp2iryR7+nziO8ZiqEyHlzsMAHiZDwDsNwMAPQkARZ60DA2UiQKaQmG8nFCwWSzvADBhItuTA3CoM8ZEOX8HHRwA+N08gCqIPQeGoQdTxUUCkLspezfrzjIwnqAJGZB8l5B6ZvNTKKgAwLqe2KjL+jMLNbO2GQ0AzD+q69v4qKgQOMHtbAjnYeZ/Jm2oPkpjNZ0NkiAoHIOOemOrkc6Y/Jg/n13ryrhv5ueWq7jdK/+6+Mrd7zto729lAh0Absxx2OjGaBIgkgKoEygtzTwB1OOUvN3q4smNAQx+lFQMmISfft2aXzpXu2jjvkN67vUL64YKAOxb1G+MWWBlCpTT3HSPBACr5VMpmOthdEaHJgFg8q2VCDOTiUlcamIAnyQ0V84rd4wOQJR/lo5pbfnRgDEGALh9Mz+3QmqtPQDZNbc3132vu9j6k12D0dydTBQtiGrNLGA/tHFjTOgkFgEAIBHNxHBNLw+3pj7RQ9swmwu2oDDKyMJJVCUcEe75MX8LnQoA6nyZ1XfnBrjc8qm1Pvu6YCaGMNb1ZWt6642PmvteBFoI8FwOwusAZ0lzz9EUwAjxB25NljldC+RIwiAolASIRbPKI8IMLYDqAGDEa2FpptXsZ+YiY7FDRL+BlwOojc4w8GhosjmRFADAqsnlp7rWFJIKSgJE9FOEVUnMf5KGfv7DOUs9REiLKw9g+JLwnXY/Ni8JcRwAWC73yrwLJozhMOZO3vaxHgDA4VYds0+jXrszmEea6g7VfkXrAVL1c6xb57MntOoBBItpZlit2yuLMGjAlt9qxgGAnmj+oRXVnsDEe8kAbk032EXnUvjZkQmqygDJtw47ZIKJDQYAzNVbxrIFQzgEFgBcQTJMs4CRoPMc9NgnL+DVSQWwR3pGS3o461iz22MBwMQDBQDQPIAbCjoPTwE8lCD23073ADYAHtdZReLHoSmZ2YUAaADQsTirThx2Z1ZrFmpFAgBdBhAemgQu5rD/6AXO5db5/pDnea1Ll9edoIjyv8QPGJBZUHsOcMgCABDRzGhzBQBGu+/r9efM15z1fWEBwMMP4b/R6nQ+zd58zDkm2fDxIPepGBmxUd9l8vYi7xOQdQBlKpNpYucXAtgeQM/rzMctFlJrnQOw9dlqtX6T+Zoz5BDgVymMoTMDd6pTKgOI5ADPw9w6aNa+9shcSWgv4dV/vVGG3CpX3bpTUf5vNgBsWgCwcDlzuTWokqvWuhJQNOiR2d8wzvrWcXN3kmVYAPBcstDQVAYQkzeDHy63DtmESlcCZCOmm4JS3hNDEog30p76ZH5CS2dozt2+x5pp2tOMucysAMBS6Kw5Rt/umJ65zbgAsCuZM3SHbBktBgat9V05QmeDW+z8sBqKYq88ctP4fhkrqRYw5qL/n73zyW1bZwK4gr4mzcYI8mXRI/gKFE28jaFTGATiAzhAFg9pkWyKviysCAgSuDC88MoH/UT9JSVyJJPjhyIdFmlVySETzsyPw+GQ0juP1ZZUzJ/ukrD5Uw2AmS5r3ds3mp7ZzDr/+rvcDNQ8rC/0MpsxEyj9p0gAWKigk1G5/lPzPU05IQC8prdOaeX6tvCxf0XkrqxbRaHNWaAyr75ns5mhwpUzri6Ct7YXAOjLemYM4kbTVrPOAdCxN6+ClQp8MABg/jzZgbQNttVbp3w8bbWmSq+6mioEAEgineGs6rrqXmhaaw0Ae+1jy205BQgtHAUAhdME6PAdKRXUe3f/zoDO8/LWk+k6c1bJGB3QAtPzV+pGMpudAgAMkJa93EQ37PcBwMMeAgDlAUEO5z+gOvidpqhePgGJ/W+KykAAeM+A3uNP/yUAnB7A7wWAJ4iYNOMcijkDAvJ7FU0yhBU6FxCcP0EACH03CA4AsDyAJxwAPHIIAJQI6N130nvn3l0GTSxoNwAkkudT9p16LwD7cADIAGclpURAaLj5AWqbZ7gumW5TKLRIRzT5BVCU9xSozurAgd8HACgpOqvpGtQ2AgDobwJ9d5t6ek+q2hnolJFI3Bb6M2MgPAMB8DALngLwHADXCByRjzgewDOgbYwygcG+ez/FUD3gWKRvJBIopAUBIH0PBgDC0M2uo2uEWv5d/wcAEJR4CvXdr1NMOIfCMneUmQVZKHePvLcIAECIAYr/RVcIeQAZEgDAsCmjrQBwtO4Ec7R8oglJRFIiAGiht8CqdroNBcATAgDYVXQVPo9g2Q8cAEALp3xGa05QOUhARL779gbWATmd0gjC09l3PDytBREAofVwpPhcMt3mAOCUdfL7GOpiujpkbvJz2hAMAsCd2JrbzFsoAB4lCgAm4Q5AcERTm8dyGm3QRxsmA45ThRIBmCCvDIKy0ytTHsBbaPXgKuPYMgkGQPHLIAHgDfIAaDMg6A/eQqON966dHMqpWyaM3tcOek/fM+bsOxVAXXwEAHCEJQ0NAE7753tacYL8QUA+zN/dXE23qUsmHCv6+1EBkDgDs5yxeeCrQVSiIUIGTw4ArqyrMTNmXFV/M/vj5jNYACg7TGu6bTDIjf0TAMDNjtM6jzP/gNNq+p729KG9wIn+ftiyyfomVV9kge9VUYeOWi3TIq2u3LS/J9Enh1EPfmt7cRu6pKEDwNW0pOMAhv1Bux6w9N0fAK9ppWY2+tOZQCMGNPugJryOae5Ipl83HxirO4/FeXTePGw+yY3RpK7ZuGF8lqW/cJYB7wqmaS1pPxidBwJqQw4ArsvNkFYIACpH06i7BcArpQJCU9rUUGHVZ00/huZQ1L4ZbJkDZs34eXRWfab84qz5r3GT9R40vwznDOeE+ES5TP2mqy86DwS2UxWr0ztPk1PApp1ipqmJoyOYlAAwBIBu51WXHAUA3bpNm3E0bdw8i85mxc/Tao3+iebf7i3tdmGcC5QI/SHrtKONagSAAQAwp7RY+uwPgNK14B3xV5cp7QaChFICQKdmO6DJfSgAth281D5zX1rMbdZn0WceXubfV1gA0KvV/0MAGAMAe2H+O6kVADhQMQFgDAAsGh0MgKRfO1AYt3+WfY4urfc1WIx4jJQTnhwyZ9MEAG8AsFkgAJyaQACAhfLLJpRKwREAkDFb5UfYbV4uo4twByCYZjoAXIUAMBQSBgbqH/4AeCQPAM8D0Ae0MJspswzCTfcCAwCcz1DSdFcAAMgDgO0UBsD6VADYEgD8AMBFGABUonGGYLkXUYQBAKRTQckDIACQBzAWAHuJYLhRFH1FqAbnSKAVAYCmAB8+BoDlAXy7FeGG+zUHwA0GAHBO6yEAnCIIKE61CiAIAP5TABkKgAcEu2U3SABAOhHkkDGKAaADgJYBPyQAnhAcAK4AcI0AEpwju5MNoGxLAkAIABICwAcDwE+EGODsOgfAFQYAMFJCVSow4GRsSKW8ARCUCnxquX/cyOxJAfADYxHgCgUASHNBGAC0GxAEwBqMAYRsBkohuRMAvAEQljwHI/8oAEwQQJJi7AYa8AAIACAABjz1oO3AbqHQdmBIn++AvsvCtgOXe4GCh+4JBgCEYOkbTocBWhzTgSBQ1z1KaKAOOxDEXfGODgSBysbpPYlCnxchANiGA0AUADjHWAbcIOwGUi4T0AQdCQYC4DQO2oCe0ZFg7rKAg9qBJnPcXiAnAc5zAJyFVpL/QdkMYPmdhBk0oUNBnV33NBNuAWUb/yCgS8+EGkDoUFAIAHBi2yZwC73dXRYuHbDfPcsBcFk6A9WXw1Vov6yPJcZmgMSWOdU0K+lYcKjrvmmJoT1peZ8/l+toZx5rqoKk9wIAMqmy9e3WEzZrTiq6dOoWRxouv6wBYIDC8i3CZpNCe/yAAYBtys2mdQ9gRsoGGKqRGd6Vljc8E9coJkgmx0G5ZzxhcXP7VgDBnbbuMGsFgC/a7fKi/VTn/9bH5fj8iAGA95Rb6q4AwOglFFDn5YbaiEd0pOVtqK2e9TSBvLJxAOhZi6hWZgIB8I2JowzV+mnxJQdAVJJBleqf+obuQoj2U9rj5hMY7+5WW9q42XTzg6lrmm+CEefMLS1vPquMc4smFMqkpE4vBwX7jgldhSsDK28EbqRUbwYUZt21nVikZTatP1b2H910Da5r6UKfVxrNNc1i5AIXAOg3XX9l9HpwOFjHNYGb0uKp/+vBZVfWdahIVbuhsCwEACl69Gz6MSx3rkjR7tl613jsTWuPbwoAXAugNPRwP1X/vrxjAOA55ZbK6x5bU9bZwPSp02Va33nmAq80kfTrVvNYEgkwSGfcbVdhAFh1bMVpme0Ny2N2XQDgShgOxPg621p57tAED88qn5U7m+Y4G44+aFlNX1+4U1re4lkVszKLOHhdLYnEDYCfet91rIeHZVGbgtHq5uMMtypXJgD8C0/vUHoMQuYL5Z37jgjeIedyYcZd7SvNyiAvHey757ApwBb2AMaVEgCT8IpE6JvOzAmny2cibfPsO2/xJBtQiSkRcPyMtmsx67BVgDcMAEwKAJy3N5QSSQl+j/0xRiqgimxKQNu2pG1gyFm6pSVvvdYBi1VAuxYUXymtzEJO2XvPRjXjCUuiXCSbbJxlQk/j8wIAZ+3D7qekSYTO4/K/5WcQMoFyJdbUrdu0QNlx+FFLkQkkpCEkXVrpox8AHmoky27dUuV/Uh4QBIDCS3dZjwyB52K6UqYyxjLBx2cFAC7b24VYS+F2BC7qm9pjvVqETCA13sSWn75sVqR0IsiAsy6c0hJ+ZwKpXcZCdMVRK4pY3lMaANR5mpeuyaO64CE5VCoPSFrrtlhmt+n2cZEJHEUXXWPrskM60dLW6X/wrP57HVKzaf0XWd6Tsg1NCqUUdmH6zZ/U2kJPkdr/phuyf6jcpRZbrG7EQXNmFfKR1rqlU1p9s5biogBA1EKi8u6M4aO4rdPDJE71jRgx+mS6SYXRtNSajvc03gzYqtRka0grt9WFRxBwkVPF1ARdUQRFZUBlXh2WHRXWhuE4KIlSrZjb6q5F35GW2bT2uLT/6Gtzu75o/5WNKWrf3nssUZQh0fWt/HE0L5ZmnHDfrVMhNeGY0op9svbzmeZ9JgxR64oiaBUQ9tL3sZDSnDa39rJJApbN1KqvEPa6RV9aRtNa+VoB4FpqFictFt6/1X0sMM4EUoubJgAMlZa0GQDquydIWl5B5zoGKPuqUMqckrPBzhMWgxI1AAL3Ar2/cIusxZDhGk/5dQWAKxlcBMaRfWozgOiqmcYYygUeiqC65eMzWq80r8IGAU4uGUjkJdB5L4F7gd4AyYwuVxUAJggAmCPM0HPH5gXqM8oFhnSiWAZwA+DNxwMwxpke82kRYOSczCaPsM0zoLDHlnhSAeBcIhTxhACAoT4jfYPmTxA9U6+gEzpT/qSo7DPYeSGj2QJ290aXMg8o+vIZAwByjZAI8AgRhhTOX+GkjI8GdDL9NosJyN7yeAcBsA5aBXxgMYLJnlUewCWGA4CwWS//vQCNo2XnIXrGuPKBHbJAHf4D5AFN08XyKSwNAMP+5WUFgAsMACCcCKACWXN3p2X3FAIYiAKi+k8qBAD5FIJigN7T9Dio8+Bg2fhS5QEVmUDhHsAbxqndB6DT5nvSOGhemNyBQ87xUdqBsCK9qQXm8X0mThQzXw2geazN1vYf3SDQZH44tdtEiQAhWnH0fiD1AuoYGMIoJDMQQAF6T6SbkO3zuZ3swgEwv2kAgJEIoJiGEMkeCJzQoOM9Zd8dOUdLYD9T7Oi9gPA0fX7CgPYGMw0AJRFAxgJjHfDVrXOx2m9AKgeFUAUYBNisFsfVBw0zsYzJH4On6SmgyoGHqf2znyNY7KQBwCeUZYDw8XkoEYA2n8Ddt4Ecw/i4Hegqlx2IyEq1F5gKPCGL3e7Ta9AiADQ5G18+NQD4C8MBQHhX/FAiAK0DBgUBjhLQavEDXgSkEMCA/wQJI2gJdWCyN9pk/2oA4J0IEOtQ2yJkAn1jgG+zpA3BcO+tdxA/d5skWRyjwSkUxqLEbKgslDsm3d03fwpdBURwAS4bAHyJQ81feQAYJ/Yk90ugPU5n0A3gExSkOGIZtZgBgNInWYDdB07Tl/uw84C2CIsAcfwlMtcB4xj+/AAMlnuMEeHO4GZsNC12lHsGKkbSBAFs0jrq0BZ1pi2kCillZQ1M02O39RQ5FP6rgIupEewx6o7thmsz3nYVMIqu49bU2vqaq/qi89j8XIxyLmi1o8XaNJ1AMeQalosoLmHujjiEQq0B2HSsuqKA7CA/d9JmPRWKw04DWO2XbsuMLRbcNt2aq7jWADCRej11bdUnY2Mo7jzW8IMwPpezG7NpDQA70rqBYWcuIWmNn3mqs0CUJvU1oVKyHeVkDAZkY3N0ruShei8ob75e77XWra56xlMqRVeYEw0An2T3W/VKLDd1NlSXGGGhZLpe2uqurmgZYKD3Vve7tuN60lL7NUYDoHAmeppQ/z2nF4MPOVBVnK4jhRIAQUlUKxXstZlHO9DHzqbbB+KTBoC/ypGi5ETcHTri5mn/cdw8xlkG+D97V7PTSq6Em8NFkA1C6Cx4BMRZ9c6npeysfoqIhR8giwRFQYItC9RXQgcioV6wug96Y/efu9suu6nKzGhS1gwHYnAl5arPX5XLbg1uXtGKzS4YQd37Z8tso8TFALlJYrstwUAxycmPf23Ttymq+77KanZeAcATCgDeDE3Oxp7ZX+it7qz1qq77PxYAzNr1v5v0tt1b1KHX3Tko1fq8X8O+VE96TzRu9+QYAKBeG1yzpb+NJe757VM1DX1LaFGfNwFD+nucy3unCZtXf29xmwCFc2zPbPVFt03OLAC4yMB2n8U09UVRG1avPO73UXD9ObzwbAb4OdBfGZl8sm3MaQ98HWAwlIWm4X9LlPoAH7n3Oev4ZWsXMEl+dgTC/77vwVGn1pp6LW/uFT0hiD32GCBzz2UchTIFWRkBkBxvDvBtaMbWfOA2AQzKD1zvHlyrnaYg7V3AJLnK8G1eUJwGeAGWnvuSs4AxMQAwRZ9xAPDmguEeE+MIIJgD9KvvHXcSIKNoVz0AuCQY8Z7gtJ4+RQlGGZwFhNVnVgekAvN8syphrOcIIJgDhFdKDAC8gugc2eRlDwBOKDCFgBia7AlkwJwFxATvcUeqNY+AkZ4jgIACt6AVS9yFgO8Fhbee9ABgRjEkQXmoxs4y4ywggkHBa/d/V5vQUwIXuqQYRnqOADAIij0J8Ke8J/DWWQ8ALkjCit8UxcB/CggAPtn0EAC6b+HwPQgiXAU0PQfYw88dKgcYmuHI1tsEqLcB0DHAK82lQADJQN2ldhSLzzscIYYvBtJLTIbPJB53DhDSIEp/+jYQiXdV1d8EoNkGoMkCQjuomeT0EzZHHEJpXQQUGIEvAwss0mAqdo6KY3UOkH4TgGYbYF4cPgvIJ4KDCoQCeGkoQI4hAJnik8DBGAp2lKe/Pwc42ASg2gbAm0YeCHEInj/yb48/XwoMBdhbbwFTzOKNpwAzBfEnMqYnyb67CUCxDSBp9of1RhZkvbucGQCsv0ApwF6FEAXIF9v3OQgBHIXhfBSZA9zQ5ABnAwC4yCQBAhBlASH4/M0ZaCxHDM7S9hOAAC4CCNswVAaUYesA7yUFAAw2Ab61DSBHP9HUAipIJCcBggrcQmAuTaQG3Q662Ov3+TMrHHNsIJhTgJg8rMzQdYDOafHMluf3RpsA7TaAhMeQ0i9QEtUCeihsLZqTAPEM1DeZofsodJT1/Ec6La0M5BC5VSkA6TNh3EZWy+8k7JmBXnk1AoBT8+YGv9n9JB0DWb2y+o1yhb+4O893hT247Iuedrn1cQJAU4fmnEyp8/ibQCalggBVjOeazwHFAnDfPdp/cZso+W3fO/pjt/8Pu0eWcDoCgLPah8dg0Qwtx90aMGTdJQ16UDwf7L1dwKyxW/3NOQkQVOGudM1Wq9EYL9YQ8PRHlQNLUF8bzsKGKGyXAhiZMLoMqOHH0u0eMvOIHljC2QgAzm3371mPEeXo6K//NUF/pSgFKi08k0OhnAQIa7DehhrNWaPRchXhxgYCdmXZsx5+PmNkEks63MN8RVGo/PZZaYf0jC2ldIu2O8zX8xEAJDeyjxpV6/7W3S37HQS1+roUSFmiBxIyPg4QavVWkXcypYy0Qg0BrwYCmr9TD49MAEL2+1Zklr7trwaDcUcBX9rBpdM9pFe0bQk3Y//XWUDZs5TOybPBS73unsByl2MD9EVeMdj2Qw5E62ojTgLE2uB4MuUUJt+DAA0cfCVTRJReZo2iB3OgCewXxnyXOr/gdD3YMwc+LK4cAHDqGSPru3/m+mTNi3qFoEkCAKIzvhMgJlIEJzO+nG8P6HkNAToBs12w7kME9kF53ENiyyiqo4DusWHPHPRejv3/4kxSNIKDInUSwNc4Dz2VArjahGTe/teWL6uixJ5jOxbVvxYHs15d46Eo3PTMwQDOKQamKBTX96koSASXooWZu70M+SZqwpNCKwjgs5gxuvqEsRd3EghcG+ObIweos4DKazS6Z9Srxt003rncFX7RWfnAG4EoCmC0WU5J5y0qCPhgAjCJpDtMGHdero2OFeyZAcd15gCT5NoyD+u7wZ9b3Y5eWX5tyJIAyiOan0sXRQHEeDItjU7M5y32Gl++cQYgjLxPCnAeiX0s6K7yDJfrVTMc4bdKXjsB4LL7LccQNpRA3SXFwwFeC+kXzZFoJAWQCpytiTt6CwbdKXrv+19rwsgUQL1D7vNMpQDRnSWoSycAnDW/PBigb0SDbjXoliRJgGr58oku+UaKCAqw+SrByZSTt/QWfAogQu9mjVYe91DZFpkCkMrnevVUK7jbmwNMkvPGWhrMaAGj8T5Htxp0kyQBdMGzX7SUgg+kRWcBvJMp1XzLRT3kWjdpeq3dTt+WCZcrjMZ1bOx3vZr/S5do/bplCc4cYJcFVKo/tnIYkbeb5DyQ4VE+0d9Yu46XAgCzJTmUOgAAvBjLlba+OxNGFlJpeiEhzzRu7hZtW4I7B5gkV70/HdhNx8K7PvPfoFsqiiTAs/2Wh6I5Bphii8BkZpzUo1b6onbRgSc2mFvi7gLQobHf9azXxqKt5qwDNLWA48XC1TozcvYS1OksFstVKSHRHAPEUIBVKaHJZApwgAhgrgCFi4cNOgXgdz1Ics+tTz0AMFMETdIkAT4LCcngW0G+RQGGViG5sIe0LWGVI32j2h4ncNGZBwAuJAUA6NMOJBuBkAyOAWIogIdH0YI1N0eQ7tM3ih138QXSRS88AJBcU1AAJSiOAzw+gLYr+EAQAQVQUrIeaSOATEAal7hNwMe5oPD/a5//J5c0MQDBvfH6WqVADMCGG0ylMAX4h0UAuxz1RIDXkmSFvvQCwMk/JgkQUKXiGIAgkmIq9RdHAGtU6mp5+/5BEgGceAHgnARgyocN+sYOQ6ZAIbwPEEUBAlEjUwDqCABMj+GMNqdJAahzLwAkNyQUgMI5TTGg4h2sg1MARlLCCOAtmLpeHAxeolN0N37/T65IAOCDYJMuqMyvDV8MhialTAFoEWB1wEVrGUzpRrYrAABOaZIAO4q16xk23DVfDhyZOIKtRjAFINP1UwopWhYoTQdqY6IJgDwFAICkFEiJOUV9SWhLlVeuKC0ughRgx4okigA+oSSdTFGnZMxNIyQMYAYAAEkSQMjyhSQGAHOe6Zyr2OKWpTI0W8ylaDS9+QJVjYsA9E0j6tApAKokAEWGTh8IAlOqa35EBUE2VSuSn7hOQwBeCykOlm4NLYgkKYBREkAI88X3seru4atEu/T5rvBDgFDFjksBJlEAz2wJVTAFIFH0oHatUnWjcIE8Jz8Acp/ruUT38f4UBICZ29nq0QYjCiV6wrpuihs7zD6AXzRvYE0xTAFNJlMAEjW7d+lq98DSYl0cn8a4nhOB7G4wBZAkAHYEoMXCJflBUg287TEqS7QgiKmOiQKIvt2MbZMpAIGa9xR9ZKM2LUZGAK9rGeF6IuC3QsD+n1z3V3LR/a1ofhDC3Wt1FzuSTfrd2jF2Kzrl68EncdNWgSONFiu+7Q+fA1iVfveoitcXmEnUWwwRrufrbl64DgDAaRe02I5fDWALEaJ5rZVuic22JOcBdNpDuEULoT74EUGR6dRac+7ZEmbbhhEAmwJcK9tG+84pdHUcqgzY4EuE641E1911byAFkCRng1Fr3iDal6xuG2sG3cXLgiAGeMyEY+yWyK53vHBFUoCPLmvk0mi5WnIagCDTArgH7tSVjuOiXE/5uht0OgsAQCJGTVUIoATU+t1qTVGms1fqWrpEN5+X04CxFEDZUznWqFwzBcAmrJTTRpufCtxiVWcYIlzP3a3a93ORBJMAg1W3/jC2mEG3GHdTnAjUdaxrh+j2RxqYOQrz/KzMxwUARqPlasMUAKXh985B24XYQtgPZNXKYrdWca43xAPbj5UIpQCS5FRQNJ1YJogBNg8lKCbjasDI9UkG5uuDKQDSUlNoIU5xlhqewFi/PA0CwIxEkCB5jmS7cnnNli8GIlGkEEwBcPp9AfWL5arLwPjxbRYEgOSGQg5NMaCuYgPF3BE8ivQoDHSxzdIABeDKagRBX67WCgQAHCHW2TBF4JbpTdj/kysaCkCRoNM32qxBnFnzTmA0BQjM1wNTAGyyyq9c3O0VpgyQxCuvIgDghCbYIGHn+gQEqNmCdwIjKcAjU4ADAgC8QKOLAPYRAM2yfBIBAOckkmg26fVNyLDd8r0g8WlqkByKdOLjwrl1un0OucMzEgBoIgAhziMAIPlJAzbpM00pwAccXPF1FrEU4IEpwOHiK9A/17jKeLII4O5njP8nP4j2Ad5IACCQBhT8qPBYTb4FEslMAb6r2VCGFZmp0ikGGp/8EQUAZzRJAJJDpvrZFvCH/+BioDgryh8f7uCojTdVvx1dqUB+FR0B0PjkWRQAXAgCvqGH2JKkAYP5Dy4GiqYAgTmbMwX4HrLCDoME1sXtJgDd0e0iCgCqamC8/1NcChCKf1KikqOjMNRNKJJkCnAQYEUuUXQRwHWc/5NUA6c69ZHnCwL9BnawU7nldYuIAmSsyunZVbM+A9CKPbGiE+E0AHAaCQAzGgaQkpDz/PY5BbT7iylAvCo3X3d/QQE3wyrpTnVOFwHMIgFgVA2cpiB3dPWSxQD6Zvs1KDrNHhdstlGmpPMpzrlMWzbFCDA5sLoTfo0KsUYWxYMRAOyYg+6bWP/XG4Hdn6apGDOc9kW3Oe1f/UUXA+wVkPZEp33RHLpGZpPyzWrtIKtpWr+YMgX4FgFI/RrdqxRZrT6MAGDX614ddqfyRzQAnPVH84/Zfx/97lSkJLVA5qSFPbYBAPuN7SkAm208BRjPVjeNKe+pfJ8AODV6h94DrHIMU1xv6Lf1d2fRAHDxSy/iac2wzf+p/W371ertvm9ihpQqBjAga4sevjFet2IpQIWl48lsNcplFZPa0mQAAI2i6emyigAmup6r+9dFNAAkV/UfWp+tG6n7yXrZ6m57TfhDEAMsHjsMdIvmjYBYa3r5cE5m8w0VazsyAgBoFJtVMRHAdNcbdcedBGxPBKZNqyAl7ThFarfux1634ejmX5I6XXOQpZMlhqKZAsQbbBdOpU6NagrAB6wnEYCx/XcaRTOq5jhcrOs53KMJAU4mAMB56miDdwB0t++FxjH1hUgB0Xd8IiCeUIKTKdb/Z+9adhtVgihJZDnZRBPrLuYTUNeKHZp1xC9cjdp/MMYLDJYt2dssvLIcLHnPj143YJ7dQEORmbmukpLYrphuDnUO1Q+6D6QAnQNzb7fQY2hgxjlbD+pJ3FMNATBmFoYhtQGSyUDNBdEmIV17Ac6rZiiZT/2AevlUA5jh0IdVHfPcHPqduTjT4b/xaiEpwAGnG3DfVlB4ppXttVKAJtWmdda68T9pnrfE/8AWwMbGoaL1qiUAL0gCgNQ4b4Ua7PDkUNh2gbItBYjFlKDswv9LK/+HroqTdzIMNXjREgDje/ItuP3K3xaOCZbcDdnboaOgmQDsWEvRVwVYUuO1C5RpCqC8mGCH5zVB2Ypjyn81PSw7HLxe1dJbaVFP6f6ux3/jEYpnUisiUQZpYeU3SPv3FZpCqqKvYbsxqRnQ4c51hbJ+MYvg2qG3NykJaL79b9OIBBU94i6woT0A4sbXk3pFN1iPmgIwqRwQpNICIPkLBffwXpAMiYoS1ou2V/6HSRLQGUr1xbxC+X50CMoG+psH/8p/afxn7+zBu63ErYye1Cv9BZhoCoBoA0B6PEhTw8Ixkx8ov83ckPwkdxOcPmVnfk4BVxdts/C8E5eHArcxeuMUoPFigg0xlKQBUvxMc3NarWzIWshSelgiARg0BhYvBWJpUc/KqVdy67YARBsgt5u2lH8Kbii6b/8fG9J04LjparUWbYXWaZd0dZEMNOWV6WVSXkyw7BU7HZwk4DGe6fp/UD8Zatpf7NDKbnO1IEw/GZ4ALOfXoO9NvZL7UVsAJtBkpWKa3NbKWyKhH9+3Em1VlArizsXOxz0Fa7MCnBIoGy+mDeHKO+5JRiu2+ThDCHYWc5Yi/ocnALULpUe90sXUbgEYz9/707/0brVD6gUQKQAUhFdeMRtWoe1dPnabLXVkK1OA6sWUR421Cq0USkoBzOV6s/u4nN/DnP6gpD+g9ABs3gdRL7fvz9oCYHyzBuQAxTYA0vNlohfAyhskDUULDQhXP3zvfq158LWeAqhyqgTKd/+esczM/8GuYIjn0jrEP0ICEE8CGEC93Pg3ff63tAG6G/O3GNOB497rrmVatg2Mr+7VQrtNAPaWBpTWHUOZW7DiDBLydzEbYcN1MQkAh4STHgLwjCQAaFMBpC2ilrJlMyOqAyhyt2pAFRTjrXrHBvmxQXVsUB1bVrQNbdOvkuElfSS/CFH4nYg2nJYGXvEkwPmX3fHarEcLwDC+4ZQtVgbDabrO90DWKen60SYA8+0PZhFQI9rwrq8eNzyV9WkBGMYDWjzuUBbtdOJ1ASi0EAQgWWWJgBrNEHq+HPMq0kjVeeglAM8MCwyk5TocsaglBReKAIhnggio0YwP32dxiajRvVoAog2AIwFoD+tjtor+1+HXKgCiHxAYITVaA2B4D6BYCxflbtBvDABzHACjQ/QWtp8hRRdCBkCNgD+8ASBudgFWfSY9BaBpLpCWhWekebkicyUFaJX8LgJgLs0TKcBI939vPXjyNF4XIP9u9LVHtJx0h5YCbP2AIqyZ/12aAGmPCinAGC0we4+QAGzfsZpoj70FAKsNAHirzYtprNR2baR/xwxAdAO8k5iOkQAchke7aKEhVcea9BYAA6sNwN7R1uxcmgeK2mYF6JYBkJiOZBjPv87NpYcV5v1bAIbxihWTV1CwHisTCyVTlDVmAB0FIBZTUgDkC4Dy/Lt49A2pPu7rAAF4KRyIJT+qcnI3q91WGAQe3vNkYoCUQZ+aaXvLbjbisTURVX9bfMQ6CoAQU5kCtNeM3RGiLV5WcDOA8BNnEcxCZ/fA03oZIADGLC2iSrhaDSqA1P4/RNxuwjE/VumpSoqW1ozJ6g2q02Ky02IVgJsxiVnSGbIOiHY8rTgDcLsKgICScfVpoSEKakR1jv07ENUIlJT/GDtiZ7M0hlLPmg3hv/FUExbGMsWR6qFUrhgE5zne0hIibIN6ntEo0qzuVpyWNIdJ3KBoM/coGupFMw1ElcdmGk2ApBVgB4inpQwUJaKgWTR8NaLlo9cCpQT96ojB//hhLehFvbrnaZAATHOpzk47/81Y/e3td/Utw9x0cmnu/NCu10S/ogNPq9+xFW5Aqihj3QVA3Gz8EJTHVhTN/hZEdf57aKBAAAekxW+2PgckRKeDBMCYQemojN1kiCUZWbkORS8rxSTg7t/pmBsvLNSqoehc16tuJj+tXEhZ3Q3VYzcWLTk2q1zV0rE1EFWfFgB/19iNQSxwHVXDCBdRaEKUjYoow0GUtQaKSP/9PU47Nx4DbEVUelo1RIe1AAzjIT9aEZO0FsXCWOVTVsaQv2Pu3uc45voUcuhSNCtEgqRitdO6HUfqBvm3QV000yhaC9GCZFTcegLgmMvLKtApWhdRaAO8dlq/EVFF0S2BwoCHJ6xHXhwxBoh0Wg8DBeBZemDlZbhVBGpuzJHARCXNj/cQQK9mJTfGaTV/G/CKZhpFawlADOXBjzRO6/4QbfVCCEesvVSW5iEELESfBwqA8VgWuv4BEvjrOaoCOObmHAbQv2Yop/UnFq0pAObcMbenPAn4sxFlv6voBi8E4XmPtolCPAaIc1rW41D+GxOGZIC0NFg5CfAjDoxsmAAkSYAXcSAs+0Q2i/wj3saU4jlAtLpNBguA8Q+aAHjYe3WInoBPmyRguADEUB7fCco+9A/hskXcSlE8B4h0GRb/DOe/8YQGVXBA33BS7NJ0AYrbwQIQQ7m92FFAWYAO+4FH7IS6k6pjboBj1e8JQQCmaGghbRRahmspJOBHFDCK22ECkED56YcEZfebfxDZMf1RR7gvEdoFmCIIgDHDC8zdCHtOC/C3Ry8gDRgoAIkErD8Iys7sD7zjBnkHVbEWKFoCMMPgfzIVAAWy6DTKpvPiAiwPFz+IAurGGiIAiQQ4uwRKRlg2ZP5XhPzTYYm+gbJjHrESAD54EkA6FeAND7jNKAoQx625Plw8CKMgDt0xgvdv4QP0F4AblLvPcaHERRS+kPkALAiikHmXw1qM2WP3a5trH20M4O0ZRQDiqQBIKcDFHGm32XksxMvNx+XsQxhFYRjcscF6AM7zWAOcBMrg3qEsWSgii/ne5WMfY4S/Bb0jVrtAohvCJIB0VQDE3HQ7H22/acdJRmLX+8Pxcjp7nn+35q2HCe2coJSh6p1Pl+Nht07DzRklhj28SQAvSAKA1Q3IGUSf5qgbzjtLx8yujLO8W0OCsvCGzMmGSwU24+yXjpkA8BkW//G6ARn3R0wBchVdOmMXch+WQDknIL4qtgqPAQ23BzQBQOoG5IxDdDSJm2RkyseA0DrcsLoA48VBdZmu/Djw13R3JiNTJBhnNAFgr3j8N6acM8arvM4/qLm5wk0pABmZugfgENTI1Zd6fIooAMaM14susJzL3Kzu5pyJFIAalWRk7QkA5ypuKanHkWcB5g8FF4tLfyuYziv1Ljk4RB+UApCRKRKAEq157S7anXoTVAF4fiuk8bxI6MwKlcvrUXNzFnhrEgAyMlUCUGRZSrHu1MuyhjcD156qZK5YFzdLToZSADIyWQKwC1iZPCyjvy714AlZAKa3gxeKyyuXC1alghV31gtAl5uMTJIASG6brBf1psgCYHzjEmO8h1EKQEam6gHozKJG789v2Pw3JhzNaC4AGZkkAYgYGscm6AJgzGqFuD0rx2guABlZLQEIu1OojXozfP4bD3jVoxSAjGyUBCCl3sMIAvD8xl01s4Urc7vNbkoByMhqCUDUiVtd3AzzMYDCSGBa1K1At1iDvCZu8spVu10e+FtKAcjIbjZ3ll7ECtyqskePek9j8N+YpsVlFcwrVax1Rn6J201fUApARiZJAEo0urGn+mET9RJtmI4iAMZjUYZuv92ybN2qXPRW3defxTulAGRkhQQg7MKtbtR7HIf/xsut3PQvl1axRH2Vm0UXSgHIyG4JwEfSAJCyp0CebtR7GUkAjFmlbq68zm5dANL/5/lXx1ogmIzsr+O/s/Z/yUjEVdxqpN5sLP4bE1U9qmmJy9UykBgbaY8AMrK/MAE43hIAOcMkPG+g3mQ0ATDeXETbkwKQkYkEYOsHeLx6G4//xgNeNSkFICNLE4CLKgHoQ6yHEQXgGTMFCA+kAGRkjrlhC8QE4HlEATCeMFMAb0kCQEYCYJ4wE4CnMfmPmgLwf+mxYDLiv7lDvP+PnAAYxitiXX/SM0FkJADOOeJ4nHodl//G1MVsBNCEYLK7TwAOiPx33enIAiDmA+PJlU0Tgsnu2sQk4F8uWhuAPY7Nf+MFr7Yuj2hCMNmdJwBH1ATgZXQBML6hVXbhLn7SbCCyu+4A2Po/8ej/69v4/DdeXMSBgOhMbQCye04ALn9bAlB7JGixqLxalBoJNXcpBXAjmg1Edsf836vZEX+4aHaXX/2cfQX/80eCEqY3MbzNvXD/paFAsjtuAYghwIWSPK5KABTUm3yJABizWmVvHywWJdmqpgbVM12IRgANBZLdqS3NQ9RADwm3Gt2Lr0kAshRgUa5S5e9C7s7fpq9+wYZSALL7vP+v/V9uIz1qHzdS74sSAJEC3OqQ1SSxpC6ZY1F1Z/+RuRecngoku9cegGQIsEyeEj3q3FJT7z/2rm61cZ2LKgmlKbTwpU9Rzvcc6V2vBAhxentAWHaBQxmmML0t0Ksyw0DvDA0wr3liy/q1nZ9WiX+y1py4trZzsMRea29tyw4/VgJAyFl1FZrEznVbmluOO9dda15vUQcETpP/3/+y9EhTl+neX4dbabqBekdLAMoqgLk4/2q9/Sw0Zw2NWfFU4D38ATg5Afi5ymrs8eiRBYzxzEHTEROAIgXwrqqORmvWbM5QBwROkf+vq2wP9mw1HzEBcFOAbOMVB+asyZxxvCAUODXc3357XGWb+b4Pt46aAJQpQDxkqAMCp5cA/FplMVl01ATASQGiAHVA4NT4/xyV/kdOAFQKwIsPT6ut2guvaydztsJ6QOC0BOD29ypLd6FHo7VOvSMnAEUK0HrN3F5emzUwZ6tfSAGAU0oAXlYZ30oPvhN7ukgAihSAhxemrzoQgJo5Dc3rf/iVAOCU4v/To3TpYQnRRI+6ucatoycAugrgXq+6Gr3ZZK7lOFnxXDAWAwCnkgC8lxVAhx4VO3x61Mjjmt0vHz8BIOSC61Dvh3iuG+yhMXNl9c1lT7MVXhEMnAz/X2Ua0MMhT0iPgFvWbLl10YEAkP+p6/YvimuaW9HiTlbA3QZzWCiA/P8TFAA4jQnAt39XWQM9eCs9msz24CgvAmpIAZwr4n6SUoM/P6ibOcdiAOBkEoBfBf99euxCHkcTfHMnCQAhU85b2Lw/Up5iMQBwGvx//hRFWpFNu+E/OY/ZizRlj3hJODB6FC8CDxKAr+K8IwFoSwE+xX/J09X7zQMcBBg3Hm7eovI/7SwBIOR8EVXIOCYBwPgnAN//llFZs+gsASBkFnUOkGJFMDB6Abj9vYpaAvh71h3/yTxuCpCt8EtBwMgTgLfIBYBD/xzwZkxipgDrD8UkABj3BOCvuBOAbEI6xVXMMiBPKSYBwJjz/9gTAH7VLf/JWbSeyLSQAEwCgHFPACKvATjrWADIdSz+c8mLTYJJADBa/j9ncScAnTwF1PBMUAT6VxqQ0kcsBwJGifvbh7gTAMnlRecCEGs1UJkBFAqw+onlQAAmADth2j3/o6wGktV/xSbNMQkAxjkB4HEnAGmXa4AaVgNJ6cRyfShlYPYPpaz4L7UIcPaBB4OB8fG/eAYgbfT/BnZUxGgzK4Oc9YH/ajWQbNM2n+fNZqMcqgxQvB0IDgOMLQF4z9NN9OBb6FGfMHe7BshdDaQvMZCtoH/1zlYt5kClAil+KggYH/9fV23+30oP7tPDN0s5IT3BtXtppjv+FXu9DMwyOIuleEUoMLIJwNMjLR29hR68nR41ElUT5uu+8L+4FVhekf6YS5TulUvpnOWZpWdaNyT4vVBgZAnAz7yqctf9nwf+75lDkykA9OEWoLkVKH2oqw+hBLBm1c3Ol3mOVwMAo+L/y4prV29mxxby+GYuuZz2h//lrcCNPTBX3dy/2pfxagBgVPx/zpiK883+z5vJU2eM3e/HLUB9I2DyCRXbZOb04+keCgCMpADw8O+KR6RHsZmQPmF+JeOC579vHlAGAMaAh5v3nEcmyBXpF84i909m+RvKAMA4JgCvq9j04Gc9EwCnDsj0X7axC8bcetoPlAGAMfD/6YPydv/fQo9m67Rv/J+fL5i5bhZ0o9gqA2vqZWmudZrjDYHACHB/e/s757Jy9Vb/b6WHsbpmdk56h5m97HpnKl1gsqEz/rhYM8/xXCAwggLAW86Z9fOd/d+0s7p5RnqIhU3q13uMaelSe27Obxods+2laeT5CxQAGHwBgAY83tX/K70IBKPY68tDAEEdkCloAZBB/lIkAE63g+SHOd82ZpQBgOEXABKuPbzV/xU16v7fQo8z0ktMNfvNn1Dq/GbTKJ3zvL8oAwDD5v/tQ1EAkK6r700PFtAjnfaT/+R8Ucmco1g7ofUbRRkAAgAMuADwnvMdXH0vxizOeyoAZLKN5/vqAuM5VgMAQy4AJHu7/VZaTEhvcc1id5ZRlAGAwfL/+0cSm//sur/8JxexO8t4gheEAQPl/0PxCEDkiCjpRY8FgMziK0D++wGFQGAMBYAoCjDrM//JfBF5BlAoAN4NAAyS/y959Py/p0sA6osBIoFKKuXqBZMAYHgFgB+MyugZ8RnpOaaRFYBJJjheEQgMjv9PH3cyNhn4tO/814sB4tF//bl7xNtBgEFBPQIUPf73dwnAzosB9qJ/pQA8xy8FACgA9noJgMUliysBpQKgEAgMrADI4uNyCPyPOAkoyV9sJFviwUBgWAVAdpITgJiTAGolgFGJFYHAYPh/iBWAjE3IQHAZN/6XpYA7rAgEBsL/24c/8VcAMH45FP7HmgSUkV/rgMz/YEUgMIwE4OcBCoCDmQCYSQClduvtuQZKNdOD86htVHsSjwYDwygAvuX7+T9r93/HPCEDwmVTp1pHhNGWAVPRX+/g0WBgCPH/Zbk9qO1KD2u4HBL/y0lAcd26U6aHbqNjZs1mlf1TXQ1YYk0w0P8bAJIyyhr8vwxpzf6/gR6VdUgTgGoSENK62trdwOycQx1RtE0sYbgVAAzgBkCzg+/v/yYMUjoZFv/n5NJ0xh0Cd9c2KWlsNdvdu4/vUACgz/z/9ieXrut6LsyaHJzu4P9yWBMANQmgIZjuZt3Q0syCA5n/+QYFAPqK8gkASVvB6CcxtAlAOQloG4TNo6BnStVgMf+gfD0IfjMU6OsNgHcd/xn9tP9bnzebCRkgpvTTYG4G4B0UNwPxq8FAT/n/lrOvBnv7bbuZDpH/ZL5o0rIdNszN/5knBYzK/BduBgL95P/LsnJgzd0vEaDaMNr3twC1vh2oQct22AT5v58IUEb/wXNBQC/5/0oT5tWv2CcZ4Dh+sXNGBopp1SlRy2xY2agPRT3YO8fFt4WrjckrFADoH/+f08R1U+XWOm4JaiTBurjj7CK0alIINh0q/8n8SidCRgkM3QWzLHeL/cJqgrBpVNlc6QhL5A8oANAvFAsAlsyQ2cQ3G9TXzcL1fH2mjfhCB0tFFLWlV/PBCgC50MFbUK/rTqwXJb2Z03V34KrvmYxB6QOWAwC94/+3PzmjtYRXB7Rwkis0AYTxakEtIahSgNL/L8iAMXPyG1F1yBxafhcfFfNFeQ6jOgcohZMJqvYqCWH5I54NBvrE/+JHQJmJVsbrhd4a3xZMx33BnPhGVfQ3KbLNBmZk0LhUXaNl30oq2/RHjQqljFUj5MwHhNUE5ihEZcKCIKBf/L/5mTOaOL7NROXEXrxjrvcrH68CnJkba+qX1KADXALYtiBQ97LqdTAeRjH1P60bVTok7LAVBxK/FwT0Bve3N+9l/E+sj1acr6K6sL4sqJUGO11gwuQA5oyhLgGs3Qs0nHbzfpMAWCk0pqpcEoyGO3KCFW8HwIIgoB83AEr+Jzau+zQXzjzXBEFqOVGnh94kZ2TwmFKX1R7t3RKAw3c7BHYk3FYlD/k7FADoB//fckVXJ7VnjVLgebTVADe+mVhYHE7JCHDlJv0e7d0gHzBe+DrhjJYZJrwqHOgH/19ySqsEwOezT/fQoYVDgiDQqa0c8h3AehlAWI773fcqgmFi4Amm34o3BAF94P/rXeK4qHAdPYhaDX+Flwr44W/4BQDzXKAQ6lPrr+qstnqiqIYpsWbhzQUEFADoBf+ThFL9Mcx26lXC8/8aB5SXJ8EEgA7vJSBbygBqgmS57oX6pPwYs6uSifPRg6W/h58LAbrm/w92Z+//qXAl1p+EJrUqYGI82ItzlZsnNAiU07Hwv3gukJYCmYhEqJEQOuQnVddLCa3MWhjLxirwl4MnyrNoqZflMOGxAKBb/j9nS83/MgMoXVR5tHbwKoxVZqFLhYroSaUMiXXwyryYj0YAyIUwWZLa6EgulC5YqzYXe1oCauZKGUoVgAIAXfL/Y8nafVQ7uGvW5+g8QJ/qfrkMhhdkRJj43dcQSWP3HTQMbbmj/95BAYCuUDwAlLNmH6W+gzf6f5EOaFPN/ydkVJiWY0Jr5A4I3WL2210rvWN4NBDojv+0xUfpBg/e4uAlpuPi/3x+RT89FhvNdImfDQU6jP9fd+FETWhdsKs5GRkuFslhQJccOQDQBf8fc3ogp15ckNFhkhxMAVIoAHB0/j8djv9iQkaI6cEUIP94hgIAR+c/i8n5ERcAzEMBTf0W4U6jdaNZMCgA0EH8F7v76FazY11ez8cpAOeLpFzqIPyBE4luFE3mpMnsDqYocwDMAoBj5/97+Kg1Nzh4se98eSyPADS8G6AuidVgWINnFjWDp5i2ieaoAwDHwoOu/4V03uijNV0IzGb3jIwWs6DTRi+tQgbmJGn6BGK7/tB/cC8AOBr/Pxz+7+yjrqPXzPasGRkxLsNR0WMovEM/YVLwzP5hAbpkWBMIHI3/23w0afDRJBEt/m936OWY+U/mV06X7cgoBRB+s6oO1M9MRFJvggIAR43/wslem3y0scl33Ub/v5qPWwDOF6IJyc6N7Qa6xHMBwOH5/1zG/20+upfrWoy3AGgKgeJgoEs8HQwclf/RcUZGj9kBFeAObwgBDsv/H/yQ/J+RE8D0y8N015pg3S3f8K5g4HD8f6VL+jUf3YTpKfB/XhYC/2Pv6nkT6YFwjtPpclFSvP+CwuxPuM50rlJck8KFLa2uoDpFiZQUbihSISQkOiQa/uaL99Pe9S67sF+wz0TwLvtgXt3MPOPxjA3VdcVY6dtt+C/brab4xRBIS/xfMif/a/moe/Tx8XzjBUBjR2BeK6xIKwUKZo5X4bP+vQBEAEjjcvSqlWR/L/PRMvj2C4BJIZCx8J9vMFdfpo9QtYaOMnBWgxEU3PLWL4gAkDb4v2OX+WhmsA2PoQCYHA02VMB85ic6MW5H6mUmYI5yw7oUuFsv8BUhkMb5v935fiUnZL7tyaZ32g7uJ6jPvt2NSCZmJEy0k760btqqZWm+kIPDp+fdBr8dDGmW/9OA/w35qO+AJ3ejksdMWLR0EQdGh3qjRzZgRFfRi+fd4R0RANIk/xfr3bPDR/1iH2XMOcflHDy88zgu/t/dPzFmpD9OMXXoAFgWNq52/96wIQDSXPn//RDyv8BTK/qoz3z3aH8sDQCzFcBaFB9fEABpkP/6+G/hFNWAjKcBkMqvNgMA+ytwMADSFP8/9mXz/+VCf92NUL61GgF8SrElCNII/7/+tMv/cTUAjFMB7eYAFFuCIE20/5ZU+q266ve7kcqEtSveeo5mAORC/q92tF3+T8bK/7v7x5YjgN4QgEIA5IL233y9a9dHnx/v78YbAZ7ajgAHtAMhFyz/Xze7dqd/9jRi/rfcDKTHP7QDIZe0/w4t81+OsQFoNQPbjQCMCX+JUiDk7PZfu/yn//26G7n8aJX/lPl0t5qiFAg5p/zvi1b5Txn9cTd6+RZM1O1FAMbUGqVASO3y33Tbdvl/tBsAOtoOQMMyAHtWh3dEAEg9/r+2Xf5nlH0H+8u2A+jZm1Ln7eSaFgARGuYA+OlAyEXlP0pZGz46AffNs8E5TdLMjeQVjfSYgfP8j94rfZQCIbWW/19G+Y8W0rnUR1m5j9LRnQAu3xCUDaM0ja3BPE7zaBamxTDT+4JRCoRUXP6vqPCp5UcOJ2QuJzzhowb8eA/mpxuCIjVRW+tZXaZcpy5Vlw1maoNCAKRS+r9Y72g+56SX+6iB+k/gv7kh6CnUjRkraayuWOzp3gVnBsdwEBuCrwjAbwZAKiz/Fcv5EXM54QU++vQTrLe3BFIzQCaKs3MoA87H4vxgaqdvO385fcEyAFJh+V/iR5YTnumj9D/wPxsBHqhLTDNcCjO52+L7giGnlv+EOf2oASdM3vIA/js2BTt0R+vIyXczhh0BkFL+v+rlf7Nel3+3xAZg56Zg2r74u/0X+oEQp7wspp96+d++G2IDcG8RgO4kjgZACtL/5Z9dB/QH/wuPBeRUJZML6VCkrAhL441M7tAPhLj4v9juBCv3Ixeda/soDgBUjACyQOMaKDGIQ/fUeKNkSvcDkQRAzPR/rrt/lJVzmFZHi4MG+F8WAZLJWspo4jZu6Dsy0W94mYHNFwZsDfZ3DMsASL77x3JelvqR0wlj2Omj0u2j4H/50UArsMY6jPWYScbqwCbK5A4nhCGpLML0P+soph85vOwsH8UBwFMRQDrm81gsnedgW+elMJYBEHP61+l/sOQs9CNZ5GZ1fJSC/1UigKHJ3GWocxuNr2n2ffElzX8M21EsAyBJ9X/GqOEfBX4ka8I5H6Xgf50IIKOQ7OC6KU4jZDWftdHxT58OwtkApP/67E+Y/js9rojMsRsV+Ch1jQb/Kx0N/E5pMZ/TGd2NSudg6oCp2n8hCUD6//FPSVrmKDk6m1lnDR/F/F9VJkWht4TvZ8CMkO0CtcBxT//TFfPYST+ip+AqTogvADovArQnTKrDJ2qBY57+3zdK0G68DfwfXgSQbOejFjjm6t9eMQn+jzcCcCrU5g1JwAjlJTj6R8D/4fcCWk4C1H45RSVghNP/11515WSo/w85Aojd+h1JwNj4v9gKj4H/iABa0BAc3fT/cVCSgv+IAFoE87z1K5KA8TT/5lvZ2fQvwP8ryAHCJACVgNFM/4Ji/T98+dZNhOa6EuARJAFjoL8++Ue97uiP87+XRQDRXQxAJQDTP/g/xhyAR+0Az0M74Panf9nd9C+kAP8vlB9ai1KK8kygHBanYMkljyoBSyQBN937/1dW/D/tKHVhfP/n5RHgIaNiUbQsKLSPKILNO1y/oJ63ecPPB90m/efT160Ipv+LHMWChdsLQx+lD+B/A/LrIVJrqHkhkhCQmiKAs9ZJrq3Bp2D1ZzXHOuAmp//lXomEohc7Si4e5OAH/P5HI/LzIadcU88x5ASS2OAG7MHBM+X6iCDWATdH/7eN59EGHSV5lk5YSPz+V2MR4ClSq2U+kazYYq3bBohhkR1cDuskgG7REbyx7H+++qMSsro9QZY5inD7kcMJYxi//9toBBCxMUQcAgzOCgNODZFS2kRT2DlYBKcDwo4gvi/sNmQR9P4IPddRRML1qn50fAb/m5T7xyQWC5kxhKF50zp5tDIcFwOxDriR6f99LWY2RQ1bX+Qowg1L8XgP1jYcAVyStVctuAyVUj2vFlgH3AL9w+Jfxtayth/V8DIuwf/GZSLOFHneMErUP308ACHgiuUlzP518a9Twdd/tCDfOzaikOE6ACeErrn2/76VSspuHYfj+E8724I7jwBC+egHXHP2v1jF2X+Xgu2/rW0KTGIsT5/tqzPgDBq+Dm9SooLNwQgB10f/Y+b2dVCedHsCr+kovMhRRGYwtv+1uikwMYbbStyRj3GHoZ2xwAUL6anDB0oBV7nzZ+3NpOTC6Si8pqOIIkfJRhJs/2t/Q0Co6Vjnqe6tOd2CLdSGhRuOB3NBlVijJXiFi3+mhGzfUbj92Wj/t98O5FzwSGIjRFepCTNwarYMbAw2YWEOlkI9b18RAq5t8U8k5wWOIlpxlOMz2n9tB4D7STYaJ5YyDWHBvBhOzWzBmc+WuhSAI0LX0/kPF/9FjpJ6RVVHEdUcRUzA/w7agWkCYEvB7XMk+1FBKeAL1cDroP/HxptJ0axHFDqK+f9A+6+bdmDGBsKR6FWBhY1ayURusJAzb/OBEDD80v/bmgetvxz/M7au7ii8zFHS7JOj/ddhM6B7EUKJ9ScaAsOm//vWV1z24R8o/3fZDOjDwlxyxbZvCAHDpf9rpvbX4fSA8n+3zQDeTwgg6s/2HSFgeKK/xk2X/r1K9CfHv2YF5f+OZRKbkoSPwKrcuJmDeR52ouWw9NR+9YoQMED6Lx30r+oJJ+FCRwkeBKd/eigFEtsUx0doI/PZMl8BTPIwyX92DIg4BKAcOKR9P4vlPzWTOWvxcmM24CjBNcp/PciPh3wOEFkmY9MS2Az8CcyL4WAwQsDw6H9QM8ErG5OkxnTDdRxFYvd/j6XA0DDRsxmczSvjPRZsDTZha7ANB08CIWBo9I+mb4e1HMZs1FFQ/uuvFBibJDKLbdHUYsSEDNganD6IPTiF40KDfjFDCBjK2t+kf86Y3G3Muo7CixwF5b9+dwWmdk2JawjP36qMZmEePaJXQoeAd4SAfnf9aforY/KuZsy8q5zrKNj913chIEvRRqTSB3HuIQT0S3/d959x0Y59KwiW/wMoBHRp8FwImKm93hqEENAH/d8D+jdq25ofhuV//3UAXQjoT3QW4G8/EQK6p//btnH61xUs/wdSCOg7BND1xxR7g7qr/B0V/bl9Vl6/9Mfyf5iFgB5CAFHk8DVHCOhk8tff0vyxkX3TX2D5f22FgHZDwOywxA7hTui/WB68vumP5f/AZEJI3zFAqf02aAkgBrRd+Fekb/pzfPfPwOTbQ/8hYKZ8FANaZf8QKn9aHrD5f3Dy64n0HwI8RYKVALKANug//9pINQD6kyd898cQG4K9LwPCYoDar96miAHNsj/o+h9m/ef+WpD+D3UZQMgQYsBMsWAlgBDQYO7/ud5HW357F6T/WAacXAnMDnqPMKoBDZT9deFveSCDyP2R/g99W+CEDEL0SuAZaUBDk/92CHV/pP/oBtRdCXhIAy7e8nOc/PlQJn9U/7EMqFsQ9Nd6h+AcMeCsut/0Q6/8vaHQH5t/sCmobgz4rWZ7fVYI+4Pq7fbXk//b6uANZ/JH+n898uOBDCcGEKXkYRkuBV7A7eqp/4YNZ+WvDYm9/9cjPx/JgEIA95Tar79eEQOqsn/xoet+vwc0+RPyiPT/muQ7IYOKATO9FPhYoCR4uuenq/7DSv214OgvaoENdAWCcgBiQEnZ77jw52pGBkZ/NP+vcE/AhAwtBBClyGGFkmAZ++WgFv6o/qEW2HgM4GEMwBahPPvpkHp+afMf1T8kAc2WBNMYMPog8BKq4HOo7Mf0f9Xy7YEMNAaQQ1gTHPUeoegf/xFk/oNkP/b+oSHY2lrAi3qDL+OMASH7F1/bA+mc/d7xD82/sSQBXtbY+kZwM7nIw6QITm9eBgdbhNR+s3ybji8RiP6578v1fhayv7JGSS1jXmYtTP+3UAg4JgGeFtPUsc9EXpCDTVewYPMjDNjx2RVgzslMKRotBqaLcVQE5sFen+n8mPj7Ku74WSojZRp1WsurZa2KxsT0f2tJQPyc/DcO/A7Yc8PGYBvOfXYIn/js8LiAXgwkicD8xskfTf3bPQn2+nHSrEZzcMFnFxozGYzp/6YqAbGRLVObt6rB9s0MkIMrfTYh3JvpAwPboCJws0EgJv/rcepnSqnfuhraikaN58LPLjBm+hLT/621A/5v59p1G9eBKGwjyI0g/ccWHrXqprv5AG5xmy3SLJAqZZAASeEmhasgQIDUbvybl3qTEimLsmyL8jlAsrbGnBG5c2aGQzl19Wehs/Kv2Wts4rVJd7FftYkbzvew5s2G/tt/vs0yCEjy57uc98/vXZyRv1zRuL2i664VjfutaPl523+mQbf6n4n0P78iIDZgHZuhu4hyUb2iiE161jblRmnWFaTNhnffMwsCZeaX5P9K636K6724fVGOX9Eu8brLdIz0P9tOwNFYx6dDmt+y3UAWBF5/FY3Be5+5X5b9Kfll5k/issl3Fgw0hPQ/0yJgGXuAlCEyCNBu/7N9KWl07yX587t+fZNlP282mziv+y8bZXuYXiL9zxU3URx7FASSx/3Xx/uzd1Gguten9+3P/vemzPxeIMKT/3N+KGDliRvmxwOU5s2sFHiqttOTDgN/6ht82crE/7BJT/q9IX8c8wpP/s8bd1HsDzLqSA5tHnbfahSY4h8Wute5n530JewT+dP0j+/9oxk4wSCQnhFuNn9lLfCRnxBkuXYi1cC9cifPsub/3qXc9yvx5yuN5h+agZOPAuvd/utz+/5UPVR/uXOC+4z6xZsnmfa/9lnNn+f9tXeLjOYfmoET3pxyHgWI8i2BDANlf7DKwufZGPzJiF9/eUlm/ZT6/2Y3VnCfOfYNaP6hGTjpALBmiTgn2JpEFgYed98/shx4flK+ZpdFgvFDQUp7jfe/7lPm/3znWX+T0PqhyPv+kV+WWGj+Xds+IPSL/xWtOEuv+Z4gS7pCxoG0Hti+KIEgDwVZLBgaDv4Ug3M99fWn55fth2T+7vEhs59wRX1PwXjyD/sAL0IAa++z3sDDOuaMhxtKA4GsCD62769aKCi2CE9KROhA9UFdw9Pza8Z7Wew/PnCe8yl9tGcde5r0Uf1fPVaBxwGgGQeqQLCh+O9OhoKvNBa8vbzKaDBsQyA5//rylrH+e7/f/V3n+kVB/JT6fhO/ePAXf/L/ms8D2J8AYI4AeiDIW3BEm2STZ2mWdcFuL8PB18/P5+fHx3b79vb+YsL7+9vbdvvx8fn58/OVUn6/+/0Q501HqU6qiuu/msE8C/Kj93/tKJ8LOtC27hZzNy+P0l2KDfxv6easT1hEgvI1kyiiQUlkIQSlaZwrEDEJeT2R4qT8YFbkZ+2G6livuoPRpnWKwQ5ixpM/V49FkDqE6jOsu7cirgUNcdO7chX64AO6Y5turujvZJrrJJ1Fg/yn/qZNrrtEpXVdXKy/k5/paZg2Tssqtk7rsiuKr/0B+ZFgkFNB9zXNcxSOtH+3B+teaRDHZrFBd2zWrfHcwTQbcmGTQusydFSD+bhZW6bF9mmdZUUDHP0BRSuAS6/R0kTtMX3EsVncGFzmt9PpNouLy3xy0y662ab7HCuKzT9QtwLCOtsxs1Yh6zlF45MiNtHNNLjMVy662ax7iOlpTSsPSRcxHWLzD6i4ibj2MWauvUt1PVZ2zW0xN8W663UNZmfdQ0zHY5m2DHad9Ugr6j4tnPwDpm6g5lJtxObLmgu2Lh8eXIq7PnBwcC+x2YbztIaZPt2Kxo4rit4fYOkG9uObt4jnadpNN3p/QEc3EJg50PsDEAJAfwDoOBDQQVS/NDgVUZfLdUvPpXu6po3SE60oWv+ASwgoXalyKdL8qyXW31D+S3fXWpV5sFFMhSe3TFt0s0l3h2m3aVHXtNhhWlbT1LWi7Lii9SvQH+h9Jpj5YPlTeb3i0bq4lcGo8G1TxjLprn2cusQt02Qz3WfwcDE7mibzrEda0V73jZM/wCkEtByK2tmqJdDErcFVhjPrZrtui2kym2abaWrrdp8W26ZlnTU7mibHFaXDKwr6A0NCQO5WdX4h/RLpma0hZtPgekRLd/6ObGIX0+Ro2qi7zOf9dY9mesQVTV+A/sCwjUDtZaS91i+xWUq2wdwaYddNZTo0idlmmu2mydE02UwbxB3T4kN31mdaw1YU9AeO6QVo7sStjGVwVWbNWY1ibotVL2bb6D6meYBpMpmmcUyPNK1hKwr6A2OEgG4weQE+8ecvZLrjs6A/cGwICAnwFCHoDyAEXC39ce4PjIO7JYNPfoGXoD8wHm6XAUjlDwI88w+MjH9WCAG+0B9f+AVOEQIWCAE+0H8B+gMnwgL9wIkD534A+oHo/AHAyfqBaAZMdeuPzh9wnmZABLpNrvbH1h84H/Bw0IQgSOCZP2BaOwEhhkuPFdOlTIvLmEbtD1z4TECMk8hGy4huAmEXnN700YsR4q/8AxcrA5aBMTFlF4UtbYnqqiZuX7TrLtWILnFnGj3aNB1vWhy+swMrikf+gAk0BEXtmYp/pi/Ln35i1bk1cWtwLTboFic3bdEtzKatul1NNwej8QdMAHfLgEh36vJVwZWWuJI2xY3B7YuKmBT6G8UG02Ic05ZpCSfdZFRzeNbFywCH/sBkyoCwdFP1t+bQmrjt74rAIDbqJrPuIaaFzfRpp0X2aR0yHSL5AxM7FBAqck8Vug+3pceJSWFXH9Nk00020/11DzNNg6aFtj8wQdwsRRNNJ3aRKh4vyGk0OejuFNOg0ac1LcQSZ/7AZDuCLSZOCzTGp+lyN4oH/oCpbwUiAZwIEUp/wItTAXB1fKDrD3jUDkAMGJn92PgDfsWAELQdC/iqD+BlSzBEHXB87seJP4AYAPYDgJ8xAP2A4ft+sB9ATxBdPwDwPgbg+YDeSKIV2A/MDrcLHAz0afkv8LQPgIbAVaZ+bPuB2eMOmwHbg7541A+4lkIgSoRIkmYGrF+ZxKK32CpNnHQnzqaTYdNKIqR+4Oo6AkFFiuKFjXAVb83Sxiu7OGlQWjEtukaPYto6rQC7fuBadwOhyhaNcGoiTpIWozRxg3B6pu3WLRx1J4V+q9jRdIi6H7ju3YAMAkkr29a/E71sVsSJTawNThqxoUPsYtqgO3HVHa5Q9wNA+pBAGNR5taROUr1XGKWIs7ihpNVKXHwo0bNudb2hu+Z6S2zQfUBs1Z3og4MQR/0AoG8HgoIeGpFypiuXFLEQ7RFaAEjM4sYlYfxk3jKwKeqr2yAOUPYDgLkxuIxUrug5V4NWpBvE/QZXdLbptowWdtOG+xa1hWiJhh8AHGgKBMmskJM/wJYfAHqXAnOKAkGIxA8ArlFgDrVAmvfBfQAYshsookDkJ/cjcB8ARokEd35tCdKS/w77fQC4tjAA6gPAicPAzWqCcUAyf3UD6gPAmTCVOADmA8DlcHu3kIEgOnskCCJJ/MUdmnwAMI1IcCMjwalDQUp7yXs09wFgyl2CxUqWBWE0RjQIoiiUyV6yHnU+APhXGdzKeCADgiwPZEyQQSEKciR1dCiuSK5LssscL/m+WkjG3yLTzx3/AwCIiCn8TA2MAAAAAElFTkSuQmCC",
  // "universalLink": "https://chainbow.io",
  "deepLink": "chainbow:"
}];

function ConnectButton(props) {
  return React.createElement("a", {
    className: "walletconnect-connect__button",
    href: props.href,
    id: (WALLETCONNECT_CONNECT_BUTTON_ID + "-" + (props.name)),
    onClick: props.onClick,
    rel: "noopener noreferrer",
    style: {
      backgroundColor: props.color
    },
    target: "_blank"
  }, props.name);
}

var CARET_SVG_URL = "data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";

function WalletButton(props) {
  var color = props.color;
  var href = props.href;
  var name = props.name;
  var logo = props.logo;
  var onClick = props.onClick;
  return React.createElement("a", {
    className: "walletconnect-modal__base__row",
    href: href,
    onClick: onClick,
    rel: "noopener noreferrer",
    target: "_blank"
  }, React.createElement("h3", {
    className: "walletconnect-modal__base__row__h3"
  }, name), React.createElement("div", {
    className: "walletconnect-modal__base__row__right"
  }, React.createElement("div", {
    className: "walletconnect-modal__base__row__right__app-icon",
    style: {
      background: ("url('" + logo + "') " + color),
      backgroundSize: "100%"
    }
  }), React.createElement("img", {
    src: CARET_SVG_URL,
    className: "walletconnect-modal__base__row__right__caret"
  })));
}

function WalletIcon(props) {
  var color = props.color;
  var href = props.href;
  var name = props.name;
  var logo = props.logo;
  var onClick = props.onClick;
  return React.createElement("a", {
    className: "walletconnect-connect__button__icon_anchor",
    href: href,
    onClick: onClick,
    rel: "noopener noreferrer",
    target: "_blank"
  }, React.createElement("div", {
    className: "walletconnect-connect__button__icon",
    style: {
      background: ("url('" + logo + "') " + color),
      backgroundSize: "100%"
    }
  }), React.createElement("div", {
    style: {
      fontSize: ((name.length > 8 ? 2.5 : 2.7) + "vw")
    },
    className: "walletconnect-connect__button__text"
  }, name));
}

function detectEnv(userAgent) {
  return detectBrowser.detect(userAgent);
}
function detectOS() {
  var env = detectEnv();
  return env && env.os ? env.os : undefined;
}
function isIOS() {
  var os = detectOS();
  // return os ? os.toLowerCase().includes("ios") : false;
  return true;
}
function isMobile() {
  var os = detectOS();
  return os ? os.toLowerCase().includes("android") || os.toLowerCase().includes("ios") : false;
}
function isNode() {
  var env = detectEnv();
  var result = env && env.name ? env.name.toLowerCase() === "node" : false;
  return result;
}

function setLocal(key, data) {
  var raw = safeJsonUtils.safeJsonStringify(data);
  var local = windowGetters.getLocalStorage();

  if (local) {
    local.setItem(key, raw);
  }
}

function formatIOSMobile(uri, entry) {
  var encodedUri = encodeURIComponent(uri);
  return entry.universalLink ? ((entry.universalLink) + "/wc?uri=" + encodedUri) : entry.deepLink ? ("" + (entry.deepLink) + (entry.deepLink.endsWith(":") ? "//" : "/") + "wc?uri=" + encodedUri) : "";
}

function saveMobileLinkInfo(data) {
  var focusUri = data.href.split("?")[0];
  setLocal(MOBILE_LINK_LOCALSTORAGE_KEY, Object.assign({}, data,
    { href: focusUri }));
}

function getMobileRegistryEntry(name) {
  return MOBILE_REGISTRY.filter(function (entry) { return entry.name.toLowerCase().includes(name); })[0];
}

function getMobileLinkRegistry(qrcodeModalOptions) {
  var links = MOBILE_REGISTRY;

  if (qrcodeModalOptions && qrcodeModalOptions.mobileLinks && qrcodeModalOptions.mobileLinks.length) {
    links = qrcodeModalOptions.mobileLinks.map(function (name) { return getMobileRegistryEntry(name); });
  }

  return links;
}

function MobileLinkDisplay(props) {
  var ios = isIOS();
  var links = getMobileLinkRegistry(props.qrcodeModalOptions);
  var ref = React.useState(false);
  var showMore = ref[0];
  var setShowMore = ref[1];
  var grid = links.length > 5;
  var displayShowMore = links.length > 12;
  return React.createElement("div", null, React.createElement("p", {
    id: WALLETCONNECT_CTA_TEXT_ID,
    className: "walletconnect-qrcode__text"
  }, ios ? props.text.choose_preferred_wallet : props.text.connect_mobile_wallet), React.createElement("div", {
    className: ("walletconnect-connect__buttons__wrapper" + (!ios ? "__android" : grid ? "__wrap" : ""))
  }, ios ? links.map(function (entry, idx) {
    var color = entry.color;
    var name = entry.name;
    var shortName = entry.shortName;
    var logo = entry.logo;
    var href = formatIOSMobile(props.uri, entry);
    var handleClickIOS = React.useCallback(function () {
      saveMobileLinkInfo({
        name: name,
        href: href
      });
    }, []);
    if (idx > 11 && !showMore) { return; }
    return !grid ? React.createElement(WalletButton, {
      color: color,
      href: href,
      name: name,
      logo: logo,
      onClick: handleClickIOS
    }) : React.createElement(WalletIcon, {
      color: color,
      href: href,
      name: shortName,
      logo: logo,
      onClick: handleClickIOS
    });
  }) : React.createElement(ConnectButton, {
    name: props.text.connect,
    color: DEFAULT_BUTTON_COLOR,
    href: props.uri,
    onClick: React.useCallback(function () {
      saveMobileLinkInfo({
        name: "Unknown",
        href: props.uri
      });
    }, [])
  })), !!(ios && displayShowMore) && React.createElement("div", {
    className: "walletconnect-modal__footer"
  }, React.createElement("a", {
    onClick: function () { return setShowMore(!showMore); }
  }, showMore ? props.text.show_less : props.text.show_more)));
}

function Notification(props) {
  var show = !!props.message.trim();
  return React.createElement("div", {
    className: ("walletconnect-qrcode__notification" + (show ? " notification__show" : ""))
  }, props.message);
}

var formatQRCodeImage = function (data) {
  try {
    var result = "";
    return Promise.resolve(QRCode.toString(data, {
      margin: 0,
      type: "svg"
    })).then(function (dataString) {
      if (typeof dataString === "string") {
        result = dataString.replace("<svg", "<svg class=\"walletconnect-qrcode__image\"");
      }

      return result;
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

function QRCodeDisplay(props) {
  var ref = React.useState("");
  var notification = ref[0];
  var setNotification = ref[1];
  var ref$1 = React.useState("");
  var svg = ref$1[0];
  var setSvg = ref$1[1];
  React.useEffect(function () {
    try {
      return Promise.resolve(formatQRCodeImage(props.uri)).then(function (_formatQRCodeImage) {
        setSvg(_formatQRCodeImage);
      });
    } catch (e) {
      Promise.reject(e);
    }
  }, []);

  var copyToClipboard = function () {
    var tmp = document.createElement("input");
    tmp.value = props.uri;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand("copy");
    tmp.remove();
    setNotification(props.text.copied_to_clipboard);
    setInterval(function () { return setNotification(""); }, 1200);
  };

  return React.createElement("div", null, React.createElement("p", {
    id: WALLETCONNECT_CTA_TEXT_ID,
    className: "walletconnect-qrcode__text"
  }, props.text.scan_qrcode_with_wallet), React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: svg
    }
  }), React.createElement("div", {
    className: "walletconnect-modal__footer"
  }, React.createElement("a", {
    onClick: copyToClipboard
  }, props.text.copy_to_clipboard)), React.createElement(Notification, {
    message: notification
  }));
}

function Modal(props) {
  var mobile = isMobile();
  var ref = React.useState(!mobile);
  var displayQRCode = ref[0];
  var setDisplayQRCode = ref[1];
  var displayProps = {
    text: props.text,
    uri: props.uri,
    qrcodeModalOptions: props.qrcodeModalOptions
  };
  return React.createElement("div", {
    id: WALLETCONNECT_MODAL_ID,
    className: "walletconnect-qrcode__base animated fadeIn"
  }, React.createElement("div", {
    className: "walletconnect-modal__base"
  }, React.createElement(Header, {
    onClose: props.onClose
  }), mobile && React.createElement("div", {
    className: ("walletconnect-modal__mobile__toggle" + (displayQRCode ? " right__selected" : ""))
  }, React.createElement("div", {
    className: "walletconnect-modal__mobile__toggle_selector"
  }), React.createElement("a", {
    onClick: function () { return setDisplayQRCode(false); }
  }, props.text.mobile), React.createElement("a", {
    onClick: function () { return setDisplayQRCode(true); }
  }, props.text.qrcode)), React.createElement("div", null, displayQRCode ? React.createElement(QRCodeDisplay, Object.assign({}, displayProps)) : React.createElement(MobileLinkDisplay, Object.assign({}, displayProps)))));
}

var de = {
  choose_preferred_wallet: "Wähle bevorzugte Wallet",
  connect_mobile_wallet: "Verbinde mit Mobile Wallet",
  scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
  connect: "Verbinden",
  qrcode: "QR-Code",
  mobile: "Mobile",
  copy_to_clipboard: "In die Zwischenablage kopieren",
  copied_to_clipboard: "In die Zwischenablage kopiert!",
  show_more: "Zeig mehr",
  show_less: "Zeige weniger"
};

var en = {
  choose_preferred_wallet: "Choose your preferred wallet",
  connect_mobile_wallet: "Connect to Mobile Wallet",
  scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
  connect: "Connect",
  qrcode: "QR Code",
  mobile: "Mobile",
  copy_to_clipboard: "Copy to clipboard",
  copied_to_clipboard: "Copied to clipboard!",
  show_more: "Show More",
  show_less: "Show Less"
};

var es = {
  choose_preferred_wallet: "Elige tu billetera preferida",
  connect_mobile_wallet: "Conectar a billetera móvil",
  scan_qrcode_with_wallet: "Escanea el código QR con una billetera compatible con WalletConnect",
  connect: "Conectar",
  qrcode: "Código QR",
  mobile: "Móvil",
  copy_to_clipboard: "Copiar",
  copied_to_clipboard: "Copiado!",
  show_more: "Mostrar más",
  show_less: "Mostrar menos"
};

var fr = {
  choose_preferred_wallet: "Choisissez votre portefeuille préféré",
  connect_mobile_wallet: "Se connecter au portefeuille mobile",
  scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
  connect: "Se connecter",
  qrcode: "QR Code",
  mobile: "Mobile",
  copy_to_clipboard: "Copier",
  copied_to_clipboard: "Copié!",
  show_more: "Montre plus",
  show_less: "Montre moins"
};

var ko = {
  choose_preferred_wallet: "원하는 지갑을 선택하세요",
  connect_mobile_wallet: "모바일 지갑과 연결",
  scan_qrcode_with_wallet: "WalletConnect 지원 지갑에서 QR코드를 스캔하세요",
  connect: "연결",
  qrcode: "QR 코드",
  mobile: "모바일",
  copy_to_clipboard: "클립보드에 복사",
  copied_to_clipboard: "클립보드에 복사되었습니다!",
  show_more: "자세히 보기",
  show_less: "간략히 보기"
};

var pt = {
  choose_preferred_wallet: "Escolha sua carteira preferida",
  connect_mobile_wallet: "Conectar-se à carteira móvel",
  scan_qrcode_with_wallet: "Ler o código QR com uma carteira compatível com WalletConnect",
  connect: "Conectar",
  qrcode: "Código QR",
  mobile: "Móvel",
  copy_to_clipboard: "Copiar",
  copied_to_clipboard: "Copiado!",
  show_more: "Mostrar mais",
  show_less: "Mostrar menos"
};

var zh = {
  choose_preferred_wallet: "选择你的钱包",
  connect_mobile_wallet: "连接至移动端钱包",
  scan_qrcode_with_wallet: "使用兼容 WalletConnect 的钱包扫描二维码",
  connect: "连接",
  qrcode: "二维码",
  mobile: "移动",
  copy_to_clipboard: "复制到剪贴板",
  copied_to_clipboard: "复制到剪贴板成功！",
  show_more: "显示更多",
  show_less: "显示较少"
};

var fa = {
  choose_preferred_wallet: "کیف پول مورد نظر خود را انتخاب کنید",
  connect_mobile_wallet: "به کیف پول موبایل وصل شوید",
  scan_qrcode_with_wallet: "کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",
  connect: "اتصال",
  qrcode: "کد QR",
  mobile: "سیار",
  copy_to_clipboard: "کپی به کلیپ بورد",
  copied_to_clipboard: "در کلیپ بورد کپی شد!",
  show_more: "بیشتر نشان بده، اطلاعات بیشتر",
  show_less: "نمایش کمتر"
};

var languages = {
  de: de,
  en: en,
  es: es,
  fr: fr,
  ko: ko,
  pt: pt,
  zh: zh,
  fa: fa
};

function injectStyleSheet() {
  var doc = windowGetters.getDocumentOrThrow();
  var prev = doc.getElementById(WALLETCONNECT_STYLE_ID);

  if (prev) {
    doc.head.removeChild(prev);
  }

  var style = doc.createElement("style");
  style.setAttribute("id", WALLETCONNECT_STYLE_ID);
  style.innerText = WALLETCONNECT_STYLE_SHEET;
  doc.head.appendChild(style);
}

function renderWrapper() {
  var doc = windowGetters.getDocumentOrThrow();
  var wrapper = doc.createElement("div");
  wrapper.setAttribute("id", WALLETCONNECT_WRAPPER_ID);
  doc.body.appendChild(wrapper);
  return wrapper;
}

function triggerCloseAnimation() {
  var doc = windowGetters.getDocumentOrThrow();
  var modal = doc.getElementById(WALLETCONNECT_MODAL_ID);

  if (modal) {
    modal.className = modal.className.replace("fadeIn", "fadeOut");
    setTimeout(function () {
      var wrapper = doc.getElementById(WALLETCONNECT_WRAPPER_ID);

      if (wrapper) {
        doc.body.removeChild(wrapper);
      }
    }, ANIMATION_DURATION);
  }
}

function getWrappedCallback(cb) {
  return function () {
    triggerCloseAnimation();

    if (cb) {
      cb();
    }
  };
}

function getText() {
  var lang = windowGetters.getNavigatorOrThrow().language.split("-")[0] || "en";
  return languages[lang] || languages["en"];
}

function open$1(uri, cb, qrcodeModalOptions) {
  injectStyleSheet();
  var wrapper = renderWrapper();
  React.render(React.createElement(Modal, {
    text: getText(),
    uri: uri,
    onClose: getWrappedCallback(cb),
    qrcodeModalOptions: qrcodeModalOptions
  }), wrapper);
}
function close$1() {
  triggerCloseAnimation();
}

function open$2(uri, cb, qrcodeModalOptions) {
  console.log(uri);

  if (isNode()) {
    open(uri);
  } else {
    open$1(uri, cb, qrcodeModalOptions);
  }
}

function close$2() {
  if (isNode()); else {
    close$1();
  }
}

var index = {
  open: open$2,
  close: close$2
};

module.exports = index;
//# sourceMappingURL=index.js.map
