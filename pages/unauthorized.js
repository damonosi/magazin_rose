import { useRouter } from "next/router";
import React from "react";

export default function Unauthorized() {
  const router = useRouter();
  const { message } = router.query;
  return (
    <div>
      <h1 className="text-xl"> Access Denied </h1>
      <button onClick={() => router.push("/auth/login")}>Logare</button>
      {message && <div className="mb-4 text-red-500"> {message} </div>}
    </div>
  );
}
