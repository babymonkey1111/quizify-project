"use client";

import UserAvatar from "@/components/UserAvatar";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import WithTooltip from "@/components/wrappers/withTooltip";
import useLikeQuiz from "@/hooks/use-like-quiz";
import { dislikeQuiz, likeQuiz } from "@/services";
import { Heart, Info, ThumbsUp, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import { useHover } from "usehooks-ts";

type Props = {
  quiz: API.TQuiz;
};

const TopicQuizCard = ({ quiz }: Props) => {
  const titleRef = useRef(null);
  const isHover = useHover(titleRef);

  const { likesCount, isLiked, likeId, isLiking, isDisliking, like, dislike } =
    useLikeQuiz(quiz);

  return (
    <Card
    // style={{
    //   backgroundColor: quiz.topic.color,
    // }}
    >
      <CardHeader>
        <CardTitle>
          <Link
            style={{
              cursor: "pointer",
              color: isHover ? quiz.topic.color : undefined,

              textDecorationStyle: "solid",
              textDecorationLine: isHover ? "underline" : undefined,

              textDecorationThickness: "3px",
              textDecorationColor: quiz.topic.color,
            }}
            ref={titleRef}
            href={`/quiz/${quiz.topic.name}-${
              quiz.id
            }/?color=${encodeURIComponent(quiz.topic.color)}`}
          >
            #{quiz.id}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-x-1.5">
          <UserAvatar size="sm" user={quiz.created_by} />{" "}
          <span className="text-sm">
            {quiz.created_by.full_name.trim()
              ? quiz.created_by.full_name
              : "Quizify user"}
          </span>
        </div>

        <div className="flex items-center gap-x-2.5">
          <WithTooltip
            content={
              <div className="flex items-center gap-x-1.5">
                <Info className="h-3.5 w-3.5   " />
                <span>Participants count</span>
              </div>
            }
          >
            <div className="flex items-center gap-x-0.5 ">
              <User className="h-4 w-4 " />
              <span>{quiz.participants_count}</span>
            </div>
          </WithTooltip>
          {/* <WithTooltip
            content={
              <div className="flex items-center gap-x-1.5">
                <Info className="h-3.5 w-3.5 " />
                <span>Likes count</span>
              </div>
            }
          >
            <div className="flex items-center gap-x-0.5 ">
              <ThumbsUp className="h-4 w-4 " />
              <span>{quiz.likes_count}</span>
            </div>
          </WithTooltip> */}

          <button
            onClick={() => {
              if (!isLiked) return like();
              if (likeId) dislike();
            }}
            disabled={isLiking || isDisliking}
          >
            <div className="flex items-center gap-x-0.5 ">
              <Heart
                className="h-4 w-4"
                fill={isLiked ? "currentColor" : "none"}
              />
              <span>{likesCount}</span>
            </div>
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TopicQuizCard;
