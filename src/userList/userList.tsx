import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../userCard/userCard"; // Import the UserCard component

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response: { data: React.SetStateAction<never[]>; }) => {
        setUsers(response.data);
      })
      .catch((error: any) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
<div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((user:any) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
  );
}

export default UserList;
