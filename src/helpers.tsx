export const midPointDiff = (x1: any, y1: any, activeBlock: any) => {
  let mid = { x: activeBlock.x, y: activeBlock.y }
  return {
    x: x1 - mid.x,
    y: y1 - mid.y,
  }
}


export const activeBlock = (x: number, y: number, sections: number) => {
  let blockx: number = Math.floor(x / sections)
  let blocky: number = Math.floor(y / sections)
  if (blockx % 2 === 0) {
    blockx += 1
  }
  if (blocky % 2 === 0) {
    blocky += 1
  }

  return {
    x: blockx,
    y: blocky
  }
}

export const midPointBtw = (p1: { x: number, y: number }, p2: { x: number, y: number }) => {
  return {
    x: p1.x + (p2.x - p1.x) / 2,
    y: p1.y + (p2.y - p1.y) / 2
  };
}

export const TWOPI = 2 * Math.PI

export const hexToRgb = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
}


export const scaleCanvas = (canvas: any, context: any, width: number, height: number) => {
  // assume the device pixel ratio is 1 if the browser doesn't specify it
  const devicePixelRatio = window.devicePixelRatio || 1;

  // determine the 'backing store ratio' of the canvas context
  const backingStoreRatio = (
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio || 1
  );

  // determine the actual ratio we want to draw at
  const ratio = devicePixelRatio / backingStoreRatio;

  if (devicePixelRatio !== backingStoreRatio) {
    // set the 'real' canvas size to the higher width/height
    canvas.width = width * ratio;
    canvas.height = height * ratio;

    // ...then scale it back down with CSS
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
  }
  else {
    // this is a normal 1:1 device; just scale it simply
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = '';
    canvas.style.height = '';
  }

  // scale the drawing context so everything will work at the higher ratio
  context.scale(ratio, ratio);
}


export const getTextColor = (hex:string='#000000') => {
  // check calculates Luminance
  let rgb = hexToRgb(hex)
  var check = 1 - (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  return check < 0.5 ? 'black' : 'white';
}