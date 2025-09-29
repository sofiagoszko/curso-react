import { useEffect, useState, React } from "react";

export default function RandomUser() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((data) => {
            setUser(data.results[0]);
        });
    },[]);

    if(!user){
        return(
            <p>Cargando usuario</p>
        );
    };

    return (
        <div>
            <img 
                src={user.picture.large} 
                alt={user.name.first} 
                style={{borderRadius:"20%"}}    
            />
            <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
            <p>{user.email}</p>
            <p>{user.location.country}</p>
        </div>
    );
};