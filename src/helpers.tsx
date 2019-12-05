export const  midPointDiff = (x1: any, y1: any, activeBlock: any)=>{
    let mid = { x:activeBlock.x,y:activeBlock.y}
    return { 
        x:x1-mid.x,
        y:y1-mid.y,
    }
}


export const activeBlock = (x:number,y:number,sections:number)=>{
    let blockx: number = Math.floor(x/sections)
    let blocky: number = Math.floor(y/sections)
    if(blockx%2===0){
        blockx +=1 
    }
    if(blocky%2===0){
        blocky +=1
    }

    return{
        x:blockx,
        y:blocky
    }
}

export const midPointBtw = (p1:{x:number,y:number}, p2:{x:number,y:number}) => {
    return {
      x: p1.x + (p2.x - p1.x) / 2,
      y: p1.y + (p2.y - p1.y) / 2
    };
}

export const TWOPI = 2* Math.PI
