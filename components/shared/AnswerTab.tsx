import { getUserAnswers } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import React from "react";
import AnswerCards from "../cards/AnswerCards";

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}
const AnswerTab = async ({ searchParams, userId, clerkId }: Props) => {
  const result = await getUserAnswers({ userId, page: 1 });
  return (
    <>
      {result.answers.map((answer) => (
        <AnswerCards
          key={answer._id}
          clerkId={clerkId}
          _id={answer._id}
          question={answer.question}
          author={answer.author}
          upvotes={answer.upvotes}
          createdAt={answer.createdAt}
        />
      ))}
    </>
  );
};

export default AnswerTab;
