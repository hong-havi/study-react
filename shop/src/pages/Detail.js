import { useEffect, useState } from "react"
import { useParams,Route } from "react-router-dom"
import data_item from "../data_item.js"
import styled from "styled-components"
import { Nav } from "react-bootstrap"

import { addCart } from "../store/cart.js"
import { useDispatch } from "react-redux"

let YellowBtn = styled.button`
    background: ${ props => props.bg };
    color: ${ props => props.bg == 'blue' ? 'white' : 'black' };
    padding: 10px;
`

let Box = styled.div`
    background: grey;
    pdding: 20px;
`
/**
 * 과거 훅방식 => useEffect
 * class Detail2 extends React.Component {
 *   componentDidMount() {
 *
 *   }
 *   componentDidUpdate() {
 *
 *   }
 *   componentWillUnmount () {
 *
 *   }
 * }
**/


function Detail() {

    let [count, setCount] = useState(0)
    let [alert, setAlert] = useState(true)
    let [Inputnum, setInputnum] = useState('')
    let [TabBtn, setTabBtn ] = useState('0')

    let { id } = useParams()
    let item = data_item.find( ( data ) => { return data.id.toString() === id })

    let dispatch = useDispatch()

    useEffect(()=>{
        // 컴퍼넌트 mount,update 시 실행 html 렌덩링이 끝난 후 동작함 밖에 쓸시에 렌더링 전에 실행
        console.log('마운트')
        
        let timer = setTimeout( () => {
            setAlert(false)
        }, 2000)

        if( isNaN(Inputnum) == true ){
            console.log('한글만됩니다.')
        }

        return () => {
            // useEffect 가 동작하기전 실행
            // clean up function
            // 기존 데이터 요청 삭제, 타이머 삭제 등 버그 방지
            clearTimeout(timer)
        }
    }, [count,Inputnum]) //dependency 안에 값이 변할때만 작동됨

    /**
     * useEffect(()=>{ }) 재렌더링 마다 코드 실행시
     * useEffect(()=>{ }, []) Mount시 1회 코드 실행
     * useEffect(()=>{ return () => {
     *  Unmount시 1회 코드 실행
     * } }, [])
     */

    return (
        <div className="container">
            {
                alert == true
                ? <div className="alret alert-warning">
                        2초이내 구매시 할인
                  </div> 
                : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={ item.img } width="100%" alt={ item.title } />
                </div>
                <div className="col-md-6">
                    <input onChange={ (e) => { setInputnum( e.target.value )} } />
                    <h4 className="pt-5">{ item.title }</h4>
                    <p>{ item.content }</p>
                    <p>{ item.price }원</p>
                    <button className="btn btn-danger">주문하기</button>&nbsp;
                    <button 
                        className="btn btn-danger"
                        onClick = { dispatch(addCart({title : item.title})) }
                    >장바구니</button> 
                </div>
                <Box>
                    <p>
                        {count} 
                        <button onClick={ () => {setCount(count+1)}}>버튼</button>
                    </p>
                    <YellowBtn bg="blue">스타일버튼</YellowBtn>
                    <YellowBtn bg="white">스타일버튼</YellowBtn>
                </Box>

                <Nav variant="tabs"  defaultActiveKey="link0">
                    <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={ () => { setTabBtn(0) } }>버튼0</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={ () => { setTabBtn(1) } }>버튼1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={ () => { setTabBtn(2) } }>버튼2</Nav.Link>
                    </Nav.Item>
                </Nav>

                <TabContent TabBtn={ TabBtn }></TabContent>

            </div>

        </div> 
    );
}

function TabContent(props){ 

    let [Fade, setFade] = useState('')

    useEffect( ()=>{
        // automatic batching 기능에 의해 state 가 붙여있을경우 하나로 합쳐버림
        let timer = setTimeout( () => {
            setFade('end')
        }, 10)

        return () => {
            clearTimeout(timer)
            setFade('')
        }
    }, [props.TabBtn])
    
    /*switch( props.TabBtn ){
        case 0 : 
            return (<div>내용0</div>)
        case 1 : 
            return (<div>내용1</div>)
        case 2 : 
            return (<div>내용2</div>)
        default :
            return (<div>내용0</div>)
    }*/

    return <div className={ `start ${Fade}` }>
        { [ <div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.TabBtn] }
    </div>
}


export default Detail
