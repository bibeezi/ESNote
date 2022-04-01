import { useState } from "react";

import Images from "../../images/Images";

import { SettingsGrid, SettingContainer } from "../Common/Form.style";
import { SettingHeader } from "../Common/Header.style";
import { SettingHeading } from "../Common/Heading.style";
import { SettingInput } from "../Common/Inputs.style";

const Bookmark = ({ 
    handleChange, 
    bookmark,
    handleBookmark
}) => {

    return (
        <>
        <SettingHeader page={ "createNotebook" }>
            { bookmark ? 
                <img onClick={ handleBookmark } src={ Images.Checked } alt="Create Bookmark"></img> : 
                <div onClick={ handleBookmark }></div>
            }
            <SettingHeading>Bookmark</SettingHeading>
        </SettingHeader>

        { bookmark ? 
        <SettingsGrid>
            <SettingContainer>
                <label>
                    <SettingInput 
                        onChange={ (e) => handleChange(e) }
                        name="bookmark-x"
                        type="number"
                        placeholder="X"> 
                    </SettingInput>
                </label>

                <label>
                    <SettingInput 
                        onChange={ (e) => handleChange(e) }
                        name="bookmark-hex"
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
 
export default Bookmark;