
import Images from "../../images/Images";

import { SettingsGrid, SettingContainer } from "../Common/Form.style";
import { SettingHeader } from "../Common/Header.style";
import { SettingHeading } from "../Common/Heading.style";
import { SettingInput } from "../Common/Inputs.style";

const Strap = ({ 
    handleChange, 
    strap,
    handleStrap 
}) => {

    return (
        <>
        <SettingHeader page={ "createNotebook" }>
            { strap ? 
                <img onClick={ handleStrap } src={ Images.Checked } alt="Create Strap"></img> : 
                <div onClick={ handleStrap }></div>
            }
            <SettingHeading>Strap</SettingHeading>
        </SettingHeader>

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
        : null }
        </>
    );
}
 
export default Strap;