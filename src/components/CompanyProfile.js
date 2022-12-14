import Header from "./Header";

function CompanyProfile(){

    const year = new Date().getFullYear();
    
    return(
    <div>
        <Header/>
        <div>
            <h3>Post for Internship | Company</h3>
        </div>

        <div>
        <p>Post</p>
            <form  method="POST" >
                    <input type="text" name="title" placeholder="Company's Name"/>
                    <input type="text" name="email" placeholder="Email"/>
                    <input type="text" name="content" placeholder="Message"/>
                    <button type="submit">Submit</button>
            </form>
            <div>
                <p></p>
            </div>
        </div>


        <p>Copyright © {year}, University of Benin</p>
    </div>
    )
}

export default CompanyProfile;