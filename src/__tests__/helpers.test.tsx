
import { midPointDiff, distanceTwoPts, activeBlock, activeHex, hexToRgb } from '../helpers'

describe('It checks helpers methods', () => {
  it('midPointDiff() -> Distance between reference coordinate and mouse{x,y}', () => {
    const x1 = 130, y1 = 130;
    const result = { x: -82, y: 10 };
    const activeBlock = {
      x: 212,
      y: 120
    }
    const diff = midPointDiff(x1, y1, activeBlock)
    expect(diff).toEqual(result);
  })

  it('distanceTwoPts() -> Distance between two {x,y} coordinates', () => {
    const x1 = 130, y1 = 130;
    const x2 = 10, y2 = 70;
    const result = 134.16407864998737;
    const dist = distanceTwoPts(x1, y1, x2, y2)
    expect(dist).toEqual(result);
  })

  it('activeBlock() -> Checks if the correct reference point for square patterns', () => {
    const x1 = 130, y1 = 400;
    const sections = 130;
    const block = activeBlock(x1, y1, sections)
    expect(block).toEqual({ x: 1, y: 3 });    
  })

  it('activeHex() -> Checks if the correct reference point for square patterns', () => {
    const x1 = 500, y1 = 400;
    const sections = 130;
    const width = 800, height=800;
    const block = activeHex(x1, y1, sections,width,height)
    expect(block).toEqual({ x: 520, y: 112.5 });    
  })

  it('hexTORgb() -> Checks for the hex to rgb conversion',()=>{
    const result={b: 120, g: 92, r: 246};
    const color = hexToRgb('f65c78')
    expect(color).toEqual(result);
  })
})