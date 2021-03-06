# 클론코딩 practice (리액트 Tesla clone)

## Section 부분까지 정리

### 프로젝트 폴더 생성 및 초기 세팅
  - npx create-react-app tesla-clone --template redux
  - 결과 ⇒ react-dom 이랑 redux-toolkit 등등 dependency 거의다 생성됨

### 레이아웃 분석
  - header : logo / menu / right menu
  - section : content
  - text component
    - 타이틀(h1) / 서브타이틀(p)
  - button component
    - 버튼이 여러개면 먼저 버튼 그룹화

### 폴더구조와 파일 기본
  - components > Header.js 만들고
  - index.css : 기본 서식 틀 잡기 (폰트 등)
  - 홈페이지(랜딩페이지?) - Home.js 생성
  - section 페이지 생성
  - section 페이지는 Home 페이지 안에서 보이므로 Section 컴포넌트를 Home 안에서 렌더

### 백그라운드 이미지

  - public > images 폴더에 저장 : url (’images/파일명.확장자’)  하면 적용됨
    - 안되는 경우 참고 : [https://codingapple.com/forums/topic/백그라운드-이미지-관련/](https://codingapple.com/forums/topic/%EB%B0%B1%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EA%B4%80%EB%A0%A8/)
  - 이미지 사이즈가 클 때 사이즈에 맞게 하기
    - 이미지의 가로 사이즈만 맞추고 세로는 잘려도 되는 경우 : background-image: cover
    - 그외 이미지 맞춤 조절(contain, repeat) : [https://developer.mozilla.org/ko/docs/Web/CSS/background-size](https://developer.mozilla.org/ko/docs/Web/CSS/background-size)
    - cf) object-fit : cover
      - [https://www.notion.so/220429_-React-Booking-Reservation-f8daab5145404159988f9701db5c26eb#c1cc1d69922240329c7740662d3f0a41](https://www.notion.so/220429_-React-Booking-Reservation-f8daab5145404159988f9701db5c26eb)

📌 CSS 단위에서 vw, vh 를 쓰는 이유
  - 요점 : 반응형 웹을 구현하는데 유용함
  - 참고글 : [https://nykim.work/85](https://nykim.work/85)

### 텍스트와 버튼의 배치
  - 세로로 배치하는 경우 : 부모 요소에 flex-direction : column으로
  - 요소 사이의 간격을 띄워줄 때는 space-between 을 활용하되
  - 동일 선상에 있는 한 요소는 분리시켜주고 싶을 때 :  between 할 요소들만 그룹화 하면 됨!!

### styled-components 애니메이션 적용 (여러 방법이 있는 것 같음)
  - 방법1
    - 애니메이션을 정의해줌
    - 정의한 애니메이션의 기능을 css 에서 구체화 해줌
    - index.css 에서 @keyframes 를 통해서 구현
  - 방법2
    - css 파일에서 구현안하고 해당 파일에서 구현하는 방법
    - 먼저 keyframes 를 통해서 애니메이션 기능을 정의해주고
    - 적용할 컴포넌트 내에서 animation 명을 객체화해서 정의
        - 예시) animation : ${ 애니메이션명 } infinite 1.5s
  - 생각해볼 점 : 어떤게 더 나은 방법인지??
    - 관리차원이라면 애니메이션 요소를 index.css 에서 전역적으로 활용할 것들에 몰아서 확인하고 관리하는게 나을 것 같다.
    - 물론, 어디서 그 애니메이션이 적용되는지 알기 위해서는 해당 컴포넌트 파일에서 적용하는게 나을것 같기도..

### index.css 에서 body 에 overflow-x : hidden 을 하니까
  - 스크롤이 없어짐
  - overflow-x : hidden : 지식 [https://velog.io/@leyuri/CSS-overflow-x-overflow-y-란](https://velog.io/@leyuri/CSS-overflow-x-overflow-y-%EB%9E%80)

### 배경 위치 미세 조정하는 방법
  - background-position-x, background-position-y
    - 세부참고 : [https://webisfree.com/2015-03-09/[css]-background-position-백그라운드-위치-조정방법](https://webisfree.com/2015-03-09/%5Bcss%5D-background-position-%EB%B0%B1%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C-%EC%9C%84%EC%B9%98-%EC%A1%B0%EC%A0%95%EB%B0%A9%EB%B2%95)

### component 간에 props 를 전달
  - Home 컴포넌트에서 Section 컴포넌트를 import 해서 사용할 때
    - props (property) 를 설정해놓고 Section.js 파일에 가서 props 를 전달해서 활용할 수 잇음
    - 이때, (props) 로 전달해서 props.~ 으로 해서 값을 전달할 수도 있고
    - props 전달 할때 객체 자체를 언패킹해서 전달할 수 도 있음 ({ title, description }) 이런식으로
    - 이것은 es6 문법 detructuring 활용한 방법이라고 함
    - 참고 : 아주 좋은 설명과 예시 : [https://xiubindev.tistory.com/95](https://xiubindev.tistory.com/95)
    - 참고 : [https://react.vlpt.us/basic/05-props.html](https://react.vlpt.us/basic/05-props.html)

### 스크롤 하면서 각각 다른 페이지를 만들때 (특히 페이지가 비슷하다면)
  - Section 컴포넌트 하나를 만들고 재사용 한다
  - 달라지는 부분들만 property 를 만들고 props 를 넘겨서 재사용성을 구축
  - 페이지마다 background 이미지가 달라지는 부분을 props를 이중으로 이용!! (wow! 감탄함)
    - 먼저  props 를 전달해서 destructuring 으로 전달하면
    - 가장 큰 div 에서 (예, Wrap ) property를 만들어서 props 를 전달받기    [ 1. 컴포넌트간에 props 전달하고 받기 ]
    - warp 의 styled.div 의 background-image 에서 prop로 전달받기   [ 2. 부모 자식 요소간에 props 전달하고 받기 ]

### 페이지마다 2개의 버튼이 반복되는데 한 페이지에선 1개의 버튼만 필요한 경우
  - 우선 메인 페이지(Home)에서 보여주는 컴포넌트(Section)에서 설정한 해당 속성을 제외 ⇒ 그래도 남아 있음
  - 해당 부분을 렌더하는 컴포넌트 부분에 조건 설정 : 해당 객체가 있는 경우에만 { 해당객체 && 구현부분 }