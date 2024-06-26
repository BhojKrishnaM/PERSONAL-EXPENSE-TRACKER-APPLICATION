import axios from 'axios';
import React, { useState } from 'react'

const Profile = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [showUpdate, setShowUpdate] = useState(true);
    const [image, setImage]=useState();
    const handleImage=(e)=>setImage(e.target.files[0])
    const updateUser=async(e)=>{
        e.preventDefault()
const formData= new FormData(e.target);
formData.append("image", image)
try {
 const res=  await axios.put(`http://localhost:4000/update `, formData)
 sessionStorage.removeItem("user");
 window.location.reload()
} catch (error) {
    console.log(error);
}
    }
    return (
        <div>
            {showUpdate ? <div className="user-con" style={{}}>
                <img src={`http://localhost:4000/Users/${user.image}`} alt="" />
                <div className="text">
                    <h2>{user.full_name}</h2>
                    <p>{user.email}</p>
                    <button onClick={() => setShowUpdate(false)}>Update</button>
                </div>
            </div> : <div>
                <form onSubmit={updateUser} >
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        // border:"2px solid grey",
                        textAlign: "center",
                        padding: "10px",
                        minHeight: "500px",
                        //  marginTop:"100px"
                    }}>
                       
                        <div style={{ border: "2px solid grey", width: "300px", padding: "10px", justifyContent: "center" }}>
                        <h2>Update</h2> <br />
                          <input type="text" defaultValue={user.full_name} name='full_name' placeholder='Full name' style={{ height: "40px", borderRadius: "10px", padding: "10px", marginTop: "20px" }} /><br />
                            <input type="email" name='email' defaultValue={user.email} placeholder='email' style={{ height: "40px", borderRadius: "10px", padding: "10px", marginTop: "20px" }} /><br />
                            <input type="password" name='password' placeholder='*****' defaultValue={user.password} style={{ height: "40px", borderRadius: "10px", padding: "10px", marginTop: "20px" }} /><br />
                            <input type="file" onChange={handleImage}  style={{ height: "40px", borderRadius: "10px", padding: "10px", marginTop: "20px" }} /><br />
                            <button style={{ height: "40px", borderRadius: "10px", padding: "10px", marginTop: "20px" }} type='submit'>Update</button>
                        </div>

                    </div>
                </form>
            </div>}

            <style>
                {`
                .user-con{
                    height: 300px;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    img{
                        width: 160px;
                        height: 160px;
                        border-radius: 50%;
                        object-fit: cover;
                        background: #fcf6f9;
                        border: 2px solid #FFFFFF;
                        padding: .2rem;
                        box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
                    }
                    h2{
                        color: rgba(34, 34, 96, 1);
                    }
                    p{
                        color: rgba(34, 34, 96, .6);
                    }
                }
                `}
            </style>
        </div>
    )
}

export default Profile
