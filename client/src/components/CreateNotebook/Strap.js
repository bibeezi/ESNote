// Image files
import Images from "../../images/Images";
// Styled Components
import { SettingsGrid, SettingContainer } from "../Common/Form.style";
import { SettingHeader } from "../Common/Header.style";
import { CheckSettingHeading } from "../Common/Heading.style";
import { SettingInput } from "../Common/Inputs.style";

// props passed from 'CreateNotebook.js'
const Strap = ({ handleChange, strap, handleStrap }) => {

    return (
        <>
        <SettingHeader page={ "createNotebook" }>

            {/* Display image of checked box if true */}
            { strap ? 
                <img onClick={ handleStrap } src={ Images.Checked } alt="Create Strap"></img> : 
                <div onClick={ handleStrap }></div>
            }

            <CheckSettingHeading>Strap</CheckSettingHeading>
        </SettingHeader>

        {/* Display strap inputs if true, otherwise display nothing */}
        { strap ? 
            <SettingsGrid>

                <SettingContainer>

                    <label>
                        <SettingInput 
                            onChange={ (e) => handleChange(e) }
                            name="strapX"
                            type="number"
                            placeholder="X - 1 to 11"> 
                        </SettingInput>
                    </label>

                    <label>
                        <SettingInput 
                            onChange={ (e) => handleChange(e) }
                            name="strapHex"
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
 
export default Strap;