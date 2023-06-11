"use client";

import Link from "next/link";
import { Button, Header } from "ui";

export default function Page() {
  return (
    <>
      <Header text="Webs" />
      <Button />
      <Link href={"/riddle"} />
    </>
  );
}
