import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href={"about"}>About </Link>
      <Link href={"info"}>Info </Link>
      <Link href={"/info/contact"}>Contact </Link>
    </div>
  );
}
