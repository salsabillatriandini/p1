import { Description } from "@radix-ui/react-toast";
import { ExternalLink, Github, Tags } from "lucide-react";

const project = [
    {
        id: 1,
        title: "Flight Delay Analysis Dashboard",
        Description: "Visualizing the causes of airline delays in the US using data from Kaggle. Created using Tableau Public to identify key delay contributors by region, airline, and time.",
        image: "/projects/project1.png", 
        Tags: ["Tableau", "Data Visualization"],
        link: "https://public.tableau.com/shared/R4HZM85SR"
    }
]
export const ProjectSection = () => {
    return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
            {""}
            Featured <span className="text-primary"> Projects </span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of the projects I’ve crafted with a blend of logic, creativity, and clarity—each one reflects my passion for transforming data and ideas into something useful, insightful, and visually meaningful.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.map((project, key ) => (
                <div key={key} className="group bf-card rounded-lg overflow-hidden shadow-xs card-hover"
                >
                    <div className="h-48 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="p-6">
                        <div className="flex-wrap gap-2 mb-4">
                            {project.Tags.map((tag) => (
                                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                    {tag}
                                    </span>
                            ))}
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                        {project.Description}
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex space-x-3">
                            <a 
                            href={"https://public.tableau.com/shared/R4HZM85SR"} 
                            target="_blank"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                                <ExternalLink size={20}/>
                            </a>

                            <a 
                            href={"project.githubUrl"} 
                            target="_blank"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                                <Github size={20}/>
                            </a>
                        </div>
                    </div>
                 </div>
                ))}
           

            </div>
        </div>
    </section>
 );
};