import { StyledPresentation } from "./NonUserHome.style";

const Presentation = ({ presentationImage }) => {
    return (
        <StyledPresentation>
            <img 
                src={ presentationImage } 
                alt="Effective Study Notebook Presentation">
            </img>
        </StyledPresentation>
    );
}
 
export default Presentation;