import { useState } from "react"; 
import data_item from "../data_item.js";
import { Link, useNavigate} from 'react-router-dom';
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
  let [items] = useState(data_item)
  let navigate = useNavigate();

  return (
    <div className="container">

      <div className="main-bg" style={{ backgroundImage: 'url(' + BgImage + ')'}}></div>

      <div className='container'>
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
