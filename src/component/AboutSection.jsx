import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
    return (
     <section id ="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Passionate Web Developer & Data Enthusiast
                    </h3>

                    <p className="text-muted-foreground">
                        Hello! I’m Salsabilla Tri Andini, an enthusiastic Information Systems student with a strong interest in web development and data analysis. I have hands-on experience with HTML, CSS, JavaScript, and frameworks such as React and Tailwind CSS, and I’m also exploring data tools like Tableau, PowerBI, SQL, Excel, and Google Colab to analyze and visualize data effectively.
                    </p>

                    <p className="text-muted-foreground">
                        I enjoy working collaboratively in teams, learning new technologies, and turning ideas into impactful digital solutions. Throughout my academic projects, I’ve contributed to building responsive and user-friendly interfaces, and supported decision-making by presenting well-structured data insights.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="contact" className="cosmic-button">
                            {""}
                            Get in Touch
                        </a>

                        <a href="contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        >   
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover"> 
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">
                                Web Development
                            </h4>
                            <p className="text-muted-foreground">
                                Proficient in HTML, CSS, JavaScript, and React. Passionate about creating responsive and user-friendly web applications.
                            </p>
                        </div>
                      </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                            <h4 className="font-semibold text-lg">
                                Data Analysis
                            </h4>
                            <p className="text-muted-foreground">
                                Experienced in data visualization and analysis using Tableau, PowerBI, SQL, Excel, and Google Colab. Skilled in uncovering insights from complex datasets.
                            </p>
                        </div>
                        </div>
                      </div>
                    <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                         </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Project Management
                                </h4>
                                <p className="text-muted-foreground">
                                    Strong organizational skills with experience in managing projects from conception to completion. Focused on delivering high-quality results on time and within scope.
                                </p>
                        </div>
                      </div>
                 </div>
             </div>
        </div>
        </div>
    </section>
 );
};