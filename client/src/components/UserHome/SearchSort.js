import { SearchSortHeader } from "../Common/Header.style";
import { SelectSort } from "../Common/Select.style";
import { StyledSort, StyledSearch } from "./UserHome.style";
import { SearchInput } from "../Common/Inputs.style";

const SearchSort = ({ handleChange }) => {

    return (
        <SearchSortHeader>
            <StyledSort>
                <SelectSort name="sort" onChange={ (e) => handleChange(e) }>
                    <option value="nameDESC">Sort by Name DESC</option>
                    <option value="nameASC">Sort by Name ASC</option>
                    <option value="dateDESC">Sort by Date DESC</option>
                    <option value="dateASC">Sort by Date ASC</option>
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