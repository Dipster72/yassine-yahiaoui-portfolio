import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Define your personal contact links here
const LINKEDIN_URL = 'https://linkedin.com/in/yassine-yahiaoui'; // From your resume
const GITHUB_URL = 'https://github.com/YourGitHubUsername'; // **<-- UPDATE THIS WITH YOUR GITHUB LINK**
const MAIL_TO_URL = 'mailto:yahiaoui.yassine98@gmail.com'; // From your resume
const RESUME_URL = 'Yahiaoui_Yassine_Resume_US.pdf'; 

// Simple SVG icons to replace lucide-react
const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const Github = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// Define the name of the resume file for download
const RESUME_FILE_NAME = 'Yahiaoui_Yassine_Resume_US.pdf';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-primary">Hello, I'm</p>
              <h1 className="text-4xl lg:text-6xl font-medium">
                Yassine Yahiaoui
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground">
                Electromechanical & Embedded Systems Engineer
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              {/* UPDATED CONCISE BIO */}
              Electromechanical Engineer specializing in embedded systems and industrial automation. 
              My work focuses on bridging hardware and software using C/C++ and Python to achieve high-precision results. Outside of engineering, 
              I enjoy applying Lean methodologies to new processes and pursuing hobbies like cycling, basketball, and music.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                View My Work
                <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* DOWNLOAD RESUME BUTTON IMPLEMENTATION */}
              <a 
                href={RESUME_FILE_NAME}
                download={RESUME_FILE_NAME}
                aria-label="Download Yassine Yahiaoui's Resume"
              >
                <Button variant="outline" size="lg">
                  Download Resume
                </Button>
              </a>
            </div>

            <div className="flex gap-4">
              {/* GitHub Link */}
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="p-2">
                  <Github className="size-5" />
                </Button>
              </a>
              
              {/* LinkedIn Link */}
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="p-2">
                  <Linkedin className="size-5" />
                </Button>
              </a>

              {/* Mail Link */}
              <a href={MAIL_TO_URL}>
                <Button variant="ghost" size="sm" className="p-2">
                  <Mail className="size-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="size-80 rounded-2xl overflow-hidden border-4 border-primary/10">
                <ImageWithFallback
                  src="https://i.imgur.com/P1Dgcqu.jpeg"
                  alt="Yassine Yahiaoui - Electromechanical Engineer"
                  className="size-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 size-16 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}