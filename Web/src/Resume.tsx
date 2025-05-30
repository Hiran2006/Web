import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="container mx-auto max-w-[794px] bg-white p-4 rounded-lg">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Hiran</h1>
        <div className="text-gray-600 text-sm">
          <p>hiran@hiran.com</p>
          <p>+91 1234567890</p>
          <p>India</p>
          <p>
            <a
              href="https://linkedin.com/in/hirans2006"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/hiran
            </a>
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 border-b pb-1">Skills</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-1">Programming Languages</h3>
            <ul className="list-disc pl-4 space-y-1 text-sm">
              <li>JavaScript</li>
              <li>Python</li>
              <li>C#</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1">Web Development</h3>
            <ul className="list-disc pl-4 space-y-1 text-sm">
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1">Game Development</h3>
            <ul className="list-disc pl-4 space-y-1 text-sm">
              <li>Unity</li>
              <li>Unreal</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 border-b pb-1">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-1">
              Bachelor of Computer Science
            </h3>
            <p className="text-gray-600 text-sm font-medium">
              Rajagiri School of Engineering & Technology
            </p>
            <p className="text-gray-600 text-sm">2024 - 2028</p>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 border-b pb-1">
          Certifications
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-1">Unity C# Developer</h3>
            <p className="text-gray-600 text-sm font-medium">Udemy</p>
            <p className="text-gray-600 text-sm">2024</p>
          </div>
        </div>
      </div>

      {/* Internships */}
      <div>
        <h2 className="text-lg font-semibold mb-2 border-b pb-1">
          Internships
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-1">
              Machine Learning Intern
            </h3>
            <p className="text-gray-600 text-sm font-medium">Ediglob</p>
            <p className="text-gray-600 text-sm">2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
