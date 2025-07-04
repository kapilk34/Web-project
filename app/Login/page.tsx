"use client"

import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Github, Chrome, Apple, Sparkles } from 'lucide-react';

const ModernLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    
    // Handle login logic here
    console.log('Login attempted with:', { email, password, rememberMe });
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center p-4">

      {/* Login Container */}
      <div className="relative w-full max-w-md">

        {/* Main Login Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
          {/* Glass Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
          
          {/* Header */}
          <div className="relative z-10 text-center mb-8">
            
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-gray-600 mt-2">Sign in to your account to continue</p>
          </div>

          {/* Social Login */}
          <div className="relative z-10 mb-6">
            <div className="grid grid-cols-3 gap-3 mb-6">
              <button
                onClick={() => handleSocialLogin('Google')}
                className="flex items-center justify-center px-4 py-3 bg-white/60 hover:bg-white/80 border border-gray-200/50 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-105 group"
              >
                <Chrome className="w-5 h-5 text-gray-600 group-hover:text-blue-500 transition-colors" />
              </button>
              <button
                onClick={() => handleSocialLogin('Apple')}
                className="flex items-center justify-center px-4 py-3 bg-white/60 hover:bg-white/80 border border-gray-200/50 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-105 group"
              >
                <Apple className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
              </button>
              <button
                onClick={() => handleSocialLogin('GitHub')}
                className="flex items-center justify-center px-4 py-3 bg-white/60 hover:bg-white/80 border border-gray-200/50 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-105 group"
              >
                <Github className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
              </button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/80 text-gray-600 rounded-full">or continue with email</span>
              </div>
            </div>
          </div>

          {/* Login Form */}
          <div className="relative z-10 space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/60 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-white/60 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-indigo-600 bg-white/60 border-gray-200 rounded focus:ring-indigo-500 focus:ring-2"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="text-sm text-indigo-600 hover:text-indigo-500 transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500  transition-all duration-200   disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg group"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Signing in...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  Sign in
                </div>
              )}
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="relative z-10 mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button className="text-indigo-600 hover:text-indigo-500 font-medium transition-colors">
                Sign up for free
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernLoginPage;