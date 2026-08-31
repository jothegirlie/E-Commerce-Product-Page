import React from "react";

const sizes = [
  { eur: "38.5", us: "6", uk: "5.5", cm: "24" },
  { eur: "39", us: "6.5", uk: "6", cm: "24.5" },
  { eur: "40", us: "7", uk: "6", cm: "25" },
  { eur: "40.5", us: "7.5", uk: "6.5", cm: "25.5" },
  { eur: "41", us: "8", uk: "7", cm: "26" },
  { eur: "42", us: "8.5", uk: "7.5", cm: "26.5" },
  { eur: "42.5", us: "9", uk: "8", cm: "27" },
  { eur: "43", us: "9.5", uk: "8.5", cm: "27.5" },
  { eur: "44", us: "10", uk: "9", cm: "28" },
  { eur: "44.5", us: "10.5", uk: "9.5", cm: "28.5" },
  { eur: "45", us: "11", uk: "10", cm: "29" },
  { eur: "45.5", us: "11.5", uk: "10.5", cm: "29.5" },
  { eur: "46", us: "12", uk: "11", cm: "30" },
  { eur: "47.5", us: "13", uk: "12", cm: "31" },
];



export default function SizeGuide({ isOpen, onClose }) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-3xl rounded-xl bg-white p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
    
        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-900">Size Guide</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700">✕
          </button>
        </div>

      
        <div className="my-6 rounded-lg bg-gray-50 p-4 border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-2">How to measure?</h3>
          <p className="text-sm text-gray-600 mb-3">
            Place your foot on a sheet of paper. First, mark the heel, then mark the big toe. 
            Using a ruler, measure the distance between the two marks.
          </p>
          <div className="text-xs text-orange-600 bg-orange-50 p-2.5 rounded border border-orange-200">
            <strong>Note:</strong> he length measured from the heel to the big toe (in cm) will be
            slightly shorter than the value (in cm) indicated on the shoe box.
          </div>
        </div>

   
        <div className="flex gap-2 border-b mb-4">
          <h4>Sizes</h4>
        </div>

   
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
              <tr>
                <th className="px-4 py-3">EU</th>
                <th className="px-4 py-3">US</th>
                <th className="px-4 py-3">UK</th>
                <th className="px-4 py-3">CM</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              { sizes.map((item) => ( 
                <tr className= "bg-white">
                  <td className="px-4 py-2.5 font-medium text-gray-900">{item.eur}</td>
                  <td className="px-4 py-2.5">{item.us}</td>
                  <td className="px-4 py-2.5">{item.uk}</td>
                  <td className="px-4 py-2.5 font-semibold text-orange-600">{item.cm} cm</td>
                </tr>
             )) }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}