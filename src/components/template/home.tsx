import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Button from "../shared/button/button";
import Card from "../shared/card/card";
import { ROUTES } from "@/constants/route";

export default function HomeTemplate({
    totalPost,
    totalUser,
}: {
    totalPost: number;
    totalUser: number;
}) {
    return (
        <main>
            <Card title="Homepage">
                <div className="flex gap-x-4">
                    <Card
                        title="Post"
                        clsx={["border dark:border-zinc-700 flex-1"]}
                    >
                        <p>Total Post : {totalPost}</p>
                        <div>
                            <Button
                                icon={<FaArrowUpRightFromSquare />}
                                href={ROUTES.POSTS.INDEX}
                            >
                                Explore Now!
                            </Button>
                        </div>
                    </Card>
                    <Card
                        title="User"
                        clsx={["border dark:border-zinc-700 flex-1"]}
                    >
                        <p>Total User : {totalUser}</p>
                        <div>
                            <Button
                                icon={<FaArrowUpRightFromSquare />}
                                href={ROUTES.USERS.INDEX}
                            >
                                Explore Now!
                            </Button>
                        </div>
                    </Card>
                </div>
            </Card>
        </main>
    );
}
