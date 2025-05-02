import { useEffect, useState } from 'react';
import GithubRep from '../components/GithubRep';
import axios from 'axios';
interface Project {
  id: number;
  name: string;
  html_url: string;
}
function Projects() {
  const [projects, setProjects] = useState<Array<Project>>([]);
  useEffect(() => {
    axios
      .get('https://api.github.com/users/Hiran2006/repos')
      .then(res => res.data)
      .then(data => {
        setProjects(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="m-10">
      <div className="grid grid-cols-3 gap-10">
        {projects.map(project => (
          <GithubRep header={project.name} html_url={project.html_url} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
