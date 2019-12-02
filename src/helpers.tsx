export const  midPointDiff:{x:Number | undefined, y: Number | undefined} = (x1: number, y1: number, activeSection:{x:Number | undefined,y:Number | undefined})=>{
    let mid : {x : Number | undefined, y: Number | undefined}= { x:activeSection.x,y:activeSection.y}
    return { 
        x:x1-mid.x,
        y:y1-mid.y,
    }
}


export const activeBlock = (x,y,sections)=>{
    let blockx = Math.floor(x/sections)
    let blocky = Math.floor(y/sections)
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
