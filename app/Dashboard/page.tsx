"use client"

import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area 
} from 'recharts';
import {
  Menu, X, Home, Users, ShoppingCart, BarChart3, Settings, Bell,
  Search, Calendar, TrendingUp, TrendingDown, Eye, MoreHorizontal,
  User, Mail, Phone, MapPin, Star, ArrowUpRight, ArrowDownRight,
  DollarSign, Package, Activity, UserPlus, Filter, Download
} from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data
  const salesData = [
    { month: 'Jan', sales: 4000, revenue: 2400, customers: 240 },
    { month: 'Feb', sales: 3000, revenue: 1398, customers: 221 },
    { month: 'Mar', sales: 2000, revenue: 9800, customers: 229 },
    { month: 'Apr', sales: 2780, revenue: 3908, customers: 200 },
    { month: 'May', sales: 1890, revenue: 4800, customers: 218 },
    { month: 'Jun', sales: 2390, revenue: 3800, customers: 250 },
  ];

  const pieData = [
    { name: 'Desktop', value: 60, color: '#8B5CF6' },
    { name: 'Mobile', value: 30, color: '#06B6D4' },
    { name: 'Tablet', value: 10, color: '#10B981' },
  ];

  const recentOrders = [
    { id: '#12345', customer: 'John Doe', product: 'Wireless Headphones', amount: '$299', status: 'Completed', date: '2024-01-15' },
    { id: '#12346', customer: 'Jane Smith', product: 'Smart Watch', amount: '$199', status: 'Pending', date: '2024-01-14' },
    { id: '#12347', customer: 'Mike Johnson', product: 'Laptop Stand', amount: '$49', status: 'Completed', date: '2024-01-13' },
    { id: '#12348', customer: 'Sarah Wilson', product: 'Keyboard', amount: '$79', status: 'Cancelled', date: '2024-01-12' },
  ];

  const topProducts = [
    { name: 'Wireless Headphones', sales: 1234, revenue: '$24,680', trend: 'up' },
    { name: 'Smart Watch', sales: 987, revenue: '$19,740', trend: 'up' },
    { name: 'Laptop Stand', sales: 756, revenue: '$15,120', trend: 'down' },
    { name: 'Mechanical Keyboard', sales: 623, revenue: '$12,460', trend: 'up' },
  ];

  const sidebarItems = [
    { id: 'overview', icon: Home, label: 'Overview', active: true },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'customers', icon: Users, label: 'Customers' },
    { id: 'products', icon: Package, label: 'Products' },
    { id: 'orders', icon: ShoppingCart, label: 'Orders' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const StatCard = ({ title, value, change, icon: Icon, trend }) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-xl ${trend === 'up' ? 'bg-green-50' : 'bg-red-50'}`}>
          <Icon className={`w-6 h-6 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
        </div>
      </div>
      <div className="flex items-center mt-4">
        {trend === 'up' ? (
          <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
        ) : (
          <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
        )}
        <span className={`text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
        <span className="text-sm text-gray-500 ml-1">vs last month</span>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Collapsed by default, expands on hover */}
      <div className={`fixed inset-y-0 left-0 z-50 w-20 hover:w-64 bg-gray-100 shadow-xl transition-all duration-300 ease-in-out lg:static lg:w-20 lg:hover:w-64 ${sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex items-center justify-between h-16 px-4 lg:px-6 border-b border-gray-200">
          {sidebarOpen || (
            <h1 className="text-xl font-bold text-gray-900 mx-auto">Admin</h1>
          )}
          {sidebarOpen && (
            <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        
        <nav className="mt-6 px-2 lg:px-3">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200 mb-1 group ${
                activeTab === item.id
                  ? 'bg-indigo-50 text-indigo-600 border-r-2 border-indigo-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5 min-w-[20px]" />
              <span className={`ml-3 whitespace-nowrap ${sidebarOpen ? 'opacity-100' : 'lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-2 lg:p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className={`ml-3 ${sidebarOpen ? 'opacity-100' : 'lg:opacity-0 lg:hover:opacity-100 transition-opacity duration-200'}`}>
              <p className="text-sm font-medium text-gray-900 whitespace-nowrap">John Admin</p>
              <p className="text-xs text-gray-500 whitespace-nowrap">Super Admin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 mr-2"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h2 className="text-xl font-semibold text-gray-900 capitalize">{activeTab}</h2>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg hidden md:block">
                <Calendar className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-6 py-8">
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Total Revenue"
                value="$54,239"
                change="+12.5%"
                icon={DollarSign}
                trend="up"
              />
              <StatCard
                title="New Customers"
                value="1,429"
                change="+8.2%"
                icon={UserPlus}
                trend="up"
              />
              <StatCard
                title="Total Orders"
                value="2,847"
                change="-2.4%"
                icon={ShoppingCart}
                trend="down"
              />
              <StatCard
                title="Active Users"
                value="8,329"
                change="+15.3%"
                icon={Activity}
                trend="up"
              />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Sales Chart */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Sales Overview</h3>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <MoreHorizontal className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#8B5CF6" 
                      fill="#8B5CF6" 
                      fillOpacity={0.1}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Device Usage Chart */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Device Usage</h3>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Filter className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center space-x-6 mt-4">
                  {pieData.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm text-gray-600">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tables Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Orders */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
                  <button className="flex items-center text-sm text-indigo-600 hover:text-indigo-700">
                    View All <ArrowUpRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Package className="w-5 h-5 text-white" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">{order.customer}</p>
                          <p className="text-xs text-gray-500">{order.product}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900">{order.amount}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Products */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Top Products</h3>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Download className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white font-semibold text-sm">{index + 1}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{product.name}</p>
                          <p className="text-xs text-gray-500">{product.sales} sales</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900">{product.revenue}</p>
                        <div className="flex items-center">
                          {product.trend === 'up' ? (
                            <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                          ) : (
                            <TrendingDown className="w-3 h-3 text-red-500 mr-1" />
                          )}
                          <span className={`text-xs ${product.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                            {product.trend === 'up' ? '+' : '-'}5.2%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;