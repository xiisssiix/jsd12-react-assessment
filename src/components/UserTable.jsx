import React from 'react';

const UserTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-neutral-base text-content-darker">
          <tr>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Last Name</th>
            <th className="px-6 py-3 text-left">Position</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b border-neutral-lighter">
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.lastname}</td>
              <td className="px-6 py-4">{item.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;