
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
                        name="strap-x"
                        type="number"
                        placeholder="X"> 
                    </SettingInput>
                </label>

                <label>
                    <SettingInput 
                        onChange={ (e) => handleChange(e) }
                        name="strap-hex"
                        type="text"
                        placeholder="Hex"> 
                    </SettingInput>
                </label>
            </SettingContainer>
        </SettingsGrid>
        : null }
        </>
    );
}
 
export default Strap;