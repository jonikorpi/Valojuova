//
// Variables

Variables = {};
export default Variables;

//
// TODO: Gameplay

Variables.tilesPerRow = 9;
Variables.tilesPerColumn = 6;
Variables.heroesPerParty = 3;

//
// TODO: Visuals

Variables.gridRadius = 4;
Variables.UIRadius = Variables.gridRadius - 1;
Variables.UISpace = Variables.gridRadius - Variables.UIRadius;
Variables.gridThickness = 0.003;

Variables.tileSize = 0.3;
Variables.tileSizeFactor = 0.91;
Variables.tileThickness = Variables.tileSize * 0.056;
Variables.textureSize = 1024;

Variables.heroHeight = Variables.tileSize;
Variables.heroUnit = Variables.heroHeight/8;
Variables.heroWidth = Variables.heroUnit * 2.333;
Variables.heroDepth = Variables.heroUnit * 0.618;

//
// Targets

Variables.targetRadius = 0.1618;
Variables.targetThickness = 0.764;
Variables.targetMargin = Variables.targetRadius * 1.618;
Variables.targetFontSize = Variables.targetRadius * Math.pow(1.618, 1);

//
// Camera

Variables.AU = 149597870700;
Variables.clipRange = Variables.AU * 5;
Variables.screenFOV = 90;
Variables.VRFOV = 80;

Variables.cursorSize = 0.05;
Variables.cursorLineThickness = 0.125;
Variables.cursorActive = 1.618;

//
// Animations

Variables.springConfig = {stiffness: 300, damping: 30};
Variables.walkingSpeed = 1;

//
// Times

Variables.time = 1000;

Variables.shortTime = function(exponent) {
  return Variables.time / Math.pow(1.618, exponent);
}

Variables.longTime = function(exponent) {
  return Variables.time * Math.pow(1.618, exponent);
}

//
// Functions

Variables.sinToDegrees = function(sin) {
  return Math.asin(sin) * 180 / Math.PI;
};

Variables.hypotenuse = function(a, b) {
  return Math.sqrt(a * a + b * b);
};

Variables.rightAngle = function(a, b) {
  const c = Variables.hypotenuse(a, b);
  const sin = b / c;
  let angle = Variables.sinToDegrees(sin);

  if (a < 0 && b < 0) {
    angle = 180 - angle;
  } else if (a < 0 && b >= 0) {
    angle = 180 - angle;
  }

  return angle + 90;
};

Variables.romanize = function(num) {
  var digits, i, key, roman;
  if (!+num) {
    return false;
  }
  digits = String(+num).split('');
  key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  roman = '';
  i = 3;
  while (i--) {
    roman = (key[+digits.pop() + i * 10] || '') + roman;
  }
  return Array(+digits.join('') + 1).join('M') + roman;
};
