import React from "react";

export default function Prize() {
  return (
    <div className="flex flex-col items-center p-6 cursor-default">
      <h2 className="text-3xl text-center sm:text-4xl md:text-5xl font-bold bg-gradient-to-t bg-clip-text leading-none text-transparent from-teal-200 to-teal-800/90 mb-12">
        Prizes
      </h2>

      <div className="flex flex-col gap-8 w-full items-center">
        {/* Prize Pool */}
        <div className="p-6 text-center bg-gray-800 rounded-xl w-full max-w-lg border border-gray-600 transition-transform duration-300 ease-in-out hover:scale-105">
          <h3 className="text-xl mb-2 text-orange-400">* Prize Pool *</h3>
          <p className="text-6xl font-bold text-orange-400">₹ 1,70,000</p>
        </div>

        {/* Prizes */}
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-6xl">
          <div className="p-6 text-center flex-1 bg-gray-800 rounded-xl w-full border border-gray-600 transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="text-xl mb-2 text-pink-400">* 1st Prize *</h3>
            <p className="text-5xl font-bold text-pink-400 w-full">₹ 75,000</p>
          </div>

          <div className="p-6 text-center flex-1 bg-gray-800 rounded-xl w-full border border-gray-600 transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="text-xl mb-2 text-green-400">* 2nd Prize *</h3>
            <p className="text-5xl font-bold text-green-400 w-full">₹ 50,000</p>
          </div>

          <div className="p-6 text-center flex-1 bg-gray-800 rounded-xl w-full border border-gray-600 transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="text-xl mb-2 text-indigo-400">* 3rd Prize *</h3>
            <p className="text-5xl font-bold text-indigo-400 w-full">
              ₹ 25,000
            </p>
          </div>
        </div>

        {/* Special Awards */}
        <div className="flex flex-col md:flex-row gap-8 max-w-2xl">
          <div className="p-6 text-center flex-1 bg-gray-800 rounded-xl border border-gray-600 transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="text-xl mb-2 text-pink-400">
              * The Best Women&apos;s Team *
            </h3>
            <p className="text-3xl font-bold text-pink-400">
              ♀ Women&apos;s Team
            </p>
          </div>
        </div>

        {/* Track Prize */}
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
          <div className="p-6 text-center flex-1 bg-gray-800 rounded-xl border border-gray-600 transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="text-3xl font-bold text-blue-400">
              * Special Track Prize *
            </h3>
          </div>

          <div className="p-6 text-center flex-1 bg-gray-800 rounded-xl border border-gray-600 transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="text-3xl font-bold text-blue-400">
              * Track Prize *
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
