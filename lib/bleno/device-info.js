const Logger = require('../logger');

const bleno = require('bleno');
const os = require('os');
const util = require('util');

const logger = new Logger('Bluetooth Service');

const DeviceInfoCharacteristic = function () {
    DeviceInfoCharacteristic.super_.call(this, {
        uuid: 'CD1B3A04-FA33-41AA-A25B-8BEB2D3BEF4E',
        properties: ['read']
    });
    this._value = new Buffer(0);
};

DeviceInfoCharacteristic.prototype.onReadRequest = function (offset, callback) {
    if (!offset) {
        logger.info('Device Info being read by connected device.');
        this._value = new Buffer(JSON.stringify({
            'platform': os.platform(),
            'release': os.release(),
            'type': os.type(),
            'arch': os.arch(),
            'cpus': JSON.stringify(os.cpus().length),
            'hostname': os.hostname(),
            'endianness': os.endianness(),
            'totalMemory': JSON.stringify(os.totalmem())
        }));
    }

    callback(
        this.RESULT_SUCCESS,
        this._value.slice(offset, this._value.length)
    );
};

util.inherits(DeviceInfoCharacteristic, bleno.Characteristic);
module.exports = DeviceInfoCharacteristic;
