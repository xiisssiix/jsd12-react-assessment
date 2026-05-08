import React from 'react';

const UserTable = ({ data }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 overflow-hidden rounded-2xl border border-neutral-base shadow-sm bg-white">
      <table className="min-w-full">
        <thead className="bg-neutral-base text-content-darker">
          <tr>
            <th className="px-6 py-4 text-left font-bold uppercase tracking-wider">Name</th>
            <th className="px-6 py-4 text-left font-bold uppercase tracking-wider">Last Name</th>
            <th className="px-6 py-4 text-left font-bold uppercase tracking-wider">Position</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-base">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-neutral-lighter transition-colors">
              <td className="px-6 py-4 text-left text-content-main font-medium">{item.name}</td>
              <td className="px-6 py-4 text-left text-content-main font-medium">{item.lastname}</td>
              <td className="px-6 py-4 text-left text-content-main font-medium">{item.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;