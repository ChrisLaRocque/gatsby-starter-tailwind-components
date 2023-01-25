import * as React from "react";
import Button from "../components/Button";
import Nav from "../components/Nav";

// markup
function NotFoundPage() {
  return (
    <>
      <Nav title="Tailwind" />
      <main className="mx-auto max-w-xl">
        <h1 className="my-4 text-2xl font-bold">Page not found</h1>
        <Button to="/" text="Home" />
      </main>
    </>
  );
}

export default NotFoundPage;
