import React, { useState, useEffect } from 'react';
import UserTable from '../UserTable';
import AdminForm from '../AdminForm';

const Home = () => {
  const [sector, setSector] = useState("");
  const [members, setMembers] = useState([]);

  const fetchMembers = async () => {
    try {
      const response = await fetch("https://67eca027aa794fb3222e43e2.mockapi.io/members");
      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleCreate = async (newData) => {
    try {
      const response = await fetch("https://67eca027aa794fb3222e43e2.mockapi.io/members", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData)
      });
      if (response.ok) fetchMembers();
    } catch (error) {
      console.error("Create error:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://67eca027aa794fb3222e43e2.mockapi.io/members/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) fetchMembers();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-neutral-lighter p-10">
      <div className="w-full max-w-6xl">
        
        {/* หัวข้อ */}
        <h1 className="text-5xl font-black mb-4 text-content-darker">
          Generation Thailand
        </h1>
        <h2 className="text-2xl font-bold mb-12 text-content-main">
          {sector === "user" ? "Home - User Sector" : sector === "admin" ? "Home - Admin Sector" : "React - Assessment"}
        </h2>

        <div className="flex justify-center gap-8 mb-16">
          <button 
            onClick={() => setSector("user")}
            className="px-10 py-4 bg-white text-content-darker rounded-2xl shadow-lg border border-neutral-base font-bold hover:bg-primary-base hover:text-white transition-all active:scale-95"
          >
            User Home Sector
          </button>

          <button 
            onClick={() => setSector("admin")}
            className="px-10 py-4 bg-white text-content-darker rounded-2xl shadow-lg border border-neutral-base font-bold hover:bg-primary-base hover:text-white transition-all active:scale-95"
          >
            Admin Home Sector
          </button>
        </div>

        {/* ส่วนแสดงตาราง/ฟอร์ม */}
        <div className="w-full">
          {sector === "user" && <UserTable data={members} />}
          
          {sector === "admin" && (
            <AdminForm 
              data={members} 
              onCreate={handleCreate} 
              onDelete={handleDelete} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;