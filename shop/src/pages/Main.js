import { useState } from "react"; 
import data_item from "../data_item.js";
import { Link } from 'react-router-dom';
import axios from 'axios'
/** 이미지 가져올시 
 * import 
 * public 폴더에 넣고 사용
 *   - process.env.PUBLIC_URL + '/image.jpg' 형태로 사용
 * 외부 URL
 **/
import BgImage from '../img/bg.png' // 코드상에선 이미지도 import


//import Button from 'react-bootstrap/Button'
//import { Button } from 'react-bootstrap'


function Main() {
  let [items, setItem] = useState(data_item)

  return (
    <div className="container">

      <div className="main-bg" style={{ backgroundImage: 'url(' + BgImage + ')'}}></div>

      <div className='container'>
        <button onClick={ () => {
            axios.get('https://hong-havi.github.io/study-data/data/shop.json')
            .then( (response) => {
              let TmpData = [...items, ...response.data]
              //TmpData.concat(response.data)
              setItem(TmpData)
            })
            .catch( () => {
            })

            /**
            *
            * POST 요청
            * axios.post('/asdfasdf', { name: 'kim '})
            * 
            * 동시에 Ajax 요청시
            * Promise.all( [ axios.get('/url'), axios.get('/url2') ])
            * .then( ( 결과 ) => {
            * })
            * 
            * "{"name":"kim"}" Json형태로 통신가능
            *
            * fetch("/url~")
            * .then ( result => result.json() ) //Fetch 는 결과json 변환 처리 필요
            *
            **/

        }}>데이터로드</button>
        <div className="row">
          { 
            items.map( (item, key) => {
              return  (
                <Item data={ item } key={ key } ></Item>
              )
            })
          }
        </div>
      </div>

    </div>
  );
}

function Item( props ){
  return (    
    <div className='col-md-4'>
      <img src={ props.data.img } width="80%" alt={ props.data.title }/>
      <h4><Link to={ "/detail/" + props.data.id } >{ props.data.title }</Link></h4>
      <p>{ props.data.price }</p>
    </div>
  );
} 

export default Main;
