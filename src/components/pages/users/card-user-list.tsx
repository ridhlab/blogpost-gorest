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
import { RiDeleteBinLine } from "react-icons/ri";
import { deleteUser } from "@/api/users";

import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

interface IProps {
    user: IUser;
}

export default function CardUserList({ user }: IProps) {
    const [openEdit, setOpenEdit] = React.useState(false);
    const router = useRouter();

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "rgb(239, 68, 68)",
            confirmButtonText: "Yes delete it !!!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await deleteUser(user.id);
                if (res.status === 404) return toast.error(res.message);
                router.push(ROUTES.USERS.INDEX);
                return toast.success(res.message);
            }
        });
    };

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

    const title = (
        <div className="flex justify-between">
            <h4 className="font-semibold text-base">{user.name}</h4>
            <Button
                icon={<RiDeleteBinLine />}
                size="small"
                variant="outline"
                color="danger"
                onClick={handleDelete}
            ></Button>
        </div>
    );

    return (
        <Card
            clsx={["border dark:border-zinc-700"]}
            title={title}
            footer={footer}
        >
            <div className="flex flex-wrap gap-x-4 text-red">
                <p>Email : {user.email}</p>
                <p>Gender : {capitalizeWord(user.gender)}</p>
                <p>Status : {capitalizeWord(user.status)}</p>
            </div>
        </Card>
    );
}
