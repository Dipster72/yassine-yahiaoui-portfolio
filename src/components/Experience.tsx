import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function Experience() {
  const workExperience = [
    {
      title: 'Desalination Station Maintenance Intern',
      company: ' SONEDE Tunisia',
      period: '06/2023 - 07/2023',
      description: 'Focused on ensuring the high operational reliability of critical water treatment infrastructure through rigorous preventative maintenance and precision calibration',
      achievements: [
        'Executed maintenance and calibration of seawater desalination systems supplying over 50,000 m3/day',
        'Performed preventive maintenance on pumps and motors, reducing equipment downtime by 15%',
        'Monitored sensors and indicators to maintain near 100% operational reliability',
        'Documented interventions, improving maintenance traceability and reporting accuracy by 20%',
      ],
      technologies: ['Preventive Maintenance', 'Instrumentation', 'Motor Control', 'Pump Systems'],
    },
    {
      title: 'Observation Intern',
      company: 'OACA Tunisia',
      period: '08/2022 - 08/2022',
      description: 'Conducted power systems analysis and maintenance evaluation for critical airport facilities, focusing on electrical safety and energy monitoring accuracy. Internship conducted at Djerba-Zarzis International Airport.',
      achievements: [
        'Analyzed power distribution systems across airport facilities and created schematic documentation of key electrical circuits.',
        'Conducted electrical testing on standby generators ensuring compliance with safety standards.',
        'Supported calibration of power meters and lighting relays, improving energy monitoring accuracy by 10%',
        'Coordinated emergency power restoration drills',
      ],
      technologies: ['Electrical Testing', 'Calibration', 'Safety Procedures'],
    },
  ];

  const education = [
    {
      degree: 'Master of Engineering (MEng) in Electromechanical Engineering',
      school: 'ESPRIT – École Supérieure Privée d’Ingénierie et de Technologies',
      period: '2020 - 2026',
      description: 'Electromechanical Engineering Focused with the option Mechatronics',
      achievements: [
        'GPA: 3.25/4.0',
        '+10 Projects completed',
      ],
    },
    {
      degree: 'Master of Engineering (MEng) in Instrumentation & Embedded Systemse',
      school: 'Sup Galilée - Institut Galilée',
      period: '2024-2025',
      description: 'Double Degree Mobility Program with ESPRIT',
      achievements: [
        'GPA : 2.6/4.0',
        'Face-Detection-Based Dynamic Stereo Audio Synthesis for Videoconference Applications Project',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Experience</Badge>
          <h2 className="mb-4">My Professional Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my career progression, highlighting key roles, achievements,
            and the technologies I've worked with.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="mb-8">Work Experience</h3>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < workExperience.length - 1 && (
                  <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-border"></div>
                )}
                
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 size-8 bg-primary rounded-full flex items-center justify-center mt-2">
                    <div className="size-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                        <div>
                          <h4>{job.title}</h4>
                          <p className="text-primary font-medium">{job.company}</p>
                        </div>
                        <Badge variant="outline">{job.period}</Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="font-medium mb-2">Key Achievements:</h5>
                        <ul className="space-y-1 text-muted-foreground">
                          {job.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2">
                              <div className="size-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="mb-8">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <div>
                      <h4>{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.school}</p>
                    </div>
                    <Badge variant="outline">{edu.period}</Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  
                  <div>
                    <h5 className="font-medium mb-2">Highlights:</h5>
                    <ul className="space-y-1 text-muted-foreground">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <div className="size-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}