import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function About() {
  const stats = [
    { label: 'Years Experience', value: '1+' },
    { label: 'Projects Completed', value: '16+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Academic Years', value: '6+' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="mb-4">Bridging the Gap: Where Electromechanical Design Meets Measurable Efficiency</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate Mechatronics Engineer with a love for creating integrated hardware-software solutions and optimizing processes with engineering precision. 
            Let me tell you my story.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                I am an Electromechanical Engineer specializing in embedded systems and industrial automation. 
                I focus on deploying C/C++ and Python to achieve high-precision control, proven by projects reaching up to 95% motion accuracy and boosting system efficiency.
              </p>
              <p className="text-muted-foreground">
               When I'm not focused on optimizing automation systems, 
               you'll find me applying Lean methodologies to new processes or engaged in personal pursuits like cycling and reading.
              </p>
            </div>

            <div>
              <h4 className="mb-3">What I Bring to the Table</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Cross-Disciplinary Engineering (Mechatronics)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Strong problem-solving skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Team leadership experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Continuous learning mindset</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-3xl font-medium text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}