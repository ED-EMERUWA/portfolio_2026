
import { useEffect, useState } from "react";


export default function Layer_icon() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
  <lord-icon
  src="https://cdn.lordicon.com/jectmwqf.json"
  trigger="loop"
  delay="1000"
  colors="primary:#5c352c,secondary:#e9b48a"
  style={{ width: "100%", height: "100%" }}
/>
  );
}
