import './App.css';
import { useState } from 'react';

function App() {

  let post = '블로그 제목1';
  let [Subject, setSubject] = useState(['나 코트 코트3','다 코트 코트2','가 코트 코트1']);
  let [Like, setLike] = useState([0,1,2]);
  let [Modalview, setModalview] = useState('close');

  //모달 선택한 글 Idx의 상태관리용
  let [ModalTitle,setModalTitle] = useState(0);

  //입력을 위한 State 관리
  let [ InputData, setInputData ] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color:'red', fontSize:'16px' }}>제목임</h4>
      </div>
      <h4>{ post }</h4>

      <button
        onClick = { () => {
          let tmp = [...Subject];
          tmp.sort()
          setSubject(tmp)
        }}
      >
        가나다라순정렬        
      </button>

      <button 
      onClick={ () => {
        //Subject[0] = "제목11"
        // 원본 보정을 위한 조정
        // let tmp = Subject 일때는 tmp == Subject 가 true 그래서 ...으로 독집적 딥카피복사본 생성
        let tmp = [...Subject];
        tmp[0] = '코트 수정1'
        setSubject(tmp)
      }}>
        제목변경
      </button>
      {
        Subject.map( (data, i) => {
          return (
            <div className="list" key={ i }>
              <h4>
                <span
                  onClick = { () => {
                  // Modal Action
                  console.log(Modalview);
                      // eslint-disable-next-line
                      if( Modalview == 'open'){
                        setModalview('close');
                      }else{
                        setModalTitle(i);
                        setModalview('open')
                      }
                    }
                  }             
                >
                {i} : { data } 
                </span>
                <span 
                  onClick={ () => { 
                      // Like Count Up
                      let tmpLike = [...Like];
                      tmpLike[i] += 1;
                      setLike(tmpLike);
                    }  
                  }
                >👍</span> 
              </h4>
              { Like[i] } 
              <button onClick={ () => {
                let tmp = [...Subject];
                tmp.splice(i,1);
                setSubject(tmp);
              } }>삭제</button>
              <p>1월 1일 발행</p>
            </div>
          )
        })
      }
      
      {/* 입력폼 */}
      <input 
        type="text"
        onChange = { (e) => {
          setInputData(e.target.value);
          console.log(InputData); // 늦게 생기는 이유 위에 setState가 비동기로 반응이 느려서..
        }}
      />
      <button onClick={ () => {
          let tmp = [...Subject];
          //tmp.push(InputData); //뒤에추가
          tmp.unshift(InputData); //앞에추가
          setSubject(tmp);
        }
      }>
        입력
      </button>

      {
        // eslint-disable-next-line
        Modalview == 'open'  ? <Modal Subject={ Subject } setSubject={setSubject} ModalTitle={ModalTitle}></Modal> : ''
      }

    </div>
  );
}


// let Modal = () => {
function Modal( props ){
  // Fragment <> </>
  return (
    <> 
      <div className="modal">
        <h4>{ props.Subject[props.ModalTitle] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button 
          onClick={ () => {
              let tmp = [...props.Subject];
              tmp[0] = '코트 수정1'
              props.setSubject(tmp)
            }
          }
        >글수정</button>
      </div>
    </>
  );
}

export default App;
