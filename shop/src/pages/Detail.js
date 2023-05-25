import { useParams } from "react-router-dom"
import data_item from "../data_item.js"
import styled from "styled-components"
import { Button } from "react-bootstrap"

let YellowBtn = styled.button`
    background: ${ props => props.bg };
    color: ${ props => props.bg == 'blue' ? 'white' : 'black' };
    padding: 10px;
`

let Box = styled.div`
    background: grey;
    pdding: 20px;
`

function Detail() {

    let { id } = useParams()
    let item = data_item.find( ( data ) => { return data.id.toString() === id })

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={ item.img } width="100%" alt={ item.title } />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{ item.title }</h4>
                    <p>{ item.content }</p>
                    <p>{ item.price }원</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
                <Box>
                    <YellowBtn bg="blue">스타일버튼</YellowBtn>
                    <YellowBtn bg="white">스타일버튼</YellowBtn>
                </Box>
            </div>
        </div> 
    );
}


export default Detail
