import Header from "./Header";

function LecturerProfile(){

    const year = new Date().getFullYear();
    
    return(
    <div>
        <Header/>
        <div>
            <h3>Lecturer</h3>
        </div>

        <div>
        Upload file
        </div>


        <p>Copyright © {year}, University of Benin</p>
    </div>
    )
}

export default LecturerProfile;