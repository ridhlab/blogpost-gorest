"use client";

import { getUserIndex } from "@/api/users";
import { BREADCRUMBS } from "@/common/breadcrumb";
import CardUserList from "@/components/pages/users/card-user-list";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import Button from "@/components/shared/button/button";
import Card from "@/components/shared/card/card";
import TextInput from "@/components/shared/input/text-input";
import Pagination from "@/components/shared/pagination/pagination";
import Slide from "@/components/shared/slide/slide";
import { GOREST_ENDPOINT, ROUTES } from "@/constants/route";
import { routeWithParams } from "@/helpers/route";
import { IUserResponseIndex } from "@/interfaces/responses/user";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import { BiPlusCircle } from "react-icons/bi";
import { BsDatabaseFillSlash } from "react-icons/bs";

interface IProps {
    users: IUserResponseIndex;
}

export default function UserTemplate({ users }: IProps) {
    const {
        pagination: { page, pages, limit },
    } = users.meta;
    const fromData = (page - 1) * limit + 1;
    const toData = page * limit;

    const router = useRouter();

    const isEmpty = users.data.length === 0;

    const handleSeach = async (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        router.push(routeWithParams(ROUTES.USERS.INDEX, { name: value }));
    };

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
            <div className="flex gap-x-2">
                <div>
                    <TextInput
                        placeholder="Search user"
                        onChange={handleSeach}
                    />
                </div>
                <div>
                    <Button icon={<BiPlusCircle />}></Button>
                </div>
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
                        !isEmpty ? (
                            <Pagination
                                baseUrl={ROUTES.USERS.INDEX}
                                currentPage={page}
                                totalPage={pages}
                            />
                        ) : null
                    }
                >
                    {isEmpty ? (
                        <div className="flex flex-col items-center">
                            <BsDatabaseFillSlash className="text-slate-300 text-6xl" />
                            <p className="text-slate-300 font-semibold text-sm">
                                Empty Data
                            </p>
                        </div>
                    ) : (
                        users.data.map((user) => (
                            <CardUserList user={user} key={user.id} />
                        ))
                    )}
                </Card>
            </Slide>
        </main>
    );
}
