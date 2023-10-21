import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const RIghtSideBar = () => {
  const hotQiestion = [
    {
      _id: "1",
      title:
        "Best practices for data fetching in a Next.js application with Server-S_ide Rendering (SSR)?",
    },
    { _id: "2", title: "Can I get the course for free?" },
    { _id: "3", title: "Redux Toolkit Not Updating State as Expected" },
    { _id: "4", title: "Async/Await Function Not Handling Errors Properly" },
    { _id: "5", title: "How do I use express as a custom server in NextJS?" },
  ];

  const popularTags = [
    { _id: "1", title: "React", totalQuestion: 10 },
    { _id: "2", title: "NextJS", totalQuestion: 5 },
    { _id: "3", title: "VueJS", totalQuestion: 4 },
    { _id: "4", title: "Fluter", totalQuestion: 16 },
    { _id: "5", title: "NodeJS", totalQuestion: 8 },
  ];
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px]">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Question</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQiestion.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="arrow"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              title={tag.title}
              totalQuestion={tag.totalQuestion}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RIghtSideBar;
