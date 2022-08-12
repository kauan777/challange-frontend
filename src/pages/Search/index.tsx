import SearchIcon from './SearchIcon'
import { Toaster } from 'react-hot-toast';
import { useSearch } from '../../contexts/SearchContext'
import { Input, MainContainer, SearchContainer } from './styles'

function Search() {

  const { textSearch, setTextSearch, getUserById } = useSearch();


  return (
    <MainContainer>
    <div><Toaster/></div>
        <SearchContainer>
        <Input>
            <button onClick={getUserById}>
                <SearchIcon/>
            </button>
                <input
                 value={textSearch}
                 onChange={(event) => setTextSearch(event.target.value) }
                 placeholder='Write id user'
                 />
        </Input>

        <div className='image'>
            <img src='./circleSearch.png'/>
        </div>
        </SearchContainer>
    </MainContainer>
  )
}

export default Search