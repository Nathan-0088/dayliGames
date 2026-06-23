"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Input() {
  const [inp, setInp] = useState("");
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (inp === "") return;

    router.push(`/game/search/${inp}`);
  }

  return (
    <form
      className="flex justify-between w-full bg-slate-500 p-3 my-2 rounded-lg my-4"
      onSubmit={handleSubmit}
    >
      <input
        className="max-w-11/12 w-full bg-slate-500 outline-none text-white"
        placeholder="Procurando algum jogo?..."
        value={inp}
        onChange={(e) => setInp(e.target.value)}
      />
      <button
        type="submit"
        className="transition-all duration-500 hover:scale-95 hover:opacity-75 cursor-pointer"
      >
        <FiSearch size={30} color="#fff" />
      </button>
    </form>
  );
}
