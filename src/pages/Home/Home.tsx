import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";

interface GrandPrix {
  id: number;
  name: string;
  description: string;
  image: string;
  start_date: Date;
  end_date: Date;
}

export function Home() {
  const [grandPrix, setGrandPrix] = useState<GrandPrix[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/grandprix");

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setGrandPrix(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      {grandPrix.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </>
  );
}
