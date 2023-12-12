import { useEffect, useState } from "react"

export const TicTacToe=()=>{

    const[boxes,setBoxes]=useState([]);
    const [player,setPlayer]=useState(1);

    const createBoxes=()=>{
        const tempBox=[];
        for(let i=0;i<3; i++){
            tempBox.push([]);
            for (let j=0;j<3;j++){
                tempBox[i].push(0);
            }
        }
        setBoxes(tempBox);
        console.log(tempBox);
    }

    const teckPosition=(i,j)=>{
        const tempBoxes=boxes;
        tempBoxes[i][j] = player;  //player is either 1 or -1
        setPlayer(player*-1);
        setBoxes([...tempBoxes]);
    }
    console.log(player);
    useEffect(()=>{
        createBoxes();
    },[]);  

    return(<div style={{position:'relative',width:'306px',height:'306px',margin:'auto'}}>
        {boxes.map(( box ,i)=><div key={i} style={{width:'100%',height:'100px',borderBottom:'2px solid #fff ',display:'flex',justifyContent:'space-between'}}>
            {
                box?.map((b,j)=><Box key={j} playValue={player} value={b} onClick={()=>{
                    teckPosition(i,j);
                }}>

                </Box>)
            }
        </div>)}
    </div>)
}


const Box=({
    onClick=()=>{},
    value=null,
    playValue=null
})=>{
    const [hover,setHover]=useState(false);
    return(<div
        onPointerEnter={()=>setHover(true)}
        onPointerLeave={()=>setHover(false)}
        onClick={value===0?()=>onClick():()=>{}}
        style={{
            position:'relative',height:'100%',
            width:'100px',backgroundColor:'#999',
            display:'flex',justifyContent:'center',
            alignItems:'center',
        }}
    >
        <div style={{ position:'absolute' , height:'100%',width:'100%',backgroundColor:value===0?'#fff':'#f66',opacity: hover?0.5:0 }}></div>
        {value===1?<>X</>:<></>}
        {value===-1?<>O</>:<></>}
    </div>)
}