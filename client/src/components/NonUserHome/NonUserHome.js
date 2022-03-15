import Images from "../../images/Images";
import Header from "./Header";
import Presentation from "./Presentation";
import { NonUserHomeContent } from "../Common/Content.style";
import { FormContainer } from "./FormContainer.style";
import Form from "./Form";


const NonUserHome = () => {
    return ( 
        <div>
            <Header page="NonUserHome" homeImage={ Images.Home } />

            <NonUserHomeContent page="NonUserHome">
                <Presentation presentationImage={ Images.Presentation } />
                <FormContainer>
                    <Form></Form>
                </FormContainer>
            </NonUserHomeContent>
        </div>
    );
}
 
export default NonUserHome;