import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import CategorySection from '../CategorySection';
import RecommendedSection from '../RecommendedSection';
import boy from '../../assets/boy.webp';


function Dashboard() {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear token and redirect to login
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        isProfileOpen={isProfileOpen} 
        setIsProfileOpen={setIsProfileOpen} 
        handleLogout={handleLogout} 
      />
      
      <main className="container mx-auto mt-8 px-4">
        {/* Hero Section */}
        <div className="bg-white p-6 rounded-lg  mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h1 className="text-4xl font-bold text-blue-800 mb-4">Unlock Exposure</h1>
              <p className="text-gray-600 mb-6">
                Apply to a plethora of hiring opportunities & work with your dream companies!
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-800 text-white px-6 py-3 rounded-md font-medium">
                  Find Internships
                </button>
                <button className="border border-blue-800 text-blue-800 px-6 py-3 rounded-md font-medium flex items-center">
                  <span className="mr-2">Post Internships</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src={boy}
                alt="Student with books and career opportunities" 
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <CategorySection />

        {/* Recommended Internships */}
        <RecommendedSection />
      </main>
    </div>
  );
}

export default Dashboard;