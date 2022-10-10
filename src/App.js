
import './App.css';

const Mensaje = (props) => {
  return <h1 style={{color: props.color}}>{props.message}</h1>
}

const App = () => {
  return (
    <div className='App'>
      <Mensaje color="red" message="Estamos trabajando"/>
      <Mensaje message="con un curso de "/>
      <Mensaje message="React"/>
    </div>
  )
}


export default App;
