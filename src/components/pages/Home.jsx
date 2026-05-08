import React, { useState, useEffect } from 'react';
import UserTable from '../UserTable'; // มั่นใจว่าสร้างไฟล์นี้ไว้ใน src/components/ นะครับ

const Home = () => {
  // 1. State สำหรับสลับหน้า (User/Admin)
  const [sector, setSector] = useState("");
  
  // 2. State สำหรับเก็บข้อมูลที่ดึงมาจาก API
  const [members, setMembers] = useState([]);

  // 3. ฟังก์ชันดึงข้อมูลจาก API (จะทำงานครั้งเดียวตอนเปิดหน้าเว็บ)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://67eca027aa794fb3222e43e2.mockapi.io/members");
        const data = await response.json();
        setMembers(data); // เก็บข้อมูลลงใน State members
      } catch (error) {
        console.error("ดึงข้อมูลไม่สำเร็จ:", error);
      }
    };
    fetchData();
  }, []);

  // ฟังก์ชันช่วยแสดงชื่อหัวข้อตามปุ่มที่กด
  const getHeaderTitle = () => {
    if (sector === "user") return "Home - User Sector";
    if (sector === "admin") return "Home - Admin Sector";
    return "React - Assessment";
  };

  return (
    <div className="bg-neutral-lighter min-h-screen p-10 text-center font-kanit">
      {/* หัวข้อ */}
      <h1 className="text-4xl font-bold mb-10 text-content-darker">
        Generation Thailand <br />
        {getHeaderTitle()}
      </h1>

      {/* ปุ่มกด 2 ปุ่ม */}
      <div className="flex justify-center gap-8 mb-10">
        <button 
          onClick={() => setSector("user")}
          className="button button-primary px-8 py-4 bg-white text-black rounded-lg shadow-md hover:bg-neutral-base transition-all font-bold"
        >
          User Home Sector
        </button>

        <button 
          onClick={() => setSector("admin")}
          className="button button-primary px-8 py-4 bg-white text-black rounded-lg shadow-md hover:bg-neutral-base transition-all font-bold"
        >
          Admin Home Sector
        </button>
      </div>

      <div className="mt-10 max-w-4xl mx-auto">
        {sector === "user" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">User List</h2>
            <UserTable data={members} />
          </div>
        )}

        {sector === "admin" && (
          <div className="p-10 border-2 border-dashed border-neutral-base rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Admin Management</h2>
            <p className="text-neutral-dark">ทำ Form เพิ่ม/ลบ ข้อมูล</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;