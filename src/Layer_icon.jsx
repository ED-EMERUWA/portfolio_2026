
import { useEffect, useState } from "react";
import icon from "../icons/layer_icon.json";

export default function Layer_icon() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
  <lord-icon
  src={icon}
  trigger="loop"
  delay="1000"
  style={{ width: "100%", height: "100%" }}
/>
  );
}
