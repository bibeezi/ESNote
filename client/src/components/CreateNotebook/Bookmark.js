// Image files
import Images from "../../images/Images";
// Styled Components
import { SettingsGrid, SettingContainer } from "../Common/Form.style";
import { SettingHeader } from "../Common/Header.style";
import { SettingHeading } from "../Common/Heading.style";
import { SettingInput } from "../Common/Inputs.style";

// props passed from 'CreateNotebook.js'
const Bookmark = ({ handleChange, bookmark, handleBookmark }) => {

    return (
        <>
        <SettingHeader page={ "createNotebook" }>

            {/* Display image of checked box if true */}
            { bookmark ? 
                <img onClick={ handleBookmark } src={ Images.Checked } alt="Create Bookmark"></img>
            : 
                <div onClick={ handleBookmark }></div>
            }

            <SettingHeading>Bookmark</SettingHeading>
        </SettingHeader>

        {/* Display bookmark inputs if true, otherwise display nothing */}
        { bookmark ? 
            <SettingsGrid>

                <SettingContainer>

                    <label>
                        <SettingInput 
                            onChange={ (e) => handleChange(e) }
                            name="bookmarkX"
                            type="number"
                            placeholder="X - 1 to 11"> 
                        </SettingInput>
                    </label>

                    <label>
                        <SettingInput 
                            onChange={ (e) => handleChange(e) }
                            name="bookmarkHex"
                            type="text"
                            placeholder="Colour or Hex"> 
                        </SettingInput>
                    </label>

                </SettingContainer>

            </SettingsGrid>
        : 
            null 
        }
        </>
    );
}
 
export default Bookmark;