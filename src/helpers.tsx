export const midPointDiff = (x1: number, y1: number, activeBlock: {x:number,y:number} ) => {
  return {
    x: x1 - activeBlock.x,
    y: y1 - activeBlock.y,
  }
}

export const distanceTwoPts = (x1: number, y1: number, x2: number, y2: number)=>{
  const a = x1 - x2;
  const b = y1 - y2;
  const dist = Math.sqrt( a*a + b*b );
  return dist
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

export const activeHex = (x1: number, y1: number, sections: number, width: number, height: number) => {
  const side = 130;
  const Height = 112.5;
  let blocky: number = Math.floor(y1 / Height)  
  let nearest = {x:0,y:0};
  let offset = 3*side - side/2
    offset = !(blocky%2)? 3*side - side/2: side
    for(let y=blocky;y<=blocky+1;y++){
      for(let x = offset;x<width+offset;x+=3*side){
        if(nearest){
          let checknew = distanceTwoPts(x,y*Height,x1,y1)
          let checkold = distanceTwoPts(nearest.x,nearest.y,x1,y1)
          if(checknew<checkold){            
            nearest={x:x,y:y*Height}
          }
        }else{
          nearest={x:x,y:y*Height}
        }
      }
      offset = !(blocky%2)? side :  3*side - side/2
    }    
  return nearest
}

export const TWOPI = 2 * Math.PI

export const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
}

export const getTextColor = (hex:string='#000000') => {
  // check calculates Luminance
  let rgb = hexToRgb(hex)
  const check = 1 - (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  return check < 0.5 ? 'black' : 'white';
}

export const StrokeWeight: any = {
  'Near Point': {
    0:250,
    1:500,
    2:750,
    3:1000
  },
  'Line': {
    0:1,
    1:5,
    2:8,
    3:15
  }
}

export const ModesData = [
  {
    name: 'Mirror',
    title: 'Mirror',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/mirror.jpg'
    

  },
  {
    name: 'Rotation',
    title: 'Rotation',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/rotation.jpg'

  },
  {
    name: 'Kaliedo',
    title: 'Kaliedo',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/kaliedo.jpg'

  },
  {
    name: 'SquareRotation',
    title: 'Square Rotation',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/squarerotation.jpg'

  },
  {
    name: 'SquareKaliedo',
    title: 'Square Kaliedo',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/squarekaliedo.jpg'


  },
  {
    name: 'Hexagon',
    title: 'Hexagon',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/hexagon.jpg'

  },
  {
    name: 'HexagonRotation',
    title: 'Hexagon Rotation',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/hexagonrotation.jpg'

  },
  {
    name: 'HexagonKaliedo',
    title: 'Hexagon Kaliedo',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/hexagonkaliedo.jpg'
  }
]
