import { useState, useTransition, useDeferredValue } from 'react'

let Arr = new Array(10000).fill(0)

function Transition (){
    let [ name, setName ] = useState('')
    let [ isPending, startTransition ] = useTransition() //카드 빚 돌려막기 ( 늦게 처리할수 있게 해줌 ) , isPending: startTransition 이 작동중일시 true 로 바뀜
    //let state = useDeferredValue(state) // 해당 state는 늦게 처리하게 해줌


    return (
        <div className="App">
            <input onChange={(e)=>{ 
                startTransition( 
                    ()=> {setName(e.target.value) } 
                )}
            }/>

            {
                isPending ? '로딩중' :
                Arr.map( () => {
                    return (<div>{name}</div>)
                })
            }
        </div>
    )
}