define(["exports", "./head.js", "../tools/sendMessage.js"], function (_exports, _head, _sendMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.$elementTemplateDefault = render$4;
  _exports.$filtersTemplateDefault = _render;
  _exports.$homeTemplateDefault = render$1;
  _exports.$keydownListenerDefault = keydownListener;
  _exports.$locationsTemplateDefault = render$3;
  _exports.$loginTemplateDefault = render$7;
  _exports.$mainIndexTemplateDefault = render$8;
  _exports.$menuTemplateDefault = render$5;
  _exports.$promoTemplateDefault = render$2;
  _exports.$settingsTemplateDefault = render$6;
  _exports.$weightedRandomDefault = _exports.$weightedRandom = _exports.$webrtcDefault = _exports.$webrtc = _exports.$timezoneChangeDefault = _exports.$timezoneChange = _exports.$settingsTemplate = _exports.$promoTemplate = _exports.$menuTemplate = _exports.$mainIndexTemplate = _exports.$loginTemplate = _exports.$logDefault = _exports.$log = _exports.$locationsTemplate = _exports.$keydownListener = _exports.$homeTemplate = _exports.$filtersTemplate = _exports.$elementTemplate = _exports.$createElementDefault = _exports.$createElement = _exports.$computeCountriesDefault = _exports.$computeCountries = _exports.$ShowedOffersDefault = _exports.$ShowedOffers = _exports.$DeferredDefault = _exports.$Deferred = void 0;

  function _templateObject39_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style>\n    ", "\n    :host{\n      display: block;\n      overflow: hidden;\n      position: absolute;\n      top:56px;\n      width: 100%;\n      bottom:0px;\n      left:0px;\n      text-align: left;\n    }\n    :host > .In{\n      width: 100%;\n      height: 100%;\n      white-space: nowrap;\n    }\n    :host > .In > *{\n      width: 100%;\n      height: 100%;\n      position: relative;\n      display:inline-block;\n      vertical-align:top;\n      white-space:normal;\n      overflow: hidden;\n    }\n    </style>\n\n    <div class=\"In\"></div>\n    "]);

    _templateObject39_90d461d0e12811e9872675d52dfcba91 = function _templateObject39_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject38_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style>\n    ", "\n    :host{\n      display: block;\n      width: 61px;\n      height: 26px;\n      cursor: pointer;\n      position: relative;\n    }\n    :host *{\n      cursor: pointer;\n    }\n    .BackgroundText{\n      display: block;\n      background: #994136;\n      border-radius: 13px;\n      width: 61px;\n      height: 26px;\n      line-height: 26px;\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset, 0 0 2px rgba(0, 0, 0, 0.15) inset;\n      font-size: 13px;\n      height: inherit;\n      position: relative;\n      text-transform: uppercase;\n      transition: all 0.15s ease-out 0s;\n    }\n    .BackgroundText_Off,\n    .BackgroundText_On{\n      position: absolute;\n      top: 0;\n      transition: inherit;\n    }\n    .BackgroundText_Off{\n      color: #fff;\n      right: 8px;\n    }\n    .BackgroundText_On{\n      color: white;\n      left: 11px;\n      opacity: 0;\n      text-shadow: 0 1px rgba(0, 0, 0, 0.2);\n    }\n    :host(.on) .BackgroundText{\n      background: #3b9946;\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15) inset, 0 0 3px rgba(0, 0, 0, 0.2) inset;\n    }\n    :host(.on) .BackgroundText_Off{\n      opacity: 0;\n    }\n    :host(.on) .BackgroundText_On{\n      opacity: 1;\n    }\n\n    .Circle{\n      background: #fff;\n      border-radius: 11px;\n      height: 22px;\n      width: 22px;\n      left: 2px;\n      position: absolute;\n      top: 2px;\n      transition: left 0.15s ease-out 0s;\n    }\n    .Circle:before{\n      content: \"\";\n      background: #f9f9f9 linear-gradient(to bottom, #eeeeee, white) repeat scroll 0 0;\n      border-radius: 6px;\n      box-shadow: 0 1px rgba(0, 0, 0, 0.02) inset;\n      height: 12px;\n      left: 50%;\n      margin: -6px 0 0 -6px;\n      position: absolute;\n      top: 50%;\n      width: 12px;\n    }\n    :host(.on) .Circle{\n      box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);\n      left: 37px; /* left: auto; right: 2px; */\n    }\n    </style>\n\n    <div class=\"BackgroundText\">\n      <div class=\"BackgroundText_Off\">", "</div>\n      <div class=\"BackgroundText_On\">", "</div>\n    </div>\n    <div class=\"Circle\"></div>\n    "]);

    _templateObject38_90d461d0e12811e9872675d52dfcba91 = function _templateObject38_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject37_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"Help\" @click=\"", "\">", "</div>\n    "]);

    _templateObject37_90d461d0e12811e9872675d52dfcba91 = function _templateObject37_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject36_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <c-switch @click=\"", "\" .on=\"", "\"></c-switch>\n    "]);

    _templateObject36_90d461d0e12811e9872675d52dfcba91 = function _templateObject36_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject35_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n  <style>\n  ", "\n  .Foot{\n    height: 38px;\n    padding: 0 10px;\n    border-top: 1px solid #bcbcbc;\n    background: #f5f5f5;\n    position: absolute;\n    right:0px;bottom:0px;left:0px;\n  }\n  .Foot::after{\n    content:' ';\n    display:block;\n    clear:both;\n    width:0;height:0;\n    overflow:hidden;\n    font-size:0;\n  }\n  .Foot c-switch{\n    margin: 7px 0 0;\n    float: right;\n  }\n\n  .Switch{\n    position: absolute;\n    top:0px;bottom:38px;left:0px;\n    width: 100%;\n    white-space: nowrap;\n  }\n  .Switch > *{\n    display:inline-block;\n    vertical-align:top;\n    width: 100%;\n    height: 100%;\n    position: relative;\n    overflow: hidden;\n    white-space: normal;\n  }\n\n  .Help{\n    float: right;\n    position: relative;\n    margin-top: 12px;\n    padding-left: 19px;\n    cursor: pointer;\n    font-size: 12px;\n    line-height: 18px;\n    color: #3b9946;\n    background: url( '/images/menu/help_green.svg' ) 0 -5000px no-repeat;\n  }\n  .Help::after{\n    content: '';\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 50%;\n    margin-top: -7px;\n    background: url( '/images/menu/help_grey.svg' ) 0 0 no-repeat;\n    background-size: 100% 100%;\n    width: 14px;\n    padding-top:14px;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n  }\n  .Help:hover::after{\n    background-image: url( '/images/menu/help_green.svg' );\n  }\n  </style>\n\n  <div class=\"Switch\">\n    <index-home></index-home>\n  </div>\n\n  <div class=\"Foot\">\n  ", "\n  ", "\n    <index-menu></index-menu>\n  </div>\n  "]);

    _templateObject35_90d461d0e12811e9872675d52dfcba91 = function _templateObject35_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject34_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["<div class=\"Error\"></div>"]);

    _templateObject34_90d461d0e12811e9872675d52dfcba91 = function _templateObject34_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject33_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["<div class=\"Notice\">", "</div>"]);

    _templateObject33_90d461d0e12811e9872675d52dfcba91 = function _templateObject33_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject32_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n  <style>\n  ", "\n  @-webkit-keyframes rotating /* Old Chrome */ {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes rotating {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n\n  a:hover{\n    text-decoration: none;\n  }\n\n  :host{\n    display: block;\n  }\n\n  .Login{\n    padding: 38px 12px 2px;\n    font-size: 14px;\n    min-height: 140px;\n    height: 318px;\n    font-size: 11px;\n  }\n\n  .Title{\n    font-size: 20px;\n    font-weight: 500;\n    text-align: center;\n  }\n  .Title::after{\n    display: block;\n    content: '';\n    width: 100px;\n    margin: 0 auto;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    padding-top:20px;\n    border-bottom: 4px solid #3d973f;\n  }\n\n  .Notice {\n    position: absolute;\n    font-size: 13px;\n    color: #090;\n    top: -24px;\n    width: 100%;\n    left: -2px;\n  }\n  .Error {\n    position: absolute;\n    bottom: calc(100% + 6px);\n    left: 20px;\n    right: 20px;\n    font-size: 13px;\n    color: #900;\n    text-align: center;\n  }\n\n  .Login input[type=\"text\"],\n  .Login input[type=\"password\"] {\n    font:100% arial,sans-serif;\n    vertical-align:middle;\n    outline:none;\n    width: 315px;\n    margin: 1px 0px;\n    height: 36px;\n    border-radius: 5px;\n    padding: 1px 10px;\n    font-size: 15px;\n    outline: none;\n    background: #f5f5f5;\n    border: 1px #7b7c80 solid;\n    color: #1c304e;\n  }\n  .Login input[type=\"text\"]::placeholder,\n  .Login input[type=\"password\"]::placeholder {\n    color: #9b9c9e;\n  }\n  .Login input[type=\"text\"].invalid,\n  .Login input[type=\"password\"].invalid{\n    border: 1px solid #900;\n  }\n  .Login input[type=\"text\"].invalid:focus,\n  .Login input[type=\"password\"].invalid:focus{\n    outline: none;\n  }\n\n  .Login_Form{\n    margin:0;\n    padding:0;\n    border-style:none;\n    margin-top: 46px;\n    text-align: center;\n    padding: 0 20px;\n    position:relative;\n  }\n\n  .Login_Row{\n    width:100%;\n    padding: 0 0 14px;\n  }\n  .Login_Row::after{\n    display:block;\n    clear:both;\n    content:'';\n  }\n  .Login_Row label{\n    box-sizing: border-box;\n    display: inline-block;\n    min-width: 100px;\n    padding: 6px 5px 0 0;\n  }\n\n  .Login_ForgotPassword {\n    color: #1c304e;\n    font-size: 12px;\n    line-height: 1;\n    margin-top: 3px;\n    float: right;\n  }\n\n  .Login_Button{\n    margin-top: 18px;\n  }\n  .Login_Button > .In{\n    display: inline-block;\n    vertical-align: top;\n    position: relative;\n  }\n  .Login_Button.loading > .In::after{\n    content: '';\n    display: block;\n    position: absolute;\n    left: 12px;\n    top: calc(50% - 12px);\n    width: 24px;\n    padding-top: 24px;\n    overflow: hidden;\n    height: 0;\n  }\n  .Login_Button_Overlay{\n    display: none;\n    position: absolute;\n    left: 9px;\n    top: calc(50% - 15px);\n    width: 24px;\n    padding-top: 24px;\n    height: 0;\n    overflow: hidden;\n    background:\n      #fff radial-gradient(circle at 80% 80%, #1c304e 0, #1c304e 13%, transparent 90%, transparent 100%);\n    border-radius: 50%;\n    border: 3px solid #1c304e;\n    -webkit-animation: rotating 1.2s linear infinite;\n    animation: rotating 1.2s linear infinite;\n  }\n  .Login_Button.loading .Login_Button_Overlay{\n    display: block;\n  }\n  .Login_Button_Overlay::after{\n    content: '';\n    display: block;\n    position: absolute;\n    width: 16px;\n    padding-top: 16px;\n    height: 0;\n    overflow: hidden;\n    top: calc( 50% - 16px / 2 );\n    left: calc( 50% - 16px / 2 );\n    background: #1c304e;\n    border-radius: 50%;\n  }\n\n  .Login_Button button{\n    box-sizing: border-box;\n    display: inline-block;\n    border: 0;\n    border-radius: 5px;\n    position:relative;\n    background-color: #1c304e;\n    color:#fff;\n    text-align:center;\n    font-family: inherit;\n    font-weight: 400;\n    padding: 2px 12px;\n    font-size: 18px;\n    line-height: 30px;\n    height: 45px;\n    cursor:pointer;\n    min-width: 190px;\n  }\n\n  .Login_Register {\n    margin-top: 7px;\n    font-size: 12px;\n  }\n  .Login_Register a {\n    color: #1c304e;\n  }\n  </style>\n\n  <div class=\"Login\">\n    <div class=\"Title\">", "</div>\n    <form class=\"Login_Form\" action=\"#\" @submit=\"", "\">\n\n    ", "\n    ", "\n\n      <div class=\"Login_Row\">\n        <input class=\"", "\" type=\"text\" size=\"30\" name=\"email\" autofocus placeholder=\"", "\">\n      </div>\n      <div class=\"Login_Row\">\n        <input class=\"", "\" type=\"password\" size=\"30\" name=\"password\" placeholder=\"", "\">\n        <a href=\"", "\" class=\"Login_ForgotPassword\" target=\"_blank\">\n          ", "\n        </a>\n      </div>\n\n      <div class=\"Login_Row\">\n        <div class=\"Login_Button", "\"><div class=\"In\">\n          <button>", "</button>\n          <div class=\"Login_Button_Overlay\"></div>\n        </div></div>\n\n        <div class=\"Login_Register\">\n          ", "\n          <a href=\"", "\" target=\"_blank\">\n            ", "\n          </a>\n        </div>\n      </div>\n    </form>\n  </div>"]);

    _templateObject32_90d461d0e12811e9872675d52dfcba91 = function _templateObject32_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject31_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      <div class=\"Error\">\n        ", "\n      </div>"]);

    _templateObject31_90d461d0e12811e9872675d52dfcba91 = function _templateObject31_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject30_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"E ", "\"><div class=\"In\">\n      <checkbox-switch\n        .checked=\"", "\"\n        @click=\"", "\">\n      </checkbox-switch>\n      <div class=\"R\">\n        <label @click=\"", "\">", "</label><!--\n     --><div class=\"Information\" @click=\"", "\"></div>\n      </div>\n        ", "\n    </div></div>"]);

    _templateObject30_90d461d0e12811e9872675d52dfcba91 = function _templateObject30_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject29_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n  <style>\n  ", "\n  .Checkboxes{\n    padding: 17px 0 25px;\n    font-size: 16px;\n  }\n  .Checkboxes > .E{\n    position: relative;\n    padding: 8px 20px;\n  }\n  .Checkboxes > .E.disabled{\n    opacity: 0.5;\n  }\n  .Checkboxes > .E.highlighted{\n    background: #f0f5f0;\n  }\n  .Checkboxes > .E > .In{\n    display:inline-block;vertical-align:top;\n    padding-right: 25px;\n  }\n  .Checkboxes > .E > .In::after{\n    content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;\n  }\n  .Checkboxes > .E > .In > checkbox-switch{\n    float: left;\n  }\n  .Checkboxes > .E > .In > .R{\n    display: block;\n    margin-left: 55px;\n  }\n\n  .Information{\n    display: inline-block;\n    vertical-align: top;\n    background: url( '/images/information_grey.svg' ) 0 0 no-repeat;\n    background-size: 100% 100%;\n    width: 16px;\n    padding-top: 16px;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    cursor: pointer;\n    margin: 4px 0 0 10px;\n    position: relative;\n  }\n  .Information:hover{\n    background-image: url( '/images/information_green.svg' );\n  }\n  .Information::after{\n    content: '';\n    display: block;\n    background: url( '/images/information_green.svg' ) 0 -5000px no-repeat;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n    position: absolute;\n    left: 0;\n    top: 0;\n  }\n\n  .Crown{\n    background: url( '/images/crown.svg' ) 0 0 no-repeat;\n    background-size: 100% 100%;\n    width: 18px;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    padding-top: 18px;\n    position: absolute;\n    right: 20px;\n    top: 10px;\n  }\n\n  .Error{\n    clear: both;\n    padding: 2px 0 0 55px;\n    color: #c00;\n    font-size: 12px;\n  }\n\n\n  .HealthCheck{\n    position: absolute;\n    bottom: 25px;\n    left: 25px;\n    right: 25px;\n    text-align: center;\n  }\n  .HealthCheck_Button{\n    display: inline-block;\n    vertical-align: top;\n    position: relative;\n    font-size: 14px;\n    line-height: 2.714;\n    padding: 0 30px 0 50px;\n    border: 1px solid #28344f;\n    border-radius: 4px;\n    color: #494b4d;\n    cursor: pointer;\n    text-align: left;\n  }\n  .HealthCheck_Button::after{\n    content: '';\n    display: block;\n    background: url( '/images/diagnostics.svg#health_blue' ) 0 0 no-repeat;\n    width: 19px;\n    padding-top: 16px;\n    height: 0;\n    overflow: hidden;\n    position: absolute;\n    top: calc(50% - 16px / 2);\n    left: 23px;\n  }\n  </style>\n\n  <div class=\"Checkboxes\">\n  ", "\n\n    <div class=\"E ", " ", "\"><div class=\"In\">\n      <checkbox-switch\n        .checked=\"", "\"\n        data-changedate=\"true\"\n        @mouseover=\"", "\"\n        @click=\"", "\">\n      </checkbox-switch>\n      <div class=\"R\">\n        <label\n          data-changedate=\"true\"\n          @mouseover=\"", "\"\n          @click=\"", "\"><!--\n       -->", "<!--\n     --></label><!--\n     --><div class=\"Information\" @click=\"", "\"></div>\n      </div>\n      <div class=\"Crown\"></div>\n    </div></div>\n  </div>\n\n  <div class=\"HealthCheck\"><!--\n --><div class=\"HealthCheck_Button\" @click=\"", "\">Health check</div><!--\n--></div>"]);

    _templateObject29_90d461d0e12811e9872675d52dfcba91 = function _templateObject29_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject28_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n  <style>\n  ", "\n  a:link,\n  a:visited{\n    text-decoration: none;\n    cursor: pointer;\n    color: #7a7c7f;\n  }\n  a:hover{\n    text-decoration: none;\n    color: #3b9946;\n  }\n\n  :host{\n    display: block;\n    padding-top: 6px;\n    margin-right: 70px;\n  }\n  :host > .E{\n    display:inline-block;\n    vertical-align:top;\n    position: relative;\n    color: #7a7c7f;\n    cursor: pointer;\n    font-size: 12px;\n    line-height: 30px;\n    margin: 0 0 0 17px;\n  }\n  :host > .E:hover{\n    color: #3b9946;\n  }\n  :host > .E:first-of-type{\n    margin-left: 0;\n  }\n  :host > .E.selected{\n    color: #3b9946;\n    cursor: default;\n  }\n\n  :host > .E::before{\n    font-size: 14px;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    line-height: 30px;\n  }\n\n  :host > .E.home{\n    background: url( '/images/menu/home_green.svg' ) 0 -5000px no-repeat;\n  }\n  :host > .E.home::before{\n    content: '';\n    display:inline-block;\n    vertical-align:middle;\n    background: url( '/images/menu/home_grey.svg' ) 0 0 no-repeat;\n    background-size: 100% 100%;\n    width: 12px;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    padding-top: 10px;\n    position: static;\n    margin-top: -3px;\n    padding-right: 3px;\n  }\n  :host > .E.home.selected::before,\n  :host > .E.home:hover::before{\n    background-image: url( '/images/menu/home_green.svg' );\n  }\n\n  :host > .E.smartSettings{\n    position: relative;\n    padding-right: 21px;\n    background: url( '/images/menu/settings_green.svg' ) 0 -5000px no-repeat;\n  }\n  :host > .E.smartSettings::before{\n    content: '';\n    display:inline-block;vertical-align:middle;\n    background: url( '/images/menu/settings_grey.svg' ) 0 0 no-repeat;\n    background-size: 100% 100%;\n    width: 14px;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    padding-top:11px;\n    position: static;\n    margin-top: -3px;\n    padding-right: 3px;\n  }\n  :host > .E.smartSettings:after{\n    content: '';\n    display: block;\n    background: url( '/images/beta.svg' ) 0 0 no-repeat;\n    background-size: 100% 100%;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    margin-top: -16px;\n    width: 18px;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    padding-top:18px;\n  }\n  :host > .E.smartSettings.selected::before,\n  :host > .E.smartSettings:hover::before{\n    background-image: url( '/images/menu/settings_green.svg' );\n  }\n\n  :host > .E.icon{\n    width: 32px;\n    min-height: 30px;\n  }\n  :host > .E.icon a{\n    display: block;\n    width: 32px;\n    height: 0;\n    padding-top: 32px;\n    overflow: hidden;\n    position: absolute;\n    left: 0;\n    top: calc(50% - 16px);\n    margin-top: -1px;\n    border-radius: 50%;\n  }\n  :host > .E.icon a::before{\n    content: '';\n    display: block;\n    position: absolute;\n  }\n  :host > .E.icon a:focus{\n    background-color: #e6e6e6;\n  }\n\n  :host > .E.support{\n    margin-left: 7px;\n    background: url( '/images/menu/mail_green.svg' ) 0 -5000px no-repeat;\n  }\n  :host > .E.support a::before{\n    background: url('/images/menu/mail_grey.svg') 0 0 no-repeat;\n    background-size: 100% 100%;\n    width: 12px;\n    overflow: hidden;\n    padding-top: 9px;\n    height: 0;\n    top: calc(50% - 4px);\n    left: calc(50% - 6px);\n    margin-top: 1px;\n  }\n  :host > .E.support a:hover::before{\n    background-image: url( '/images/menu/mail_green.svg' );\n  }\n\n  :host > .E.facebook{\n    margin-left: 0;\n    background: url( '/images/menu/facebook_green.svg' ) 0 -5000px no-repeat;\n  }\n  :host > .E.facebook a::before{\n    background: url( '/images/menu/facebook_grey.svg' ) 0 0 no-repeat;\n    background-size: 100% 100%;\n    width: 8px;\n    overflow: hidden;\n    padding-top: 14px;\n    height: 0;\n    position: absolute;\n    top: calc(50% - 7px);\n    left: calc(50% - 4px);\n    margin-top: 1px;\n  }\n  :host > .E.facebook a:hover::before{\n    background-image: url( '/images/menu/facebook_green.svg' );\n  }\n  </style><!--\n--><div class=\"E home ", "\" @click=\"", "\"><!--\n -->", "<!--\n--></div><!--\n--><div\n    class=\"E smartSettings ", "\"\n    @click=\"", "\"\n    @contextmenu=\"", "\"><!--\n -->", "<!--\n--></div><!--\n--><div class=\"E icon support\">\n    <a href=\"", "\" target=\"_blank\">\n      ", "\n    </a>\n  </div><!--\n--><div class=\"E icon facebook\">\n    <a href=\"", "\" target=\"_blank\">Facebook</a>\n  </div>"]);

    _templateObject28_90d461d0e12811e9872675d52dfcba91 = function _templateObject28_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject27_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"E favorite\">\n      <div\n        class=\"Favorite", "\"\n        @click=\"", "\"></div>\n    </div>"]);

    _templateObject27_90d461d0e12811e9872675d52dfcba91 = function _templateObject27_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject26_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"E mark\"><!--\n   --><div class=\"Mark mark", "\">", "</div><!--\n --></div>"]);

    _templateObject26_90d461d0e12811e9872675d52dfcba91 = function _templateObject26_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject25_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n  <style>\n  ", "\n  :host{\n    display: block;\n    padding: 0 7px 0 10px;\n    cursor: pointer;\n    border: 1px solid transparent;\n    border-radius: 4px;\n  }\n  :host(.current){\n    cursor: default;\n    background: #f0f5f0;\n  }\n  :host(.highlight){\n    background: #f7f8fc;\n  }\n  :host(.current.highlight){\n    background: #f0f5f0;\n  }\n  :host > .In{\n    display: table;\n    width: 100%;\n    height: 40px;\n    background: url( '/images/favorites/hovered.svg' ) 0 -5000px no-repeat;\n  }\n  :host > .In > .E{\n    display: table-cell;\n    vertical-align: middle;\n  }\n  :host > .In > .E:first-child{\n    width: 1px;\n    padding-right: 10px;\n  }\n  :host > .In > .E.mark{\n    width: 1px;\n    padding-left: 10px;\n  }\n  :host > .In > .E.favorite{\n    width: 1px;\n    padding-left: 15px;\n  }\n\n  .Flag{\n    display: block;\n    border-radius: 4px;\n    filter: saturate(135%);\n    opacity:0.7;\n    border: 1px solid rgba(0, 0, 0, 0.22);\n  }\n  .Country{\n    font-size: 13px;\n    line-height: 1.2;\n    color: #333;\n  }\n\n  .Favorite{\n    background: url( '/images/favorites/static.svg' ) 0 0 no-repeat;\n    background-size: 100% 100%;\n    width: 13px;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    padding-top: 12px;\n    cursor: pointer;\n    border: 3px solid transparent;\n  }\n  .Favorite:hover{\n    background-image: url( '/images/favorites/hovered.svg' );\n  }\n  .Favorite.favorited,\n  .Favorite.favorited:hover{\n    background-image: url( '/images/favorites/starred.svg' );\n  }\n\n  .Mark{\n    display:inline-block;\n    vertical-align: middle;\n    width: 23px;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    padding-top: 12px;\n    background: url( '/images/pings/1.svg' ) 0 0 no-repeat;\n    background-size: 100% 100%;\n  }\n  .Mark.mark2{\n    background-image: url( '/images/pings/2.svg' );\n  }\n  .Mark.mark3{\n    background-image: url( '/images/pings/3.svg' );\n  }\n  .Mark.mark4{\n    background-image: url( '/images/pings/4.svg' );\n  }\n  .Mark.mark5{\n    background-image: url( '/images/pings/5.svg' );\n  }\n  </style>\n\n  <div class=\"In\" @click=\"", "\">\n    <div class=\"E\">\n      <img class=\"Flag\" src=\"", "\" width=\"30\" height=\"20\"/>\n    </div>\n    <div class=\"E\">\n      <div class=\"Country\">", "</div>\n    </div>\n  ", "\n  ", "\n  </div>"]);

    _templateObject25_90d461d0e12811e9872675d52dfcba91 = function _templateObject25_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject24_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      <index-locations-element\n        @countryclick=\"", "\"\n        @favorite=\"", "\"\n        @mousemove=\"", "\"\n        .data=\"", "\"\n        .highlighted=\"", "\"\n        .mode=\"", "\">\n      </index-locations-element>"]);

    _templateObject24_90d461d0e12811e9872675d52dfcba91 = function _templateObject24_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject23_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n  <style>\n  ", "\n  :host > .In{\n    overflow: auto;\n    height: 100%;\n  }\n\n  .Head{\n    padding: 11px 12px;\n    text-align: center;\n    position: relative;\n  }\n  .Head > .In{\n    display:inline-block;\n    vertical-align:top;\n    position: relative;\n  }\n  .Head_Title{\n    font-size: 20px;\n    font-weight: 600;\n    line-height: 1.2;\n  }\n\n  .Back{\n    position: absolute;\n    left: 12px;\n    top: calc(50% - 7px);\n    font-size: 14px;\n    line-height: 1.2;\n    padding: 0 0 0 18px;\n    cursor: pointer;\n  }\n  .Back::before{\n    content: '';\n    display: block;\n    background: url('/images/arrow_left.svg') 0 0 no-repeat;\n    background-size: 100% 100%;\n    width: 9px;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    padding-top: 16px;\n    position: absolute;\n    left: 0;\n    top: calc(50% - 8px);\n  }\n\n  .Helper{\n    position: absolute;\n    left: calc(100% + 5px);\n    top: calc(50% - 8px);\n    background: url( '/images/information_grey.svg' ) 0 0 no-repeat;\n    background-size: 100% 100%;\n    width: 16px;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    padding-top: 16px;\n    cursor: pointer;\n    text-align: left;\n  }\n  .Helper:hover{\n    background-image: url( '/images/information_green.svg' );\n  }\n  .Helper::after{\n    content: '';\n    display: block;\n    background: url( '/images/information_green.svg' ) 0 -5000px no-repeat;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n    position: absolute;\n    left: 0;\n    top: 0;\n  }\n\n  .Sections{\n    padding: 0px 12px 12px;\n  }\n  </style>\n\n  <div class=\"In\">\n    <div class=\"Head\"><!--\n   --><div class=\"Back\" @click=\"", "\">Back</div><!--\n   --><div class=\"In\">\n        <div class=\"Head_Title\">", "</div>\n        <div class=\"Helper\" @click=\"", "\">?</div>\n      </div><!--\n --></div>\n    <div class=\"Sections\">\n  ", "\n    </div>\n  </div>"]);

    _templateObject23_90d461d0e12811e9872675d52dfcba91 = function _templateObject23_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject22_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n        <div class=\"Flag\" @click=\"", "\">\n          <img src=\"", "\" width=\"30\" height=\"20\" alt=\"", "\"/>\n        </div>"]);

    _templateObject22_90d461d0e12811e9872675d52dfcba91 = function _templateObject22_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject21_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n        <div class=\"Flag\" @click=\"", "\">\n          <img src=\"", "\" width=\"30\" height=\"20\" alt=\"", "\"/>\n        </div>"]);

    _templateObject21_90d461d0e12811e9872675d52dfcba91 = function _templateObject21_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject20_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style>\n    ", "\n    :host{\n      display: block;\n    }\n    .Row::after{\n      content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;\n    }\n    .Row + .Row{\n      padding-top: 8px;\n    }\n\n    .Switch,\n    .Flag_Out{\n      float: right;\n      width: 61px;\n      padding-left: 11px;\n      min-height: 1px;\n    }\n\n    .Name{\n      white-space: nowrap;\n      overflow: hidden;\n      line-height: 26px;\n      text-overflow: ellipsis;\n    }\n\n    .Flag{\n      border: 1px solid #bcbcbc;\n      border-radius: 3px;\n      padding: 2px 27px 2px 2px;\n      cursor: pointer;\n      position: relative;\n    }\n    .Flag:hover{\n      border-color: #888;\n    }\n    .Flag::after{\n      content: '';\n      display: block;\n      background: url( '/images/flag_arrow_right.svg' ) 0 0 no-repeat;\n      background-size: 100% 100%;\n      width: 5px;\n      overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n      padding-top:9px;\n      position: absolute;\n      right: 10px;\n      top: 50%;\n      margin-top: -4px;\n    }\n    .Flag img{\n      display: block;\n      border-radius: 4px;\n      filter: saturate(135%);\n      opacity:0.7;\n      border: 1px solid rgba(0, 0, 0, 0.22);\n    }\n    </style>\n\n    <div class=\"Row\">\n      <div class=\"Switch\">\n        <c-switch .on=\"", "\" @click=\"", "\"></c-switch>\n      </div>\n      <div class=\"Flag_Out\">\n  ", "\n      </div>\n      <div class=\"Name\">", "</div>\n    </div>\n\n    <div class=\"Row\">\n      <div class=\"Switch\">\n        <c-switch .on=\"", "\" @click=\"", "\"></c-switch>\n      </div>\n      <div class=\"Flag_Out\">\n  ", "\n      </div>\n      <div class=\"Name\">", "</div>\n    </div>\n    "]);

    _templateObject20_90d461d0e12811e9872675d52dfcba91 = function _templateObject20_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject19_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n  <style>\n  ", "\n  :host{\n    height:82px;\n    display: none;\n  }\n  :host(.visible){\n    display: block;\n  }\n\n  [data-hidden=\"hidden\"]{\n    display: none !important;\n  }\n\n  .Downloadable{\n    height: 82px;\n    overflow: hidden;\n    margin: 4px 4px 0;\n    position: relative;\n  }\n  .Downloadable a{\n    display: block;\n    position: absolute;\n    top:0px;\n    right:0px;\n    bottom:0px;\n    left:0px;\n    overflow: hidden;\n    text-indent: -9999px;\n    z-index: 3;\n  }\n\n  .Element{\n    position: relative;\n  }\n  .Element_Link{\n    display: block;\n    position: absolute;\n    top:0px;right:0px;bottom:0px;left:0px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-indent: -9999px;\n    font-size: 0;\n  }\n\n  .PremiumUpgrade{\n    position: relative;\n    background: #e5ebef;\n    padding: 0 10px 0 80px;\n    height: 82px;\n    margin: 6px 5px 0 5px;\n    border-radius: 4px;\n    color: white;\n  }\n  .PremiumUpgrade::before{\n    content: \"\";\n    display: block;\n    width: 67px;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    padding-top:67px;\n    position: absolute;\n    top: 50%;\n    margin-top: -33px;\n    left: 3px;\n    background-position: 0 0;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n  }\n  .PremiumUpgrade > .in{\n    display: table;\n    width: 100%;\n    height: 100%;\n  }\n  .PremiumUpgrade > .in > .in{\n    display: table-cell;\n    vertical-align: middle;\n  }\n  .PremiumUpgrade.stServers::before{\n    background-image: url( '/images/promos/servers.svg' );\n  }\n  .PremiumUpgrade.stSpeed::before{\n    background-image: url( '/images/promos/speed.svg' );\n  }\n  .PremiumUpgrade.stLocations::before{\n    background-image: url( '/images/promos/countries.svg' );\n  }\n  .PremiumUpgrade_Title{\n    font-size: 16px;\n    color: #3d9740;\n    font-weight: 600;\n  }\n  .PremiumUpgrade_Text{\n    color:#28344f;\n    font-size:15px;\n    margin-top: 2px;\n    font-weight: 500;\n  }\n\n  .Expire{\n    margin: 1px 0 0;\n    background: #fcd0cb;\n    border-bottom: 1px #994136 solid;\n    padding: 10px 10px 10px;\n  }\n  .Expire_Close{\n    position: absolute;\n    top: -5px;\n    right: -1px;\n    color: #994136;\n    cursor: pointer;\n    width: 10px;\n    padding-top: 10px;\n    border: 11px solid transparent;\n    height: 0;\n    overflow: hidden;\n    background: url( '/images/popup_close_2_pink.svg' ) 0 0 no-repeat;\n    background-size: 100% 100%;\n  }\n  .Expire_Close:hover{\n    background-image: url( '/images/popup_close_2_white.svg' );\n  }\n  .Expire_Close::after{\n    content: '';\n    display: block;\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    top: 0;\n    left: 0;\n    background: url( '/images/popup_close_2_white.svg' ) 0 -5000px no-repeat;\n  }\n\n  .Expire_Title{\n    color: #994136;\n    font-size: 14px;\n    text-align: center;\n  }\n  .Expire_Description{\n    color: #1c304e;\n    font-size: 12px;\n    text-align: center;\n  }\n\n  .Expire_Link_Out{\n    text-align: center;\n    font-size: 12px;\n    padding-top: 5px;\n  }\n  .Expire_Link{\n    display:inline-block;\n    vertical-align:top;\n    cursor:pointer;\n  }\n  .Expire_Link:link,\n  .Expire_Link:visited{\n    text-decoration: none;\n    border-bottom:1px #1c304e solid;\n    color: #1c304e;\n  }\n  .Expire_Link:hover{\n    color: #fff;\n    border-bottom:1px solid #fff;\n  }\n\n  .Speed{\n    background: #c0392b;\n    margin: 6px 6px 0 6px;\n    border-radius: 4px;\n    height: 82px;\n    color: #fff;\n    text-align: center;\n    line-height: 1;\n  }\n  .Speed > .in{\n    display: table;\n    height: 100%;\n    width: 100%;\n  }\n  .Speed > .in > .in{\n    display: table-cell;\n    vertical-align: middle;\n    padding: 0 7px;\n  }\n  .Speed_Title{\n    text-transform: uppercase;\n    font-size: 23px;\n    font-weight: bold;\n  }\n  .Speed_Price{\n    color: #f1c40f;\n    font-size: 18px;\n    font-weight: bold;\n    padding: 3px 0 7px;\n  }\n  .Speed_Days{\n    color: #e1afab;\n    font-size: 12px;\n  }\n  </style>\n\n  <div\n    class=\"Downloadable\"\n    data-name=\"downloadable promo\"\n    data-hidden=\"", "\"></div>\n\n  <div class=\"Expire\"\n    data-premium=\"true\"\n    data-name=\"premium expiration soon\"\n    data-hidden=\"", "\">\n    <div class=\"Expire_Close\" @click=\"", "\"></div>\n    <div class=\"Expire_Title\">", "</div>\n    <div class=\"Expire_Description\">", "</div>\n    <div class=\"Expire_Link_Out\"><!--\n   --><a class=\"Expire_Link\" href=\"", "\" target=\"_blank\">\n        ", "\n      </a><!--\n --></div>\n  </div>\n\n  <div class=\"Element\"\n    data-premium=\"false\"\n    data-weight=\"1\"\n    data-ga=\"banner_speed_new\"\n    data-hidden=\"", "\">\n    <div class=\"Speed\">\n      <div class=\"in\"><div class=\"in\">\n        <div class=\"Speed_Title\">", "</div>\n        <div class=\"Speed_Price\">", "</div>\n        <div class=\"Speed_Days\">", "</div>\n      </div></div>\n      <a class=\"Element_Link\" href=\"", "\" target=\"_blank\">\n        ", "\n      </a>\n    </div>\n  </div>"]);

    _templateObject19_90d461d0e12811e9872675d52dfcba91 = function _templateObject19_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject18_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"SettingsIcon_GreenCircle\"></div>"]);

    _templateObject18_90d461d0e12811e9872675d52dfcba91 = function _templateObject18_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject17_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n              <div class=\"E\">\n                <div class=\"Rating r", "\"></div>\n              </div>"]);

    _templateObject17_90d461d0e12811e9872675d52dfcba91 = function _templateObject17_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject16_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n              <div class=\"E\"><!--\n             --><img src=\"", "\" width=\"30\" height=\"20\" /><!--\n           --></div>"]);

    _templateObject16_90d461d0e12811e9872675d52dfcba91 = function _templateObject16_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject15_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n          <div class=\"Active_Country_Out\">\n            <div class=\"Active_Country\" @click=\"", "\"><div class=\"In\">\n    ", "\n              <div class=\"E\">\n                <div class=\"Active_Country_Name\">", "</div>\n              </div>\n    ", "\n              <div class=\"E\"><div class=\"ChangeButton\">", "</div></div>\n            </div></div>\n          </div>"]);

    _templateObject15_90d461d0e12811e9872675d52dfcba91 = function _templateObject15_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject14_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n          <index-home-switches\n            .proxyEnabled=\"", "\"\n            .proxyCountry=\"", "\"\n            .view=\"", "\"\n            @proxyswitch=\"", "\"\n            @domainproxyswitch=\"", "\"\n            @countrychange=\"", "\"\n            @domaincountrychange=\"", "\">\n          </index-home-switches>"]);

    _templateObject14_90d461d0e12811e9872675d52dfcba91 = function _templateObject14_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject13_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n        <index-home-switches\n          .proxyEnabled=\"", "\"\n          .proxyCountry=\"", "\"\n          .view=\"", "\"\n          @proxyswitch=\"", "\"\n          @domainproxyswitch=\"", "\"\n          @countrychange=\"", "\"\n          @domaincountrychange=\"", "\">\n        </index-home-switches>"]);

    _templateObject13_90d461d0e12811e9872675d52dfcba91 = function _templateObject13_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject12_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n        <div class=\"Inactive_ButtonOut\"><!--\n       --><div class=\"Inactive_Button\" @click=\"", "\">\n            ", "\n          </div><!--\n     --></div>"]);

    _templateObject12_90d461d0e12811e9872675d52dfcba91 = function _templateObject12_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject11_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n  <style>\n  ", "\n  :host > .In{\n    width: 100%;\n    height: 100%;\n    white-space: nowrap;\n    position: relative;\n  }\n  :host > .In.transition{\n    transition: margin-left 0.25s;\n  }\n  :host > .In > .In{\n    display: flex;\n    width: 200%;\n    height: 100%;\n    align-items: center;\n  }\n  :host(.proxyEnabled) > .In{\n    margin-left: -100%;\n  }\n  :host(.withPromo) > .In{\n    height: auto;\n  }\n\n  :host index-home-switches{\n    padding: 12px 22px 0;\n    text-align: left;\n  }\n  :host(.withPromo) index-home-promo{\n    border-bottom: 4px solid transparent;\n  }\n\n  .Inactive,\n  .Active{\n    flex: 1;\n  }\n  :host(.withPromo) .Inactive,\n  :host(.withPromo) .Active{\n    align-items: stretch;\n  }\n\n  .Inactive{\n    text-align: center;\n    white-space: normal;\n  }\n  :host(.withPromo) .Inactive{\n    vertical-align: top;\n  }\n  .Inactive::before{\n    content: '';\n    display:block;\n    background: url( '/images/global_protection_disabled.svg' ) 50% 0 no-repeat;\n    background-size: auto 100%;\n    width: 100%;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    padding-top:114px;\n  }\n  :host(.withPromo) .Inactive::before{\n    padding-top: 76px;\n  }\n\n  /** Active proxy */\n  :host(.withPromo) .Active{\n    padding-top: 9px;\n  }\n  .Active::before{\n    content:' ';\n    display:block;\n    background: url( '/images/global_protection_enabled.svg' ) 50% 0 no-repeat;\n    background-size: auto 100%;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    padding-top:112px;\n  }\n  :host(.withPromo) .Active::before{\n    padding-top: 91px;\n  }\n\n  .Inactive_Text{\n    font-size: 14px;\n    padding: 4px 28px 0;\n    line-height: 17px;\n  }\n  .Inactive_Title{\n    font-size: 18px;\n    font-weight: 600;\n    padding-top: 10px;\n    color: #994136;\n  }\n  :host(.withPromo) .Inactive_Title{\n    padding-top: 0;\n  }\n  .Inactive_ButtonOut{\n    padding-top: 24px;\n  }\n  :host(.withPromo) .Inactive_ButtonOut{\n    padding-top: 10px;\n  }\n  .Inactive_Button{\n    display:inline-block;\n    vertical-align:top;\n    cursor: pointer;\n    text-decoration: none;\n    color: #fff;\n    min-width: 208px;\n    height: 45px;\n    line-height: 42px;\n    border-radius: 4px;\n    background: #3d973f;\n    font-size: 17px;\n    text-align: center;\n    padding: 0 10px;\n  }\n\n\n  .Active_Text{\n    font-size:18px;\n    line-height: 1;\n    padding: 27px 28px 0;\n    color:#3b9946;\n    text-align: center;\n  }\n  :host(.withPromo) .Active_Text{\n    padding-top: 7px;\n  }\n\n  .Active_Country_Out{\n    padding: 28px 20px 0;\n  }\n  :host(.withPromo) .Active_Country_Out{\n    padding-top: 20px;\n  }\n\n  .Active_Country{\n    cursor: pointer;\n    border: 1px solid #bcbcbc;\n    border-radius: 4px;\n    text-align: justify;\n    height: 58px;\n    padding: 0 20px;\n    cursor:pointer;\n  }\n  .Active_Country:hover{\n    background: #efefef;\n  }\n  .Active_Country > .In{\n    display: table;\n    height: 100%;\n    width: 100%;\n  }\n  .Active_Country > .In > .E{\n    display: table-cell;\n    vertical-align: middle;\n  }\n  .Active_Country > .In > .E:first-child{\n    width: 1px;\n    padding-right: 12px;\n  }\n  .Active_Country > .In > .E:last-child{\n    width: 1px;\n  }\n  .Active_Country img{\n    display: block;\n    border-radius: 4px;\n    filter: saturate(135%);\n    opacity:0.7;\n    border: 1px solid rgba(0, 0, 0, 0.22);\n  }\n  .Active_Country_Name{\n    font-size: 18px;\n  }\n\n  .ChangeButton{\n    display:inline-block;\n    vertical-align:top;\n    font-size: 12px;\n    border-radius: 4px;\n    line-height: 18px;\n    text-align: center;\n    background: #fff;\n    border: 1px solid #268328;\n    color: #268328;\n    padding: 0 8px;\n  }\n\n  .Rating{\n    background: url( '/images/pings/1.svg' ) 0 0 no-repeat;\n    background-size: 100% 100%;\n    width: 23px;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    padding-top:12px;\n    margin-left: auto;\n    border-right: 15px solid transparent;\n  }\n  .Rating.r2{\n    background-image: url( '/images/pings/2.svg' );\n  }\n  .Rating.r3{\n    background-image: url( '/images/pings/3.svg' );\n  }\n  .Rating.r4{\n    background-image: url( '/images/pings/4.svg' );\n  }\n  .Rating.r5{\n    background-image: url( '/images/pings/5.svg' );\n  }\n\n  .SettingsIcon{\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    width: 40px;\n  }\n  :host(.withPromo) .SettingsIcon{\n    top: calc(88px + 12px);\n  }\n  .SettingsIcon > .In{\n    position: relative;\n    border: 1px solid #bcbcbc;\n    width: 38px;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    padding-top:38px;\n    border-radius: 4px;\n  }\n  .SettingsIcon > .In::after{\n    content: '';\n    display: block;\n    background: url( '/images/settings_grey.svg' ) 0 0 no-repeat;\n    background-size: 100% 100%;\n    position: absolute;\n    width: 17px;\n    overflow:hidden;text-indent:-9999px;height:0;\n    padding-top: 17px;\n    top: calc(50% - 17px / 2);\n    left: calc(50% - 17px / 2);\n  }\n  .SettingsIcon_GreenCircle{\n    width: 16px;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    padding-top:16px;\n    background: #3b9946;\n    border: 4px solid #fff;\n    border-radius: 50%;\n    position: absolute;\n    left: -11px;\n    bottom: -11px;\n  }\n  .SettingsIcon_ClickArea{\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n    text-indent: -9999px;\n    cursor: pointer;\n  }\n  </style>\n\n  <index-home-promo></index-home-promo>\n  <div class=\"In ", "\">\n    <div class=\"In\"><!--\n   --><div class=\"Inactive\">\n        <div class=\"Inactive_Title\">", "</div>\n        <div class=\"Inactive_Text\">", "</div>\n  ", "\n      </div><!--\n   --><div class=\"Active\">\n        <div class=\"Active_Text\">", "</div>\n  ", "\n      </div><!--\n  --></div>\n  </div>\n\n  <div class=\"SettingsIcon\">\n    <div class=\"In\"></div>\n  ", "\n    <div class=\"SettingsIcon_ClickArea\" @click=\"", "\"></div>\n  </div>"]);

    _templateObject11_90d461d0e12811e9872675d52dfcba91 = function _templateObject11_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject10_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style>\n    ", "\n    :host{\n      display: block;\n    }\n\n    input[type=\"text\"]{\n      display: block;\n      width: 100%;\n      border: 1px solid #bcbcbc;\n      line-height: 24px;\n      height: 24px;\n      box-sizing: border-box;\n      padding: 0 8px;\n      border-radius: 4px;\n      outline: none;\n    }\n    input[type=\"text\"]:focus{\n      border-color: #28344f;\n    }\n    </style>\n    <input type=\"text\" placeholder=\"", "\" />"]);

    _templateObject10_90d461d0e12811e9872675d52dfcba91 = function _templateObject10_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject9_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n          <img\n            src=\"", "\"\n            width=\"30\"\n            height=\"20\"\n            alt=\"\"/>"]);

    _templateObject9_90d461d0e12811e9872675d52dfcba91 = function _templateObject9_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject8_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n          <div class=\"Off\">", "</div>"]);

    _templateObject8_90d461d0e12811e9872675d52dfcba91 = function _templateObject8_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject7_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n        <div class=\"List_Flag\">\n    ", "\n        </div>"]);

    _templateObject7_90d461d0e12811e9872675d52dfcba91 = function _templateObject7_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject6_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n        <div class=\"List_Select\">\n          <div class=\"List_Select_Button\">", "</div>\n        </div>"]);

    _templateObject6_90d461d0e12811e9872675d52dfcba91 = function _templateObject6_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject5_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"E ", "\">\n      <div class=\"In\" @click=\"", "\">\n        <div class=\"List_Remove\" title=\"", "\"></div>\n        ", "\n        <div class=\"List_Favicon\">\n          <img src=\"", "\" width=\"16\" height=\"16\" alt=\"\"/>\n        </div>\n        <div class=\"List_Name\">", "</div>\n      </div>\n      <div class=\"List_Deleted\">\n        ", "\n        <span class=\"List_Delete_Link\" @click=\"", "\">\n          ", "\n        </span>\n      </div>\n      <div class=\"List_InactiveOverlay\" @click=\"", "\">&nbsp;</div>\n    </div>"]);

    _templateObject5_90d461d0e12811e9872675d52dfcba91 = function _templateObject5_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject4_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      <img\n        src=\"", "\"\n        width=\"30\"\n        height=\"20\"\n        alt=\"\"/>"]);

    _templateObject4_90d461d0e12811e9872675d52dfcba91 = function _templateObject4_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject3_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      <div class=\"Off\">", "</div>"]);

    _templateObject3_90d461d0e12811e9872675d52dfcba91 = function _templateObject3_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject2_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n  <style>\n  ", "\n  .Off{\n    width: 30px;\n    line-height: 22px;\n    padding-left: 1px;\n    color: #994136;\n    font-size: 14px;\n    text-align: center;\n  }\n\n  .ChangeRule_Country{\n    position: relative;\n    width: 56px;\n    border: 1px solid #bcbcbc;\n    height: 22px;\n    border-radius: 4px;\n    padding: 1px 2px;\n    background: url( '/images/smart_settings/arrow_up.svg' ) 0 -5000px no-repeat;\n  }\n  .ChangeRule_Country img{\n    display: block;\n    border-radius: 4px;\n    filter: saturate(135%);\n    opacity:0.7;\n    border: 1px solid rgba(0, 0, 0, 0.22);\n  }\n  .ChangeRule_Country::after{\n    content: '';\n    display: block;\n    background: url( '/images/smart_settings/arrow_down.svg' ) 0 0 no-repeat;\n    background-size: 100% 100%;\n    width: 9px;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    padding-top: 5px;\n    position: absolute;\n    top: 50%;\n    right: 8px;\n    margin-top: -2px;\n  }\n  .ChangeRule_Country.open{\n    border-color: #3b9946;\n  }\n  .ChangeRule_Country.open::after{\n    background-image: url( '/images/smart_settings/arrow_up.svg' );\n    /* margin-top: -3px; */\n  }\n\n  .ChangeRule_Button{\n    width: 46px;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    padding-top:24px;\n    background: #3b9946 url( '../images/smart_settings/agree_white.svg' ) 0 -5000px no-repeat;\n    border-radius: 4px;\n    cursor: pointer;\n    position: relative;\n  }\n  .ChangeRule_Button::after{\n    content: '';\n    display: block;\n    width: 14px;\n    overflow: hidden;\n    font-size:0;\n    text-indent: -9999px;\n    height: 0;\n    padding-top:14px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin: -7px 0 0 -7px;\n    background: url( '/images/smart_settings/plus_white.svg' ) 0 0 no-repeat;\n    background-size: 100% 100%;\n  }\n  .ChangeRule_Button.save::after{\n    width: 16px;\n    padding-top: 11px;\n    background-image: url( '/images/smart_settings/agree_white.svg' );\n    margin: -5px 0 0 -8px;\n  }\n\n  .List{\n    position: absolute;\n    top:65px;\n    right:0px;\n    bottom:0px;\n    left:0px;\n    overflow: auto;\n    background: url( '/images/smart_settings/trash_green.svg' ) 0 -5000px no-repeat;\n  }\n  .List > .E{\n    position: relative;\n    line-height: 34px;\n    transition: opacity 0.2s;\n  }\n  .List > .E:hover{\n    background: #fafafa;\n  }\n  .List > .E.active,\n  .List > .E.active:hover{\n    background: #f5f5f5;\n  }\n  .List > .E.inactive,\n  .List > .E.inactive:hover{\n    background: transparent;\n    opacity: 0.33;\n  }\n  .List > .E.inactive.disabled,\n  .List > .E.inactive.disabled:hover{\n    background: transparent;\n    opacity: 1;\n  }\n  .List > .E > .In{\n    padding: 0 7px 0 14px;\n    cursor: pointer;\n    height: 34px;\n  }\n  .List > .E > .In::after{\n    content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;\n  }\n\n  .List_Remove{\n    float: right;\n    background: url( '/images/smart_settings/trash_grey.svg' ) 0 0 no-repeat;\n    background-size: 100% 100%;\n    width: 11px;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    padding-top:14px;\n    margin: 3px 0 0 6px;\n    cursor: pointer;\n    border: 7px solid transparent;\n  }\n  .List_Remove:hover{\n    background-image: url( '/images/smart_settings/trash_green.svg' );\n  }\n  .List_Flag{\n    float: right;\n    width: 30px;\n    padding: 7px 0 0 13px;\n  }\n  .List_Flag img{\n    display: block;\n    border-radius: 4px;\n    filter: saturate(135%);\n    opacity:0.7;\n    border: 1px solid rgba(0, 0, 0, 0.22);\n  }\n\n  .ChangeRule{\n    padding: 19px 14px;\n    border-bottom: 1px solid #bcbcbc;\n  }\n  .ChangeRule > table{\n    width: 100%;\n  }\n  .ChangeRule > table > tbody > tr > td ~ td{\n    padding-left: 10px;\n  }\n  .ChangeRule > table > tbody > tr > td:nth-child( 2 ){\n    width: 5000px;\n  }\n\n  .List_Favicon{\n    width: 16px;\n    float: left;\n    padding: 9px 7px 0 0;\n    transition: opacity 0.2s;\n  }\n  .List > .E.disabled .List_Favicon{\n    opacity: 0.3;\n  }\n  .List_Favicon img{\n    display: block;\n  }\n\n  .List_Name{\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    transition: opacity 0.2s;\n  }\n  .List > .E.disabled .List_Name{\n    opacity: 0.3;\n  }\n\n  .List_Deleted{\n    display: none;\n    background: #fff;\n    position: absolute;\n    top:0px;right:0px;bottom:0px;left:0px;\n    padding: 0 14px 0 22px;\n    border-left: 14px solid transparent;\n    color: #3b9946;\n  }\n  .List_Deleted::after{\n    content: '';\n    width: 12px;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    padding-top:12px;\n    background: url('/images/smart_settings/check.svg') 0 0 no-repeat;\n    background-size: 100% 100%;\n    position: absolute;\n    left: 0;\n    top: 50%;\n    margin-top: -6px;\n  }\n  .List > .E.deleted .List_Deleted{\n    display: block;\n  }\n\n  .List_Delete_Link{\n    cursor: pointer;\n    color: #28344f;\n    border-bottom: 1px dashed #28344f;\n  }\n  .List_Delete_Link:hover{\n    border-bottom-color: transparent;\n  }\n\n  .List_Select{\n    float: right;\n    padding: 4px 0 0 5px;\n  }\n  .List_Select_Button{\n    line-height: 24px;\n    white-space: nowrap;\n    cursor: pointer;\n    border: 1px solid #3b9946;\n    color: #3b9946;\n    padding: 0 8px;\n    border-radius: 4px;\n    font-size: 12px;\n  }\n  .List_Select_Button:hover{\n    background: #3b9946;\n    color: #fff;\n  }\n\n  .List_InactiveOverlay{\n    display: none;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    overflow: hidden;\n    text-indent: -9999px;\n  }\n  .List > .E.inactive .List_InactiveOverlay{\n    display: block;\n  }\n  </style>\n\n  <div class=\"ChangeRule\"><table><tbody><tr>\n    <td>", "</td>\n    <td>\n      <filters-domain\n        .value=\"", "\"\n        @save=\"", "\"\n        @value-changed=\"", "\"></filters-domain>\n    </td>\n    <td>", "</td>\n    <td><div class=\"ChangeRule_Country\" @click=\"", "\">\n  ", "\n    </div></td>\n    <td>\n      <div class=\"ChangeRule_Button", "\" @click=\"", "\"></div>\n    </td>\n  </tr></tbody></table></div>\n\n  <div class=\"List\" @click=\"", "\">\n  ", "\n  </div>"]);

    _templateObject2_90d461d0e12811e9872675d52dfcba91 = function _templateObject2_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject_90d461d0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style>\n    ", "\n    :host{\n      display: block;\n      width: 41px;\n      height: 24px;\n      cursor: pointer;\n      position: relative;\n    }\n    :host::before{\n      content: '';\n      display: block;\n      background: #e6e6e6;\n      position: absolute;\n      top: 3px;\n      left: 0;\n      right: 3px;\n      overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n      padding-top:16px;\n      border-radius: 8px;\n      transition: background-color 0.15s ease-out 0s;\n      box-shadow: inset 0 1px 2px rgba( 0, 0, 0, 0.2 );\n    }\n    :host(.checked)::before{\n      background: #3b9946;\n    }\n\n    :host::after{\n      content: '';\n      display: block;\n      width: 20px;\n      overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n      padding-top:20px;\n      background: #fff;\n      border-radius: 50%;\n      border: 1px solid #e8e8e8;\n      box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.1);\n      position: absolute;\n      top: 0;\n      left: 0;\n      transition: left 0.15s ease-out 0s;\n    }\n    :host(.checked)::after{\n      left: 17px;\n    }\n    </style>\n    "]);

    _templateObject_90d461d0e12811e9872675d52dfcba91 = function _templateObject_90d461d0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  var CheckboxSwitch =
  /*#__PURE__*/
  function (_LitElement) {
    babelHelpers.inherits(CheckboxSwitch, _LitElement);

    function CheckboxSwitch() {
      babelHelpers.classCallCheck(this, CheckboxSwitch);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(CheckboxSwitch).apply(this, arguments));
    }

    babelHelpers.createClass(CheckboxSwitch, [{
      key: "render",
      value: function render() {
        return (0, _head.html)(_templateObject_90d461d0e12811e9872675d52dfcba91(), _head.$globalStyleDefault);
      }
    }, {
      key: "updated",

      /** @method */
      value: function updated(changes) {
        if (changes.has('checked')) {
          this.classList.toggle('checked', this.checked);
        }
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          'checked': {
            'type': Boolean
          }
        };
      }
    }]);
    return CheckboxSwitch;
  }(_head.LitElement);

  ;
  customElements.define('checkbox-switch', CheckboxSwitch);

  var classElement = function classElement(_ref, selectedDomain)
  /*: string*/
  {
    var deleted = _ref.deleted,
        disabled = _ref.disabled,
        domain = _ref.domain;
    var classes = [];
    if (deleted) classes.push('deleted');
    if (disabled) classes.push('disabled');

    if (selectedDomain) {
      classes.push(domain === selectedDomain ? 'active' : 'inactive');
    }

    return classes.join(' ');
  };
  /** @function */


  var computeVisibleCountryFlagUrl = function computeVisibleCountryFlagUrl(_ref2)
  /*: string*/
  {
    var defaultCountry = _ref2.defaultCountry,
        country = _ref2.country,
        countries = _ref2.countries;
    var code
    /*: string*/
    = countries.includes(country) ? country : defaultCountry;
    if (code === 'usw') code = 'us';
    if (code === 'uk') code = 'gb';
    return "/images/flags/".concat(code, ".svg");
  };
  /** @function */


  var domainIcon = function domainIcon(domain
  /*?: string*/
  ) {
    return (
      /*: string*/
      domain ? 'https://www.google.com/s2/favicons?domain=' + domain : '/images/empty.png'
    );
  };
  /** @method */


  function _render(_ref3) {
    var _this = this;

    var defaultCountry = _ref3.defaultCountry,
        translations = _ref3.translations;
    return (0, _head.html)(_templateObject2_90d461d0e12811e9872675d52dfcba91(), _head.$globalStyleDefault, translations.on, this.domain, this.save, this.inputListener, translations.use, this.openCountryList, function () {
      if (!_this.country) {
        return (0, _head.html)(_templateObject3_90d461d0e12811e9872675d52dfcba91(), translations.off);
      }

      return (0, _head.html)(_templateObject4_90d461d0e12811e9872675d52dfcba91(), computeVisibleCountryFlagUrl({
        'country': _this.country,
        'countries': _this.countries,
        defaultCountry: defaultCountry
      }));
    }(), this.selectedDomain ? ' save' : '', this.save, this.listClick, this.filters.map(function (item) {
      return (0, _head.html)(_templateObject5_90d461d0e12811e9872675d52dfcba91(), classElement(item, _this.selectedDomain), _this.listElementClick(item), translations.removeSmartSetting, function () {
        if (item.disabled) {
          return (0, _head.html)(_templateObject6_90d461d0e12811e9872675d52dfcba91(), translations.select);
        }

        return (0, _head.html)(_templateObject7_90d461d0e12811e9872675d52dfcba91(), function () {
          if (!item.country) {
            return (0, _head.html)(_templateObject8_90d461d0e12811e9872675d52dfcba91(), translations.off);
          }

          return (0, _head.html)(_templateObject9_90d461d0e12811e9872675d52dfcba91(), computeVisibleCountryFlagUrl({
            'country': item.country,
            'countries': _this.countries,
            defaultCountry: defaultCountry
          }));
        }());
      }(), domainIcon(item.domain), item.view, translations.settingWasDeleted, _this.cancelRemove(item), translations.undo, _this.resetSelection);
    }));
  }

  ;
  var filtersTemplate = {
    'default': _render
  };
  /** Deferred based on Promise
  @return {Promise} */

  _exports.$filtersTemplate = filtersTemplate;

  var Deferred = function Deferred() {
    var res, rej;
    var deferred = new Promise(function (resolve, reject) {
      res = resolve;
      rej = reject;
    });
    deferred.resolve = res;
    deferred.reject = rej;
    return deferred;
  };

  _exports.$DeferredDefault = Deferred;
  var Deferred$1 = {
    'default': Deferred
  };
  _exports.$Deferred = Deferred$1;
  var translations
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'pleaseEnterDomain': 'please_enter_domain'
  });

  var FiltersDomain =
  /*#__PURE__*/
  function (_LitElement2) {
    babelHelpers.inherits(FiltersDomain, _LitElement2);
    babelHelpers.createClass(FiltersDomain, [{
      key: "render",
      value: function render() {
        return (0, _head.html)(_templateObject10_90d461d0e12811e9872675d52dfcba91(), _head.$globalStyleDefault, translations.pleaseEnterDomain);
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          'value': {
            'type': String
          }
        };
      } // Lifecycle

    }]);

    function FiltersDomain() {
      var _this2;

      babelHelpers.classCallCheck(this, FiltersDomain);
      _this2 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(FiltersDomain).call(this)); // flow ignore next line

      _this2.domLoad = Deferred();
      _this2.value = '';
      return _this2;
    }
    /** @method */


    babelHelpers.createClass(FiltersDomain, [{
      key: "updated",
      value: function () {
        var _updated = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(changes) {
          var oldValue, newValue;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!changes.has('value')) {
                    _context.next = 12;
                    break;
                  }

                  oldValue = changes.get('value');
                  newValue = this.value;

                  if (!(newValue === oldValue)) {
                    _context.next = 5;
                    break;
                  }

                  return _context.abrupt("return");

                case 5:
                  if (!(newValue === this.inputValue)) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt("return");

                case 7:
                  if (this.input) {
                    _context.next = 10;
                    break;
                  }

                  _context.next = 10;
                  return this.domLoad;

                case 10:
                  this.inputValue = newValue;
                  this.input.value = newValue;

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function updated(_x) {
          return _updated.apply(this, arguments);
        }

        return updated;
      }()
      /** @method */

    }, {
      key: "firstUpdated",
      value: function firstUpdated() {
        var _this3 = this;

        babelHelpers.get(babelHelpers.getPrototypeOf(FiltersDomain.prototype), "firstUpdated", this).call(this);
        this.input = this.shadowRoot.querySelector('input[type="text"]');
        this.inputValue = '';
        this.input.addEventListener('input', function (_ref4) {
          var value = _ref4['target'].value;
          value = value.replace(/\s+/g, '').toLowerCase(); // Save caret position

          var end
          /*: integer*/
          = _this3.input.selectionEnd;
          _this3.input.value = value;
          var newEnd
          /*: integer*/
          = end > value.length ? value.length : end;

          _this3.input.setSelectionRange(newEnd, newEnd); // Restore caret position


          _this3.inputValue = value;
          _this3.value = value;

          _this3.dispatchEvent(new CustomEvent('value-changed', {
            'detail': {
              value: value
            }
          }));
        });
        this.input.addEventListener('paste', function (event
        /*: ClipboardEvent*/
        ) {
          event.stopPropagation(); // Stop data actually being pasted into div

          event.preventDefault(); // Get pasted url via clipboard API

          var url
          /*: string*/
          = (event.clipboardData || window.clipboardData).getData('text/plain').trim();
          if (!url) return;

          try {
            _this3.value = new URL(url).hostname;
          } catch (e) {
            _this3.value = url.toLowerCase();
          } // TODO if not URL -> standard paste algorithm

        });
        this.input.addEventListener('keypress', function (event
        /*: KeyboardEvent*/
        ) {
          var code = event.code,
              which = event.which;
          if (code !== 'Enter' && which !== 13) return;
          event.preventDefault();

          _this3.dispatchEvent(new CustomEvent('save'));

          _this3.input.blur();
        });
        this.domLoad.resolve();
      }
    }]);
    return FiltersDomain;
  }(_head.LitElement);

  customElements.define('filters-domain', FiltersDomain);
  var _
  /*: Lodash*/
  = window._;

  var _browser = typeof browser !== 'undefined' ? browser : chrome;
  /*::
  type AdditionFilter = {|
    'country'?: string,
    'domain': string,
    'type': 'proxy' | 'direct'
  |};
  type VisibleFilter = {|
    'country': string | null,
    'deleted': boolean,
    'disabled'?: true | void,
    'domain': string,
    'view': string
  |}; */


  var translations$1
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'cancelEditing': 'cancel_editing',
    'off': 'off',
    'on': 'on',
    'pleaseEnterDomain': 'please_enter_domain',
    'pleaseEnterValidDomain': 'please_enter_valid_domain',
    'removeSmartSetting': 'remove_smart_setting',
    'select': 'select',
    'settingWasDeleted': 'setting_was_deleted',
    'thisDomainAlreadyInList': 'this_domain_already_in_list',
    'undo': 'undo',
    'use': 'use'
  });
  /** For sorting filters by alphabet
  @function */

  var alphabetFiltersSorting = function alphabetFiltersSorting(_ref5, _ref6) {
    var a = _ref5['view'];
    var b = _ref6['view'];
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  };

  var IndexFilters =
  /*#__PURE__*/
  function (_connect) {
    babelHelpers.inherits(IndexFilters, _connect);
    babelHelpers.createClass(IndexFilters, [{
      key: "render",
      value: function render() {
        return _render.call(this, {
          'defaultCountry': this.defaultCountry,
          translations: translations$1
        });
      }
    }, {
      key: "stateChanged",
      value: function stateChanged(_ref7)
      /*: void*/
      {
        var servers = _ref7.servers,
            user = _ref7.user;
        this.countries = _.transform(servers, function (carry, value, country
        /*: string*/
        ) {
          var servers = value[user.premium ? 'premium_servers' : 'servers'];
          if (servers) carry.push(country);
        }, []);
        /*::( this.countries: Array<string> )*/

        this.premium = user.premium;
      } // Lifecycle

    }, {
      key: "defaultCountry",
      // Properties
      get: function get() {
        return window.config.proxy.defaultCountry || 'nl';
      }
    }, {
      key: "translations",
      get: function get() {
        return translations$1;
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          'country': {
            // Country in flag select
            'type': String
          },
          'countries': {
            'type': Array
          },
          'defaultCountry': {
            'type': String
          },
          'domain': {
            // Input:text with domain
            'type': String
          },
          'filters': {
            'type': Array
          },
          'premium': {
            'type': Boolean
          },
          'selectedDomain': {
            // Used to split 'add' mode and 'modify' mode
            'type': String
          },
          'translations': {
            'type': Object
          }
        };
      }
    }]);

    function IndexFilters() {
      var _this4;

      babelHelpers.classCallCheck(this, IndexFilters);
      _this4 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(IndexFilters).call(this));
      _this4.countries = [];
      _this4.country = null;
      _this4.domain = '';
      _this4.filters = [];
      _this4.premium = null;
      _this4.selectedDomain = null;
      return _this4;
    }
    /** @method */


    babelHelpers.createClass(IndexFilters, [{
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        babelHelpers.get(babelHelpers.getPrototypeOf(IndexFilters.prototype), "disconnectedCallback", this).call(this);
        this.removeStoreListener();
        delete this.removeStoreListener;
        if (!this.documentClick) return;
        document.removeEventListener('mousedown', this.documentClick);
      }
      /** @method */

    }, {
      key: "firstUpdated",
      value: function () {
        var _firstUpdated = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee4() {
          var _this5 = this;

          var filters;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  babelHelpers.get(babelHelpers.getPrototypeOf(IndexFilters.prototype), "firstUpdated", this).call(this);
                  this.nodes = {
                    'list': this.shadowRoot.querySelector('div.List')
                  }; // Loading list of filters

                  _context4.next = 4;
                  return Promise.all(_head.$storeDefault.getState().pac.filters.map(
                  /*#__PURE__*/
                  function () {
                    var _ref8 = babelHelpers.asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee2(item) {
                      var view;
                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              item = _.cloneDeep(item);
                              item.country = item.proxyMode ? item.country : null;
                              delete item.proxyMode;
                              _context2.next = 5;
                              return _head.$punycodeDefault.toUnicode(item.domain);

                            case 5:
                              view = _context2.sent;
                              return _context2.abrupt("return", Object.assign(item, {
                                view: view,
                                'deleted': false
                              }));

                            case 7:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    }));

                    return function (_x2) {
                      return _ref8.apply(this, arguments);
                    };
                  }()));

                case 4:
                  filters = _context4.sent;
                  this.filters = filters.sort(alphabetFiltersSorting); // Alphabet sorting

                  this.filters
                  /*: Array<VisibleFilter>*/
                  ; // eslint-disable-line no-unused-expressions

                  // Nodes
                  this.domainInput = this.shadowRoot.querySelector('div.ChangeRule filters-domain');
                  this.countryNode = this.shadowRoot.querySelector('div.ChangeRule_Country'); // Listener to changes of filters.length

                  this.removeStoreListener = _head.$storeDefault.compare(function (_ref9) {
                    var filters = _ref9['pac'].filters;
                    return (
                      /*: Array<SiteFilter>*/
                      filters
                    );
                  },
                  /*#__PURE__*/
                  function () {
                    var _ref10 = babelHelpers.asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee3(listNew
                    /*: Array<SiteFilter>*/
                    , listOld
                    /*: Array<SiteFilter>*/
                    ) {
                      var action, filter, hasFilter, _filters, view, userLogined, condition, _filter, _hasFilter, _filters2;

                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              if (!(listNew.length === listOld.length)) {
                                _context3.next = 2;
                                break;
                              }

                              return _context3.abrupt("return");

                            case 2:
                              action
                              /*: string*/
                              = listNew.length > listOld.length ? 'addition' : 'deletion';

                              if (!(action === 'addition')) {
                                _context3.next = 17;
                                break;
                              }

                              filter = _.differenceBy(listNew, listOld, _.isEqual)[0];

                              if (filter) {
                                _context3.next = 7;
                                break;
                              }

                              return _context3.abrupt("return");

                            case 7:
                              hasFilter = _this5.filters.some(function (_ref11) {
                                var domain = _ref11.domain;
                                return domain === filter.domain;
                              });

                              if (!hasFilter) {
                                _context3.next = 10;
                                break;
                              }

                              return _context3.abrupt("return");

                            case 10:
                              _filters = _.cloneDeep(_this5.filters);
                              _context3.next = 13;
                              return _head.$punycodeDefault.toUnicode(filter.domain);

                            case 13:
                              view = _context3.sent;

                              _filters.push({
                                'country': filter.country,
                                'deleted': false,
                                'domain': filter.domain,
                                view: view
                              });

                              _this5.filters = _filters.sort(alphabetFiltersSorting); // Render here

                              return _context3.abrupt("return");

                            case 17:
                              if (!(action === 'deletion')) {
                                _context3.next = 32;
                                break;
                              }

                              userLogined = Boolean(_head.$storeDefault.getState().user.email); // Logout

                              condition = !userLogined && !listNew.length && listOld.length - listNew.length >= 2;

                              if (!condition) {
                                _context3.next = 23;
                                break;
                              }

                              _this5.filters = [];
                              return _context3.abrupt("return");

                            case 23:
                              _filter = _.differenceBy(listOld, listNew, _.isEqual)[0];

                              if (_filter) {
                                _context3.next = 26;
                                break;
                              }

                              return _context3.abrupt("return");

                            case 26:
                              _hasFilter
                              /*: boolean*/
                              = _this5.filters.some(function (_ref12) {
                                var deleted = _ref12.deleted,
                                    domain = _ref12.domain;
                                return domain === _filter.domain && !deleted;
                              });

                              if (_hasFilter) {
                                _context3.next = 29;
                                break;
                              }

                              return _context3.abrupt("return");

                            case 29:
                              _filters2 = _.cloneDeep(_this5.filters);

                              _.remove(_filters2, function (_ref13) {
                                var domain = _ref13.domain;
                                return domain === _filter.domain;
                              });

                              _this5.filters = _filters2; // Render here

                            case 32:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3);
                    }));

                    return function (_x3, _x4) {
                      return _ref10.apply(this, arguments);
                    };
                  }());

                case 10:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function firstUpdated() {
          return _firstUpdated.apply(this, arguments);
        }

        return firstUpdated;
      }() // Methods

      /** @method */

    }, {
      key: "cancelRemove",
      value: function cancelRemove(_ref14)
      /*: Function*/
      {
        var _this6 = this;

        var country = _ref14.country,
            domain = _ref14.domain;
        return function () {
          var condition = _this6.filters.filter(function (_ref15) {
            var deleted = _ref15.deleted,
                disabled = _ref15.disabled;
            return !deleted && !disabled;
          }).length && !_head.$storeDefault.getState().user.premium;

          if (condition) {
            // Premium popup show condition
            _this6.showPremiumPopup();

            return;
          }

          var filters = _.cloneDeep(_this6.filters);

          filters.find(function (item) {
            return item.domain === domain;
          }).deleted = false;
          _this6.filters = filters; // Render here

          var data
          /*: AdditionFilter*/
          = {
            domain: domain,
            'type': country ? 'proxy' : 'direct'
          };
          if (country) data.country = country;

          _head.$proxyDefault.siteFilters.add(data);
        };
      }
      /** @method */

    }, {
      key: "inputListener",
      value: function inputListener(_ref16) {
        var value = _ref16['detail'].value;
        this.domain = value;
      }
      /** @method */

    }, {
      key: "listClick",
      value: function listClick(_ref17) {
        var target = _ref17.target;
        if (target !== this.nodes.list) return;
        this.resetSelection();
      }
      /** @method */

    }, {
      key: "listElementClick",
      value: function listElementClick(_ref18)
      /*: Function*/
      {
        var _this7 = this;

        var country = _ref18.country,
            disabled = _ref18.disabled,
            domain = _ref18.domain,
            view = _ref18.view;
        return function (_ref19) {
          var target = _ref19.target;
          if (!babelHelpers.instanceof(target, HTMLElement)) return; // Remove click

          if (target.classList.contains('List_Remove')) {
            var filters
            /*: Array<VisibleFilter>*/
            = _.cloneDeep(_this7.filters);

            var filter
            /*: VisibleFilter | void*/
            = filters.find(function (item) {
              return item.domain === domain;
            });
            if (filter) filter.deleted = true; // Flow crap

            _this7.filters = filters; // Render here

            _head.$proxyDefault.siteFilters.remove(domain);

            _this7.resetSelection();

            return;
          } // Select disabled click


          if (target.classList.contains('List_Select_Button')) {
            {
              // Popup part
              var _filters3
              /*: Array<VisibleFilter>*/
              = _.cloneDeep(_this7.filters);

              var _filter2
              /*: VisibleFilter | void*/
              = _filters3.find(function (_ref20) {
                var disabled = _ref20.disabled;
                return !disabled;
              });

              if (_filter2) _filter2.disabled = true;
              {
                var _filter3
                /*: VisibleFilter | void*/
                = _filters3.find(function (_ref21) {
                  var ownDomain = _ref21['domain'];
                  return domain === ownDomain;
                });

                if (_filter3) delete _filter3.disabled; // Flow crap
              }
              _this7.filters = _filters3; // Render here
            } // Internal extension part

            (0, _sendMessage.$sendMessageDefault)({
              'type': 'select disabled site filter',
              domain: domain
            });
            return;
          } // Disabled element


          if (disabled) {
            _this7.resetSelection();

            return;
          } // Activate click


          _this7.country = country;
          _this7.domain = view;
          _this7.selectedDomain = domain;
        };
      }
      /** @method */

    }, {
      key: "openCountryList",
      value: function openCountryList()
      /*: void*/
      {
        var _this8 = this;

        /*::
        type FiltersCountryList = HTMLElement & {
          'countries'?: {
            'code': string,
            'name': string
          },
          'country'?: string
        }; */
        var element
        /*: FiltersCountryList*/
        = document.createElement('filters-country-list');
        element.countries = this.countries.map(function (country) {
          return {
            'code': country,
            'name': _browser.i18n.getMessage('country_name_' + country.toUpperCase())
          };
        }).sort(function (_ref22, _ref23) {
          var a = _ref22['name'];
          var b = _ref23['name'];
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });
        element.country = this.country;
        element.addEventListener('select', function (_ref24) {
          var country = _ref24['detail'];

          /*::( country: string );*/
          _this8.country = country;
        });
        element.addEventListener('disable', function () {
          _this8.country = null;
        });

        var _this$countryNode$get = this.countryNode.getBoundingClientRect(),
            offsetLeft = _this$countryNode$get['left'],
            offsetTop = _this$countryNode$get['top'];

        var offsetHeight
        /*: integer*/
        = this.countryNode.offsetHeight;
        var top
        /*: integer*/
        = offsetTop + offsetHeight;
        var right
        /*: integer*/
        = window.innerWidth - offsetLeft - this.countryNode.offsetWidth;
        var height
        /*: integer*/
        = window.innerHeight - offsetTop - offsetHeight;
        element.style.cssText = "top:".concat(top, "px;right:").concat(right, "px;max-height:").concat(height, "px;");
        if (document.body) document.body.append(element); // Flow crap

        this.documentClick = function (_ref25) {
          var target = _ref25.target;

          // Click on element
          if (babelHelpers.instanceof(target, HTMLElement) && (element.contains(target) || target === element)) {
            if (target.classList.contains('E')) {
              document.removeEventListener('mousedown', _this8.documentClick);
              delete _this8.documentClick;
              return;
            }

            var parent;

            while (true) {
              parent = (parent || target).parentElement;
              if (!parent) break;

              if (parent.classList.contains('E')) {
                document.removeEventListener('mousedown', _this8.documentClick);
                delete _this8.documentClick;
                return;
              }
            } // Do nothing


            return;
          }

          element.remove();
          document.removeEventListener('mousedown', _this8.documentClick);
          delete _this8.documentClick;
        };

        document.addEventListener('mousedown', this.documentClick
        /*: MouseEventListener*/
        );
      }
      /** @method */

    }, {
      key: "resetSelection",
      value: function resetSelection()
      /*: void*/
      {
        this.country = null;
        this.domain = '';
        this.selectedDomain = null;
      }
      /** Add or modify filter
      @method */

    }, {
      key: "save",
      value: function () {
        var _save = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5() {
          var _this9 = this;

          var domainView, domain, createError, parts, isIp, hasErrors, zone, domains, condition, filter, filters, _filters4;

          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  // visible form for domain (for user)
                  domainView
                  /*: string*/
                  = this.domain; // punycode converted form for domain

                  _context5.next = 3;
                  return _head.$punycodeDefault.toASCII(domainView);

                case 3:
                  domain
                  /*: string | void*/
                  = _context5.sent;

                  if (!(typeof domain === 'undefined')) {
                    _context5.next = 6;
                    break;
                  }

                  return _context5.abrupt("return");

                case 6:
                  // Crap from punycode case

                  /** @function */
                  createError = function createError(text
                  /*: string*/
                  )
                  /*: void*/
                  {
                    var element
                    /*: HTMLElement & { 'text'?: string }*/
                    = document.createElement('tooltip-error');
                    element.text = text;

                    var _this9$domainInput$ge = _this9.domainInput.getBoundingClientRect(),
                        left = _this9$domainInput$ge.left,
                        top = _this9$domainInput$ge.top;

                    top += _this9.domainInput.offsetHeight - 1;
                    element.style.cssText = "top:".concat(top, "px;left:").concat(left, "px;");
                    if (document.body) document.body.append(element); // Flow crap

                    var listener = function () {
                      var first = true;
                      return function () {
                        if (first) {
                          first = false;
                          return;
                        }

                        element.remove();
                        document.removeEventListener('click', listener);
                      };
                    }();

                    document.addEventListener('click', listener);
                  }; // Check for value existence


                  if (domainView) {
                    _context5.next = 10;
                    break;
                  }

                  createError(translations$1.pleaseEnterDomain);
                  return _context5.abrupt("return");

                case 10:
                  if (!(domain.split('.').length === 1)) {
                    _context5.next = 13;
                    break;
                  }

                  createError(translations$1.pleaseEnterValidDomain);
                  return _context5.abrupt("return");

                case 13:
                  // Check for correct domain
                  parts
                  /*: Array<string>*/
                  = domain.split('.');
                  isIp
                  /*: boolean*/
                  = parts.length === 4 && parts.every(function (part) {
                    return /^[0-9]+$/.test(part) && Number(part) >= 0 && Number(part) <= 255;
                  });
                  hasErrors
                  /*: boolean*/
                  = !isIp && parts.some(function (part) {
                    return !/^[a-zA-Z0-9-_]+$/.test(part);
                  });

                  if (!hasErrors) {
                    _context5.next = 19;
                    break;
                  }

                  createError(translations$1.pleaseEnterValidDomain);
                  return _context5.abrupt("return");

                case 19:
                  if (isIp) {
                    _context5.next = 24;
                    break;
                  }

                  // Check for correct domain zone
                  zone
                  /*: string*/
                  = domain.split('.').pop();

                  if (window.domainZoneList.includes(zone)) {
                    _context5.next = 24;
                    break;
                  }

                  createError(translations$1.pleaseEnterValidDomain);
                  return _context5.abrupt("return");

                case 24:
                  if (this.selectedDomain) {
                    _context5.next = 29;
                    break;
                  }

                  domains
                  /*: Array<string>*/
                  = this.filters.map(function (_ref26) {
                    var domain = _ref26.domain;
                    return domain;
                  });

                  if (!domains.includes(domain)) {
                    _context5.next = 29;
                    break;
                  }

                  createError(translations$1.thisDomainAlreadyInList);
                  return _context5.abrupt("return");

                case 29:
                  if (this.selectedDomain) {
                    _context5.next = 42;
                    break;
                  }

                  condition = this.filters.filter(function (_ref27) {
                    var deleted = _ref27.deleted,
                        disabled = _ref27.disabled;
                    return !deleted && !disabled;
                  }).length && !_head.$storeDefault.getState().user.premium;

                  if (!condition) {
                    _context5.next = 34;
                    break;
                  }

                  // Premium popup show condition
                  this.showPremiumPopup();
                  return _context5.abrupt("return");

                case 34:
                  (0, _sendMessage.$sendMessageDefault)({
                    'type': 'сounters.increase',
                    'property': 'popup: smart settings: add rule'
                  });
                  filter
                  /*: AdditionFilter*/
                  = this.country ? {
                    'country': this.country,
                    domain: domain,
                    'type': 'proxy'
                  } : {
                    domain: domain,
                    'type': 'direct'
                  }; // Popup part

                  filters = this.filters.slice();
                  filters.unshift({
                    'country': this.country,
                    'deleted': false,
                    domain: domain,
                    'view': domainView
                  });
                  this.filters = filters; // Internal extension part

                  _head.$proxyDefault.siteFilters.add(filter);

                  _context5.next = 48;
                  break;

                case 42:
                  // Popup part
                  _filters4 = this.filters.slice();

                  _.remove(_filters4, function (_ref28) {
                    var domain = _ref28.domain;
                    return domain === _this9.selectedDomain;
                  });

                  _filters4.push({
                    'country': this.country,
                    'deleted': false,
                    domain: domain,
                    'view': domainView
                  });

                  _filters4.sort(alphabetFiltersSorting);

                  this.filters = _filters4;
                  // Internal extension part
                  (0, _sendMessage.$sendMessageDefault)({
                    'type': 'change site filter',
                    'country': this.country,
                    domain: domain,
                    'selectedDomain': this.selectedDomain
                  });

                case 48:
                  // After successfull addition/modification
                  this.resetSelection();

                case 49:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function save() {
          return _save.apply(this, arguments);
        }

        return save;
      }()
      /** @method */

    }, {
      key: "showPremiumPopup",
      value: function () {
        var _showPremiumPopup = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee6() {
          var popupPremium;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  if (!this.popupPremiumFreeze) {
                    _context6.next = 2;
                    break;
                  }

                  return _context6.abrupt("return");

                case 2:
                  this.popupPremiumFreeze = true;
                  popupPremium = document.createElement('popup-premium-onerule');
                  popupPremium.style.cssText = 'top:-100%;';
                  if (document.body) document.body.append(popupPremium); // Flow crap

                  (0, _head.$gaDefault)('premium', 'show');
                  _context6.next = 9;
                  return window.anime({
                    'targets': popupPremium,
                    'top': 0,
                    'duration': 800,
                    'easing': 'linear'
                  }).finished;

                case 9:
                  popupPremium.style.cssText = '';
                  this.popupPremiumFreeze = false;

                case 11:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        function showPremiumPopup() {
          return _showPremiumPopup.apply(this, arguments);
        }

        return showPremiumPopup;
      }()
    }]);
    return IndexFilters;
  }((0, _head.connect)(_head.$storeDefault)(_head.LitElement));

  ;
  customElements.define('index-filters', IndexFilters);
  var translations$2
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'change': 'change',
    'connectionsNotEncrypted': 'your_browsers_connections_are_not_encrypted',
    'privacyProtected': 'your_privacy_is_protected',
    'protectionDisabled': 'privacy_protection_disabled',
    'protectMe': 'protect_me'
  });
  /** @function */

  var flagUrl = function flagUrl(flag
  /*: string | void*/
  )
  /*: string*/
  {
    if (flag === 'usw') flag = 'us';
    if (flag === 'uk') flag = 'gb';
    return flag ? "/images/flags/".concat(flag, ".svg") : '/images/empty.png';
  };
  /** @method */


  function render$1() {
    var _this10 = this;

    return (0, _head.html)(_templateObject11_90d461d0e12811e9872675d52dfcba91(), _head.$globalStyleDefault, this.complexView.enabled ? '' : 'transition', translations$2.protectionDisabled, translations$2.connectionsNotEncrypted, function () {
      if (!_this10.complexView.enabled) {
        return (0, _head.html)(_templateObject12_90d461d0e12811e9872675d52dfcba91(), _this10.enableProxy, translations$2.protectMe);
      }

      return (0, _head.html)(_templateObject13_90d461d0e12811e9872675d52dfcba91(), _this10.proxyEnabled, _this10.country, _this10.complexView, _this10.proxySwitch, _this10.domainProxySwitch, _this10.countryChange, _this10.domainCountryChange);
    }(), translations$2.privacyProtected, function () {
      if (_this10.complexView.enabled) {
        return (0, _head.html)(_templateObject14_90d461d0e12811e9872675d52dfcba91(), _this10.proxyEnabled, _this10.country, _this10.complexView, _this10.proxySwitch, _this10.domainProxySwitch, _this10.countryChange, _this10.domainCountryChange);
      }

      return (0, _head.html)(_templateObject15_90d461d0e12811e9872675d52dfcba91(), _this10.openLocations, function () {
        if (!_this10.country) return '';
        return (0, _head.html)(_templateObject16_90d461d0e12811e9872675d52dfcba91(), flagUrl(_this10.country));
      }(), _this10.countryName, function () {
        if (!_this10.complexView.rating) return '';
        return (0, _head.html)(_templateObject17_90d461d0e12811e9872675d52dfcba91(), _this10.complexView.rating);
      }(), translations$2.change);
    }(), function () {
      if (!_this10.settingsIconNewFeature) return '';
      return (0, _head.html)(_templateObject18_90d461d0e12811e9872675d52dfcba91());
    }(), this.openSettings);
  }

  var homeTemplate = {
    'default': render$1
  };
  /*::
  type TreeTextNode = {|
    'text': string
  |};
  
  type TreeElement = {|
    'attributes': ?Object,
    'children': Array<TreeElement>,
    'class': ?string,
    'node': ?Function,
    'style': ?string,
    'tag': string,
    'text': ?string
  |}; */

  _exports.$homeTemplate = homeTemplate;
  var possibleAttributes
  /*: Array<string>*/
  = Object.freeze(['autocomplete', 'colspan', 'href', 'name', 'rowspan', 'target', 'type']);
  /** Self-looped function to create elements tree
  @Function */

  var createElement = function createElement(object
  /*: TreeTextNode | TreeElement*/
  )
  /*: Node*/
  {
    if (typeof object.tag !== 'string') {
      if (typeof object.text !== 'string') {
        throw new Error('createElement called without text property');
      }

      return document.createTextNode(object.text);
    }

    var element = document.createElement(object.tag);
    if (object.class) element.setAttribute('class', object.class);
    if (object.style) element.setAttribute('style', object.style);

    if (object.attributes) {
      Object.keys(object.attributes).forEach(function (attribute) {
        if (possibleAttributes.indexOf(attribute) === -1) return; // flow ignore next line

        var value = object.attributes[attribute];
        element.setAttribute(attribute, value);
      });
    }

    if (object.node) object.node(element);
    if (object.text) element.textContent = object.text;

    if (object.children) {
      var children
      /*: Array<Node>*/
      = [];
      object.children.forEach(function (child) {
        children.push(createElement(child));
      });
      children.forEach(function (child) {
        element.appendChild(child);
      });
    }

    return element;
  };

  _exports.$createElementDefault = createElement;
  var createElement$1 = {
    'default': createElement
  };
  _exports.$createElement = createElement$1;
  var price
  /*: string*/
  = '3.33';
  var translations$3
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'continueUsing': 'continue_using_premium',
    'getFreePremium': 'get_free_premium',
    'getTurboSpeed': 'get_turbo_speed',
    'goAheadAndRenewIt': 'go_ahead_and_renew_it',
    'moneyBackGuarantee': '7_days_money_back_guarantee',
    'premiumIsAboutToExpire': 'your_premium_is_about_to_expire',
    'turboSpeedInFree': 'turbo_speed_in_free_premium',
    'upgradeConnectionSpeed': 'upgrade_connection_speed'
  });
  translations$3.fromOnlyPricePerMonth = (0, _head.$internationalizeDefault)('from_only_X_per_month').replace(/XXX/g, price);
  /** @function */

  function render$2() {
    return (0, _head.html)(_templateObject19_90d461d0e12811e9872675d52dfcba91(), _head.$globalStyleDefault, this.activePromo !== 0 ? 'hidden' : '', this.activePromo !== 1 ? 'hidden' : '', this.expirationClose, translations$3.premiumIsAboutToExpire, translations$3.goAheadAndRenewIt, this.expirationPremiumLink, translations$3.continueUsing, this.activePromo !== 2 ? 'hidden' : '', translations$3.upgradeConnectionSpeed, translations$3.fromOnlyPricePerMonth, translations$3.moneyBackGuarantee, this.premiumLink, translations$3.getTurboSpeed);
  }

  ;
  var promoTemplate = {
    'default': render$2
  };
  /** Returns random int value between 0 (inclusive) and the specified value (exclusive)
  @function */

  _exports.$promoTemplate = promoTemplate;

  var randomInt = function randomInt(max
  /*: integer*/
  ) {
    return (
      /*: number*/
      Math.floor(Math.random() * max)
    );
  };
  /**
  Returns random array element using weights. Element weight should be stored in 'weight' property of array element.
  If 'weight' property is absent then weight for this element is 1.
  @function
  @return - one of array elements */
  // flow ignore next line


  var weightedRandom = function weightedRandom(array
  /*: Array<Object>*/
  )
  /*: Object*/
  {
    var totalWeight = 0;
    var map = array.map(function (_ref29) {
      var weight = _ref29.weight;
      weight = weight || 1;
      var start = totalWeight;
      totalWeight += weight;
      return {
        start: start,
        'end': totalWeight
      };
    });
    var random = randomInt(totalWeight);

    for (var i = 0; i < map.length; i++) {
      if (random >= map[i].start && random < map[i].end) {
        return array[i];
      }
    }
  };

  _exports.$weightedRandomDefault = weightedRandom;
  var weightedRandom$1 = {
    'default': weightedRandom
  };
  _exports.$weightedRandom = weightedRandom$1;
  var _$1
  /*: Lodash*/
  = window._;
  /*::
  type PromoItem = {|
  'node': HTMLElement | null,
  'weight': number,
  'premium': boolean,
  'name': string,
  'gaId': string
  |};
  */

  var IndexHomePromo =
  /*#__PURE__*/
  function (_connect2) {
    babelHelpers.inherits(IndexHomePromo, _connect2);
    babelHelpers.createClass(IndexHomePromo, [{
      key: "render",
      value: function render() {
        return render$2.call(this);
      }
    }, {
      key: "stateChanged",
      value: function stateChanged(_ref30)
      /*: void*/
      {
        var days = _ref30['daysAfterInstall'],
            promotions = _ref30.promotions,
            user = _ref30.user;
        var _window = window,
            browsecLink = _window.browsecLink;
        this.expirationPremiumLink = browsecLink(window.pageLinks.base + '/en/orders/new?plan_id=annual', function (search) {
          return Object.assign(search, {
            'utm_source': 'Chromium extension'
          });
        });
        this.premiumLink = browsecLink(window.pageLinks.premium, function (search) {
          return Object.assign(search, {
            'utm_source': 'Chromium extension',
            'utm_medium': 'banner',
            'utm_campaign': 'banner-' + 'banner_speed_new'
          });
        });
        this.promotions = promotions;

        this.user = function () {
          var localUser = _$1.cloneDeep(user);

          delete localUser.validUntil;
          delete localUser.version;
          return localUser;
        }();
      } // Lifecycle

    }], [{
      key: "properties",
      get: function get() {
        return {
          'expirationPremiumLink': {
            'type': String
          },
          'premiumLink': {
            'type': String
          },
          'user': {
            'type': Object
          },
          'activePromo': {
            'type': Number
          },
          'visible': {
            'type': Boolean
          }
        };
      }
    }]);

    function IndexHomePromo() {
      var _this11;

      babelHelpers.classCallCheck(this, IndexHomePromo);
      _this11 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(IndexHomePromo).call(this));
      _this11.activePromo = null;
      _this11.visible = null;
      return _this11;
    }
    /** @method */


    babelHelpers.createClass(IndexHomePromo, [{
      key: "updated",
      value: function updated(changes) {
        if (changes.has('promotions')) {
          var oldPromotions = changes.get('promotions');
          var newPromotions = this.promotions; // Not first call, LitElement equality problems

          if (oldPromotions && !_$1.isEqual(oldPromotions, newPromotions)) {
            this.setActivePromo(this.user);
          }
        }

        if (changes.has('visible')) {
          this.classList.toggle('visible', this.visible);
          this.dispatchEvent(new CustomEvent('visible', {
            'detail': {
              'visible': this.visible
            }
          }));
        }
      }
      /** @method */

    }, {
      key: "firstUpdated",
      value: function firstUpdated() {
        var _this12 = this;

        babelHelpers.get(babelHelpers.getPrototypeOf(IndexHomePromo.prototype), "firstUpdated", this).call(this); // Force redux state to be ready

        this.stateChanged(_head.$storeDefault.getState()); // Deleting all empty text nodes

        Array.from(this.shadowRoot.childNodes).filter(function (node) {
          return node.nodeType !== Node.ELEMENT_NODE;
        }).forEach(function (node) {
          _this12.shadowRoot.removeChild(node);
        }); // Getting all data from other nodes

        this.elements = Array.from(this.shadowRoot.children).filter(function (element) {
          return element.tagName.toLowerCase() !== 'style';
        }).map(function (element) {
          return {
            'node': element.querySelector('a'),
            'weight': Number(element.dataset.weight) || 1,
            'premium': element.dataset.premium === 'true',
            'name': element.dataset.name || '',
            'gaId': element.dataset.ga
          };
        });
        this.elements
        /*: Array<PromoItem>*/
        ; // eslint-disable-line no-unused-expressions
        // Initial render

        this.setActivePromo(this.user); // Click on links

        this.elements.filter(function (_ref31) {
          var node = _ref31.node;
          return node;
        }).forEach(function (_ref32) {
          var node = _ref32.node,
              gaId = _ref32.gaId;
          node.addEventListener('click',
          /*#__PURE__*/
          babelHelpers.asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (gaId) {
                      (0, _head.$gaDefault)({
                        'category': 'banner',
                        'action': 'click',
                        'label': gaId
                      });
                    }

                    _context7.next = 3;
                    return new Promise(function (resolve) {
                      setTimeout(resolve, 50);
                    });

                  case 3:
                    if (window && window.close) window.close();

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          })));
        });
      } // Methods

      /** @method */

    }, {
      key: "expirationClose",
      value: function () {
        var _expirationClose = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee8() {
          var untilDate;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  untilDate = new Date(this.user.subscription.paidUntil);
                  _context8.next = 3;
                  return _head.$storageDefault.set('userClosedWarnToPremiumEndDate', String(untilDate));

                case 3:
                  this.setActivePromo(this.user);

                case 4:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        function expirationClose() {
          return _expirationClose.apply(this, arguments);
        }

        return expirationClose;
      }()
      /** @method */

    }, {
      key: "setActivePromo",
      value: function () {
        var _setActivePromo = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee10(user) {
          var _this13 = this;

          var promos, activePromo, visible;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  if (this.elements) {
                    _context10.next = 2;
                    break;
                  }

                  return _context10.abrupt("return");

                case 2:
                  _context10.next = 4;
                  return babelHelpers.asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee9() {
                    var promos, untilDate, userClosedWarnToPremiumEndDate, condition, promo, promotion, _promotion$banner, bannerLink, structure, parent, link;

                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            promos = _this13.elements.slice(1);
                            promos = promos.filter(function (_ref35) {
                              var premium = _ref35.premium;
                              return premium === user.premium;
                            }); // User's premium expiration

                            if (!user.premium) {
                              _context9.next = 15;
                              break;
                            }

                            untilDate = new Date(user.subscription.paidUntil);
                            _context9.next = 6;
                            return _head.$storageDefault.get('userClosedWarnToPremiumEndDate');

                          case 6:
                            userClosedWarnToPremiumEndDate = _context9.sent;
                            condition = _$1.get(user, 'subscription.auto_renewal') || // Only payment without subscription
                            userClosedWarnToPremiumEndDate === String(untilDate) || Date.now() < untilDate.getTime() - 1000 * 3600 * 24 * 2; // Minus two days before expiration

                            if (condition) {
                              _context9.next = 14;
                              break;
                            }

                            promo
                            /*: PromoItem | void*/
                            = promos.find(function (_ref36) {
                              var name = _ref36.name;
                              return name === 'premium expiration soon';
                            });

                            if (!promo) {
                              _context9.next = 12;
                              break;
                            }

                            return _context9.abrupt("return", [promo]);

                          case 12:
                            _context9.next = 15;
                            break;

                          case 14:
                            promos = promos.filter(function (_ref37) {
                              var name = _ref37.name;
                              return name !== 'premium expiration soon';
                            });

                          case 15:
                            // Do we have some current visible promo
                            promotion
                            /*: Promotion | void*/
                            = window.activePromotion; // If we have active promotion -> build it

                            if (!promotion) {
                              _context9.next = 28;
                              break;
                            }

                            if (promotion.banner) {
                              _context9.next = 19;
                              break;
                            }

                            throw new Error('No promotion.banner');

                          case 19:
                            // Flow crap
                            _promotion$banner = promotion.banner, bannerLink = _promotion$banner['link'], structure = _promotion$banner.structure;
                            parent
                            /*: HTMLElement*/
                            = _this13.shadowRoot.querySelector('div.Downloadable');
                            link = document.createElement('a');
                            link.href = bannerLink;
                            link.target = '_blank'; // Appending nodes

                            Array.from(parent.children).forEach(function (element) {
                              element.remove();
                            });
                            parent.appendChild(createElement(structure));
                            parent.appendChild(link);
                            return _context9.abrupt("return", [_this13.elements[0]]);

                          case 28:
                            // Free user
                            promos = promos.filter(function (_ref38) {
                              var gaId = _ref38.gaId;
                              return window.showSpeedPromo && gaId === 'banner_speed_new' || !window.showSpeedPromo && gaId !== 'banner_speed_new';
                            });
                            return _context9.abrupt("return", promos);

                          case 30:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }))();

                case 4:
                  promos
                  /*: Array<PromoItem>*/
                  = _context10.sent;
                  if (promos.length > 1) promos = [weightedRandom(promos)];
                  activePromo
                  /*: PromoItem | null*/
                  = promos.length === 1 ? promos.pop() : null;

                  if (activePromo && activePromo.gaId) {
                    (0, _head.$gaDefault)({
                      'category': 'banner',
                      'action': 'show',
                      'label': activePromo.gaId
                    });
                  }

                  this.activePromo = activePromo ? this.elements.indexOf(activePromo) : null;
                  visible
                  /*: boolean*/
                  = this.activePromo !== null;
                  if (visible !== this.visible) this.visible = visible;

                case 11:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }));

        function setActivePromo(_x5) {
          return _setActivePromo.apply(this, arguments);
        }

        return setActivePromo;
      }()
    }]);
    return IndexHomePromo;
  }((0, _head.connect)(_head.$storeDefault)(_head.LitElement));

  ;
  customElements.define('index-home-promo', IndexHomePromo);
  var translations$4
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'otherWebsites': 'other_websites'
  }); // Computed properties

  var flagUrl$1 = function flagUrl$1(flag
  /*: string | void*/
  )
  /*: string*/
  {
    if (flag === 'usw') flag = 'us';
    if (flag === 'uk') flag = 'gb';
    return flag ? "/images/flags/".concat(flag, ".svg") : '/images/empty.png';
  };

  var IndexHomeSwitches =
  /*#__PURE__*/
  function (_LitElement3) {
    babelHelpers.inherits(IndexHomeSwitches, _LitElement3);
    babelHelpers.createClass(IndexHomeSwitches, [{
      key: "render",
      value: function render() {
        var _this15 = this;

        return (0, _head.html)(_templateObject20_90d461d0e12811e9872675d52dfcba91(), _head.$globalStyleDefault, this.view.on, this.domainProxySwitch, function () {
          if (!_this15.view.country) return '';
          return (0, _head.html)(_templateObject21_90d461d0e12811e9872675d52dfcba91(), _this15.domainCountryChange, flagUrl$1(_this15.view.country), _this15.view.country);
        }(), this.view.view, this.proxyEnabled, this.proxySwitch, function () {
          if (!_this15.proxyEnabled) return '';
          return (0, _head.html)(_templateObject22_90d461d0e12811e9872675d52dfcba91(), _this15.countryChange, flagUrl$1(_this15.proxyCountry), _this15.proxyCountry);
        }(), translations$4.otherWebsites);
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          'proxyEnabled': {
            'type': Boolean
          },
          'proxyCountry': {
            'type': String
          },
          'view': {
            'type': Object
          }
        };
      }
    }]);

    function IndexHomeSwitches() {
      var _this14;

      babelHelpers.classCallCheck(this, IndexHomeSwitches);
      _this14 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(IndexHomeSwitches).call(this));
      _this14.view = {};
      return _this14;
    } // Methods

    /** @method */


    babelHelpers.createClass(IndexHomeSwitches, [{
      key: "proxySwitch",
      value: function proxySwitch()
      /*: void*/
      {
        this.dispatchEvent(new CustomEvent('proxyswitch'));
      }
      /** @method */

    }, {
      key: "domainProxySwitch",
      value: function domainProxySwitch()
      /*: void*/
      {
        this.dispatchEvent(new CustomEvent('domainproxyswitch'));
      }
      /** @method */

    }, {
      key: "countryChange",
      value: function countryChange()
      /*: void*/
      {
        this.dispatchEvent(new CustomEvent('countrychange'));
      }
      /** @method */

    }, {
      key: "domainCountryChange",
      value: function domainCountryChange()
      /*: void*/
      {
        this.dispatchEvent(new CustomEvent('domaincountrychange'));
      }
    }]);
    return IndexHomeSwitches;
  }(_head.LitElement);

  ;
  customElements.define('index-home-switches', IndexHomeSwitches);
  var _$2
  /*: Lodash*/
  = window._;
  /** @function */

  var getSettingsIconNewFeature =
  /*#__PURE__*/
  function () {
    var _ref39 = babelHelpers.asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee11() {
      var storageValue, featureNotShown;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return _head.$storageDefault.get('newSettingsFeatureTimezoneChange1');

            case 2:
              storageValue = _context11.sent;
              featureNotShown
              /*: boolean*/
              = typeof storageValue === 'boolean' ? storageValue : true;

              if (!featureNotShown) {
                _context11.next = 6;
                break;
              }

              return _context11.abrupt("return", true);

            case 6:
              return _context11.abrupt("return", Boolean(_head.$storeDefault.getState().webrtcBlock && !_head.$permissionsDefault.includes('privacy') // Can be true only in Chrome
              ));

            case 7:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function getSettingsIconNewFeature() {
      return _ref39.apply(this, arguments);
    };
  }();

  var IndexHome =
  /*#__PURE__*/
  function (_connect3) {
    babelHelpers.inherits(IndexHome, _connect3);
    babelHelpers.createClass(IndexHome, [{
      key: "render",
      value: function render() {
        return render$1.call(this);
      }
    }, {
      key: "stateChanged",
      value: function stateChanged(_ref40)
      /*: void*/
      {
        var _this17 = this;

        var domain = _ref40.domain,
            servers = _ref40.servers,
            pac = _ref40.pac,
            ping = _ref40.ping,
            user = _ref40.user;
        this.countries = _$2.transform(servers, function (carry, value, country) {
          var servers = value[user.premium ? 'premium_servers' : 'servers'];
          if (servers) carry.push(country);
        }, []);
        this.country = pac.country;
        this.proxyEnabled = pac.mode === 'proxy';
        /*::
        type ComplexView = {|
          'country'?: string,
          'domain'?: string,
          'enabled': boolean,
          'on'?: boolean,
          'rating'?: integer,
          'view'?: string
        |};
        */

        babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee12() {
          var pacCountry, filters, premiumUser, rating, filter, country, proxyMode, view, countries;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  pacCountry = pac['country'], filters = pac.filters;
                  premiumUser = user['premium'];

                  rating
                  /*: integer | void*/
                  = function () {
                    if (!ping.length || !pacCountry) return;
                    var delayData
                    /*: PingRating | void*/
                    = ping.find(function (_ref42) {
                      var country = _ref42.country,
                          premium = _ref42.premium;
                      return country === pacCountry && premium === premiumUser;
                    });
                    if (!delayData) return;
                    return delayData.mark;
                  }();

                  if (domain) {
                    _context12.next = 6;
                    break;
                  }

                  _this17.complexView = {
                    'enabled': false,
                    rating: rating
                  };
                  return _context12.abrupt("return");

                case 6:
                  filter
                  /*: SiteFilter | void*/
                  = filters.find(function (_ref43) {
                    var disabled = _ref43.disabled,
                        ownDomain = _ref43['domain'];
                    return !disabled && domain && domain.endsWith(ownDomain);
                  } // Flow crap
                  );

                  if (filter) {
                    _context12.next = 10;
                    break;
                  }

                  _this17.complexView = {
                    'enabled': false,
                    rating: rating
                  };
                  return _context12.abrupt("return");

                case 10:
                  country = filter.country, proxyMode = filter.proxyMode;
                  domain = filter.domain;
                  _context12.next = 14;
                  return _head.$punycodeDefault.toUnicode(domain);

                case 14:
                  view
                  /*: string*/
                  = _context12.sent;

                  if (proxyMode) {
                    _context12.next = 18;
                    break;
                  }

                  _this17.complexView = {
                    domain: domain,
                    'enabled': true,
                    'on': false,
                    view: view
                  };
                  return _context12.abrupt("return");

                case 18:
                  // Proxy filter
                  countries
                  /*: Array<string>*/
                  = _$2.transform(servers, function (carry, value, country
                  /*: string*/
                  ) {
                    var servers = value[premiumUser ? 'premium_servers' : 'servers'];
                    if (servers) carry.push(country);
                  }, []);
                  _this17.complexView = {
                    'country': countries.includes(country) ? country : _this17.defaultCountry,
                    domain: domain,
                    'enabled': true,
                    'on': true,
                    view: view
                  };

                case 20:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12);
        }))();
      } // Lifecycle

    }, {
      key: "countryName",
      // Properties
      get: function get()
      /*: string*/
      {
        return this.country ? (0, _head.$internationalizeDefault)('country_name_' + this.country.toUpperCase()) : '';
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          'countries': {
            'type': Array
          },
          'country': {
            'type': String
          },
          'countryName': {
            'type': String
          },
          'proxyEnabled': {
            'type': Boolean
          },
          'settingsIconNewFeature': {
            'type': Boolean
          },
          'withPromo': {
            'type': Boolean,
            'notify': true
          },
          'complexView': {
            // Show double controls for ON/OFF
            'type': Object
          }
        };
      }
    }]);

    function IndexHome() {
      var _this16;

      babelHelpers.classCallCheck(this, IndexHome);
      _this16 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(IndexHome).call(this));
      _this16.complexView = {};
      _this16.countries = [];
      _this16.proxyEnabled = false;
      _this16.settingsIconNewFeature = false;
      _this16.withPromo = false;
      return _this16;
    }
    /** @method */


    babelHelpers.createClass(IndexHome, [{
      key: "connectedCallback",
      value: function () {
        var _connectedCallback = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee13() {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  babelHelpers.get(babelHelpers.getPrototypeOf(IndexHome.prototype), "connectedCallback", this).call(this);
                  _context13.next = 3;
                  return getSettingsIconNewFeature();

                case 3:
                  this.settingsIconNewFeature = _context13.sent;

                case 4:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13, this);
        }));

        function connectedCallback() {
          return _connectedCallback.apply(this, arguments);
        }

        return connectedCallback;
      }()
      /** @method */

    }, {
      key: "firstUpdated",
      value: function firstUpdated() {
        var _this18 = this;

        babelHelpers.get(babelHelpers.getPrototypeOf(IndexHome.prototype), "firstUpdated", this).call(this);
        this.defaultCountry = window.config.proxy.defaultCountry || 'nl';
        babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee14() {
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.next = 2;
                  return getSettingsIconNewFeature();

                case 2:
                  _this18.settingsIconNewFeature = _context14.sent;

                case 3:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14);
        }))();
        var promo = this.shadowRoot.querySelector('index-home-promo');
        this.withPromo = promo.visible;
        this.classList.toggle('proxyEnabled', this.proxyEnabled);
        this.classList.toggle('withPromo', this.withPromo);
        promo.addEventListener('visible', function (_ref45) {
          var visible = _ref45['detail'].visible;
          _this18.withPromo = visible;
        });
      }
      /** @method */

    }, {
      key: "updated",
      value: function updated(changes
      /*: Map<string, any>*/
      ) {
        if (changes.has('proxyEnabled')) {
          this.classList.toggle('proxyEnabled', this.proxyEnabled);
        }

        if (changes.has('withPromo')) {
          this.classList.toggle('withPromo', this.withPromo);
        }
      } // Methods

      /** @method */

    }, {
      key: "domainProxySwitch",
      value: function domainProxySwitch()
      /*: void*/
      {
        var domain = this.complexView.domain;

        _head.$proxyDefault.siteFilters.toggle(domain);
      }
      /** @method */

    }, {
      key: "countryChange",
      value: function countryChange()
      /*: void*/
      {
        _head.$storeDefault.dispatch({
          'type': 'Page change',
          'page': 'index:locations'
        });
      }
      /** @method */

    }, {
      key: "domainCountryChange",
      value: function domainCountryChange()
      /*: void*/
      {
        var domain = this.complexView.domain;

        _head.$storeDefault.dispatch({
          'type': 'Page change',
          'page': 'index:locations:' + domain
        });
      }
      /** @method */

    }, {
      key: "enableProxy",
      value: function enableProxy()
      /*: void*/
      {
        _head.$proxyDefault.enable();
      }
      /** @method */

    }, {
      key: "openLocations",
      value: function openLocations()
      /*: void*/
      {
        _head.$storeDefault.dispatch({
          'type': 'Page change',
          'page': 'index:locations'
        });
      }
      /** @method */

    }, {
      key: "openSettings",
      value: function () {
        var _openSettings = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee15() {
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return _head.$storageDefault.set('newSettingsFeatureTimezoneChange1', false);

                case 2:
                  _head.$storeDefault.dispatch({
                    'type': 'Page change',
                    'page': 'index:settings'
                  });

                case 3:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15);
        }));

        function openSettings() {
          return _openSettings.apply(this, arguments);
        }

        return openSettings;
      }()
      /** @method */

    }, {
      key: "proxySwitch",
      value: function proxySwitch()
      /*: void*/
      {
        if (!this.proxyEnabled) _head.$proxyDefault.enable();else _head.$proxyDefault.disable();
      }
    }]);
    return IndexHome;
  }((0, _head.connect)(_head.$storeDefault)(_head.LitElement));

  ;
  customElements.define('index-home', IndexHome);

  var computeCountries = function computeCountries(state
  /*: StoreState*/
  , countryNameByCode
  /*: ( code: string ) => string*/
  )
  /*: Array<LocationsRenderServerData>*/
  {
    var favorites = state.favorites,
        ping = state.ping,
        servers = state.servers,
        user = state.user;
    var premiumUser
    /*: boolean*/
    = user.premium; // List of servers

    var list
    /*: Array<LocationsRenderServerData>*/
    = Object.keys(servers).reduce(
    /** @function */
    function (carry, countryCode
    /*: string*/
    ) {
      var countryData
      /*: ProxyServerCountryData*/
      = servers[countryCode];
      if (countryData.hidden) return carry;
      var name
      /*: string*/
      = countryNameByCode(countryCode); // Free servers

      if (!premiumUser) {
        /** @type {Array} */
        var _servers = countryData.servers;

        if (Array.isArray(_servers) && _servers.length) {
          var data
          /*: LocationsRenderServerData*/
          = {
            'id': countryCode,
            'code': countryCode,
            name: name,
            'premium': false
          };
          var delayData
          /*: PingRating | void*/
          = ping.find(function (_ref46) {
            var country = _ref46.country,
                premium = _ref46.premium;
            return country === countryCode && !premium;
          });

          if (delayData) {
            var delay = delayData.delay,
                mark = delayData.mark;
            Object.assign(data, {
              delay: delay,
              mark: mark
            });
          }

          carry.push(data);
        }
      }

      {
        // Premium servers

        /** @type {Array} */
        var _servers2 = countryData.premium_servers;

        if (Array.isArray(_servers2) && _servers2.length) {
          var _data
          /*: LocationsRenderServerData*/
          = {
            'id': countryCode + '_premium',
            'code': countryCode,
            'favorited': false,
            'name': name + ' (Premium)',
            'premium': true
          };

          var _delayData
          /*: PingRating | void*/
          = ping.find(function (_ref47) {
            var country = _ref47.country,
                premium = _ref47.premium;
            return country === countryCode && premium;
          });

          if (_delayData) {
            var _delay = _delayData.delay,
                _mark = _delayData.mark;
            Object.assign(_data, {
              delay: _delay,
              mark: _mark
            });
          }

          carry.push(_data);
        }
      }
      return carry;
    }, []).sort(function (a, b) {
      // Premium state
      if (a.premium !== b.premium) return a.premium ? 1 : -1; // Name

      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    if (premiumUser) {
      favorites.forEach(function (country) {
        list.filter(function (item) {
          return item.code === country;
        }).forEach(function (renderServerData) {
          renderServerData.favorited = true;
        });
      });
    } else {
      list.forEach(function (renderServerData) {
        delete renderServerData.favorited;
      });
    }

    list.sort(function (a, b) {
      // Premium state
      if (a.premium !== b.premium) return a.premium ? 1 : -1; // Favorites

      if (a.favorited !== b.favorited) return a.favorited ? -1 : 1; // Name

      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    return list;
  };

  _exports.$computeCountriesDefault = computeCountries;
  var computeCountries$1 = {
    'default': computeCountries
  };
  _exports.$computeCountries = computeCountries$1;

  function keydownListener(event
  /*: KeyboardEvent*/
  ) {
    var _this19 = this;

    var key = event.key;

    if (key === 'ArrowDown' || key === 'ArrowUp') {
      event.preventDefault();

      var newHighlightedCountryIndex
      /*: integer*/
      = function () {
        var length
        /*: integer*/
        = _this19.namesList.length;

        if (!_this19.highlightedCountry) {
          return key === 'ArrowUp' ? length - 1 : 0;
        }

        var index
        /*: integer*/
        = _this19.namesList.findIndex(function (_ref48) {
          var code = _ref48.code,
              premium = _ref48.premium;
          return _this19.highlightedCountry.code === code && _this19.highlightedCountry.premium === premium;
        });

        index = index + (key === 'ArrowDown' ? 1 : -1);
        return (index + length) % length;
      }();

      var data
      /*: LocationsNameListItem*/
      = this.namesList[newHighlightedCountryIndex];
      this.highlightedCountry = {
        'code': data.code,
        'premium': data.premium
      }; // Scroll whole list if new item is partially or not visible

      var topEdge
      /*: number*/
      = this.scrollElement.scrollTop;
      var screenHeight
      /*: number*/
      = this.scrollElement.offsetHeight;
      var bottomEdge
      /*: number*/
      = topEdge + screenHeight;
      var newElementHeight
      /*: number*/
      = data.element.offsetHeight;
      var newElementTopEdge
      /*: number*/
      = data.element.offsetTop;
      var newElementBottomEdge
      /*: number*/
      = newElementTopEdge + newElementHeight;
      var visible
      /*: boolean*/
      = newElementTopEdge >= topEdge && newElementBottomEdge <= bottomEdge;
      if (visible) return;

      var scrollTop
      /*: number*/
      = function () {
        // Hidden item at bottom
        if (newElementTopEdge >= topEdge) {
          return newElementBottomEdge - screenHeight + 4;
        } // Hidden item at top


        return newElementTopEdge - 2;
      }();

      this.scrollElement.scrollTop = scrollTop;
      return;
    }

    if (key === 'Enter') {
      if (!this.highlightedCountry) return;
      var code = this.highlightedCountry.code;
      var mode
      /*: string*/
      = this.computeMode(this.highlightedCountry, this.premiumUser, this.country);
      if (mode === 'current') return;
      this.countryClick({
        'detail': {
          mode: mode,
          'country': code
        }
      });
      return;
    }

    this.charsBuffer.keydownListener(event);
  }

  ;
  var keydownListener$1 = {
    'default': keydownListener
  };
  _exports.$keydownListener = keydownListener$1;

  var log = function log()
  /*: Array<any>*/
  {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (0, _sendMessage.$sendMessageDefault)({
      'type': 'log',
      'data': args
    });
    console.log.apply(console, args);
  };

  _exports.$logDefault = log;

  log.warn = function ()
  /*: Array<any>*/
  {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    (0, _sendMessage.$sendMessageDefault)({
      'type': 'log.warn',
      'data': args
    });
    console.warn.apply(console, args);
  };

  log.error = function ()
  /*: Array<any>*/
  {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    (0, _sendMessage.$sendMessageDefault)({
      'type': 'log.error',
      'data': args
    });
    console.error.apply(console, args);
  };

  var log$1 = {
    'default': log
  };
  _exports.$log = log$1;
  var translations$5
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'virtualLocations': 'virtual_locations'
  });
  /** @function */

  var computeHighlighted = function computeHighlighted(item
  /*: LocationsNameListItem*/
  , highlightedCountry
  /*: HighlightedCountry | null*/
  ) {
    return (
      /*: boolean*/
      Boolean(highlightedCountry && highlightedCountry.code === item.code && highlightedCountry.premium === item.premium)
    );
  };
  /** @method */


  var computeMode = function computeMode(item
  /*: LocationsNameListItem*/
  , premiumUser
  /*: boolean*/
  , country
  /*: string*/
  )
  /*: 'change' | 'current' | 'premium'*/
  {
    if (item.premium && !premiumUser) return 'premium';
    if (item.code === country) return 'current';
    return 'change';
  };
  /** @method */


  function render$3() {
    var _this20 = this;

    return (0, _head.html)(_templateObject23_90d461d0e12811e9872675d52dfcba91(), _head.$globalStyleDefault, this.back, translations$5.virtualLocations, this.openHelp, this.countries.map(function (item) {
      return (0, _head.html)(_templateObject24_90d461d0e12811e9872675d52dfcba91(), _this20.countryClick, _this20.favorite, _this20.elementHighlight(item), item, computeHighlighted(item, _this20.highlightedCountry), computeMode(item, _this20.premiumUser, _this20.country));
    }));
  }

  ;
  var locationsTemplate = {
    'default': render$3
  }; // data-mark and data-favorited to fix bug in old Chrome/FF rendering

  _exports.$locationsTemplate = locationsTemplate;

  var flagUrl$2 = function flagUrl$2(flag
  /*?: string*/
  )
  /*: string*/
  {
    if (flag === 'usw') flag = 'us';
    if (flag === 'uk') flag = 'gb';
    return flag ? "/images/flags/".concat(flag, ".svg") : '/images/empty.png';
  };
  /** @method */


  function render$4() {
    var _this21 = this;

    return (0, _head.html)(_templateObject25_90d461d0e12811e9872675d52dfcba91(), _head.$globalStyleDefault, this.fullElementClick, flagUrl$2(this.data.code), this.data.name, function () {
      if (!_this21.data.delay) return '';
      return (0, _head.html)(_templateObject26_90d461d0e12811e9872675d52dfcba91(), _this21.data.mark, _this21.data.mark);
    }(), function () {
      if (typeof _this21.data.favorited !== 'boolean') return '';
      return (0, _head.html)(_templateObject27_90d461d0e12811e9872675d52dfcba91(), _this21.data.favorited ? ' favorited' : '', _this21.favoritesClick);
    }());
  }

  ;
  var elementTemplate = {
    'default': render$4
  };
  _exports.$elementTemplate = elementTemplate;

  var IndexLocationsElement =
  /*#__PURE__*/
  function (_LitElement4) {
    babelHelpers.inherits(IndexLocationsElement, _LitElement4);
    babelHelpers.createClass(IndexLocationsElement, [{
      key: "render",
      value: function render() {
        return render$4.call(this);
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          'data': {
            'type': Object
          },
          'highlighted': {
            'type': Boolean
          },
          'mode': {
            // Key property
            'type': String
          }
        };
      } // Lifecycle

    }]);

    function IndexLocationsElement() {
      var _this22;

      babelHelpers.classCallCheck(this, IndexLocationsElement);
      _this22 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(IndexLocationsElement).call(this));
      _this22.data = {};
      _this22.highlighted = false;
      _this22.mode = '';
      return _this22;
    }
    /** @mathod */


    babelHelpers.createClass(IndexLocationsElement, [{
      key: "updated",
      value: function updated(changes
      /*: Map<string, any>*/
      ) {
        if (changes.has('highlighted')) {
          var newState
          /*: boolean*/
          = this.highlighted;
          var oldState
          /*: boolean | void*/
          = changes.get('highlighted');
          if (newState !== oldState) this.classList.toggle('highlight', newState);
        }

        if (changes.has('mode')) {
          this.classList.toggle('current', this.mode === 'current');
          this.classList.toggle('premium', this.mode === 'premium');
        }
      } // Methods

      /** @method */

    }, {
      key: "favoritesClick",
      value: function favoritesClick()
      /*: void*/
      {
        this.dispatchEvent(new CustomEvent('favorite', {
          'detail': {
            'country': this.data.code,
            'favorited': !this.data.favorited
          }
        }));
      }
      /** @method */

    }, {
      key: "fullElementClick",
      value: function fullElementClick(event
      /*: MouseEvent*/
      )
      /*: void*/
      {
        var favoritesClick
        /*: boolean*/
        = babelHelpers.instanceof(event.target, HTMLElement) && event.target.classList.contains('Favorite');
        if (this.mode === 'current' || favoritesClick) return;
        this.dispatchEvent(new CustomEvent('countryclick', {
          'detail': {
            'mode': this.mode,
            'country': this.data.code
          }
        }));
      }
    }]);
    return IndexLocationsElement;
  }(_head.LitElement);

  ;
  customElements.define('index-locations-element', IndexLocationsElement);
  var _$3
  /*: Lodash*/
  = window._;

  var _browser$1 = typeof browser !== 'undefined' ? browser : chrome;
  /** Get full country name by 2 letter code
  @function
  @param code - 2 letter code */


  var countryNameByCode = function countryNameByCode(code
  /*: string*/
  )
  /*: string*/
  {
    var countryName
    /*: string*/
    = (0, _head.$internationalizeDefault)('country_name_' + code.toUpperCase());
    if (countryName) return countryName;

    var locale
    /*: string*/
    = _browser$1.i18n.getUILanguage();

    var version
    /*: string*/
    = _$3.get(_browser$1.runtime.getManifest(), 'version', 'n/a');

    var message
    /*: string*/
    = 'failed to look up country name for: ' + code + ' with locale: ' + locale + ' at popup.js';
    log.warn(message);
    (0, _head.$gaDefault)('error', version, message, 0, false);
    return code.toUpperCase() || 'N/A';
  };

  var IndexLocations =
  /*#__PURE__*/
  function (_connect4) {
    babelHelpers.inherits(IndexLocations, _connect4);
    babelHelpers.createClass(IndexLocations, [{
      key: "render",
      value: function render() {
        return render$3.call(this);
      }
    }, {
      key: "stateChanged",
      value: function stateChanged(state
      /*: StoreState*/
      )
      /*: void*/
      {
        var pac = state.pac,
            user = state.user;
        this.countries = computeCountries(state, countryNameByCode);
        this.premiumUser = user.premium;
        this.proxyCountry = pac.mode === 'proxy' ? pac.country : '';
        this.proxyList = pac.filters.filter(function (_ref49) {
          var disabled = _ref49.disabled,
              proxyMode = _ref49.proxyMode;
          return !disabled && proxyMode;
        });
      } // Lifecycle

    }], [{
      key: "properties",
      get: function get() {
        return {
          'countries': {
            'type': Array
            /** @type {Array<LocationsRenderServerData>} */

          },

          /** In case of global locations -> pac.country,
          otherwise selected country in case of proxy filter */
          'country': {
            'type': String
          },

          /** Used for setup of country for filter */
          'domain': {
            'type': String
          },
          'highlightedCountry': {
            'type': Object
            /** @type {(HighlightedCountry|null)} */

          },
          'premiumUser': {
            'type': Boolean
          },
          'proxyCountry': {
            'type': String
          },
          'proxyList': {
            'type': Array
            /** @type {Array<SiteFilter>} */

          }
        };
      }
    }]);

    function IndexLocations() {
      var _this23;

      babelHelpers.classCallCheck(this, IndexLocations);
      _this23
      /*: any*/
      = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(IndexLocations).call(this)); // Method bindings

      _this23.elementHighlight = _this23.elementHighlight.bind(babelHelpers.assertThisInitialized(_this23));
      _this23.keydownListener = keydownListener.bind(babelHelpers.assertThisInitialized(_this23));
      _this23.country = null;
      _this23.domain = '';
      _this23.highlightedCountry = null;
      _this23.proxyCountry = '';
      _this23.proxyList = [];
      return _this23;
    }

    babelHelpers.createClass(IndexLocations, [{
      key: "connectedCallback",
      value: function () {
        var _connectedCallback2 = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee16() {
          var _this24 = this;

          var height;
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  babelHelpers.get(babelHelpers.getPrototypeOf(IndexLocations.prototype), "connectedCallback", this).call(this);
                  this.charsBuffer = new _head.$CharsBufferDefault();
                  document.addEventListener('keydown', this.keydownListener);
                  _context16.next = 5;
                  return this.forceRenderAndGenerateNamesList();

                case 5:
                  /** @type {Element} */
                  this.scrollElement = Array.from(this.shadowRoot.children).pop();
                  this.charsBuffer.addListener(function (word
                  /*: string*/
                  ) {
                    var match
                    /*: LocationsNameListItem | void*/
                    = _this24.namesList.find(function (_ref50) {
                      var name = _ref50.name;
                      return name.startsWith(word);
                    });

                    if (!match) return;
                    var code = match.code,
                        element = match.element,
                        premium = match.premium;
                    _this24.highlightedCountry = {
                      code: code,
                      premium: premium
                    }; // Scroll to this element

                    _this24.scrollElement.scrollTop = element.offsetTop - 2;
                  });
                  height
                  /*: number*/
                  = this.shadowRoot.querySelector('div.Head').offsetHeight;
                  this.shadowRoot.querySelector('div.Sections').style.cssText = "top:".concat(height, "px;");

                  if (!this.domain) {
                    (0, _sendMessage.$sendMessageDefault)({
                      'type': 'сounters.increase',
                      'property': 'popup: location page shows'
                    });
                  }

                case 10:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16, this);
        }));

        function connectedCallback() {
          return _connectedCallback2.apply(this, arguments);
        }

        return connectedCallback;
      }()
      /** @method */

    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        babelHelpers.get(babelHelpers.getPrototypeOf(IndexLocations.prototype), "disconnectedCallback", this).call(this);
        document.removeEventListener('keydown', this.keydownListener);
      }
      /** @method */

    }, {
      key: "updated",
      value: function updated(changes
      /*: Map<string, any>*/
      ) {
        var keys
        /*: Array<string>*/
        = Array.from(changes.keys());

        if (changes.has('countries')) {
          this.forceRenderAndGenerateNamesList();
        }

        if (keys.some(function (key) {
          return ['domain', 'proxyCountry', 'proxyList'].includes(key);
        })) {
          var domain = this.domain,
              proxyCountry = this.proxyCountry,
              proxyList = this.proxyList; // Global settings

          if (!domain) {
            this.country = proxyCountry;
            return;
          } // Domain only


          this.country = _$3.get(proxyList.find(function (item) {
            return item.domain === domain;
          }), 'country') || '';
        }
      } // Methods

      /** @method */

    }, {
      key: "back",
      value: function back()
      /*: void*/
      {
        _head.$storeDefault.dispatch({
          'type': 'Page change',
          'page': 'index:home'
        });
      }
      /** @method */

    }, {
      key: "countryClick",
      value: function () {
        var _countryClick = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee17(_ref51) {
          var _ref51$detail, mode, country, popupPremium;

          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  _ref51$detail = _ref51['detail'], mode = _ref51$detail.mode, country = _ref51$detail.country;

                  if (!(mode === 'change')) {
                    _context17.next = 15;
                    break;
                  }

                  if (!this.domain) {
                    _context17.next = 7;
                    break;
                  }

                  _context17.next = 5;
                  return _head.$proxyDefault.siteFilters.changeCountry({
                    'domain': this.domain,
                    country: country
                  });

                case 5:
                  _context17.next = 10;
                  break;

                case 7:
                  _context17.next = 9;
                  return _head.$proxyDefault.setCountry(country);

                case 9:
                  (0, _head.$gaDefault)('extension', 'change_country', country);

                case 10:
                  _context17.next = 12;
                  return new Promise(function (resolve) {
                    setTimeout(resolve, 500);
                  });

                case 12:
                  _head.$storeDefault.dispatch({
                    'type': 'Page change',
                    'page': 'index:home'
                  });

                  _context17.next = 24;
                  break;

                case 15:
                  if (!(mode === 'premium')) {
                    _context17.next = 24;
                    break;
                  }

                  popupPremium
                  /*: HTMLElement & { 'country'?: string }*/
                  = document.createElement('popup-premium');
                  popupPremium.country = country;
                  popupPremium.style.cssText = 'top:-100%;';
                  if (document.body) document.body.append(popupPremium); // Flow crap

                  (0, _head.$gaDefault)('premium', 'show');
                  _context17.next = 23;
                  return window.anime({
                    'targets': popupPremium,
                    'top': 0,
                    'duration': 800,
                    'easing': 'linear'
                  }).finished;

                case 23:
                  popupPremium.style.cssText = '';

                case 24:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee17, this);
        }));

        function countryClick(_x6) {
          return _countryClick.apply(this, arguments);
        }

        return countryClick;
      }()
      /** @method */

    }, {
      key: "elementHighlight",
      value: function elementHighlight(_ref52) {
        var _this25 = this;

        var premium = _ref52.premium,
            code = _ref52.code;
        return function (event)
        /*: void*/
        {
          var mouseReallyMoved = Boolean('movementX' in event ? event.movementX || event.movementY : event.webkitMovementX || event.webkitMovementY);
          if (!mouseReallyMoved) return;
          var data
          /*: Object*/
          = {
            premium: premium,
            code: code
          };
          if (_$3.isEqual(_this25.highlightedCountry, data)) return;
          _this25.highlightedCountry = data;
        };
      }
      /** @method */

    }, {
      key: "favorite",
      value: function favorite(_ref53)
      /*: void*/
      {
        var _ref53$detail = _ref53['detail'],
            favorited = _ref53$detail.favorited,
            country = _ref53$detail.country;
        if (favorited) _head.$actionsDefault.favorites.add(country);else _head.$actionsDefault.favorites.remove(country);
      }
      /** @method */

    }, {
      key: "forceRenderAndGenerateNamesList",
      value: function () {
        var _forceRenderAndGenerateNamesList = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee18() {
          var _this26 = this;

          return regeneratorRuntime.wrap(function _callee18$(_context18) {
            while (1) {
              switch (_context18.prev = _context18.next) {
                case 0:
                  _context18.next = 2;
                  return this.requestUpdate();

                case 2:
                  // Merge countries & DOM nodes
                  this.namesList = function () {
                    /** @type {Array<Object>} */
                    var listData = _this26.countries.map(function (_ref54) {
                      var code = _ref54.code,
                          name = _ref54.name,
                          premium = _ref54.premium;
                      return {
                        code: code,
                        'name': name.toLowerCase(),
                        premium: premium
                      };
                    });

                    var elements
                    /*: Array<HTMLElement>*/
                    = Array.from(_this26.shadowRoot.querySelector('div.Sections').children).filter(function (element) {
                      return element.tagName.toLowerCase() === 'index-locations-element';
                    });
                    listData.forEach(function (item, index) {
                      item.element = elements[index];
                    });
                    return listData;
                  }();
                  /*::( this.namesList: Array<LocationsNameListItem> );*/
                  // eslint-disable-line no-unused-expressions


                case 3:
                case "end":
                  return _context18.stop();
              }
            }
          }, _callee18, this);
        }));

        function forceRenderAndGenerateNamesList() {
          return _forceRenderAndGenerateNamesList.apply(this, arguments);
        }

        return forceRenderAndGenerateNamesList;
      }()
      /** @method */

    }, {
      key: "openHelp",
      value: function openHelp()
      /*: void*/
      {
        var parent
        /*: HTMLElement | null*/
        = document.querySelector('div.MainContainer');
        if (!parent) return; // Flow crap

        var element
        /*: HTMLElement*/
        = document.createElement('popup-locations-information');
        element.style.cssText = 'opacity:0';
        parent.appendChild(element);
        window.anime({
          'targets': element,
          'opacity': 1,
          'duration': 400,
          'easing': 'linear'
        });
      }
    }]);
    return IndexLocations;
  }((0, _head.connect)(_head.$storeDefault)(_head.LitElement));

  customElements.define('index-locations', IndexLocations);
  var ShowedOffers = {
    /** @method */
    'includes': function includes(offer
    /*: string*/
    ) {
      return (0, _sendMessage.$sendMessageDefault)({
        'type': 'ShowedOffers.includes',
        offer: offer
      });
    },

    /** @method */
    'push': function push(offer
    /*: string*/
    ) {
      return (0, _sendMessage.$sendMessageDefault)({
        'type': 'ShowedOffers.push',
        offer: offer
      });
    }
  };
  _exports.$ShowedOffersDefault = ShowedOffers;
  var ShowedOffers$1 = {
    'default': ShowedOffers
  };
  _exports.$ShowedOffers = ShowedOffers$1;
  var translations$6
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'changeLocation': 'change_location',
    'contactUs': 'contact_us',
    'home': 'home',
    'smartSettings': 'smart_settings'
  });
  /** @method */

  function render$5() {
    return (0, _head.html)(_templateObject28_90d461d0e12811e9872675d52dfcba91(), _head.$globalStyleDefault, this.homePage ? 'selected' : '', this.goHome, translations$6.home, this.filtersPage ? 'selected' : '', this.openSettings, this.openSettings, translations$6.smartSettings, this.contactUsUrl, translations$6.contactUs, this.facebookUrl);
  }

  ;
  var menuTemplate = {
    'default': render$5
  };
  _exports.$menuTemplate = menuTemplate;

  var chromeBelow52
  /*: boolean*/
  = function () {
    if (typeof browser !== 'undefined') return false; // Ignore Firefox

    var matches
    /*: Array<string> | null | void*/
    = navigator.appVersion.match(/chrome\/([0-9]+)/i);
    if (!matches) return false; // Chrome version

    var version = Number(matches[1]);
    return version < 52;
  }();
  /** @function */


  var permissionRequest =
  /*#__PURE__*/
  function () {
    var _ref55 = babelHelpers.asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee19() {
      var allowed;
      return regeneratorRuntime.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              if (chromeBelow52) {
                _context19.next = 2;
                break;
              }

              return _context19.abrupt("return");

            case 2:
              _context19.next = 4;
              return new Promise(function (resolve) {
                chrome.permissions.request({
                  'permissions': ['tabs']
                }, resolve);
              });

            case 4:
              allowed
              /*: boolean*/
              = _context19.sent;

              if (!allowed) {
                _context19.next = 7;
                break;
              }

              return _context19.abrupt("return");

            case 7:
              throw new Error('Tabs permission is not granted');

            case 8:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19);
    }));

    return function permissionRequest() {
      return _ref55.apply(this, arguments);
    };
  }();

  var IndexMenu =
  /*#__PURE__*/
  function (_connect5) {
    babelHelpers.inherits(IndexMenu, _connect5);
    babelHelpers.createClass(IndexMenu, [{
      key: "render",
      value: function render() {
        return render$5.call(this);
      }
    }, {
      key: "stateChanged",
      value: function stateChanged(_ref56)
      /*: void*/
      {
        var domain = _ref56.domain,
            pac = _ref56.pac,
            page = _ref56.page;
        var _window2 = window,
            browsecLink = _window2.browsecLink,
            pageLinks = _window2.pageLinks; // In fact must be pure getter

        this.contactUsUrl = browsecLink(pageLinks.contactUs);

        this.containsFilter = function () {
          if (!domain) return false;
          var domains
          /*: Array<string>*/
          = pac.filters.reduce(function (carry, _ref57) {
            var disabled = _ref57.disabled,
                domain = _ref57.domain;
            if (!disabled) carry.push(domain);
            return carry;
          }, []); // Is domain in list of domains

          return domains.some(function (filterDomain) {
            return filterDomain === domain || domain.endsWith('.' + filterDomain);
          });
        }();

        this.domain = function ()
        /*: string | null*/
        {
          if (!domain) return null; // No domain case
          // Ignore disabled filters

          var filters = pac.filters.filter(function (_ref58) {
            var disabled = _ref58.disabled;
            return !disabled;
          }); // Searching for filters with same domain

          var condition = filters.some(function (_ref59) {
            var filterDomain = _ref59['domain'];
            return filterDomain === domain;
          });
          if (condition) return domain; // Searching for filters where original domain is subdomain

          var filter
          /*: SiteFilter | void*/
          = filters.find(function (_ref60) {
            var filterDomain = _ref60['domain'];
            return domain.endsWith('.' + filterDomain);
          });
          if (filter) return filter.domain; // Otherwise, return cutted original domain (+1 to domain zone)

          var domainZone
          /*: string | void*/
          = window.domainZoneList.find(function (zone) {
            return domain.endsWith('.' + zone);
          });
          if (!domainZone) return domain;
          var endPart
          /*: string*/
          = domain.slice(0, -(domainZone.length + 1)).split('.').pop();
          return endPart + '.' + domainZone;
        }();

        this.filtersPage = function () {
          var parts
          /*: Array<string>*/
          = page.split(':');
          return parts[0] === 'index' && parts[1] === 'filters';
        }();

        this.homePage = function () {
          var parts
          /*: Array<string>*/
          = page.split(':');
          return parts[0] === 'index' && parts[1] === 'home';
        }();
      } // Lifecycle

    }, {
      key: "facebookUrl",
      // Properties
      get: function get() {
        return 'https://www.facebook.com/BrowsecVPN';
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          'contactUsUrl': {
            'type': String
          },
          'containsFilter': {
            'type': Boolean
          },
          'domain': {
            'type': String
          },
          'facebookUrl': {
            'type': String
          },
          'filtersPage': {
            'type': Boolean
          },
          'homePage': {
            'type': Boolean
          }
        };
      }
    }]);

    function IndexMenu() {
      var _this27;

      babelHelpers.classCallCheck(this, IndexMenu);
      _this27 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(IndexMenu).call(this));
      _this27.domain = null;
      _this27.filtersPage = false;
      _this27.homePage = false;
      return _this27;
    }
    /** @method */


    babelHelpers.createClass(IndexMenu, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        babelHelpers.get(babelHelpers.getPrototypeOf(IndexMenu.prototype), "connectedCallback", this).call(this); // Remove empty nodes

        Array.from(this.shadowRoot.childNodes).forEach(function (node) {
          if (node.nodeType !== Node.ELEMENT_NODE) node.remove();
        }); // for FF and early Chrome -> links click

        var links
        /*: Array<HTMLElement>*/
        = Array.from(this.shadowRoot.querySelectorAll('a'));
        links.forEach(function (element) {
          element.addEventListener('click',
          /*#__PURE__*/
          babelHelpers.asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee20() {
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return new Promise(function (resolve) {
                      setTimeout(resolve, 50);
                    });

                  case 2:
                    if (window && window.close) window.close();

                  case 3:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20);
          })));
        });
      }
      /** @method */

    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        babelHelpers.get(babelHelpers.getPrototypeOf(IndexMenu.prototype), "disconnectedCallback", this).call(this);
        if (!this.documentClick) return;
        document.removeEventListener('mousedown', this.documentClick);
        delete this.documentClick;
      } // Methods

      /** @method */

    }, {
      key: "goHome",
      value: function goHome()
      /*: void*/
      {
        if (this.homePage) return;

        _head.$storeDefault.dispatch({
          'type': 'Page change',
          'page': 'index:home'
        });
      }
      /** @method */

    }, {
      key: "openSettings",
      value: function () {
        var _openSettings2 = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee22(event) {
          var _this28 = this;

          var _event$target$getBoun, left, maxWidth, element;

          return regeneratorRuntime.wrap(function _callee22$(_context22) {
            while (1) {
              switch (_context22.prev = _context22.next) {
                case 0:
                  event.preventDefault();

                  if (!this.documentClick) {
                    _context22.next = 3;
                    break;
                  }

                  return _context22.abrupt("return");

                case 3:
                  _context22.next = 5;
                  return permissionRequest();

                case 5:
                  if (!chromeBelow52) {
                    _context22.next = 8;
                    break;
                  }

                  _context22.next = 8;
                  return new Promise(function (resolve) {
                    setTimeout(resolve, 300);
                  });

                case 8:
                  (0, _sendMessage.$sendMessageDefault)({
                    'type': 'сounters.increase',
                    'property': 'popup: menu: smart settings click'
                  });
                  babelHelpers.asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee21() {
                    var hasOffer;
                    return regeneratorRuntime.wrap(function _callee21$(_context21) {
                      while (1) {
                        switch (_context21.prev = _context21.next) {
                          case 0:
                            _context21.next = 2;
                            return ShowedOffers.includes('smart settings');

                          case 2:
                            hasOffer
                            /*: boolean*/
                            = _context21.sent;

                            if (!hasOffer) {
                              _context21.next = 5;
                              break;
                            }

                            return _context21.abrupt("return");

                          case 5:
                            ShowedOffers.push('smart settings');

                            if (!_head.$storeDefault.getState().pac.filters.length && document.body) {
                              // Flow crap
                              document.body.append(document.createElement('popup-help'));
                            }

                          case 7:
                          case "end":
                            return _context21.stop();
                        }
                      }
                    }, _callee21);
                  }))(); // Create content menu element

                  _event$target$getBoun = event.target.getBoundingClientRect(), left = _event$target$getBoun.left;
                  maxWidth
                  /*: number*/
                  = document.body ? document.body.clientWidth - left : 0; // Flow crap

                  /*::
                  type ContextMenuElement = HTMLElement & {
                    'containsFilter'?: boolean,
                    'domain'?: string | null,
                    'unicodeDomain'?: string
                  }
                  */

                  element
                  /*: ContextMenuElement*/
                  = document.createElement('context-menu');
                  element.style.cssText = "left:".concat(left, "px;max-width:").concat(maxWidth, "px;"); // Setup of properties

                  element.containsFilter = this.containsFilter;
                  _context22.next = 17;
                  return _head.$punycodeDefault.toUnicode(this.domain || '');

                case 17:
                  element.unicodeDomain = _context22.sent;
                  element.domain = this.domain; // Append node to body

                  if (document.body) document.body.append(element); // Flow crap

                  this.documentClick = function (_ref63) {
                    var target = _ref63.target;
                    if (!babelHelpers.instanceof(target, HTMLElement)) return;
                    var deleteNode
                    /*: boolean*/
                    = !target.matches('div.Element');
                    var doNothing
                    /*: boolean*/
                    = deleteNode && (target === element || element.contains(target)) || target.matches('popup-help, popup-help *');
                    if (doNothing) return;
                    if (deleteNode) element.remove();
                    document.removeEventListener('mousedown', _this28.documentClick);
                    delete _this28.documentClick;
                  };

                  document.addEventListener('mousedown', this.documentClick
                  /*: MouseEventListener*/
                  );

                case 22:
                case "end":
                  return _context22.stop();
              }
            }
          }, _callee22, this);
        }));

        function openSettings(_x7) {
          return _openSettings2.apply(this, arguments);
        }

        return openSettings;
      }()
    }]);
    return IndexMenu;
  }((0, _head.connect)(_head.$storeDefault)(_head.LitElement));

  ;
  customElements.define('index-menu', IndexMenu);
  var translations$7
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'changeTimezoneByVirtualLocation': 'change_timezone_according_to_virtual_location',
    'useBrowsecForWebrtcConnections': 'use_browsec_for_webrtc_connections',
    'webrtcSettingsControlledByAnotherExtension': 'webrtc_settings_controlled_by_another_extension'
  });

  function render$6() {
    var _this29 = this;

    return (0, _head.html)(_templateObject29_90d461d0e12811e9872675d52dfcba91(), _head.$globalStyleDefault, function () {
      if (!_this29.webrtcAvailable) return '';
      return (0, _head.html)(_templateObject30_90d461d0e12811e9872675d52dfcba91(), _this29.webrtcNotEnoughPermissions ? 'highlighted' : '', _this29.webrtcBlocked, _this29.changeWebrtc, _this29.changeWebrtc, translations$7.useBrowsecForWebrtcConnections, _this29.showWebrtcHelp, function () {
        if (!_this29.webrtcBlockedByOtherExtension) return '';
        return (0, _head.html)(_templateObject31_90d461d0e12811e9872675d52dfcba91(), translations$7.webrtcSettingsControlledByAnotherExtension);
      }());
    }(), this.changeDateDisabledClass, this.changeDateFirstTimeClass, this.hideDate, this.changeDateMouseover, this.changeDate, this.changeDateMouseover, this.changeDate, translations$7.changeTimezoneByVirtualLocation, this.showDateHelp, this.openDiagnostics);
  }

  ;
  var settingsTemplate = {
    'default': render$6
  };
  _exports.$settingsTemplate = settingsTemplate;
  var timezoneChange = {
    /** @method */
    'set': function set(value
    /*: boolean*/
    ) {
      return (
        /*: Promise<void>*/
        (0, _sendMessage.$sendMessageDefault)({
          'type': 'timezoneChange.set',
          value: value
        })
      );
    }
  };
  _exports.$timezoneChangeDefault = timezoneChange;
  var timezoneChange$1 = {
    'default': timezoneChange
  };
  _exports.$timezoneChange = timezoneChange$1;
  var webrtc = new function () {
    var _this30 = this;

    babelHelpers.asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee23() {
      return regeneratorRuntime.wrap(function _callee23$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              _context23.next = 2;
              return (0, _sendMessage.$sendMessageDefault)({
                'type': 'webrtc.available'
              });

            case 2:
              _this30.available = _context23.sent;

            case 3:
            case "end":
              return _context23.stop();
          }
        }
      }, _callee23);
    }))();
    /** @method */

    this.getControlState = function () {
      return (
        /*: Promise<'not available' | 'permission not granted' | 'not controlled' | 'controlled'>*/
        (0, _sendMessage.$sendMessageDefault)({
          'type': 'webrtc.getControlState'
        })
      );
    };
    /** @method */


    this.disable =
    /*#__PURE__*/
    function () {
      var _ref65 = babelHelpers.asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee24(externalPermissionRequest
      /*::?: () => Promise<void>*/
      ) {
        return regeneratorRuntime.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                if (!externalPermissionRequest) {
                  _context24.next = 3;
                  break;
                }

                _context24.next = 3;
                return externalPermissionRequest();

              case 3:
                return _context24.abrupt("return", (0, _sendMessage.$sendMessageDefault)({
                  'type': 'webrtc.disable'
                }));

              case 4:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24);
      }));

      return function (_x8) {
        return _ref65.apply(this, arguments);
      };
    }();
    /** @method */


    this.enable =
    /*#__PURE__*/
    function () {
      var _ref66 = babelHelpers.asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee25(externalPermissionRequest
      /*::?: () => Promise<void>*/
      ) {
        return regeneratorRuntime.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                if (!externalPermissionRequest) {
                  _context25.next = 3;
                  break;
                }

                _context25.next = 3;
                return externalPermissionRequest();

              case 3:
                return _context25.abrupt("return", (0, _sendMessage.$sendMessageDefault)({
                  'type': 'webrtc.enable'
                }));

              case 4:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25);
      }));

      return function (_x9) {
        return _ref66.apply(this, arguments);
      };
    }();
  }();
  _exports.$webrtcDefault = webrtc;
  var webrtc$1 = {
    'default': webrtc
  };
  _exports.$webrtc = webrtc$1;

  var privacyPermissionRequest =
  /*#__PURE__*/
  function () {
    var _ref67 = babelHelpers.asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee26() {
      var allowed;
      return regeneratorRuntime.wrap(function _callee26$(_context26) {
        while (1) {
          switch (_context26.prev = _context26.next) {
            case 0:
              if (!(typeof browser !== 'undefined')) {
                _context26.next = 2;
                break;
              }

              return _context26.abrupt("return");

            case 2:
              _context26.next = 4;
              return new Promise(function (resolve, reject) {
                chrome.permissions.request({
                  'permissions': ['privacy']
                }, function (allowed
                /*: boolean*/
                ) {
                  if (chrome.runtime.lastError) reject(chrome.runtime.lastError);else resolve(allowed);
                });
              });

            case 4:
              allowed
              /*: boolean*/
              = _context26.sent;

              if (allowed) {
                _context26.next = 7;
                break;
              }

              throw new Error('Management permission is not granted');

            case 7:
            case "end":
              return _context26.stop();
          }
        }
      }, _callee26);
    }));

    return function privacyPermissionRequest() {
      return _ref67.apply(this, arguments);
    };
  }();

  var IndexSettings =
  /*#__PURE__*/
  function (_connect6) {
    babelHelpers.inherits(IndexSettings, _connect6);
    babelHelpers.createClass(IndexSettings, [{
      key: "render",
      value: function render() {
        return render$6.call(this);
      }
    }, {
      key: "stateChanged",
      value: function stateChanged(_ref68)
      /*: void*/
      {
        var timezoneChange = _ref68.timezoneChange,
            user = _ref68.user,
            webrtcBlock = _ref68.webrtcBlock;

        this.changeDateDisabledClass = function () {
          var disabled
          /*: boolean*/
          = timezoneChange && !user.premium;
          return disabled ? 'disabled' : '';
        }();

        this.hideDate = timezoneChange;
        this.storeWebrtcBlocked = webrtcBlock;
        this.premiumUser = user.premium;
      } // Lifecycle

    }], [{
      key: "properties",
      get: function get() {
        return {
          'changeDateDisabledClass': {
            'type': String
          },
          'changeDateFirstTimeClass': {
            'type': String
          },
          'hideDate': {
            'type': Boolean
          },
          'storeWebrtcBlocked': {
            'type': Boolean
          },
          'premiumUser': {
            'type': Boolean
          },
          'webrtcAvailable': {
            // Does browser support webrtc
            'type': Boolean
          },
          'webrtcBlocked': {
            'type': Boolean
          },
          'webrtcBlockedByOtherExtension': {
            'type': Boolean
          },
          'webrtcNotEnoughPermissions': {
            'type': Boolean
          }
        };
      }
    }]);

    function IndexSettings() {
      var _this31;

      babelHelpers.classCallCheck(this, IndexSettings);
      _this31 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(IndexSettings).call(this)); // Method bindings
      // flow ignore next line

      _this31.computeWebrtcNotEnoughPermissions = _this31.computeWebrtcNotEnoughPermissions.bind(babelHelpers.assertThisInitialized(_this31));
      _this31.changeDateFirstTimeClass = '';
      babelHelpers.asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee27() {
        var settingValue;
        return regeneratorRuntime.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                _context27.next = 2;
                return _head.$storageDefault.get('newSettingsFeatureTimezoneChange2');

              case 2:
                settingValue = _context27.sent;
                _this31.changeDateFirstTimeClass = settingValue ? '' : 'highlighted';

              case 4:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27);
      }))();
      _this31.storeWebrtcBlocked = null;
      _this31.premiumUser = null;
      _this31.webrtcAvailable = webrtc.available;
      _this31.webrtcBlocked = false;
      _this31.webrtcBlockedByOtherExtension = false;
      _this31.webrtcNotEnoughPermissions = false;
      return _this31;
    }
    /** @method */


    babelHelpers.createClass(IndexSettings, [{
      key: "connectedCallback",
      value: function () {
        var _connectedCallback3 = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee28() {
          return regeneratorRuntime.wrap(function _callee28$(_context28) {
            while (1) {
              switch (_context28.prev = _context28.next) {
                case 0:
                  babelHelpers.get(babelHelpers.getPrototypeOf(IndexSettings.prototype), "connectedCallback", this).call(this);
                  _context28.next = 3;
                  return _head.$storageDefault.set('newSettingsFeatureTimezoneChange2', true);

                case 3:
                case "end":
                  return _context28.stop();
              }
            }
          }, _callee28, this);
        }));

        function connectedCallback() {
          return _connectedCallback3.apply(this, arguments);
        }

        return connectedCallback;
      }()
      /** @method */

    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        babelHelpers.get(babelHelpers.getPrototypeOf(IndexSettings.prototype), "disconnectedCallback", this).call(this);

        if (this.tooltipElement) {
          this.tooltipElement.remove();
          delete this.tooltipElement;
        }

        if (this.documentMouseMove) {
          document.removeEventListener('mousemove', this.documentMouseMove);
          delete this.documentMouseMove;
        }
      }
      /** @method */

    }, {
      key: "firstUpdated",
      value: function firstUpdated() {
        var _this32 = this;

        babelHelpers.get(babelHelpers.getPrototypeOf(IndexSettings.prototype), "firstUpdated", this).call(this);
        this.changeDateElements = Array.from(this.shadowRoot.querySelectorAll('[data-changedate="true"]'));
        /*::( this.changeDateElements: Array<HTMLElement> );*/
        // eslint-disable-line no-unused-expressions

        babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee29() {
          var controlState;
          return regeneratorRuntime.wrap(function _callee29$(_context29) {
            while (1) {
              switch (_context29.prev = _context29.next) {
                case 0:
                  _context29.next = 2;
                  return webrtc.getControlState();

                case 2:
                  controlState
                  /*: 'not available' | 'permission not granted' | 'not controlled' | 'controlled'*/
                  = _context29.sent;

                  if (controlState === 'not controlled') {
                    _this32.webrtcBlockedByOtherExtension = true;
                  }

                case 4:
                case "end":
                  return _context29.stop();
              }
            }
          }, _callee29);
        }))();

        this.webrtcBlocked = function () {
          if (!_head.$storeDefault.getState().webrtcBlock) return false;
          return _head.$permissionsDefault.includes('privacy');
        }();

        this.computeWebrtcNotEnoughPermissions(_head.$permissionsDefault.get());

        _head.$permissionsDefault.addListener(this.computeWebrtcNotEnoughPermissions); // NOTE binding needed here!

      }
      /** @method */

    }, {
      key: "updated",
      value: function updated(changes) {
        if (changes.has('webrtcBlocked')) {
          this.computeWebrtcNotEnoughPermissions(_head.$permissionsDefault.get());
        }
      } // Computed properties and observers

      /** @method */

    }, {
      key: "computeWebrtcNotEnoughPermissions",
      value: function computeWebrtcNotEnoughPermissions(permissions
      /*: Array<string>*/
      )
      /*: void*/
      {
        var _this33 = this;

        this.webrtcNotEnoughPermissions = function () {
          if (_this33.storeWebrtcBlocked === null) return false;
          return _this33.storeWebrtcBlocked && !permissions.includes('privacy');
        }();
      } // Methods

      /** @method */

    }, {
      key: "changeDate",
      value: function () {
        var _changeDate = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee30() {
          var popupPremium, newValue;
          return regeneratorRuntime.wrap(function _callee30$(_context30) {
            while (1) {
              switch (_context30.prev = _context30.next) {
                case 0:
                  if (!(!this.premiumUser && this.hideDate)) {
                    _context30.next = 2;
                    break;
                  }

                  return _context30.abrupt("return");

                case 2:
                  if (this.premiumUser) {
                    _context30.next = 11;
                    break;
                  }

                  popupPremium
                  /*: HTMLElement*/
                  = document.createElement('popup-premium');
                  popupPremium.style.cssText = 'top:-100%;';
                  if (document.body) document.body.append(popupPremium);
                  (0, _head.$gaDefault)('premium', 'show');
                  _context30.next = 9;
                  return window.anime({
                    'targets': popupPremium,
                    'top': 0,
                    'duration': 800,
                    'easing': 'linear'
                  }).finished;

                case 9:
                  popupPremium.style.cssText = '';
                  return _context30.abrupt("return");

                case 11:
                  newValue
                  /*: boolean*/
                  = !this.hideDate;
                  _context30.next = 14;
                  return timezoneChange.set(newValue);

                case 14:
                  this.hideDate = newValue;

                case 15:
                case "end":
                  return _context30.stop();
              }
            }
          }, _callee30, this);
        }));

        function changeDate() {
          return _changeDate.apply(this, arguments);
        }

        return changeDate;
      }()
      /** @method */

    }, {
      key: "changeDateMouseover",
      value: function changeDateMouseover(_ref71)
      /*: void*/
      {
        var _this34 = this;

        var target = _ref71.target;
        if (this.premiumUser || !this.hideDate) return; // Only for not premium user with enabled timezone change

        if (this.changeDateTooltipShown) return; // Tooltip already visible

        if (!babelHelpers.instanceof(target, HTMLElement)) return; // Flow crap

        this.changeDateTooltipShown = true;

        var _target$getBoundingCl = target.getBoundingClientRect(),
            top = _target$getBoundingCl.top,
            left = _target$getBoundingCl.left,
            height = _target$getBoundingCl.height;

        top += height + 7;
        left -= 14;
        if (left < 10) left = 10;
        var tooltipElement
        /*: HTMLElement & { 'text'?: string }*/
        = document.createElement('general-tooltip');
        tooltipElement.text = (0, _head.$internationalizeDefault)('this_option_is_available_only_for_premium');
        tooltipElement.style.cssText = "top:".concat(top, "px;left:").concat(left, "px;");
        this.tooltipElement = tooltipElement;
        if (document.body) document.body.append(tooltipElement);
        var possibleElements
        /*: Array<HTMLElement>*/
        = this.changeDateElements.concat([tooltipElement]);
        /** @method */

        this.documentMouseMove = function (event
        /*: any*/
        ) {
          // In fact MouseEvent
          var path
          /*: Array<EventTarget>*/
          = function () {
            if (event.composedPath) return event.composedPath();
            if (event.deepPath) return event.deepPath();
            return event.path || [event.target];
          }();

          var possibleElementsMove
          /*: boolean*/
          = possibleElements.some(function (element) {
            return path.includes(element);
          });
          if (possibleElementsMove) return;
          tooltipElement.remove();
          document.removeEventListener('mousemove', _this34.documentMouseMove);
          delete _this34.documentMouseMove;
          delete _this34.tooltipElement;
          _this34.changeDateTooltipShown = false;
        };

        document.addEventListener('mousemove', this.documentMouseMove);
      }
      /** @method */

    }, {
      key: "changeWebrtc",
      value: function () {
        var _changeWebrtc = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee31() {
          var blocked;
          return regeneratorRuntime.wrap(function _callee31$(_context31) {
            while (1) {
              switch (_context31.prev = _context31.next) {
                case 0:
                  if (!this.webrtcBlockedByOtherExtension) {
                    _context31.next = 2;
                    break;
                  }

                  return _context31.abrupt("return");

                case 2:
                  blocked
                  /*: boolean*/
                  = !this.webrtcBlocked;
                  _context31.prev = 3;

                  if (!blocked) {
                    _context31.next = 9;
                    break;
                  }

                  _context31.next = 7;
                  return webrtc.enable(privacyPermissionRequest);

                case 7:
                  _context31.next = 11;
                  break;

                case 9:
                  _context31.next = 11;
                  return webrtc.disable(privacyPermissionRequest);

                case 11:
                  this.webrtcBlocked = blocked;
                  _context31.next = 17;
                  break;

                case 14:
                  _context31.prev = 14;
                  _context31.t0 = _context31["catch"](3);
                  log.warn('WebRTC setup in popup failed');

                case 17:
                case "end":
                  return _context31.stop();
              }
            }
          }, _callee31, this, [[3, 14]]);
        }));

        function changeWebrtc() {
          return _changeWebrtc.apply(this, arguments);
        }

        return changeWebrtc;
      }()
      /** @method */

    }, {
      key: "openDiagnostics",
      value: function () {
        var _openDiagnostics = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee32() {
          return regeneratorRuntime.wrap(function _callee32$(_context32) {
            while (1) {
              switch (_context32.prev = _context32.next) {
                case 0:
                  _context32.next = 2;
                  return (0, _sendMessage.$sendMessageDefault)({
                    'type': 'Diagnostics.open'
                  });

                case 2:
                  if (typeof browser !== 'undefined') window.close();

                case 3:
                case "end":
                  return _context32.stop();
              }
            }
          }, _callee32);
        }));

        function openDiagnostics() {
          return _openDiagnostics.apply(this, arguments);
        }

        return openDiagnostics;
      }()
      /** @method */

    }, {
      key: "showDateHelp",
      value: function showDateHelp()
      /*: void*/
      {
        this.showInformationPopup('date');
      }
      /** @method */

    }, {
      key: "showWebrtcHelp",
      value: function showWebrtcHelp()
      /*: void*/
      {
        this.showInformationPopup('webrtc');
      }
      /** @method */

    }, {
      key: "showInformationPopup",
      value: function showInformationPopup(theme
      /*: string*/
      )
      /*: void*/
      {
        var parent
        /*: HTMLElement | null*/
        = document.querySelector('div.MainContainer');
        if (!parent) return;
        var element
        /*: HTMLElement & { 'theme'?: string }*/
        = document.createElement('popup-description');
        element.theme = theme;
        element.style.cssText = 'opacity:0';
        parent.appendChild(element);
        window.anime({
          'targets': element,
          'opacity': 1,
          'duration': 400,
          'easing': 'linear'
        });
      }
    }]);
    return IndexSettings;
  }((0, _head.connect)(_head.$storeDefault)(_head.LitElement));

  customElements.define('index-settings', IndexSettings);

  function render$7() {
    var _this35 = this;

    return (0, _head.html)(_templateObject32_90d461d0e12811e9872675d52dfcba91(), _head.$globalStyleDefault, this.translations.signIn, this.formSubmit, function () {
      if (!_this35.notice) return '';
      return (0, _head.html)(_templateObject33_90d461d0e12811e9872675d52dfcba91(), _this35.notice);
    }(), function () {
      if (!_this35.error) return '';
      return (0, _head.html)(_templateObject34_90d461d0e12811e9872675d52dfcba91());
    }(), this.error ? 'invalid' : '', this.translations.email, this.error ? 'invalid' : '', this.translations.password, this.links.resetPassword, this.translations.forgotYourPassword, this.loading ? ' loading' : '', this.translations.logIn, this.translations.dontHaveAnAccount, this.links.signUp, this.translations.signUp);
  }

  ;
  var loginTemplate = {
    'default': render$7
  };
  _exports.$loginTemplate = loginTemplate;
  var translations$8
  /*: MainLoginTranslations*/
  = (0, _head.$createTranslationObjectDefault)({
    'dontHaveAnAccount': 'dont_have_an_account',
    'email': 'email',
    'forgotYourPassword': 'forgot_your_password',
    'logIn': 'log_in',
    'password': 'password',
    'signIn': 'sign_in',
    'signUp': 'sign_up',
    'welcomeBack': 'welcome_back',
    'errors': {
      'incorrectEmailOrPassword': 'incorrect_email_or_password',
      'noConnection': 'authentication_error_no_connection',
      'thisAccountIsLocked': 'this_account_is_locked_please_contact_us'
    }
  });

  var MainLogin =
  /*#__PURE__*/
  function (_connect7) {
    babelHelpers.inherits(MainLogin, _connect7);
    babelHelpers.createClass(MainLogin, [{
      key: "render",
      value: function render() {
        return render$7.call(this);
      }
    }, {
      key: "stateChanged",
      value: function stateChanged()
      /*: void*/
      {
        var _window3 = window,
            browsecLink = _window3.browsecLink,
            pageLinks = _window3.pageLinks;
        this.links = {
          // In fact must be just pure getter
          'resetPassword': browsecLink(pageLinks.resetPassword),
          'signUp': browsecLink(pageLinks.newUser)
        };
      } // Lifecycle

    }, {
      key: "pageLinks",
      // Properties
      get: function get() {
        return window.pageLinks;
      }
    }, {
      key: "translations",
      get: function get() {
        return translations$8;
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          'links': {
            'type': Object
          },
          'loading': {
            'type': Boolean
          },
          'pageLinks': {
            'type': Object
          },
          'translations': {
            'type': Object
          },
          // Notifications
          'error': {
            'type': Boolean
          },
          'notice': {
            'type': String
          }
        };
      }
    }]);

    function MainLogin() {
      var _this36;

      babelHelpers.classCallCheck(this, MainLogin);
      _this36 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(MainLogin).call(this));
      _this36.links = {};
      _this36.loading = false;
      _this36.error = false;
      return _this36;
    }

    babelHelpers.createClass(MainLogin, [{
      key: "firstUpdated",
      value: function firstUpdated() {
        var _this37 = this;

        babelHelpers.get(babelHelpers.getPrototypeOf(MainLogin.prototype), "firstUpdated", this).call(this);
        /** @function */

        var $ = function $(selector
        /*: string*/
        ) {
          return (
            /*: HTMLElement | null*/
            _this37.shadowRoot.querySelector(selector)
          );
        };

        this.elements = {
          // Nodes
          'mail': $('input[type="text"][name="email"]'),
          'password': $('input[type="password"][name="password"]')
        }; // Popup close after link click for FF and early Chrome

        Array.from(this.shadowRoot.querySelectorAll('a')).forEach(function (node) {
          node.addEventListener('click',
          /*#__PURE__*/
          babelHelpers.asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee33() {
            return regeneratorRuntime.wrap(function _callee33$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    _context33.next = 2;
                    return new Promise(function (resolve) {
                      setTimeout(resolve, 50);
                    });

                  case 2:
                    if (window && window.close) window.close();

                  case 3:
                  case "end":
                    return _context33.stop();
                }
              }
            }, _callee33);
          })));
        });
        this.elements.mail.focus();
      } // Methods

      /** @method */

    }, {
      key: "formSubmit",
      value: function () {
        var _formSubmit = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee35(event) {
          var _this38 = this;

          var nodes, email, password, status, responseText, responseData, property, errorText, _nodes;

          return regeneratorRuntime.wrap(function _callee35$(_context35) {
            while (1) {
              switch (_context35.prev = _context35.next) {
                case 0:
                  event.preventDefault();

                  if (!this.loading) {
                    _context35.next = 3;
                    break;
                  }

                  return _context35.abrupt("return");

                case 3:
                  this.loading = true;

                  if (this.errorView) {
                    nodes
                    /*: Array<Node>*/
                    = Array.from(this.errorView.childNodes);
                    nodes.forEach(function (node) {
                      _this38.errorView.removeChild(node);
                    });
                  }

                  this.error = false;
                  this.notice = null;
                  email
                  /*: string*/
                  = this.elements.mail.value;
                  password
                  /*: string*/
                  = this.elements.password.value;
                  _context35.prev = 9;
                  _context35.next = 12;
                  return _head.$actionsDefault.login({
                    email: email,
                    password: password
                  });

                case 12:
                  this.notice = translations$8.welcomeBack;
                  babelHelpers.asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee34() {
                    var noticeView;
                    return regeneratorRuntime.wrap(function _callee34$(_context34) {
                      while (1) {
                        switch (_context34.prev = _context34.next) {
                          case 0:
                            _context34.next = 2;
                            return _this38.requestUpdate();

                          case 2:
                            noticeView
                            /*: HTMLElement*/
                            = _this38.shadowRoot.querySelector('div.Notice');
                            noticeView.style.cssText = 'opacity: 0';
                            _context34.next = 6;
                            return window.anime({
                              'targets': noticeView,
                              'opacity': 1,
                              'duration': 200,
                              'easing': 'linear'
                            }).finished;

                          case 6:
                            noticeView.style.cssText = '';

                          case 7:
                          case "end":
                            return _context34.stop();
                        }
                      }
                    }, _callee34);
                  }))();
                  _context35.next = 16;
                  return new Promise(function (resolve) {
                    setTimeout(resolve, 1000);
                  });

                case 16:
                  _head.$storeDefault.dispatch({
                    'type': 'Page change',
                    'page': 'index:home'
                  });

                  _context35.next = 37;
                  break;

                case 19:
                  _context35.prev = 19;
                  _context35.t0 = _context35["catch"](9);
                  status = _context35.t0.status, responseText = _context35.t0.responseText;
                  responseData = {};

                  try {
                    if (responseText) responseData = JSON.parse(responseText);
                  } catch (error) {}

                  property
                  /*: string*/
                  = function () {
                    if (status !== 401) return 'noConnection';
                    if (responseData.error_code === 8) return 'thisAccountIsLocked';
                    return 'incorrectEmailOrPassword';
                  }();

                  errorText = translations$8.errors[property];
                  this.error = true;
                  if (status === 401) this.elements.password.value = '';
                  _context35.next = 30;
                  return this.requestUpdate();

                case 30:
                  this.errorView = this.shadowRoot.querySelector('div.Error');
                  /*::( this.errorView: HTMLElement );*/
                  // eslint-disable-line no-unused-expressions

                  _nodes
                  /*: Array<Node>*/
                  = errorText.split(/\n/g).reduce(function (carry, text
                  /*: string*/
                  , index, array) {
                    if (text.trim()) carry.push(document.createTextNode(text));

                    if (index !== array.length - 1) {
                      carry.push(document.createElement('br'));
                    }

                    return carry;
                  }, []);

                  _nodes.forEach(function (node) {
                    _this38.errorView.appendChild(node);
                  });

                  this.errorView.style.cssText = 'opacity: 0';
                  _context35.next = 36;
                  return window.anime({
                    'targets': this.errorView,
                    'opacity': 1,
                    'duration': 200
                  }).finished;

                case 36:
                  this.errorView.style.cssText = '';

                case 37:
                  this.loading = false;

                case 38:
                case "end":
                  return _context35.stop();
              }
            }
          }, _callee35, this, [[9, 19]]);
        }));

        function formSubmit(_x10) {
          return _formSubmit.apply(this, arguments);
        }

        return formSubmit;
      }()
      /** @method */

    }, {
      key: "onAnimationComplete",
      value: function onAnimationComplete()
      /*: void*/
      {
        this.elements.mail.focus();
      }
    }]);
    return MainLogin;
  }((0, _head.connect)(_head.$storeDefault)(_head.LitElement));

  customElements.define('main-login', MainLogin);
  var translations$9
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'help': 'help'
  });
  /** @method */

  function render$8() {
    var _this39 = this;

    return (0, _head.html)(_templateObject35_90d461d0e12811e9872675d52dfcba91(), _head.$globalStyleDefault, function () {
      if (!_this39.switchVisible) return '';
      return (0, _head.html)(_templateObject36_90d461d0e12811e9872675d52dfcba91(), _this39.switchClick, _this39.switchOn);
    }(), function () {
      if (!_this39.helpVisible) return '';
      return (0, _head.html)(_templateObject37_90d461d0e12811e9872675d52dfcba91(), _this39.openHelp, translations$9.help);
    }());
  }

  ;
  var mainIndexTemplate = {
    'default': render$8
  };
  _exports.$mainIndexTemplate = mainIndexTemplate;
  var translations$a
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'on': 'on',
    'off': 'off'
  });

  var Switch =
  /*#__PURE__*/
  function (_LitElement5) {
    babelHelpers.inherits(Switch, _LitElement5);

    function Switch() {
      babelHelpers.classCallCheck(this, Switch);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Switch).apply(this, arguments));
    }

    babelHelpers.createClass(Switch, [{
      key: "render",
      value: function render() {
        return (0, _head.html)(_templateObject38_90d461d0e12811e9872675d52dfcba91(), _head.$globalStyleDefault, this.translations.off, this.translations.on);
      }
    }, {
      key: "updated",
      value: function updated(changes) {
        if (changes.has('on')) this.classList.toggle('on', this.on);
      }
    }, {
      key: "translations",
      // Read-only properties
      get: function get() {
        return translations$a;
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          'on': {
            'type': Boolean,
            'observer': 'observeOn'
          },
          'translations': {
            'type': Object
          }
        };
      }
    }]);
    return Switch;
  }(_head.LitElement);

  ;
  customElements.define('c-switch', Switch);

  var MainIndex =
  /*#__PURE__*/
  function (_connect8) {
    babelHelpers.inherits(MainIndex, _connect8);
    babelHelpers.createClass(MainIndex, [{
      key: "render",
      value: function render() {
        return render$8.call(this);
      }
    }, {
      key: "stateChanged",
      value: function stateChanged(_ref74)
      /*: void*/
      {
        var domain = _ref74.domain,
            pac = _ref74.pac,
            page = _ref74.page;

        this.helpVisible = function () {
          var parts
          /*: Array<string>*/
          = page.split(':');
          return parts[0] === 'index' && parts[1] === 'filters';
        }();

        this.page = page;
        this.switchOn = pac.mode === 'proxy';

        this.switchVisible = function () {
          var parts
          /*: Array<string>*/
          = page.split(':');

          if (parts[0] === 'index' && parts[1] === 'filters') {
            return false;
          }

          if (!domain) return true;
          var domains
          /*: Array<string>*/
          = pac.filters.reduce(function (carry, _ref75) {
            var disabled = _ref75.disabled,
                domain = _ref75.domain;
            if (!disabled) carry.push(domain);
            return carry;
          }, []);
          return !domains.includes(domain);
        }();
      } // Lifecycle

    }], [{
      key: "properties",
      get: function get() {
        return {
          'helpVisible': {
            'type': Boolean
          },
          'page': {
            'type': String,
            'observer': 'observePage'
          },
          'switchOn': {
            'type': Boolean
          },
          'switchVisible': {
            'type': Boolean
          }
        };
      }
    }]);

    function MainIndex() {
      var _this40;

      babelHelpers.classCallCheck(this, MainIndex);
      _this40 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(MainIndex).call(this));
      _this40.helpVisible = false;
      _this40.page = 'index:home';
      _this40.switchOn = false;
      _this40.switchVisible = false;
      return _this40;
    }
    /** @method */


    babelHelpers.createClass(MainIndex, [{
      key: "firstUpdated",
      value: function firstUpdated() {
        var _this41 = this;

        babelHelpers.get(babelHelpers.getPrototypeOf(MainIndex.prototype), "firstUpdated", this).call(this);
        this.defaultCountry = window.config.proxy.defaultCountry || 'nl';
        /** @type {Element} */

        this.switchElement = this.shadowRoot.querySelector('div.Switch');
        /** @type {LitElement} */

        this.switch = this.switchElement; // Removing empty nodes

        var nodes = Array.from(this.switch.childNodes);
        nodes.forEach(function (node) {
          if (node.nodeType === Node.ELEMENT_NODE) return;

          _this41.switch.removeChild(node);
        });
      }
      /** @method */

    }, {
      key: "updated",
      value: function () {
        var _updated2 = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee36(changes) {
          var newValue, oldValue, _map, _map2, newPage, oldPage, mode, direction, sameElement, oldElement, domain, name, newElement;

          return regeneratorRuntime.wrap(function _callee36$(_context36) {
            while (1) {
              switch (_context36.prev = _context36.next) {
                case 0:
                  if (!changes.has('page')) {
                    _context36.next = 29;
                    break;
                  }

                  newValue = this.page;
                  oldValue = changes.get('page');

                  if (oldValue) {
                    _context36.next = 5;
                    break;
                  }

                  return _context36.abrupt("return");

                case 5:
                  // Initial redux call
                  _map = [newValue, oldValue].map(function (item) {
                    return item.split(':');
                  }), _map2 = babelHelpers.slicedToArray(_map, 2), newPage = _map2[0], oldPage = _map2[1];

                  if (!(newPage[0] !== 'index')) {
                    _context36.next = 8;
                    break;
                  }

                  return _context36.abrupt("return");

                case 8:
                  // This will remove this element
                  mode
                  /*: string*/
                  = _head.$storeDefault.getState().pac.mode; // Removing first elements (they 'index' anyway)

                  newPage.shift();
                  oldPage.shift();
                  direction
                  /*: string*/
                  = newPage[0] === 'home' ? 'left' : 'right';
                  sameElement
                  /*: boolean*/
                  = newPage[0] === oldPage[0];
                  /** @type {Element} */

                  oldElement = this.switch.firstChild;

                  if (!sameElement) {
                    _context36.next = 18;
                    break;
                  }

                  if (newPage[0] === 'filters' && newPage[1]) {
                    domain
                    /*: string*/
                    = newPage[1];
                    oldElement.domain = domain;
                    oldElement.country = mode === 'proxy' ? null : this.defaultCountry;
                    oldElement.selectedDomain = null;
                  }

                  _context36.next = 29;
                  break;

                case 18:
                  name
                  /*: string | void*/
                  = function () {
                    switch (newPage[0]) {
                      case 'filters':
                        return 'index-filters';

                      case 'home':
                        return 'index-home';

                      case 'locations':
                        return 'index-locations';

                      case 'settings':
                        return 'index-settings';
                    }
                  }();

                  if (name) {
                    _context36.next = 21;
                    break;
                  }

                  return _context36.abrupt("return");

                case 21:
                  newElement
                  /*: HTMLElement & { 'country'?: string | null, 'domain'?: string }*/
                  = document.createElement(name);

                  if (newPage[0] === 'locations' && newPage[1]) {
                    newElement.domain = newPage[1];
                  }

                  if (newPage[0] === 'filters' && newPage[1]) {
                    newElement.domain = newPage[1];
                    newElement.country = mode === 'proxy' ? null : this.defaultCountry;
                  }

                  if (direction === 'left') {
                    this.switch.insertBefore(newElement, oldElement);
                    this.switchElement.style.cssText = 'margin-left:-100%;';
                  } else {
                    this.switch.appendChild(newElement);
                  }

                  _context36.next = 27;
                  return window.anime({
                    'targets': this.switchElement,
                    'margin-left': direction === 'left' ? ['-100%', '0%'] : ['0%', '-100%'],
                    'duration': 250,
                    'easing': 'linear'
                  }).finished;

                case 27:
                  this.switch.removeChild(oldElement);
                  this.switchElement.style.cssText = '';

                case 29:
                case "end":
                  return _context36.stop();
              }
            }
          }, _callee36, this);
        }));

        function updated(_x11) {
          return _updated2.apply(this, arguments);
        }

        return updated;
      }() // Methods

      /** @method */

    }, {
      key: "openHelp",
      value: function openHelp()
      /*: void*/
      {
        (0, _sendMessage.$sendMessageDefault)({
          'type': 'сounters.increase',
          'property': 'popup: smart settings: open help'
        });
        (0, _sendMessage.$sendMessageDefault)({
          'type': 'create tab',
          'options': '/pages/help/help.html'
        });
      }
      /** @method */

    }, {
      key: "switchClick",
      value: function switchClick()
      /*: void*/
      {
        var _this42 = this;

        var delay = new _head.$DelayRecordDefault('Big switch from ' + (this.switchOn ? 'on' : 'off'));
        babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee37() {
          return regeneratorRuntime.wrap(function _callee37$(_context37) {
            while (1) {
              switch (_context37.prev = _context37.next) {
                case 0:
                  if (_this42.switchOn) {
                    _context37.next = 5;
                    break;
                  }

                  _context37.next = 3;
                  return _head.$proxyDefault.enable();

                case 3:
                  _context37.next = 7;
                  break;

                case 5:
                  _context37.next = 7;
                  return _head.$proxyDefault.disable();

                case 7:
                  delay.end();

                case 8:
                case "end":
                  return _context37.stop();
              }
            }
          }, _callee37);
        }))();
      }
    }]);
    return MainIndex;
  }((0, _head.connect)(_head.$storeDefault)(_head.LitElement));

  ;
  customElements.define('main-index', MainIndex);

  var PageSwitch =
  /*#__PURE__*/
  function (_connect9) {
    babelHelpers.inherits(PageSwitch, _connect9);
    babelHelpers.createClass(PageSwitch, [{
      key: "render",
      value: function render() {
        return (0, _head.html)(_templateObject39_90d461d0e12811e9872675d52dfcba91(), _head.$globalStyleDefault);
      }
    }, {
      key: "stateChanged",
      value: function stateChanged(_ref77)
      /*: void*/
      {
        var page = _ref77.page;
        this.indexPage = page.split(':')[0] === 'index';
      } // Lifecycle

    }], [{
      key: "properties",
      get: function get() {
        return {
          'animation': {
            'type': Boolean
          },
          'indexPage': {
            'type': Boolean
          }
        };
      }
    }]);

    function PageSwitch() {
      var _this43;

      babelHelpers.classCallCheck(this, PageSwitch);
      _this43 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PageSwitch).call(this));
      _this43.animation = false;
      _this43.indexPage = true;
      return _this43;
    }
    /** @method */


    babelHelpers.createClass(PageSwitch, [{
      key: "updated",
      value: function () {
        var _updated3 = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee38(changes
        /*: Map<string, any>*/
        ) {
          var _this44 = this;

          var newIsIndex, oldValue, elements;
          return regeneratorRuntime.wrap(function _callee38$(_context38) {
            while (1) {
              switch (_context38.prev = _context38.next) {
                case 0:
                  if (!changes.has('indexPage')) {
                    _context38.next = 24;
                    break;
                  }

                  newIsIndex
                  /*: boolean*/
                  = this.indexPage;
                  oldValue
                  /*: boolean | void*/
                  = changes.get('indexPage');

                  if (!(oldValue === undefined)) {
                    _context38.next = 5;
                    break;
                  }

                  return _context38.abrupt("return");

                case 5:
                  // First case when element just created
                  if (this.animation) {
                    // Over-clicking
                    this.animationObject.pause(); // Stop current animation
                  } else {
                    this.animation = true;
                  } // Remove old element from old animation


                  Array.from(this.ribbonNode.childNodes).filter(function (element) {
                    return element.dataset.old === 'true';
                  }).forEach(function (element) {
                    _this44.ribbonNode.removeChild(element);
                  }); // Remove all other old elements

                  Array.from(this.ribbonNode.childNodes).slice(0, -1).forEach(function (element) {
                    _this44.ribbonNode.removeChild(element);
                  });
                  elements
                  /*:PageSwitchElements */
                  = {
                    'old': this.ribbon.lastChild,
                    'new': function () {
                      var tag
                      /*: string*/
                      = newIsIndex ? 'main-index' : 'main-login';
                      var element = document.createElement(tag);
                      element.style.cssText = 'visibility:hidden;';
                      return element;
                    }()
                  }; // Mark old element for future conflicts

                  elements.old.dataset.old = 'true'; // Adding new elements

                  if (newIsIndex) {
                    this.ribbon.insertBefore(elements.new, elements.old);
                  } else {
                    this.ribbon.appendChild(elements.new);
                  } // flow ignore next line


                  _context38.next = 13;
                  return elements.new.updateComplete;

                case 13:
                  // NOTE !
                  if (newIsIndex) {
                    this.ribbon.style.cssText = 'margin-left:-100%;';
                  }

                  _context38.next = 16;
                  return new Promise(function (resolve) {
                    setTimeout(resolve, 0);
                  });

                case 16:
                  // NOTE setTimeout due to chrome bug
                  elements.new.style.cssText = '';
                  this.animationObject = window.anime({
                    'targets': this.ribbonNode,
                    'margin-left': newIsIndex ? '0px' : '-100%',
                    'duration': 250,
                    'easing': 'linear'
                  });
                  _context38.next = 20;
                  return this.animationObject.finished;

                case 20:
                  if (this.ribbonNode.contains(elements.old)) {
                    this.ribbon.removeChild(elements.old);
                  }

                  this.ribbon.style.cssText = '';
                  if (elements.new.onAnimationComplete) elements.new.onAnimationComplete();
                  this.animation = false;

                case 24:
                case "end":
                  return _context38.stop();
              }
            }
          }, _callee38, this);
        }));

        function updated(_x12) {
          return _updated3.apply(this, arguments);
        }

        return updated;
      }()
      /** @method */

    }, {
      key: "firstUpdated",
      value: function firstUpdated() {
        babelHelpers.get(babelHelpers.getPrototypeOf(PageSwitch.prototype), "firstUpdated", this).call(this);
        this.ribbonNode = Array.from(this.shadowRoot.children).pop();
        this.ribbon = this.ribbonNode; // Initial

        this.ribbon.appendChild(document.createElement('main-index'));
      }
    }]);
    return PageSwitch;
  }((0, _head.connect)(_head.$storeDefault)(_head.LitElement));

  customElements.define('page-switch', PageSwitch);
});