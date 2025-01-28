import React from "react";
import NavBar from './Components/Navbar'; 
import Footer from './Components/Footer'; 
import UsersList from './Utils/UserList';
// import CardSpotlightDemo from './Components/CardSpotLight';

const AboutUs = () => {

  return (
    <div className="flex flex-col min-h-screen">
    <NavBar/>

    <section className="min-h-screen bg-gray-950 py-10 px-4">
          
       <div className="text-center mb-10">
         <h1 className="text-4xl font-bold bg-gradient-to-br from-white to-gray-100 bg-clip-text text-transparent mb-10">
            Welcome to My3DShowcase
        </h1>
         <p className="text-lg text-gray-100 px-20">
         ReviewR is your one-stop platform for generating authentic, real reviews for your website with just a few clicks. Enhance your credibility and improve user trust in no time.
         </p>
       </div>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-950 shadow-lg rounded-lg p-6 mx-4 border border-gray-700">
                <h3 className="text-2xl flex justify-center font-semibold mb-6 text-gray-200">Our Team</h3>
                <p className="text-gray-400 mb-6">
                A diverse group of talented professionals dedicated to making an impact in the tech industry.
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-950 shadow-lg rounded-lg p-6 mx-4 border border-gray-700">
                <h3 className="text-2xl flex justify-center font-semibold mb-6 text-gray-200">Our Team</h3>
                <p className="text-gray-400 mb-6">
                A diverse group of talented professionals dedicated to making an impact in the tech industry.
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-950 shadow-lg rounded-lg p-6 mx-4 border border-gray-700">
                <h3 className="text-2xl flex justify-center font-semibold mb-6 text-gray-200">Trusted by Many</h3>
                <p className="text-gray-400 mb-6 mx-4 text-center">
                Join thousands of satisfied users who trust ReviewR to generate reliable reviews, improving their online reputation.
                </p>
            </div>
        </div>

        {/* <CardSpotlightDemo/> */}


      {/* <div>
        <p className='text-red-400'> <UsersList /></p> 
      </div> */}

     </section>
     
     <Footer/>
    </div>
   
  );
};

export default AboutUs;
