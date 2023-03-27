import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getUsers() {
    const data = await (
      await fetch("https://node-test-1q2i.onrender.com/users")
    ).json();
    setData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) return <h2>Loading....</h2>;

  return data.users.map((user, idx) => (
    <h2 key={idx}>
      {user.name} {user.age} {user.occupation}
    </h2>
  ));
}

export default App;
