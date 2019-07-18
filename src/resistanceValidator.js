const BANDS = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    gray: 8,
    white: 9
}

const MULIPLIER = {
    black: 1,
    brown: 10,
    red: 100,
    orange: 1000,
    yellow: 10000,
    green: 100000,
    blue: 1000000,
    violet: 10000000,
    gray: 100000000,
    white: 1000000000,
    gold: .1,
    silver: .01
}

const TOLERANCE = {
    brown: .01,
    red: .02,
    gold: .05,
    silver: .1,
    none: .2
}

function isInRange(stripeColor, measuredOhms) {
    let {length} = stripeColor;
    let offset = length < 5 ? 2 : 3;

    const num = parseInt(stripeColor.slice(0, offset).map(color => BANDS[color]).join(""));
    const mult = MULIPLIER[stripeColor[offset]]
    const tolerance = TOLERANCE[stripeColor[offset + 1] || 'none']

    let topRange = num * mult * (1 + tolerance)
    let bottomRange = num * mult * (1 - tolerance)
    
    return measuredOhms >= bottomRange && measuredOhms <= topRange
}

module.exports.isInRange = isInRange;