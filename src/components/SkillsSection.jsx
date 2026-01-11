const skills = [

    //Frontend
    { name: "HTML/CSS", level: 80, catagory: "frontend" },
    { name: "JavaScript", level: 80, catagory: "frontend" },
    { name: "React.Js", level: 80, catagory: "frontend" },
    { name: "TypeScript", level: 80, catagory: "frontend" },
    { name: "Tailwind Css", level: 80, catagory: "frontend" },
    { name: "Selenium WebDriver/Grid/IDE", level: 90, catagory: "frontend" },
    { name: "Cypress", level: 80, catagory: "frontend" },

    //Backend
    { name: "Java", level: 95, catagory: "backend" },
    { name: "C#", level: 80, catagory: "backend" },
    { name: "Python", level: 90, catagory: "backend" },
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


]

export const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, key) => (
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