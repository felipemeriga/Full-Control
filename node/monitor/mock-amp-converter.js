// mock_amp_converter
// Mock current converter
//

// Reference constant to convert to/from tension
const resValue = 35.4;
const refValue = 2.5;

module.exports = {
    resValue,

    refValue,

    // Random near real ampere value
    // Randomly generates an current value
    // between 0 to 100 A.
    getAmp: function() {
        let amp = Math.random() * 100;
        return Number(amp.toFixed(2));
    },

    // Get the current peak from a amp current value
    getAmpPeak: function(amp) {
        let ampPeak = amp * Math.sqrt(2);
        return Number(ampPeak.toFixed(2));
    },

    // Convert a current peak value to 
    // Converted Current
    getConvAmp: function(ampPeak) {
        let convAmp = ampPeak / 2000;
        convAmp = Number(convAmp.toFixed(2))

        if (convAmp == 0) {
            return 0.01;
        } else {
            return convAmp;
        }
    },

    // Convert Rasp Current value to tension value
    // in volts
    convToVolts: function(convAmp) {
        v = convAmp * resValue;
        return Number(v.toFixed(2));
    },

    // Convert a tension value in volts
    // to a Bit value
    convToBit: function(v) {
        b = (v * 1024) / refValue;
        return Number(b.toFixed());
    },

    // Get the Bit value.
    // This funtion mock the value that will be read from
    // Raspberry.
    getBitValue: function() {
        amp = this.getAmp();
        ampPeak = this.getAmpPeak(amp);
        convAmp = this.getConvAmp(ampPeak);

        v = this.convToVolts(convAmp);
        b = this.convToBit(v)

        return b;
    }
};