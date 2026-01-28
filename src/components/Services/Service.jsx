import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

export default function Service({ title, description, icon: Icon, iconColor }) {
  const { isLight } = useContext(ThemeContext); // <-- use context

  return (
    <div
      className={`${
        isLight
          ? "bg-white/5 hover:bg-black/5 border border-zinc-200 shadow-xl"
          : "bg-white/5 hover:bg-white/10 border border-teal-900 shadow-sm"
      } text-(--text) rounded-2xl p-4 md:p-8 transition-all duration-300`}
    >
      {/* title */}
      <div className="flex gap-3 items-center">
        <Icon
          className={`relative p-2 w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 ${iconColor}`}
        />
        <h1 className="font-bold text-xl">{title}</h1>
      </div>
      <p className="mt-3 text-(--color)">{description}</p>
    </div>
  );
}
