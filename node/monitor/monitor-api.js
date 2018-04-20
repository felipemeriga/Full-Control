var mac = require('./mock-amp-converter');

module.exports = {

    convBitToVolt: function(b) {
        var voltR = (b * mac.refValue) / 1024;
        return Number(voltR.toFixed(2))
    },

    convVoltToAmp: function(voltR) {
        var ampR = voltR / mac.resValue;
        var ampF = (ampR * 2000) / Math.sqrt(2);

        return Number(ampF.toFixed(2))
    },

    convAmpToWatt: function(ampF) {
        var watt = ampF * 110

        return Number(watt.toFixed(2))
    },

    getKiloWatt: function(b) {

        var voltR = this.convBitToVolt(b);
        var ampF = this.convVoltToAmp(voltR);
        var watt = this.convAmpToWatt(ampF);

        var kW = watt / 1000;

        return Number(kW.toFixed(2));
    }
}