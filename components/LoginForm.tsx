"use client";

import { mockUserData } from "@/lib/mockData";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";

const LoginForm: React.FC = () => {
  const { push } = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const isFormValid = username.trim() !== "" && password.trim() !== "";

  const handleBlur = (field: "username" | "password") => {
    if (field === "username" && username.trim() === "") {
      setUsernameError("Имя пользователя не может быть пустым");
    } else if (field === "password" && password.trim() === "") {
      setPasswordError("Пароль не может быть пустым");
    }
  };

  const handleChange = (field: "username" | "password", value: string) => {
    if (field === "username") {
      setUsername(value);
      setUsernameError("");
    } else {
      setPassword(value);
      setPasswordError("");
    }
  };

  const handleLogin = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (
      username === mockUserData.username &&
      password === mockUserData.password
    ) {
      alert("Вы успешно вошли!");
      push("/");
    } else {
      setPasswordError("Имя или пароль неверны");
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white shadow-md rounded-lg p-8">
        <div className="flex items-center mb-6">
          <ArrowLeft
            onClick={() => push("/")}
            className="w-5 h-5 text-gray-600 mr-2 hover:cursor-pointer"
          />
          <h2 className="text-xl font-semibold text-gray-800">ВХОД</h2>
        </div>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Имя пользователя"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={username}
              onChange={(e) => handleChange("username", e.target.value)}
              onBlur={() => handleBlur("username")}
              aria-invalid={usernameError !== ""}
              aria-describedby="username-error"
            />
            {usernameError && (
              <p id="username-error" className="mt-1 text-sm text-red-600">
                {usernameError}
              </p>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Пароль"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => handleChange("password", e.target.value)}
              onBlur={() => handleBlur("password")}
              aria-invalid={passwordError !== ""}
              aria-describedby="password-error"
            />
            {passwordError && (
              <p id="password-error" className="mt-1 text-sm text-red-600">
                {passwordError}
              </p>
            )}
          </div>
          <button
            onClick={handleLogin}
            className={`w-full py-3 rounded-md transition-colors ${
              isFormValid
                ? "bg-indigo-800 text-white hover:bg-indigo-900"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
