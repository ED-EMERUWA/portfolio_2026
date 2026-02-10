import { SiPython, SiJavascript, SiReact, SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs, SiExpress, SiMysql, SiMongodb } from 'react-icons/si';

export default function LanModal() {
    const languages = [
        { name: 'Python', icon: SiPython, iconSize: 'text-5xl', padding: 'px-6 py-4', hoverBg: 'hover:bg-c1' },
        { name: 'JavaScript', icon: SiJavascript, iconSize: 'text-4xl', padding: 'px-5 py-3', hoverBg: 'hover:bg-c2' },
        { name: 'React Js', icon: SiReact, iconSize: 'text-6xl', padding: 'px-8 py-5', hoverBg: 'hover:bg-c1' },
        { name: 'HTML', icon: SiHtml5, iconSize: 'text-4xl', padding: 'px-5 py-3', hoverBg: 'hover:bg-cmid' },
        { name: 'CSS', icon: SiCss3, iconSize: 'text-5xl', padding: 'px-6 py-4', hoverBg: 'hover:bg-c2' },
        { name: 'Tailwind', icon: SiTailwindcss, iconSize: 'text-4xl', padding: 'px-5 py-3', hoverBg: 'hover:bg-c3' },
        { name: 'Node Js', icon: SiNodedotjs, iconSize: 'text-6xl', padding: 'px-7 py-5', hoverBg: 'hover:bg-cmid' },
        { name: 'Express Js', icon: SiExpress, iconSize: 'text-5xl', padding: 'px-6 py-4', hoverBg: 'hover:bg-c1' },
        { name: 'MySQL', icon: SiMysql, iconSize: 'text-4xl', padding: 'px-5 py-3', hoverBg: 'hover:bg-c2' },
        { name: 'NoSQL', icon: SiMongodb, iconSize: 'text-5xl', padding: 'px-6 py-4', hoverBg: 'hover:bg-c3' }
    ];

    return (
        <div className="flex flex-wrap gap-3 justify-center p-4">
            {languages.map((lang, index) => {
                const Icon = lang.icon;
                return (
                    <div 
                        key={lang.name} 
                        className={`language-tag ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'} ${lang.padding} ${lang.hoverBg} bg-white border-2 border-c4 text-textPrimary rounded-md shadow-lg transition-all duration-300 flex items-center gap-3 cursor-pointer hover:scale-110 hover:rotate-2 hover:shadow-2xl hover:text-white`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <Icon className={lang.iconSize} />
                        <span className="font-semibold text-lg">{lang.name}</span>
                    </div>
                );
            })}
            
            <style jsx>{`
                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes fadeInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                .fade-in-left {
                    animation: fadeInLeft 0.6s ease-out forwards;
                    opacity: 0;
                }
                
                .fade-in-right {
                    animation: fadeInRight 0.6s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </div>
    );
}