import React, { useState } from 'react';

const AdminForm = ({ data, onCreate, onDelete }) => {
  const [formData, setFormData] = useState({ name: '', lastname: '', position: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.lastname && formData.position) {
      onCreate(formData);
      setFormData({ name: '', lastname: '', position: '' });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* ส่วนของฟอร์ม - ปรับให้ดูเป็น Card สะอาดตา */}
      <div className="bg-white p-8 rounded-2xl shadow-md mb-12 text-left border border-neutral-base">
        <h3 className="text-2xl font-bold mb-6 text-content-darker">Create User Map</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-neutral-base p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-base transition-all"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-neutral-base p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-base transition-all"
            value={formData.lastname}
            onChange={(e) => setFormData({...formData, lastname: e.target.value})}
          />
          <input
            type="text"
            placeholder="Position"
            className="border border-neutral-base p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-base transition-all"
            value={formData.position}
            onChange={(e) => setFormData({...formData, position: e.target.value})}
          />
          <button type="submit" className="bg-primary-hover text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
            Save
          </button>
        </form>
      </div>

      {/* ส่วนของตาราง */}
      <div className="overflow-hidden rounded-2xl border border-neutral-base shadow-sm bg-white">
        <table className="min-w-full">
          <thead className="bg-neutral-base text-content-darker">
            <tr>
              <th className="px-6 py-4 text-left font-bold">Name</th>
              <th className="px-6 py-4 text-left font-bold">Last Name</th>
              <th className="px-6 py-4 text-left font-bold">Position</th>
              <th className="px-6 py-4 text-center font-bold text-red-500">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-base">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-neutral-lighter transition-colors">
                <td className="px-6 py-4 text-left text-content-main">{item.name}</td>
                <td className="px-6 py-4 text-left text-content-main">{item.lastname}</td>
                <td className="px-6 py-4 text-left text-content-main">{item.position}</td>
                <td className="px-6 py-4 text-center">
                  <button 
                    onClick={() => onDelete(item.id)}
                    className="bg-red-50 text-red-500 px-4 py-1.5 rounded-lg font-bold hover:bg-red-500 hover:text-white transition-all"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminForm;