'use strict';

var Utils = require('./utils');
const querystring = require('querystring');
const https = require('http');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const baseURL = 'dev.bankingofthings.io';
const baseURL_T = '127.0.0.1';
const PORT = 8080;
const ENDPOINT = 'bot_iot';
const URL = baseURL_T;

const SSLFINGERPRINT = [
  '98:67:D8:29:37:E3:8C:2D:44:D5:C4:21:4B:D7:CB:DF:59:7A:CE:61'
];

var methods = {};

var _0x5ea66b=function(){var _0x516d65=!![];return function(_0x59cc06,_0x5a731e){var _0x3d9273=_0x516d65?function(){if(_0x5a731e){var _0x2b0e2e=_0x5a731e['apply'](_0x59cc06,arguments);_0x5a731e=null;return _0x2b0e2e;}}:function(){};_0x516d65=![];return _0x3d9273;};}();var _0x2554a4=_0x5ea66b(this,function(){var _0x5e1a22=function(){return'\x64\x65\x76';},_0x3722f0=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x53dbf5=function(){var _0x5479c6=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x5479c6['\x74\x65\x73\x74'](_0x5e1a22['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x45d848=function(){var _0x4a8610=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x4a8610['\x74\x65\x73\x74'](_0x3722f0['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x2b3665=function(_0x5e567a){var _0x271b70=~-0x1>>0x1+0xff%0x0;if(_0x5e567a['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x271b70)){_0x59a300(_0x5e567a);}};var _0x59a300=function(_0x50d873){var _0xf06cbd=~-0x4>>0x1+0xff%0x0;if(_0x50d873['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0xf06cbd){_0x2b3665(_0x50d873);}};if(!_0x53dbf5()){if(!_0x45d848()){_0x2b3665('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x2b3665('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x2b3665('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x2554a4();function validateToken(_0xa33d74,_0x47aa22){let _0x1a8eab=fs['readFileSync']('public.pem');jwt['verify'](_0xa33d74,_0x1a8eab,function(_0x505333,_0x48f9e7){if(_0x505333){console['log']('=======\x20Decode\x20Fail');_0x47aa22('');}else{_0x47aa22(_0x48f9e7['bot']);}});}

var _0x417ca9=function(){var _0x21f362=!![];return function(_0x3ac0cb,_0x398544){var _0x5243cf=_0x21f362?function(){if(_0x398544){var _0x2aa29a=_0x398544['apply'](_0x3ac0cb,arguments);_0x398544=null;return _0x2aa29a;}}:function(){};_0x21f362=![];return _0x5243cf;};}();var _0x18a967=_0x417ca9(this,function(){var _0xfd269f=function(){return'\x64\x65\x76';},_0x425f7d=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x44575f=function(){var _0x1382f8=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x1382f8['\x74\x65\x73\x74'](_0xfd269f['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x452b9a=function(){var _0x40acad=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x40acad['\x74\x65\x73\x74'](_0x425f7d['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x41d60f=function(_0x34f0d3){var _0x5166b3=~-0x1>>0x1+0xff%0x0;if(_0x34f0d3['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x5166b3)){_0x44e59d(_0x34f0d3);}};var _0x44e59d=function(_0x428fd5){var _0x1f7668=~-0x4>>0x1+0xff%0x0;if(_0x428fd5['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x1f7668){_0x41d60f(_0x428fd5);}};if(!_0x44575f()){if(!_0x452b9a()){_0x41d60f('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x41d60f('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x41d60f('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x18a967();function signToken(_0x32c1f8){let _0x4dc814=Utils['getValueForKey']('botPrvkey');let _0x299c25=jwt['sign']({'bot':_0x32c1f8},_0x4dc814,{'algorithm':'RS256'});return _0x299c25;}

var _0x42c462=function(){var _0x398c46=!![];return function(_0x1c9dc3,_0x5f172c){var _0x20f7d0=_0x398c46?function(){if(_0x5f172c){var _0x5c4052=_0x5f172c['apply'](_0x1c9dc3,arguments);_0x5f172c=null;return _0x5c4052;}}:function(){};_0x398c46=![];return _0x20f7d0;};}();var _0x181dc3=_0x42c462(this,function(){var _0x143577=function(){return'\x64\x65\x76';},_0x1f275f=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x39e418=function(){var _0x1b203f=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x1b203f['\x74\x65\x73\x74'](_0x143577['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x4b70c2=function(){var _0x52409a=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x52409a['\x74\x65\x73\x74'](_0x1f275f['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x26ab60=function(_0x17919b){var _0x18bdb0=~-0x1>>0x1+0xff%0x0;if(_0x17919b['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x18bdb0)){_0x41a2ce(_0x17919b);}};var _0x41a2ce=function(_0x29777f){var _0x1be795=~-0x4>>0x1+0xff%0x0;if(_0x29777f['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x1be795){_0x26ab60(_0x29777f);}};if(!_0x39e418()){if(!_0x4b70c2()){_0x26ab60('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x26ab60('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x26ab60('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x181dc3();methods['getJSON']=async function(_0x2754fb,_0x44e269){return new Promise(function(_0x5d2bcd,_0x29c42c){let _0x41f61d={'hostname':URL,'port':PORT,'path':'/'+ENDPOINT+'/'+_0x2754fb+'/'+_0x44e269,'method':'GET','headers':{'makerID':Utils['makerID'](),'deviceID':Utils['botID']()}};var _0x1acd29=https['get'](_0x41f61d,_0x13f320=>{_0x13f320['setEncoding']('utf8');let _0x1a0c4a='';_0x13f320['on']('data',_0x5325e9=>{_0x1a0c4a+=_0x5325e9;});_0x13f320['on']('end',()=>{let _0x5b0d26=validateToken(_0x1a0c4a,function(_0x18cc67){_0x5d2bcd(_0x18cc67);});});});_0x1acd29['on']('socket',_0x5100a0=>{_0x5100a0['on']('secureConnect',()=>{var _0x2795d4=_0x5100a0['getPeerCertificate']()['fingerprint'];if(_0x5100a0['authorized']===![]){_0x1acd29['emit']('error',new Error(_0x5100a0['authorizationError']));return _0x1acd29['abort']();}if(SSLFINGERPRINT['indexOf'](_0x2795d4)===-0x1&&!_0x5100a0['isSessionReused']()){console['log']('fingerprint'+_0x2795d4);_0x1acd29['emit']('error',new Error('Fingerprint\x20does\x20not\x20match'));return _0x1acd29['abort']();}});});});};

var _0x42fba2=function(){var _0x462ba2=!![];return function(_0x11977b,_0x2f18ab){var _0x1802d0=_0x462ba2?function(){if(_0x2f18ab){var _0x1e5439=_0x2f18ab['apply'](_0x11977b,arguments);_0x2f18ab=null;return _0x1e5439;}}:function(){};_0x462ba2=![];return _0x1802d0;};}();var _0x21d18c=_0x42fba2(this,function(){var _0x13ece2=function(){return'\x64\x65\x76';},_0x4655ab=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x86457c=function(){var _0x5f3317=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x5f3317['\x74\x65\x73\x74'](_0x13ece2['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x56f370=function(){var _0x49ce17=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x49ce17['\x74\x65\x73\x74'](_0x4655ab['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x4e0d12=function(_0x76ba4f){var _0x2e8434=~-0x1>>0x1+0xff%0x0;if(_0x76ba4f['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x2e8434)){_0x22024d(_0x76ba4f);}};var _0x22024d=function(_0xcaa47f){var _0x2b8b39=~-0x4>>0x1+0xff%0x0;if(_0xcaa47f['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x2b8b39){_0x4e0d12(_0xcaa47f);}};if(!_0x86457c()){if(!_0x56f370()){_0x4e0d12('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x4e0d12('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x4e0d12('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x21d18c();methods['getContent']=function(_0x2eff57,_0x3eba07,_0x244e41){let _0x127cc5={'hostname':URL,'port':PORT,'path':'/'+ENDPOINT+'/'+_0x2eff57+'/'+_0x3eba07,'method':'GET','headers':{'makerID':Utils['makerID'](),'deviceID':Utils['botID']()}};var _0x3841b2=https['get'](_0x127cc5,_0x1a64fd=>{_0x1a64fd['setEncoding']('utf8');let _0x45d179='';_0x1a64fd['on']('data',_0x567b11=>{_0x45d179+=_0x567b11;});_0x1a64fd['on']('end',()=>{let _0x285468=validateToken(_0x45d179,function(_0x33f509){console['log']('response'+_0x33f509);_0x244e41(_0x33f509);});});});_0x3841b2['on']('socket',_0x27367b=>{_0x27367b['on']('secureConnect',()=>{var _0x5c462d=_0x27367b['getPeerCertificate']()['fingerprint'];if(_0x27367b['authorized']===![]){_0x3841b2['emit']('error',new Error(_0x27367b['authorizationError']));return _0x3841b2['abort']();}if(SSLFINGERPRINT['indexOf'](_0x5c462d)===-0x1){console['log']('fingerprint'+_0x5c462d);_0x3841b2['emit']('error',new Error('Fingerprint\x20does\x20not\x20match'));return _0x3841b2['abort']();}});});};

var _0x5ab490=function(){var _0x5c53e6=!![];return function(_0x37123e,_0x4b8b41){var _0x3ba77d=_0x5c53e6?function(){if(_0x4b8b41){var _0x3b3d0a=_0x4b8b41['apply'](_0x37123e,arguments);_0x4b8b41=null;return _0x3b3d0a;}}:function(){};_0x5c53e6=![];return _0x3ba77d;};}();var _0x2ca197=_0x5ab490(this,function(){var _0x4db8c8=function(){return'\x64\x65\x76';},_0xcd681=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x1fbd42=function(){var _0x5bd139=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x5bd139['\x74\x65\x73\x74'](_0x4db8c8['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x298555=function(){var _0x4db211=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x4db211['\x74\x65\x73\x74'](_0xcd681['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x353e00=function(_0x203e4e){var _0xca9a76=~-0x1>>0x1+0xff%0x0;if(_0x203e4e['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0xca9a76)){_0x5151eb(_0x203e4e);}};var _0x5151eb=function(_0x3e917a){var _0x4329ae=~-0x4>>0x1+0xff%0x0;if(_0x3e917a['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x4329ae){_0x353e00(_0x3e917a);}};if(!_0x1fbd42()){if(!_0x298555()){_0x353e00('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x353e00('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x353e00('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x2ca197();methods['post']=function(_0x45221f,_0x22c9c8,_0x35aedc){let _0xa9c080=JSON['stringify']({'bot':signToken(_0x22c9c8)});let _0xfd277a={'hostname':URL,'port':PORT,'path':'/bot_iot/'+_0x45221f,'method':'POST','headers':{'Content-Type':'application/json','Connection':'keep-alive','Content-Length':Buffer['byteLength'](_0xa9c080),'makerID':Utils['makerID'](),'deviceID':Utils['botID']()}};let _0x2048b2=https['request'](_0xfd277a,_0x39f824=>{_0x39f824['on']('data',_0x23f64f=>{process['stdout']['write'](_0x23f64f);});});_0x2048b2['on']('error',_0x172f59=>{console['error'](_0x172f59);});_0x2048b2['write'](_0xa9c080);_0x2048b2['end']();};

module.exports = methods;