import { useState } from 'react';
import barsby_diploma from './assets/barsby_diploma.png';
import viu_diploma from './assets/viu_diploma.png';
import bcit_diploma from './assets/bcit_diploma.png';

export default function EduModal() {
    const [openIndex, setOpenIndex] = useState(null);

    const education = [
        {
            title: "Certificate in Web and Mobile Development",
            institution: "Vancouver Island University",
            year: "2023-2025",
            image: viu_diploma,
        
        },
        {
            title: "High School Diploma",
            institution: "John Barsby Secondary School",
            year: "2023",
            image: barsby_diploma,
          
        },
        {
            title: "In progress Bachelor's Degree in Computer Science",
            institution: "British Columbia Institute of Technology",
            year: "2025-Present",
            image: bcit_diploma,
           
        }
    ];

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
        <div className="space-y-4">
            {education.map((item, index) => (
                <div 
                    key={index}
                    className="bg-white border-2 border-c4 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                    {/* Header - Always Visible */}
                    <button
                        onClick={() => toggleItem(index)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-c1 transition-colors"
                    >
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-textPrimary">{item.title}</h3>
                            <p className="text-textSecondary mt-1">{item.institution} • {item.year}</p>
                        </div>
                        <span className={`text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                            ▼
                        </span>
                    </button>

                    {/* Expandable Content */}
                    <div 
                        className={`transition-all duration-300 ease-in-out ${
                            openIndex === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                        } overflow-hidden`}
                    >
                        <div className="px-6 pb-6 pt-2 flex flex-col items-center w-full">
                            <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full max-w-2xl h-auto object-cover rounded-lg border-2 border-c3 shadow-md"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);
}