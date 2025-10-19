import {useState,useEffect} from "react";

const urlUsers="https://jsonplaceholder.typicode.com/users";

const UserCrud1 = () => {
    
    const[users,setUsers]=useState([])

    // partiamo da javascript base
    const getUsers = () => {
        fetch(urlUsers).then(response => response.json()).then(risultato=>setUsers(risultato))
    }

    useEffect(() => {
        getUsers()
    },[])
    
    return (
        <>
        <div className="container">
        <h1>USER CRUD</h1>
        <div>
            
            {
                users.map((u) => {
                    return (
                    <div className="row my-1 border">
                    <div className="col-8 p-2 d-flex justify-content-start">{u.name}</div>
                    <div className="col-4 p-2 d-flex justify-content-end gap-2">
                        <button className="btn btn-primary">Update</button>
                        <button className="btn btn-danger">Delate</button>
                    </div>
                    </div>
                    );
                }
            )}
        </div>
        </div>
        </>
    )
};

export default UserCrud1;



// npm run dev per far partire la paggina