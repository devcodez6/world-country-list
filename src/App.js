
import  {countries} from "./Data";  
import Decend from "./pages/descend/Decend";
import Accend from "./pages/ascend/Accend";
import Oceania from "./Oceania";
import Countries from "./pages/countries/Countries";

function App() {
  return (
<Decend data = {countries} />  
)
}

export default App;
