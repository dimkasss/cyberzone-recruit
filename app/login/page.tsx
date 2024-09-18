import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[--background-secondary] flex flex-col">
      <header className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">R-STORE</h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <LoginForm />
      </main>
    </div>
  );
};

export default LoginPage;
