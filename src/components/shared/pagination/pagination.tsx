import { arrayRange } from "@/helpers/array";
import Button from "../button/button";
import { ROUTES } from "@/constants/route";
import { routeWithParams } from "@/helpers/route";
import {
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
    MdKeyboardDoubleArrowLeft,
    MdKeyboardDoubleArrowRight,
} from "react-icons/md";

interface IProps {
    currentPage: number;
    totalPage: number;
}

export default function Pagination({ currentPage, totalPage }: IProps) {
    const getPaginationItems = () => {
        if (totalPage <= 5) return arrayRange(1, totalPage);
        if (totalPage > 5 && currentPage <= 3) return arrayRange(1, 5);
        if (currentPage > totalPage - 4)
            return arrayRange(totalPage - 4, totalPage);
        return arrayRange(currentPage - 2, currentPage + 2);
    };
    const paginationItems = getPaginationItems();

    return (
        <div className="flex flex-wrap gap-x-4 justify-center items-center">
            <div className="flex gap-x-2 justify-center items-center">
                <Button
                    size="small"
                    variant="outline"
                    color="neutral"
                    icon={<MdKeyboardDoubleArrowLeft />}
                    href={routeWithParams(ROUTES.POSTS.INDEX, { page: "1" })}
                ></Button>
                <Button
                    size="small"
                    variant="outline"
                    color="neutral"
                    icon={<MdKeyboardArrowLeft />}
                    href={routeWithParams(ROUTES.POSTS.INDEX, {
                        page:
                            currentPage === 1
                                ? "1"
                                : (currentPage - 1).toString(),
                    })}
                ></Button>
            </div>

            <div className="flex gap-2 justify-center items-center">
                {paginationItems.map((num, index) => (
                    <Button
                        variant="outline"
                        size="small"
                        key={index}
                        color={num === currentPage ? "primary" : "neutral"}
                        href={routeWithParams(ROUTES.POSTS.INDEX, {
                            page: num.toString(),
                        })}
                    >
                        {num}
                    </Button>
                ))}
            </div>

            <div className="flex gap-x-2 justify-center items-center">
                <Button
                    size="small"
                    variant="outline"
                    color="neutral"
                    icon={<MdKeyboardArrowRight />}
                    href={routeWithParams(ROUTES.POSTS.INDEX, {
                        page:
                            currentPage === totalPage
                                ? totalPage.toString()
                                : (currentPage + 1).toString(),
                    })}
                ></Button>
                <Button
                    size="small"
                    variant="outline"
                    color="neutral"
                    icon={<MdKeyboardDoubleArrowRight />}
                    href={routeWithParams(ROUTES.POSTS.INDEX, {
                        page: totalPage.toString(),
                    })}
                ></Button>
            </div>
        </div>
    );
}
