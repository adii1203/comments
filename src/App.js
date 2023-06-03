import { data } from "./data";
import Comment from "./components/Comment";

function App() {
  return (
    <div className="App">
      <div className="p-5">
        <Comment data={data.comments}/>
      </div>
    </div>
  );
}

export default App;
