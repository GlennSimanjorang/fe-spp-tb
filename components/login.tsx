import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";

interface LoginProps {
  onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("ctydna1307@gmail.com");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
    onLogin();
  };

  const handleGoogleLogin = () => {
    // For demo purposes, Google login will also work
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2">
        {/* Left side - Login Form */}
        <div className="p-8 lg:p-12">
          <div className="max-w-md mx-auto">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-medium text-gray-900 text-center mb-2">
              SMK Taruna Bhakti
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-center mb-8">
              Sistem Pembayaran SPP - Admin Portal<br/>
              <span className="text-sm text-gray-500">Masuk untuk mengakses dashboard</span>
            </p>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-900 border-gray-200"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-gray-900 border-gray-200 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me and Forgot password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <label htmlFor="remember" className="text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  className="text-sm text-blue-500 hover:text-blue-600"
                >
                  Forgot Password ?
                </button>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg"
              >
                Log In
              </Button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Right side - Illustration */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 lg:p-12 flex items-center justify-center">
          <div className="text-center">
            {/* Laptop Illustration */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-32 h-20 bg-gray-800 rounded-t-lg relative">
                  <div className="w-28 h-16 bg-white rounded-sm absolute top-1 left-2 border-2 border-gray-700"></div>
                </div>
                <div className="w-40 h-3 bg-gray-700 rounded-b-2xl relative -top-1"></div>
                <div className="w-4 h-1 bg-gray-600 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
              </div>
            </div>

            {/* Welcome Text */}
            <h2 className="text-2xl font-medium text-blue-800 mb-4">
              Welcome Back!
            </h2>
            <p className="text-blue-600 max-w-xs">
              Sign in to access your SMK Taruna Bhakti payment management system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}