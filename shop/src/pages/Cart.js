import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { changeName } from '../store/userSlice'
import { obj_changeName, obj_upAge } from '../store/userobjSlice'

import { changeCount } from '../store/cart'

function Cart() {

    let state = useSelector( (state)=> state )
    let dispatch = useDispatch() // store js 로 요청해 달라고 메세지를 보내는 함수

    let cartDatas = state.cart
    
    return (
        <div className="Cart">
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