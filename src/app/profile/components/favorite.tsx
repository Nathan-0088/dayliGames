"use client";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

export default function FavoriteGame() {
  const [edit, setEdit] = useState(false);
  const [inp, setInp] = useState("");

  return (
    <div className="w-full bg-gray-900 flex flex-col justify-between p-5 rounded-md">
      {edit == false ? (
        <button
          className="hover:opacity-75 scale-95 transition-all duration-300 cursor-pointer"
          onClick={() => setEdit(!edit)}
        >
          <FaEdit color="#fff" size={25} className="mb-9" />
        </button>
      ) : (
        <div className="flex mb-9 items-center gap-4">
          <input
            type="text"
            className="bg-slate-700 rounded-md p-1 text-white"
            value={inp}
            onChange={(e) => setInp(e.target.value)}
          />
          <button onClick={() => setEdit(!edit)}>
            <FaCheck
              color="#fff"
              size={25}
              className="hover:opacity-75 scale-95 transition-all duration-300 cursor-pointer"
            />
          </button>
        </div>
      )}

      {inp === "" ? (
        <div>
          <h1 className="text-white font-bold">Adicione um jogo preferido ...</h1>
        </div>
      ) : (
        <div>
          <h1 className="text-white font-bold mb-1">Jogo preferido:</h1>
          <p className="text-white">{inp}</p>
        </div>
      )}
    </div>
  );
}
