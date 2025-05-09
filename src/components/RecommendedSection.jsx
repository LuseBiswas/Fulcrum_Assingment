import { useState } from 'react';
import { Link } from 'react-router-dom';

function RecommendedSection() {
  const [activeTab, setActiveTab] = useState('FOR YOU');
  
  const internships = [
    {
      id: 1,
      title: 'Seagate Research Internship',
      company: 'Seagate',
      logo: '/api/placeholder/80/80',
      location: 'Navi Mumbai',
      views: '720',
      isInOffice: true,
    },
    {
      id: 2,
      title: 'Software Engineering Internship',
      company: 'Fortive',
      logo: '/api/placeholder/80/80',
      location: 'Bangalore Urban',
      views: '1,454',
      isInOffice: true,
    },
    {
      id: 3,
      title: 'Java Internship',
      company: 'Harman',
      logo: '/api/placeholder/80/80',
      location: 'Bengaluru',
      views: '3,974',
      isInOffice: true,
    },
    {
      id: 4,
      title: 'Software Engineer Internship',
      company: 'Harman International',
      logo: '/api/placeholder/80/80',
      location: 'Bengaluru',
      views: '7,306',
      isInOffice: true,
    },
  ];

  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="flex flex-col mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-800">Recommended Internships</h2>
          <p className="text-gray-600 text-sm mt-1">
            Looking for the best of the best? Here're the top-rated Internships by the learners' community.
          </p>
        </div>
        
        <div className="flex items-center">
          <div className="bg-white rounded-md shadow-sm border border-gray-200 flex">
            <button 
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'FOR YOU' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('FOR YOU')}
            >
              FOR YOU
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'TRENDING' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('TRENDING')}
            >
              TRENDING
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {internships.map((internship) => (
          <InternshipCard key={internship.id} internship={internship} />
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <button className="text-blue-600 font-medium flex items-center hover:underline">
          See all internships
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function InternshipCard({ internship }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative">
        {/* Background pattern */}
        <div className="h-20 w-full bg-gradient-to-r from-green-100 to-green-300"></div>
        {/* Position badge */}
        {internship.isInOffice && (
          <div className="absolute top-2 left-2 bg-white bg-opacity-90 px-3 py-1 rounded-md text-xs font-medium">
            In Office
          </div>
        )}
        {/* Company Logo */}
        <div className="absolute bottom-0 left-4 transform translate-y-1/2 w-12 h-12 bg-white rounded-md shadow flex items-center justify-center overflow-hidden p-2">
          <img
            src={internship.logo}
            alt={`${internship.company} logo`}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
          <Link 
            to={`/internships/${internship.id}`}
            className="text-blue-600 hover:text-blue-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
  );
}
export default RecommendedSection;