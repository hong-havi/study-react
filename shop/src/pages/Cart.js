import {useState, memo, useMemo} from 'react'
import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { changeName } from '../store/userSlice'
import { obj_changeName, obj_upAge } from '../store/userobjSlice'

import { changeCount } from '../store/cart'

//부모 컨퍼넌트 랜더링시 자식 컨퍼넌트도 랜더링됨
// memo : 꼭 필요할때만 재렌더링해주세요
// memo 원리 : props가 변할때만 재렌더링해줌 기존 props와 신규 props를 계속 비교하기에 props가 길고 복잡할때 불필요한 사용도 손해
let Child = memo(function(){
    console.log('랜더링된')
    return (<div>자식</div>)
})


function func(){
    //반복문 10억번 돌린 결과
    return 1
}

function Cart() {

    let state = useSelector( (state)=> state )
    let dispatch = useDispatch() // store js 로 요청해 달라고 메세지를 보내는 함수
    let [count, setCount] = useState(0)

    //let result = func()
    //useMemo 처음 컴퍼넌트가 랜더링시에만 1회실행하게 해줌
    //useEffect 와 useMemo 차이 : useMemo는 랜더링 될때, useEffect 는 랜더링 후
    useMemo( () => {
        return func()
    },[]) // [] 에 state가 변화할때만 작동하도록 할 수 있음

    let cartDatas = state.cart
    
    return (
        <div className="Cart">
            <Child count={count}></Child>
            <button onClick={ ()=>{ setCount(count+1) }}>+</button>

            <p>
                { state.user }의 장바구니
                <button onClick={()=>{
                    dispatch(changeName())
                }}>이름바꿈</button>
            </p>
            <p>
                { state.user_obj.name } { state.user_obj.age }
                <button onClick={()=>{
                    dispatch(obj_changeName())
                }}>이름바꿈2</button>
                <button onClick={()=>{
                    dispatch(obj_upAge(2))
                }}>나이+</button>
            </p>

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                {
                    cartDatas.map( (data, key) => {
                        return (<tr key={ key }>
                                <td>{ data.id }</td>
                                <td>{ data.name }</td>
                                <td>{ data.count }</td>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(changeCount( { action:'increase', id: data.id } ))
                                    }}>+</button>
                                    <button onClick={()=>{
                                        dispatch(changeCount( { action:'decrease', id: data.id } ))
                                    }}>-</button>
                                </td>
                            </tr>)
                    })
                }
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart