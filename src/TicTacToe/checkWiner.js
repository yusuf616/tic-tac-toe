

export const checkWiner=(params={
    boxes:[]
})=>{
    
    if(params?.boxes?.length)
    {
        for(let i=0;i<2;i++){
            for (let j=0;j<3;j++){
                const value=checkLines(i,j,params?.boxes);
                if(value && value!==0){
                    return {value:value,line:i?'culnm':'row'}
                }
            }
        }
        var value=checkDiagonal(0,0,params?.boxes)
        if(value!==0){
            return {value:value,line:'Diagonal'}
        }
        value=checkDiagonal(0,2,params?.boxes)
        if(value!==0){
            return {value:value,line:'Diagonal'}
        }
    }
       
    
    return {};
}


const checkLines=(i,j,boxes=[])=>{
 
    if(i===0){
        const value=boxes[j][0];
        return value===boxes[j][1]&&value===boxes[j][2]?value:0;
    }else{
        const value=boxes[0][j];
        return value===boxes[1][j]&&value===boxes[2][j]?value:0;
    }
}

const checkDiagonal=(i,j,boxes=[])=>{
    const value=boxes[i][j];
    return value===boxes[Math.abs(i-2)][Math.abs(j-2)]&&value===boxes[Math.abs(i-1)][Math.abs(j-1)]?value:0;
}