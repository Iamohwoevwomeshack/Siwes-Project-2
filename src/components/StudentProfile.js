import Header from "./Header";

function StudentProfile(){

    const year = new Date().getFullYear();
    
    return(
    <div>
        <Header/>
        <div>
            <h3>Student Info | Profile</h3>
            <p>Find Company</p>
        </div>

        <div>
            <div>
                <div></div>
                <button>Upload Photo</button>
            </div>
            <div>
                <div>
                    <h2>MAT NO:</h2>
                    <input type="text" />
                </div>
                <div>
                    <h2>Password</h2>
                    <input type="text" />
                </div>
                <div>
                    <h2>Full Name</h2>
                    <input type="text" />
                </div>
                <div>
                    <h2>Department</h2>
                    <input type="text" />
                </div>
                <div>
                    <h2>Level</h2>
                    <input type="text" />
                </div>
                <div>
                    <h2>State of Origin</h2>
                    <input type="text" />
                </div>
            </div>
        </div>

        <div>
        <p>Register Interest</p>
        <form  method="POST" >
                    <label>Full Name</label>
                    <input type="text" name="Name" placeholder="Name"/>
                    <label>Email</label>
                    <input type="text" name="Email" placeholder="Name"/>
                    <label>Message</label>
                    <textarea name="Message" cols="30" rows="5" placeholder="Message..."></textarea>
                    <button type="submit">Submit</button>
                </form>
        </div>

        <p>Copyright © {year}, University of Benin</p>
    </div>
    )
}

export default StudentProfile;