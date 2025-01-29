import React from 'react';

function InventoryCard({
  icon,
  title,
  number,
}: {
  icon: any;
  title: string;
  number: string;
}) {
  return (
    <div className="h-40 bg-slate-200 p-3 rounded-lg shadow-md flex flex-col  items-center justify-between gap-3">
      {/* Icon and Title Section */}
      <div className="flex flex-row justify-start items-center gap-3 w-full ">
        <div className="">{icon}</div>
        <div className="text-md  font-semibold text-gray-700 w-full">{title}</div>
      </div>

      {/* Number Section */}
      <div className="w-full flex justify-center">
        <div className="text-center text-xl md:text-2xl py-6  w-full bg-white border rounded-lg ">
          {number}
        </div>
      </div>
    </div>
  );
}

export default InventoryCard;
