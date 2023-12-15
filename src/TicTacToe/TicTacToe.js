import { useEffect, useRef, useState } from "react"
import {FaOm, FaTimes} from'react-icons/fa'
import {BsFillRecordFill} from 'react-icons/bs'
import { checkWiner } from "./checkWiner";
export const TicTacToe=()=>{

    const[boxes,setBoxes]=useState([]);
    const [player,setPlayer]=useState(1);
    const [playingNumber,setPlayingNum]=useState(0);
    const createBoxes=()=>{
        const tempBox=[];
        for(let i=0;i<3; i++){
            tempBox.push([]);
            for (let j=0;j<3;j++){
                tempBox[i].push(0);
            }
        }
        setBoxes(tempBox);
       
    }

    const teckPosition=(i,j)=>{
        const tempBoxes=boxes;
        tempBoxes[i][j] = player;  //player is either 1 or -1
        setPlayer(player*-1);
        setBoxes([...tempBoxes]);
        setPlayingNum(playingNumber+1);
        
    }

    const reset=()=>{
        setPlayingNum(0);
        createBoxes();
    }
  
    useEffect(()=>{
        console.log(checkWiner({
            boxes:boxes
        }));
    },[boxes])

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
        {playingNumber===9?<button onClick={reset}>Reset</button>:<></>}
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
        <div style={{ position:'absolute' , height:'100%',width:'100%',backgroundColor:value===0?'#fff':'#f66',opacity: hover?0.5:0 ,transition:'0.5s'}}></div>
        {value===1?<><FaTimes size={50}/></>:<></>}
        {value===-1?<><BsFillRecordFill size={50}/></>:<></>}
    </div>)
}