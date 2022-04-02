import { SearchSortHeader } from "../Common/Header.style";
import { SelectSort } from "../Common/Select.style";
import { StyledSort, StyledSearch } from "./UserHome.style";
import { SearchInput } from "../Common/Inputs.style";

const SearchSort = ({ handleChange }) => {

    return (
        <SearchSortHeader>
            <StyledSort>
                <SelectSort>
                    <option value="Name">Sort by Name</option>
                    <option value="Date">Sort by Date</option>
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