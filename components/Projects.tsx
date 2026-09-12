import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-line px-6 py-28 md:px-12 md:py-36">
      <h2 className="font-display text-h2 uppercase text-bone">Selected Work</h2>
      <p className="mt-4 max-w-md text-bone2">
        A couple of recent projects across brand identity and clothing video advertising.
      </p>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
