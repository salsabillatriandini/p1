import { useState } from "react";
import { cn } from "@/lib/utils";


const skills = [
    //Frontend Skills
    { name: "HTML/CSS", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 80, category: "Frontend" },
    { name: "React", level: 80, category: "Frontend" },
    
    //Data Analysis Skills
    { name: "Python", level: 80, category: "Data Analysis" },
    { name: "SQL", level: 80, category: "Data Analysis" },

    //Tools
    { name: "Git", level: 80, category: "Tools" },
   { name:"VS Code", level: 90, category: "Tools" },
    { name: "Figma", level: 80, category: "Tools" },
    { name: "Canva", level: 95, category: "Tools" },
    { name: "Jira", level: 80, category: "Tools" },
    { name: "Tableau", level: 80, category: "Tools" },
    { name: "Power BI", level: 80, category: "Tools" },
    { name: "Excel", level: 90, category: "Tools" },
    { name: "Laragon", level: 80, category: "Tools" },
];
const categories = ["all", "Frontend", "Data Analysis", "Tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState ("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
    <section 
    id="skills" 
    className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key) => (
                    <button 
                    key={key} 
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                        "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary}" 
                     )}
                     > 
                     {category}
                    </button>
                ))}

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={ key } className="bg-card p-6 rounded-lg shadow-xs card-hover"
                    >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 rounded-full overflow-hidden">
                        <div className="bg-primary h-2 ronded-full origin-left animate-[grow_1.5s_ease-out" style={{width: skill.level + "%"}}
                        />

                       
                        </div>
                       
                       <div className="text-right mt-1">
                        <span className="text-sm text-muted-foreground">
                            {skill.level}%
                        </span> 
                    </div>
                    </div>
                
                ))}
                       

            </div>

        </div>

    </section>
    
    );

};