"use client";
import Header from "./component/header";
import Footer from "./component/footer";

import { auth, currentUser } from "@clerk/nextjs";

export default async function Home() {
  const {userId} = auth()
  if (!userId) return <div>YOU ARE NOT LOGGED IN</div>

  const user = await currentUser()
  console.log(user)
  return (
    <>
      <Header />
      <main className="flex min-h-screen justify-center items-center ">
        <h1 className="text-[1.4rem]">SMART HUB {user?.firstName}</h1>
      </main>
      <Footer />
    </>
  );
}
