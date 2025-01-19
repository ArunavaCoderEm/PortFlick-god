import React, { useEffect } from "react";

const AddUser=({user})=>{
    const addUserToMongoDB = async () => {
        if (user) {
            try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/add-user`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                name: user.fullName, // Full name from Clerk
                email: user.emailAddresses[0]?.emailAddress, // Email from Clerk
                }),
            });

            if (response.ok) {
                console.log("User added to MongoDB successfully");
            } else {
                console.error("Failed to add user to MongoDB");
            }
            } catch (error) {
            console.error("Error adding user to MongoDB:", error);
            }
        }
    };

    useEffect(() => {
        addUserToMongoDB();
    }, [user]); 

    return null;
}

export default AddUser;
  
