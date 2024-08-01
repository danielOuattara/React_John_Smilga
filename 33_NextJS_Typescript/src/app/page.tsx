import UserList from "@/components/UserList";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <h1>Home page</h1>
        <Link href={"about"}>About </Link>
        <Link href={"info"}>Info </Link>
        <Link href={"/info/contact"}>Contact </Link>
      </section>
      <section>
        <UserList />
      </section>
    </>
  );
}
