import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    //Backend
    { name: "Java", level: 95, catagory: "backend" },
    { name: "Python", level: 90, catagory: "backend" },
    { name: "C#", level: 80, catagory: "backend" },
    { name: "MySQL", level: 90, catagory: "backend" },
    { name: "MongoDB", level: 70, catagory: "backend" },
    { name: "PostgreSQL", level: 70, catagory: "backend" },
    { name: "KarateAPI", level: 80, catagory: "backend" },
    { name: "REST Assured", level: 85, catagory: "backend" },
    { name: "SoapUI", level: 80, catagory: "backend" },
    { name: "Postman API", level: 85, catagory: "backend" },
    { name: "Swagger API", level: 80, catagory: "backend" },
    { name: "JDBC", level: 90, catagory: "backend" },
    { name: "Node.js", level: 80, catagory: "backend" },

    //Frontend
    { name: "HTML/CSS", level: 80, catagory: "frontend" },
    { name: "JavaScript", level: 80, catagory: "frontend" },
    { name: "React.js", level: 80, catagory: "frontend" },
    { name: "TypeScript", level: 80, catagory: "frontend" },
    { name: "Tailwind CSS", level: 80, catagory: "frontend" },
    { name: "Selenium WebDriver/Grid/IDE", level: 90, catagory: "frontend" },
    { name: "Cypress", level: 70, catagory: "frontend" },


    //Tools
    { name: "Jenkins CI/CD", level: 80, catagory: "tools" },
    { name: "Git/Github", level: 90, catagory: "tools" },
    { name: "Maven", level: 85, catagory: "tools" },
    { name: "Cucumber BDD", level: 85, catagory: "tools" },
    { name: "TestNG", level: 85, catagory: "tools" },
    { name: "XML", level: 85, catagory: "tools" },
    { name: "JUnit", level: 85, catagory: "tools" },
    { name: "Jira", level: 80, catagory: "tools" },
    { name: "Xray", level: 80, catagory: "tools" },
];

const catagories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activCatag, setActivCatag] = useState("all");
    const filteredSkills = skills.filter(
        (skill) => activCatag === "all" || skill.catagory === activCatag
    );
    
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {catagories.map((catag, key) => (

                        <button
                            key={key}
                            onClick={() => setActivCatag(catag)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activCatag === catag ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-primary/12"

                            )}
                        >
                            {catag}
                        </button>

                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">

                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground"> {skill.level}%</span>
                            </div>


                        </div>
                    ))}

                </div>

            </div>


        </section>
    );
};