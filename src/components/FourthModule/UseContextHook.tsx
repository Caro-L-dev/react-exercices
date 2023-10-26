import { Button } from "../General/Button/Button";
import { useTheme } from "../../hooks/useTheme";

export default function UseContextHook() {
  return (
    <div className="ml-10 flex flex-col border-l-2 p-2 ">
      <h2 className="text-gray-500">- useContext -</h2>
      <Button />
      <ThemeSwitcher />
    </div>
  );
}

function ThemeSwitcher() {
  const { toggleTheme } = useTheme();
  return (
    <button
      className="bg-blue-500 p-2 text-white rounded-md mt-2"
      onClick={toggleTheme}
    >
      Changer de thème
    </button>
  );
}
