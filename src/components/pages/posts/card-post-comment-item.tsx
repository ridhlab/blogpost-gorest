import Card from "@/components/shared/card/card";
import { IComment } from "@/interfaces/entities/comment";
import { FaCircleUser } from "react-icons/fa6";

interface IProps {
    comment: IComment;
}

export default function CardPostCommentItem({ comment }: IProps) {
    return (
        <Card
            clsx={["border dark:border-zinc-700"]}
            title={
                <div className="flex items-center gap-x-2">
                    <FaCircleUser className="text-slate-500 text-2xl" />{" "}
                    <div className="flex flex-col">
                        <h5>{comment.nane}</h5>
                        <h6 className="text-slate-500">{comment.email}</h6>
                    </div>
                </div>
            }
        >
            <p>{comment.body}</p>
        </Card>
    );
}
