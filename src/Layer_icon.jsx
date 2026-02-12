
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
    src="https://cdn.lordicon.com/jectmwqf.json"
    trigger="hover"
    colors="primary:#5c352c,secondary:#e9b48a"
    style="width:250px;height:250px">
</lord-icon>
  );
}
