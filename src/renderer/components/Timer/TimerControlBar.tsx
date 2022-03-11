import React from 'react';

import { ClockIcon, SaveIcon } from '@heroicons/react/outline';

const TimerControlBar = () => {
  const inputTitleHandler = (e: any) => {
    console.log(e.target.value);
  };
  const inputDescriptionHandler = (e: any) => {
    console.log(e.target.value);
  };
  const submitTimer = () => {
    return 'hello';
  };

  return (
    <div className="flex flex-row items-center p-2 shadow-lg mb-1 w-full h-14">
      <ClockIcon className="w-10 h-10 text-slate-400" />

      <div className="w-full flex justify-between items-center">
        <div>
          <input
            name="Title"
            placeholder="Item XYZ"
            required
            onInput={inputTitleHandler}
            className="cursor-default mx-2 px-2 text-gray-600 border border-slate-300 rounded-md h-7 text-[100%] transition-all hover:border-zinc-500 focus:border-red-600"
          />
          <input
            name="Description"
            placeholder="Description"
            onInput={inputDescriptionHandler}
            className="cursor-default mx-2 px-2 text-gray-600 border border-slate-300 rounded-md h-7 text-[100%] transition-all hover:border-zinc-500 focus:border-red-600"
          />
        </div>

        <div className="flex flex-row items-center">
          00:00:00
          <SaveIcon
            onClick={submitTimer}
            className="w-7 h-7 mx-3 text-slate-500 hover:rounded-full hover:bg-slate-200"
          />
        </div>
      </div>
    </div>
  );
};

export default TimerControlBar;
