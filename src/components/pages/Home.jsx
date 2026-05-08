import React, { useState } from 'react';

const Home = () => {
  // สร้าง State ชื่อ sector เพื่อเก็บค่าว่าเลือกกลุ่มไหน (ค่าเริ่มต้นเป็นว่าง)
  const [sector, setSector] = useState("");

  // ฟังก์ชันช่วยแสดงชื่อหัวข้อตามปุ่มที่กด
  const getHeaderTitle = () => {
    if (sector === "user") return "Home - User Sector";
    if (sector === "admin") return "Home - Admin Sector";
    return "React - Assessment";
  };

  return (
    <div className="bg-neutral-lighter min-h-screen p-10 text-center font-kanit">
      {/* หัวข้อที่จะเปลี่ยนไปตาม State */}
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

      {/* ส่วนแสดงเนื้อหาตามเงื่อนไข (เดี๋ยวเราจะเอาตารางมาใส่ตรงนี้) */}
      <div className="mt-10">
        {sector === "user" && (
          <p className="text-neutral-dark">--- กำลังรอแสดงตารางรายชื่อ (User) ---</p>
        )}
        {sector === "admin" && (
          <p className="text-neutral-dark">--- กำลังรอแสดงฟอร์มและปุ่มลบ (Admin) ---</p>
        )}
      </div>
    </div>
  );
};

export default Home;