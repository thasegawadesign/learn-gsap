"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function MyFirstSample() {
  gsap.registerPlugin(useGSAP);

  const container = useRef(null);
  const circle = useRef(null);

  useGSAP(
    () => {
      gsap.to(".box", { rotation: "+=360", duration: 6 });

      gsap.to(circle.current, { rotation: "-=360", duration: 5 });
    },
    { scope: container },
  );

  return (
    <main className="m-10">
      <div ref={container} className="container flex gap-5">
        <div className="box grid h-24 w-24 place-items-center rounded-md bg-green-500 text-white">
          selector
        </div>
        <div
          ref={circle}
          className="grid h-24 w-24 place-items-center rounded-full bg-blue-500 text-white"
        >
          Ref
        </div>
      </div>
    </main>
  );
}
