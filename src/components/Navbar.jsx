import { useState } from "react";
import { cn } from "../libs/utils";
import { useEffect } from "react";
import { X, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";



const navItems = [
  { name: 'Home', href: '/#hero' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  // { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Certificates', href: '/#CertificatesSection' },
//   { name: 'Blogs', href: '/blogs' },
  { name: 'Contact', href: '/#contact' },
]; 

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300", 
        isScrolled ? "py-3 -background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}> 
    <div className="container flex items-center justify-between"> 
        <a className="text-xl font-bold text-primary flex items-center" href="#hero">
            <span className="relative z-10">
                <span className="text-glow text-foreground"> Shreyas </span> Portfolio
            </span>
        </a>


    {/* Desktop Navbar */}
    <div className="hidden md:flex space-x-8">
        {navItems.map((item, key) => (
            <button
                key={key}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 bg-transparent border-none"
                onClick={() => {
                    const hash = item.href.split("#")[1];
                    navigate("/", { state: { scrollTo: hash } });
                    setIsMenuOpen(false);
                }}
            >
                {item.name}
            </button>
        ))}
    </div>


    {/* Mobile Navbar */}

    <button 
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="md:hidden p-2 text-foreground z-50"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        > 
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />} {" "} 
    </button>

    <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
        "transition-all duration-300 md:hidden",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    )}>
    <div className="flex flex-col space-y-4 xl">
    {navItems.map((item, key) => (
            <button
                key={key}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 bg-transparent border-none"
                onClick={() => {
                    const hash = item.href.split("#")[1];
                    navigate("/", { state: { scrollTo: hash } });
                    setIsMenuOpen(false);
                }}
            >
                {item.name}
            </button>
        ))}
    </div>
    </div>

    </div>
        
    </nav>
    );
}