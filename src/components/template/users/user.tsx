"use client";

import { BREADCRUMBS } from "@/common/breadcrumb";
import CardUserList from "@/components/pages/users/card-user-list";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import Button from "@/components/shared/button/button";
import Card from "@/components/shared/card/card";
import Pagination from "@/components/shared/pagination/pagination";
import Slide from "@/components/shared/slide/slide";
import { GOREST_ENDPOINT, ROUTES } from "@/constants/route";
import { IUserResponseIndex } from "@/interfaces/responses/user";
import { BiPlusCircle } from "react-icons/bi";

interface IProps {
    users: IUserResponseIndex;
}

export default function UserTemplate({ users }: IProps) {
    const {
        pagination: { page, pages, limit },
    } = users.meta;
    const fromData = (page - 1) * limit + 1;
    const toData = page * limit;

    const title = (
        <div className="flex justify-between">
            <div className="flex flex-col gap-y-2">
                <h3 className="font-semibold text-lg">Post List</h3>
                <div className="text-xs text-slate-500 flex flex-wrap gap-x-4">
                    <p>Page : {page}</p>
                    <p>
                        Ranges : {fromData} to {toData}
                    </p>
                    <p>Total Pages : {pages}</p>
                </div>
            </div>
            <div>
                <Button
                    clsx={["rounded-full"]}
                    icon={<BiPlusCircle />}
                ></Button>
            </div>
        </div>
    );

    return (
        <main className="flex flex-col gap-y-4">
            <Breadcrumbs items={BREADCRUMBS.Users.Index()} />
            <Slide delay={0.4}>
                <Card
                    title={title}
                    footer={
                        <Pagination
                            baseUrl={ROUTES.USERS.INDEX}
                            currentPage={page}
                            totalPage={pages}
                        />
                    }
                >
                    {users.data.map((user) => (
                        <CardUserList user={user} key={user.id} />
                    ))}
                </Card>
            </Slide>
        </main>
    );
}
