import logo from './logo.svg';
import './App.css';

const number = 54;
  const singers = [
    {name:'Dr. Mahfuz', job:'Singer'},
    {name:'Dr. Mahfuz', job:'Singer'},
    {name:'Dr. Mahfuz', job:'Singer'},
    {name:'Dr. Mahfuz', job:'Singer'}
]
  const singerStyle = {
    color: 'white',
    backgroundColor: 'green',
    margin: '20px',
    padding: '15px',
    borderRadius: '10px'
  }

function App() {
  const nayoks =['Razzak', 'Alomgir', 'A.T.M', 'Kanson', 'Josim', 'Kuber']
  const naikas = ['Sabana', 'Bobita', 'Sabnom', 'Kajol']
  return (
    <div className="App">
      {
        nayoks.map(hero => <li>Hero Name: <b>{hero}</b></li>)
      }

      {/* {
        (nayoks,naikas).map((Nayok, naika) => <Person Nayok={Nayok} naika={naika}></Person>)
      } */}
      {
        nayoks.map(Nayok => <Person Nayok={Nayok}></Person>)
      }
      {
        naikas.map(naika => <Person naika={naika}></Person>)
      }

      {
        singers.map(singer=> <Person Nayok={singer.name}></Person>)
      }
      <header className="App-header">
        <div className="container">
          <h1>Hello react How are you?</h1>
        </div>
        <div style={singerStyle}>
          <p>Some ={100+number}</p>
          <p>Name: {singers.name} {singers.job}</p>
          <p>He is the most funnyest singer in bangladesh</p>
        </div>
      </header>
      {/* <Person name="Rubel" naika="Mousumi"></Person> */}
      <Person Nayok={nayoks[0]} naika={naikas[0]}></Person>
      <Person Nayok={nayoks[1]} naika={naikas[1]}></Person>
      <Person Nayok={nayoks[2]} naika={naikas[2]}></Person>
      <Friend name="Leon" phone="017777"></Friend>
      <Friend phone="019999"></Friend>
      <Friend></Friend>
      
    </div>
  );
}
function Person(props){
  return(
    <div className='person'>
      {/* <h3>This is Sakibal Hasan</h3> */}
      <h3>Nayok: {props.Nayok}</h3>
      <p><b>Naika:</b> {props.naika}</p>
    </div>
  )
}

function Friend(props){
  console.log(props);
  return(
    <div className='friend'>
      <h3>{props.name}</h3>
      <p>Phone {props.phone}</p>
    </div>
  )
}

export default App;
