import { useFetch } from "../../hooks/useFetch";
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
  const { loading, data, errors } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5&_delay=5000"
  );

  return (
    <div className="flex flex-col">
      <h2 className="text-gray-500 mb-4 text-center">- Hooks customisés -</h2>
      <div className="flex">
        <div className="flex flex-col px-4 border-r-2">
          <div className="flex flex-col mb-4">
            <p className="mb-2">useToggle</p>
            <div className="flex justify-around">
              <input type="checkbox" checked={checked} onChange={toggleCheck} />
              {checked && "Case cochée"}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col">
              <p>useIncrement</p>
              <p>⏱️ {count}</p>
              <div className="flex justify-center mt-4">
                <button
                  className="cursor-pointer bg-blue-500 rounded-md p-2 text-white mx-1"
                  onClick={increment}
                >
                  Ajouter
                </button>
                <button
                  className="cursor-pointer bg-red-500 rounded-md p-2 text-white"
                  onClick={decrement}
                >
                  Retirer
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4">
          <p>useFetch</p>
          {loading && <div>Chargement...</div>}
          {errors && <div className="text-red-500">{errors.toString()}</div>}
          {data && (
            <div>
              <ul>
                {data.map((post) => (
                  <li className="text-left" key={post.id}>
                    <span>° </span>
                    {post.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
