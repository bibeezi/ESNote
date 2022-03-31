
import Header from "./Header";
import NotebookPreview from "./NotebookPreview";
import { CreateContent } from "../Common/Content.style";

const CreateNotebook = () => {
    return (
        <div>
           <Header />

           <CreateContent>
                <NotebookPreview />

                {/* <NotebookSettings /> */}
           </CreateContent>
        </div>
    );
}
 
export default CreateNotebook;