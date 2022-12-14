import Header from "./Header";

function RecentPost(){

    const year = new Date().getFullYear();
    
    return(
    <div>
        <Header/>
        <div>
            <h3>Recent Posts</h3>
        </div>

        <div>
        <p>Post</p>
        </div>


        <p>Copyright © {year}, University of Benin</p>
    </div>
    )
}

export default RecentPost;