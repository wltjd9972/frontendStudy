import axios from "axios";
import { useEffect, useState } from "react";

export default function RestGetPage(): JSX.Element {
  const [dog, setDog] = useState("");

  useEffect(() => {
    const onClikAsync = async (): Promise<void> => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log(result.data.message);
      setDog(result.data.message);
    };
    void onClikAsync();
  }, []);

  return (
    <div>
      <img src={dog} />
      {/* <button onClick={onClickAsync}>REST-API(동기)</button> */}
    </div>
  );
}
