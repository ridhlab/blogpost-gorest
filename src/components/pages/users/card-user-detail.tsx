"use client";
import Button from "@/components/shared/button/button";
import Card from "@/components/shared/card/card";
import Slide from "@/components/shared/slide/slide";
import { capitalizeWord } from "@/helpers/string";
import { IUser } from "@/interfaces/entities/user";
import { FaEdit } from "react-icons/fa";

interface IProps {
    user: IUser;
}

export default function CardUserDetail({ user }: IProps) {
    return (
        <Slide delay={0.2}>
            <Card
                title={
                    <div className="flex justify-between">
                        <h4 className="font-semibold">Detail User</h4>
                        <Button
                            icon={<FaEdit />}
                            size="small"
                            variant="outline"
                        ></Button>
                    </div>
                }
            >
                <div className="text-sm flex flex-col gap-y-2">
                    <span>Name : {user.name}</span>
                    <span>Email : {user.email}</span>
                    <span>Gender : {capitalizeWord(user.gender)}</span>
                    <span>Status : {capitalizeWord(user.status)}</span>
                </div>
            </Card>
        </Slide>
    );
}
