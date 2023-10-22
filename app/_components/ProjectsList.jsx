import { projectsPreviews } from "../_constants";

const ProjectsList = () => {
  return (
    <>
      <div className="xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 grid gap-20">
        {projectsPreviews.map((pp) => (
          <div key={pp.id}>
            <div className="relative  h-[318px] w-[429px] ">
              <img
                src={pp.frame}
                className="absolute top-0 left-0 h-[317px] w-[427px] z-20"
              />
              {/* 1280px x 800px*/}
              <img
                src={pp.img}
                className=" absolute top-[33px] left-[15px] h-[261px] w-[395px] object-cover"
              />
              <img
                src={pp.video}
                className="hover:opacity-100 opacity-0 z-40 absolute top-[33px] left-[15px] h-[261px] w-[394.5px] object-cover transition-all duration-500"
              />
            </div>
            <p className="text-secondary dark:text-primary mt-10">
              {pp.content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsList;
