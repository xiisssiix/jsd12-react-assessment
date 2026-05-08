import React from 'react';
import profileImg from '../../assets/profile.jpg';

const Owner = () => {
  return (
    <div className="bg-neutral-lighter min-h-screen font-kanit flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl text-center py-10">
        {/* ชื่อ-นามสกุล และกลุ่ม */}
        <h1 className="text-3xl font-bold text-content-darker mb-8">
          23_Piamsak (Prem/เปรม)
        </h1>

        {/* รูปภาพโปรไฟล์ */}
        <div className="flex justify-center mb-8">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src={profileImg} 
              alt="Owner Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* หัวข้อประวัติย่อ */}
        <h3 className="text-xl font-bold mb-4 text-content-darker text-left border-b-2 border-primary-base inline-block">
          Short Biography
        </h3>
        
        {/* เนื้อหาประวัติ */}
        <p className="text-content-main leading-relaxed text-left mt-4 bg-white p-6 rounded-xl shadow-sm">
          สวัสดีครับผมชื่อ **เปี่ยมศักดิ์** เป็นนักเรียนในโปรแกรม Web Development Bootcamp 
          กำลังฝึกฝนทักษะการเป็น Full-stack Developer โดยเน้นที่ MERN Stack 
          ปัจจุบันมีความเชี่ยวชาญในการสร้าง UI ด้วย React และ Tailwind CSS 
          รวมถึงการเชื่อมต่อกับ REST API เพื่อจัดการข้อมูลครับ
        </p>
      </div>
    </div>
  );
};

export default Owner;