import React, { useState } from 'react';

const Stack = () => {
    const technologies = {
        frontend: [
          { name: "React", image: "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" },
          { name: "Angular", image: "https://w7.pngwing.com/pngs/549/955/png-transparent-angularjs-javascript-jquery-directive-python-software-foundation-angle-triangle-logo.png" },
          { name: "Vue", image: "https://w7.pngwing.com/pngs/492/902/png-transparent-vuejs-original-wordmark-logo-icon.png" },
        ],
        backend: [
          { name: "Node.js", image: "https://e7.pngegg.com/pngimages/416/280/png-clipart-node-js-express-js-javascript-redis-mean-node-js-angle-text-thumbnail.png" },
          { name: "Django", image: "https://w7.pngwing.com/pngs/159/366/png-transparent-django-python-computer-icons-logo-python-text-label-rectangle-thumbnail.png" },
          { name: "Ruby on Rails", image: "https://e7.pngegg.com/pngimages/252/10/png-clipart-ruby-on-rails-logo-software-framework-unicorn-ruby-text-logo-thumbnail.png" },
        ],
        database: [
          { name: "MySQL", image: "https://w7.pngwing.com/pngs/384/848/png-transparent-mysql-php-database-javascript-ajax-carnifex-blue-text-logo.png" },
          { name: "PostgreSQL", image: "https://w7.pngwing.com/pngs/441/460/png-transparent-postgresql-plain-wordmark-logo-icon-thumbnail.png" },
          { name: "MongoDB", image: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" },
        ],
        cms: [
          { name: "WordPress", image: "https://w7.pngwing.com/pngs/62/470/png-transparent-word-press-logo-blue-angle-area-brand-wordpress-blue-angle-trademark-thumbnail.png" },
          { name: "Joomla", image: "https://docs.joomla.org/images/5/53/Vertical-logo-light-background-en.png" },
        ],
        cloud: [
          { name: "AWS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8Rka1v8o3ekxyDh5msbmBxxY-ob47bhGPw&s" },
          { name: "Azure", image: "https://banner2.cleanpng.com/20180802/wxy/kisspng-microsoft-azure-cloud-computing-microsoft-corporat-pricing-insight-amp-analytics-microsoft-azure-5b62c6dd915251.7076960515332000935953.jpg" },
        ],
        testing: [
          { name: "Selenium", image: "https://w7.pngwing.com/pngs/785/579/png-transparent-selenium-computer-icons-software-testing-test-automation-automate-blue-angle-text-thumbnail.png" },
          { name: "Jest", image: "https://e7.pngegg.com/pngimages/755/519/png-clipart-jest-logo-tech-companies-thumbnail.png" },
        ],
        devops: [
          { name: "Docker", image: "https://e7.pngegg.com/pngimages/219/411/png-clipart-docker-logo-kubernetes-microservices-cloud-computing-dockers-logo-text-logo-thumbnail.png" },
          { name: "Kubernetes", image: "https://e7.pngegg.com/pngimages/804/119/png-clipart-kubernetes-software-deployment-docker-computer-cluster-rackn-kubernetes-text-logo-thumbnail.png" },
        ],
      };
      const [selectedTech, setSelectedTech] = useState('backend');

      const handleTechChange = (tech) => {
        setSelectedTech(tech);
      };      
  
  return (
    <div className='mx-7 md:mx-10 lg:mx-28 py-4 md:py-6 lg:py-8'>
        <div className='text-center'>
          <h1 className='font-bold md:text-xl text-lg lg:text-2xl shadow-black text-center'>Our</h1>
          <h1 className='font-bold md:text-xl text-lg lg:text-2xl shadow-black text-center'>Tech Stack</h1>
        </div>
        
        {/* Horizontal Scrollable Menu */}
        <div className="">
          <div className="flex flex-row overflow-x-scroll my-4">
            <button 
              onClick={() => handleTechChange('backend')} 
              className={`mx-2 p-2 rounded ${selectedTech === 'backend' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Backend
            </button>
            <button 
              onClick={() => handleTechChange('frontend')} 
              className={`mx-2 p-2 rounded ${selectedTech === 'frontend' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Frontend
            </button>
            <button 
              onClick={() => handleTechChange('database')} 
              className={`mx-2 p-2 rounded ${selectedTech === 'database' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Database
            </button>
            <button 
              onClick={() => handleTechChange('cms')} 
              className={`mx-2 p-2 rounded ${selectedTech === 'cms' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              CMS
            </button>
            <button 
              onClick={() => handleTechChange('cloud')} 
              className={`mx-2 p-2 rounded ${selectedTech === 'cloud' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Cloud
            </button>
            <button 
              onClick={() => handleTechChange('testing')} 
              className={`mx-2 p-2 rounded ${selectedTech === 'testing' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Testing
            </button>
            <button 
              onClick={() => handleTechChange('devops')} 
              className={`mx-2 p-2 rounded ${selectedTech === 'devops' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              DevOps
            </button>
          </div>
        </div>

      {/* Display selected technology images */}
      <div className="flex flex-row items-center justify-center flex-wrap gap-4 md:gap-8 lg:gap-12">
        {technologies[selectedTech].map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <div className='overflow-hidden h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32'>
              <img  src={tech.image} alt={tech.name} className="mb-2 h-full w-full object-cover" />
            </div>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stack;
