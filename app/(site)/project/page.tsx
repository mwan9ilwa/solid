import ProjectData from "@/components/Project/projectData";
import ProjectItem from "@/components/Project/ProjectItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "This is Projects Page",
  // other metadata
};

const ProjectPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
            {ProjectData.map((post, key) => (
              <ProjectItem key={key} project={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default ProjectPage;
