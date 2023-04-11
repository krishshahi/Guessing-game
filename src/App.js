
import Cards from './components/Cards'

const App = () => {
  const handleClick = () => {
    window.location.reload();
  }
  return (
    <div className="App">
      <div className="title">
        <span >M</span>
        <span >E</span>
        <span >M</span>
        <span >O</span>
        <span >R</span>
        <span >Y</span>
        &nbsp;&nbsp;&nbsp;
        <span >G</span>
        <span >A</span>
        <span >M</span>
        <span >E</span>
      </div>
      <div className='btn-1'>
        <button className='btn' onClick={handleClick}>Start New Game</button>
      </div>

      <Cards />
    </div>
  );
}

export default App;
