import { IComment } from "@/interfaces/entities/comment";
import { FaCircleUser } from "react-icons/fa6";

interface IProps {
    comment: IComment;
}

export default function CardPostCommentItem({ comment }: IProps) {
    return (
        <div className="rounded border p-4 flex gap-x-2 text-sm">
            <FaCircleUser className="text-slate-500 text-2xl" />
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col">
                    <h5>{comment.nane}</h5>
                    <h6 className="text-slate-500">{comment.email}</h6>
                </div>
                <p>{comment.body}</p>
            </div>
        </div>
    );
}
