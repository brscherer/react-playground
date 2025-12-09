import { useState, useEffect, useEffectEvent, useRef } from "react";

function customUseEffectEvent<T extends (...args: any[]) => any>(fn: T): T {
  const fnRef = useRef(fn);
  fnRef.current = fn;
  return function (...args: Parameters<T>): ReturnType<T> {
    return fnRef.current(...args);
  } as T;
}

function App() {
  const [user, setUser] = useState("Foo");

  const [loginMessage, setLoginMessage] = useState("");

  const evtCallback = useEffectEvent((time: number) => {
    setLoginMessage(`${user} logged in ${time} seconds ago`);
  });

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      evtCallback(count++);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-3 flex flex-col gap-2 min-h-screen text-3xl">
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className="border-2 border-gray-300 rounded-md p-2 text-black bg-white"
        placeholder="Enter your username"
        autoFocus
      />
      <p>
        User: <strong>{user}</strong>
      </p>
      <p>
        Login Message: <strong>{loginMessage}</strong>
      </p>
    </div>
  );
}

export default App;
