import { ArrowUp } from "lucide-react";


export const FooterSection = () => {
    return (
        <footer className="bg-card text-forground py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <p className="text-sm text-muted-foreground mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Shreyas. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/in/shreyas-girish-67677b134/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            LinkedIn
                        </a>
                        <a href="https://github.com/ShreyasG30" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"> <ArrowUp size={20}/></a>
        </footer>
    );
};