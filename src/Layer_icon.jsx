
import { useEffect, useState } from "react";

export default function Layer_icon() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
  <lord-icon
  src="./assets/layer_icon.json"
  trigger="loop"
  delay="1000"
  style={{ width: "100%", height: "100%" }}
/>
  );
}
