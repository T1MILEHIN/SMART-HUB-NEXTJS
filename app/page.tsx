import Header from "./component/header";
import Footer from "./component/footer";
import { auth, currentUser } from "@clerk/nextjs";

async function FetchCurrentUSer() {
  const user = await currentUser();
  console.log(user)
  return user;
}

async function Home() {
  const { userId } = auth();
  if (!userId) return <div>YOU ARE NOT LOGGED IN</div>
  const user = await FetchCurrentUSer();
  console.log(user);

  return (
    <>
      <Header />
      <main className="flex min-h-screen justify-center items-center ">
        <h1 className="">SMART HUB {user?.firstName} {user?.lastName} {user?.email}</h1>
      </main>
      <Footer />
    </>
  );
}


export default Home;