import { Briefcase, BugOff, Code} from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">

            <div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Results-Driven Software Developer
                        </h3>

                        <p className="text-muted-foreground">
                            Hands-on experience in development and testing, building modern and interactive web applications 
                            using React.js, TailwindCSS, and Vite, as well as creating hybrid test automation frameworks utilizing 
                            Java, Selenium, Karate API, and Cucumber, with CI/CD pipeline automation via Jenkins and Maven.
                        </p>

                        <p className="text-muted-foreground">
                            Constantly learning new technologies and techniques to stay at the forefront of the ever-evolving
                            tech landscape. On the off-hours, likes excersing, hiking, and, especially, skiing.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a
                                href="/officialResume.pdf" target="_blank"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            > {/* add resume link */}
                                Download Resume
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
                                    <h4 className="font-semibold text-lg"> Software Development</h4>
                                    <p className="text-muted-foreground">Creating responsive websites and web applications with mordern frameworks.</p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <BugOff className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Software Testing</h4>
                                    <p className="text-muted-foreground">Developing and maintaining automated test suites for UI and API testing to validate functionality.</p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Project Management</h4> {/* SDET framework leadership */}
                                    <p className="text-muted-foreground">Leading projects from conception to completion with agile methodologies.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


        </section>
    );
};