import Hello from "@/components/Hello";

const Home = () => {
  console.log("Where am I rendering from ?");
  return (
    <main>
      <Hello />
      <div className="text-5xl underline">Welcome to Next.js</div>
    </main>
  );
};

export default Home;
