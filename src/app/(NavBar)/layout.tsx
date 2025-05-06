import Navbar from "@/src/components/navBar/navBar";
import { Github, Linkedin } from "lucide-react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Navbar />
      <main className="flex-1 ">{children}</main>
        <footer className="bg-gray-600 text-white py-6 px-6">
          <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
           
            <span className="text-sm">
              &copy; {new Date().getFullYear()} Glenn Grente.
            </span>

           
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/glenn-grente/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="hover:text-cyan-400 transition" />
              </a>
              <a
                href="https://github.com/GrenteGlenn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="hover:text-cyan-400 transition" />
              </a>
            </div>
          </div>
        </footer>
    </div>
  );
}
