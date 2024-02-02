import Button from "@/components/shared/button/button";
import Card from "@/components/shared/card/card";
import { ROUTES } from "@/constants/route";
import { parsingRoute } from "@/helpers/route";
import { capitalizeWord } from "@/helpers/string";
import { IUser } from "@/interfaces/entities/user";
import { BsEyeFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

interface IProps {
    user: IUser;
}

export default function CardUserList({ user }: IProps) {
    const footer = (
        <div className="flex justify-center items-center gap-x-2">
            <Button
                size="small"
                variant="outline"
                color="neutral"
                icon={<FaEdit />}
            >
                Edit
            </Button>
            <Button
                size="small"
                variant="outline"
                icon={<BsEyeFill />}
                href={parsingRoute(ROUTES.USERS.DETAIL, { id: user.id })}
            >
                Detail
            </Button>
        </div>
    );

    const title = <h4 className="font-semibold text-base">{user.name}</h4>;

    return (
        <Card clsx={["border"]} title={title} footer={footer}>
            <div className="flex flex-wrap text-sm gap-x-4">
                <p>Email : {user.email}</p>
                <p>Gender : {capitalizeWord(user.gender)}</p>
                <p>Status : {capitalizeWord(user.status)}</p>
            </div>
        </Card>
    );
}
