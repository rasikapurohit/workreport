import axios from "axios";
import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import Menu from "./common/Menu";


function ProjectForm(){
    const [authorName, setAuthorName] = useState("");
    const [titleName, setTitleName] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {authorName, titleName};
        try{
            const response = await axios.post('http://localhost:5000/api/notes', data);
            alert(response.data);
            console.dir(response);
            setAuthorName("");
            setTitleName("");
        } catch (error) {
            console.log(error);
        }
    };


    return(
        <div>
        <Menu />
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="authorName">Author Name</label>
                <input
                    type="text"
                    id="aName"
                    value={authorName}
                    onChange={(event) => setAuthorName(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="titleName">Title</label>
                <input
                    type="text"
                    id="title"
                    value={titleName}
                    onChange={(event) => setTitleName(event.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
    )


}

export default ProjectForm;