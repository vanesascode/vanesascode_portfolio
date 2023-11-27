"use client";

import animations from "../animations.module.css";

import { useContext, useState } from "react";

import DataContext from "../_context/DataContext";

import { BlogListES } from "../_components";

import { blogPillsES } from "../_constantsPillsES";

export default function BlogElementsES() {
  const { showMenu, leaveAnimation } = useContext(DataContext);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  // Search pills

  const filterPills = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return blogPillsES.filter(
      (pill) =>
        regex.test(pill.title) ||
        regex.test(pill.subtitle) ||
        regex.test(pill.paragraph1) ||
        regex.test(pill.paragraph2) ||
        regex.test(pill.paragraph3) ||
        regex.test(pill.paragraph4) ||
        regex.test(pill.date)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout); // clear any previous timeout
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPills(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  return (
    <>
      {!showMenu && (
        <div className="flexCenter flex-col pt-[80px]">
          <div className="flex  items-center flex-col w-[200px] 2xs:w-[400px] md:w-[500px] xl:w-[1000px] mx-auto">
            {/*TITLE*/}

            <div
              className={`${animations.goDown4} ${
                leaveAnimation ? animations.leavePage1 : ""
              } `}
            >
              <p className="text-secondary dark:text-primary tracking-[-1px] sm:tracking-normal pb-3 text-center heading1Sections">
                Blog en Píldoras
              </p>
            </div>

            {/*SUBTITLE*/}

            <div
              className={`${animations.goDown3} ${
                leaveAnimation ? animations.leavePage2 : ""
              }`}
            >
              {" "}
              <p className="text-secondary dark:text-primary md:tracking-[-0.5px] tracking-tighter xl:tracking-[-0.95px] heading2">
                Aquí anoto pequeños aprendizajes:
              </p>
            </div>
          </div>

          {/*SEARCH BAR*/}
          <div className="w-[150px] xxxxs:w-[10px] xxxs:w-[180px] xxs:w-[220px] xs:w-[240px] 1xs:w-[250px] 2xs:w-[360px] sm:w-[450px] md:w-[490px] 1md:w-[540px] 2md:w-[600px] 3md:w-[650px] lg:w-[650px]  2lg:w-[700px] xl:w-[800px] 1xl:w-[1000px] 2xl:w-[1200px]">
            <form className="w-full flex-center">
              <div
                className={`${animations.goDown2} ${
                  leaveAnimation ? animations.leavePage3 : ""
                }  mt-[20px] md:mt-[30px] xl:mt-[40px]`}
              >
                <input
                  type="text"
                  placeholder="Busca utilizando una palabra clave"
                  value={searchText}
                  onChange={handleSearchChange}
                  required
                  className="search_input"
                />
              </div>
            </form>

            {/*PROJECTS LIST*/}
            <div
              className={`${animations.goUp1} ${
                leaveAnimation ? animations.leavePageDown1 : ""
              } pb-10 mx-auto my-[20px] md:my-[30px] xl:my-[40px]`}
            >
              {searchText ? (
                <BlogListES blogPills={searchedResults} />
              ) : (
                <BlogListES blogPills={blogPillsES} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
