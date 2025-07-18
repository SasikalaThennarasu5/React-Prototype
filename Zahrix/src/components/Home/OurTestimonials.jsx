import user1 from '../../assets/images/user1.png';           
import user2 from '../../assets/images/user2.png';
import starGroup from '../../assets/images/stars.png';
import quoteIcon from '../../assets/images/quote.png';
import arrowLeft from '../../assets/images/Group 6.png';  
import arrowRight from '../../assets/images/Group 6.png';
//import '../assets/styles/Testimonial.css'

import { Zap } from "lucide-react";
const testimonials = [
  {
    name: 'Priya Patel',
    role: 'Homeowner',
    image: user1,
    quote:
      "The electrical panel upgrade done by ZAHRIX was seamless. Their electricians were courteous, knowledgeable, and provided excellent customer service. I'm thrilled with the results!",
  },
  {
    name: 'Rahul Sharma',
    role: 'Facility Manager',
    image: user2,
    quote:
      "ZAHRIX Electrical Services delivered exceptional work on our office electrical upgrade. Their team was professional, efficient, and completed the project on time. Highly recommended!",
  },
];

const OurTestimonials = () => {
  return (
    <section className="bg-[#f4f4f4] py-16 px-4 text-center">
      {/* Section Title */}
      <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2">
        OUR TESTIMONIALS <span className="text-blue-700">⚡</span>
      </h2>
      <p className="text-xl text-blue-700 font-semibold mb-10">Real People, Real Results</p>

      {/* Testimonial Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-7xl mx-auto">
        {testimonials.map((t, idx) => (
          <div className="relative flex-1" key={idx}>
            <div className="card-shadow absolute bottom-[-24px] right-[-20px] w-[80%] h-[100px] bg-[#4A66A0] rounded-3xl z-0"></div>

            <div className="testimonial-card min-h-[350px] relative bg-white rounded-tl-[8rem] rounded-tr-[8rem] shadow-lg text-left p-6 pt-16 border border-gray-200 z-10">

              <div className="user-profile absolute top-10 left-16 flex items-center gap-3 bg-[#4A66A0] text-white py-2 px-2 rounded-full z-10">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white"
                />
                <div className='mx-4'>
                  <p className="text-l font-semibold">{t.name}</p>
                  <p className="text-l">{t.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="star absolute top-12 right-16 z-10">
                <img src={starGroup} alt="Stars" className="w-28" />
              </div>

              {/* Quote */}
<p className="quote text-blue-700 text-xl font-medium leading-relaxed mt-14 z-10 relative px-2">
  “{t.quote}”
</p>


              {/* Quote Icon */}
              <div className="absolute bottom-4 right-6 z-10">
                <img src={quoteIcon} alt="quote" className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="mt-10 flex justify-center gap-4">
        <button className="p-2 bg-[#4A66A0] hover:bg-gray-400 rounded">
          <img src={arrowLeft} alt="Previous" className="w-5 h-5" />
        </button>
        <button className="p-2 bg-[#4A66A0] hover:bg-gray-400 text-white rounded">
          <img src={arrowRight} alt="Next" className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default OurTestimonials;
