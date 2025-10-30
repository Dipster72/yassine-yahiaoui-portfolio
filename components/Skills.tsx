import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

export function Skills() {
  const skillCategories = [
    {
      title: 'Embedded Systems & Electronics',
      skills: ['STM32','Arduino', 'Raspberry Pi', 'Microcontrollers', 'Circuit Design', 'PCB Layout','Analog/Digital Electronics','FBG Sensors'],
    },
    {
      title: 'Control Systems & Automation',
      skills: ['PLC Programming', 'PID Control', 'Motor Control Systems', 'Condition Monitoring', 'Sensor Integration'],
    },
    {
      title: 'Programming & Communication',
      skills: ['C/C++', 'Python', 'VHDL', 'SPI/I2C', 'Serial Communication'],
    },
    {
      title: 'Mechanical & Tools',
      skills: ['SOLIDWORKS', 'AutoCAD', '3D Printing', 'Oscilloscope', 'Multimeter', 'Circuit Debugging'],
    },
  ];

  const topSkills = [
    { name: 'STM32/Microcontrollers', level: 95 },
    { name: 'Python', level: 90 },
    { name: 'C/C++', level: 85 },
    { name: 'SOLIDWORKS', level: 85 },
    { name: 'PLC Programming', level: 80 },
    { name: 'Circuit Design (PCB)', level: 80 },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Skills & Expertise</Badge>
          <h2 className="mb-4">Technologies I Work With</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies 
            I use to bring ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="mb-6">Skill Categories</h3>
            <div className="grid gap-4">
              {skillCategories.map((category, index) => (
                <Card key={index} className="p-6">
                  <h4 className="mb-4">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6">Proficiency Levels</h3>
            <Card className="p-6">
              <div className="space-y-6">
                {topSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 mt-4">
              <h4 className="mb-3">Additional Skills</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                <div>• Image Processing</div>
                <div>• HMI Development</div>
                <div>• MES/ERP</div>
                <div>• Power Systems Analysis</div>
                <div>• Signal Processing</div>
                <div>• Technical Writing</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}