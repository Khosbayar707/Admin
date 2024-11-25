"use client";
import Image from "next/image";

export default function Home() {
  const [numbers, setCount] = useState(0);

  let handleClick = () => {
    setCount(numbers + 1);
    console.log(numbers);
  };

  return (
    <div>
      {numbers}
      <button onclick={handleClick}>click here</button>
    </div>
  );
}
