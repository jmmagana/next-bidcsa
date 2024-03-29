"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    window.alert("Welcome to BIDCSA");
  }, []);

  console.log("[HomePage] rendering");
  return (
    <>
      <h1>BIDCSA</h1>
      <p>¡Bienvenidos!</p>
    </>
  );
}
