// Styled Components
import { SearchSortHeader } from "../Common/Header.style";
import { SelectSort } from "../Common/Select.style";
import { StyledSort, StyledSearch } from "./UserHome.style";
import { SearchInput } from "../Common/Inputs.style";

// props passed from 'UserHome.js'
const SearchSort = ({ handleChange }) => {

    return (
        <SearchSortHeader>

            <StyledSort>

                <SelectSort name="sort" onChange={ (e) => handleChange(e) }>
                    <option value="nameDESC">Sort by Name (A - Z)</option>
                    <option value="nameASC">Sort by Name (Z - A)</option>
                    <option value="dateDESC">Sort by Date (Oldest First)</option>
                    <option value="dateASC">Sort by Date (Newest First)</option>
                </SelectSort>

            </StyledSort>

            <StyledSearch>

                <SearchInput 
                    onChange={ (e) => { handleChange(e) } }
                    name="search"
                    placeholder="Search">                        
                </SearchInput>

            </StyledSearch>
            
        </SearchSortHeader>
    );
}
 
export default SearchSort;