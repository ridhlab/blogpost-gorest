"use client";
import Button from "@/components/shared/button/button";
import Card from "@/components/shared/card/card";
import { ROUTES } from "@/constants/route";
import { parsingRoute } from "@/helpers/route";
import { capitalizeWord } from "@/helpers/string";
import { IUser } from "@/interfaces/entities/user";
import React from "react";
import { BsEyeFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import ModalCreateUpdate from "./modal-create-update";

interface IProps {
    user: IUser;
}

export default function CardUserList({ user }: IProps) {
    const [openEdit, setOpenEdit] = React.useState(false);

    const footer = (
        <div className="flex justify-center items-center gap-x-2">
            <div>
                <Button
                    size="small"
                    variant="outline"
                    color="neutral"
                    icon={<FaEdit />}
                    onClick={() => setOpenEdit(true)}
                >
                    Edit
                </Button>
                <ModalCreateUpdate
                    type="edit"
                    open={openEdit}
                    setOpen={setOpenEdit}
                    userId={user.id}
                    defaultValue={{
                        email: user.email,
                        gender: user.gender,
                        name: user.name,
                        status: user.status,
                    }}
                />
            </div>
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
