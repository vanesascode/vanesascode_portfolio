import { projectsPreviews } from "../_constants";

const ProjectsList = () => {
  return (
    <>
      <div className="2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 grid gap-10">
        {projectsPreviews.map((pp) => (
          <div key={pp.id}>
            <div className="relative md:h-[318px] md:w-[429px] xs:h-[190px] xs:w-[260px] h-[145px]  w-[190px]">
              <img
                src={pp.frame}
                className="absolute top-0 left-0 md:h-[317px] md:w-[427px] xs:h-[190px] xs:w-[277px] z-20 h-[145px] w-[190px]"
              />
              {/* 1280px x 800px*/}
              <img
                src={pp.img}
                className=" absolute md:top-[33px] md:left-[15px] md:h-[261px] md:w-[395px] 
                xs:left-[9px] xs:top-[18px] xs:h-[157px] xs:w-[240px] object-cover top-[14px] left-[6px] h-[120px] w-[180px]"
              />
              <img
                src={pp.video}
                className="hover:opacity-100 opacity-0 z-40 absolute md:top-[33px] md:left-[15px] md:h-[261px] md:w-[394.5px] 
                xs:left-[9px] xs:top-[18px] xs:h-[157px] xs:w-[240px] object-cover transition-all duration-500 top-[14px] left-[6px] h-[120px] w-[176.5px]"
              />
            </div>
            <p className="text-secondary dark:text-primary md:mt-5 mt-2 font-bold md:text-[25px] text-[13px]">
              {pp.title}
            </p>
            <p className="text-secondary dark:text-primary md:mt-2 mt-1 text-[10px] md:text-[20px]">
              {pp.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsList;
