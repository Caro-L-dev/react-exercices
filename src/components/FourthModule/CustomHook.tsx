import { useIncrement } from "../../hooks/useIncrement";
import { useToggle } from "../../hooks/useToggle";

export default function CustomHook() {
  // Fonction créer qui elle même utilisera un hook.
  // A préfixer avec le mot clé "use" pour pouvoir les identifier plus facilement.
  const [checked, toggleCheck] = useToggle(false);
  const { count, increment, decrement } = useIncrement({
    base: 0,
    max: 10,
  });

  return (
    <div className="flex flex-col">
      <h2 className="text-gray-500">- Hooks customisés -</h2>
      <div className="flex flex-col mb-2">
        <p>useToggle</p>
        <input type="checkbox" checked={checked} onChange={toggleCheck} />
        {checked && "Je suis coché"}
      </div>
      <div>
        <p>useIncrement</p>
        <div className="flex flex-col">
          <button onClick={increment}>Ajouter</button>
          <button onClick={decrement}>Retirer</button>
          <p>Compteur : {count}</p>
        </div>
      </div>
    </div>
  );
}
