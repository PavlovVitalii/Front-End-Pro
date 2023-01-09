import Item from './modules/Item';
import './App.css';

const icons = ["👍", "👎", "💚", "💩", "🤣"];

function App() {
  return (
    <div className="App">
      {icons.map((element) => {
        return <Item icon={element} />;
      })}
    </div>
  );
}

export default App;
