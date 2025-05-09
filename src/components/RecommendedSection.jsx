import { useState } from 'react';
import { MapPin, Eye, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

function RecommendedSection() {
  const [activePage, setActivePage] = useState(0);
  
  const internships = [
    {
      id: 1,
      title: 'Seagate Research Internship',
      company: 'Seagate',
      logo: '/api/placeholder/40/40',
      location: 'Navi Mumbai',
      views: '720',
      isInOffice: true,
      bgColor: 'from-green-200 to-green-300'
    },
    {
      id: 2,
      title: 'Software Engineering Internship',
      company: 'Fortive',
      logo: '/api/placeholder/40/40',
      location: 'Bangalore Urban',
      views: '1,454',
      isInOffice: true,
      bgColor: 'from-yellow-200 to-yellow-300'
    },
    {
      id: 3,
      title: 'Java Internship',
      company: 'Harman',
      logo: '/api/placeholder/40/40',
      location: 'Bengaluru',
      views: '3,974',
      isInOffice: true,
      bgColor: 'from-blue-200 to-blue-300'
    },
    {
      id: 4,
      title: 'Software Engineer Internship',
      company: 'Harman International',
      logo: '/api/placeholder/40/40',
      location: 'Bengaluru',
      views: '7,306',
      isInOffice: true,
      bgColor: 'from-pink-200 to-pink-300'
    },
  ];

  const nextPage = () => {
    setActivePage((prev) => (prev + 1) % 3);
  };

  const prevPage = () => {
    setActivePage((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 relative">
      {/* Main heading row with centered title and "FOR YOU" button */}
      <div className="flex flex-col items-center mb-8 relative">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <h2 className="text-3xl font-bold text-[#1c4980]">Recommended <span className='text-3xl font-bold text-black'>Internships</span></h2>
            <div className="inline-block ml-4">
              <div className="bg-white rounded-full shadow-sm border border-[#1c4980]">
                <button className="px-6 py-1 text-xl font-bold font-stretch-100% rounded-full bg-white text-gray-800">
                  FOR YOU
                </button>
              </div>
            </div>
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/66dec9d358939_arrow.png" alt="" className='h-9 w-15 ml-4'/>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Looking for the best of the best? Here're the top-rated Internships by the learners' community.
          </p>
        </div>
      </div>

      {/* Card navigation arrows */}
      <button 
        className="absolute left-0 top-1/2 -translate-y-8 bg-white shadow-md rounded-full p-2 z-10"
        onClick={prevPage}
      >
        <ChevronLeft className="h-5 w-5 text-gray-600" />
      </button>
      
      <button 
        className="absolute right-0 top-1/2 -translate-y-8 bg-white shadow-md rounded-full p-2 z-10"
        onClick={nextPage}
      >
        <ChevronRight className="h-5 w-5 text-gray-600" />
      </button>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {internships.map((internship) => (
          <InternshipCard key={internship.id} internship={internship} />
        ))}
      </div>
      
      {/* Pagination dots */}
      <div className="flex justify-center mt-8 gap-2">
        {[0, 1, 2].map((dot) => (
          <button 
            key={dot} 
            className={`w-4 h-4 rounded-sm ${
              activePage === dot 
                ? 'bg-yellow-400' 
                : 'bg-gray-300'
            }`}
            onClick={() => setActivePage(dot)}
          />
        ))}
      </div>
    </div>
  );
}

function InternshipCard({ internship }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg border border-gray-100 relative">
      {/* Card header with pattern background */}
      <div className="relative">
        <div className={`h-20 w-full bg-gradient-to-r ${internship.bgColor} bg-opacity-70`}></div>
        
        {/* In Office badge */}
        {internship.isInOffice && (
          <div className="absolute top-2 left-2 bg-white bg-opacity-90 px-3 py-1 rounded-md text-xs font-medium">
            In Office
          </div>
        )}
      </div>
      
      {/* Company Logo - correctly positioned */}
      <div className="absolute top-14 right-4 w-16 h-16 bg-white rounded-md shadow-md flex items-center justify-center p-2 border border-gray-100">
        <img
          src={internship.logo}
          alt={`${internship.company} logo`}
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Card content */}
      <div className="p-4 pt-6 pb-16">
        <h3 className="font-bold text-gray-800 text-lg mb-1">{internship.title}</h3>
        <p className="text-gray-600 mb-4">{internship.company}</p>
        
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center text-gray-500 text-sm">
            <Eye className="h-4 w-4 mr-2" />
            <span>{internship.views} Views</span>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{internship.location}</span>
          </div>
        </div>
      </div>
      
      {/* Arrow link in bottom right */}
      <div className="absolute bottom-4 right-4">
        <button className="p-2 hover:bg-blue-50 transition-colors text-blue-500">
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default RecommendedSection;