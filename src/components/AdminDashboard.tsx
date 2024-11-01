import React, { useEffect, useState } from 'react';
import '../admin.css'; // Import the CSS file

const AdminDashboard: React.FC = () => {

     interface User {
        id: number;
        email: string;
        phone: string;
        registered: string;
    }
    const [users, setUsers] = useState<User[]>([]); // Specify the type of the state

    // Sample user data
    useEffect(() => {
        const fetchUsers = async () => {
            try {
               

                const response = await fetch('http://localhost:5000/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
              
                const data = await response.json();
                console.log("the data",data)
                setUsers(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };
        fetchUsers();
    }, []);

    console.log("the users",users);
    return (
        <div className="dashboard-container">
            <h2>Admin Dashboard</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Registered Date</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.registered}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
