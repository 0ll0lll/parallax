import Map from './components/Map';

function App() {
  return (
    <div>
      <header className="relative h-10 bg-lime-400">
        <span className="absolute inset-y-0 h-6 px-4 my-auto ml-10 text-xs leading-6 rounded-md bg-black/10 text-slate-500">
          ◑﹏◐
        </span>
      </header>

      <main style={{ height: 'calc(100vh - 5rem)' }} className="bg-gray-300">
        <Map />
        <h1 className="fixed text-4xl font-bold -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">Alphabet</h1>
      </main>

      <footer className="h-10 bg-lime-400">
        <ul className="flex items-center justify-around h-full">
          <li>╰(*°▽°*)╯</li>
          <li>(^///^)</li>
          <li>(～￣▽￣)～</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
