import { useTheme } from "../../../hooks/useTheme";

export function Button() {
  const { theme } = useTheme();
  return (
    <button
      className={`${
        theme === "light"
          ? "bg-white border-4"
          : "bg-slate-500 text-white border-4 border-slate-600"
      } p-4 rounded-md font-bold`}
    >
      {theme}
    </button>
  );
}
