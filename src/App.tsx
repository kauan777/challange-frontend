import Header from "./components/Header";
import { useSearch } from "./contexts/SearchContext";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

function App() {

  const { clickInSearch } = useSearch();
  
  return (
    <>
      <Header />
      {
        clickInSearch ? (
            <Profile/>          
          ):  (
            <Search/>
          )
      }
    </>
  );
}

export default App;
