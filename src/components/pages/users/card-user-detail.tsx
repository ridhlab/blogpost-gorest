"use client";
import Card from "@/components/shared/card/card";
import Slide from "@/components/shared/slide/slide";
import Tag from "@/components/shared/tag/tag";
import { ActivateStatusEnum } from "@/enums/activate-status";
import { GenderEnum } from "@/enums/gender";
import { IUser } from "@/interfaces/entities/user";
interface IProps {
    user: IUser;
}

export default function CardUserDetail({ user }: IProps) {
    return (
        <Slide delay={0.2}>
            <Card title={"Detail User"}>
                <div className="flex flex-col gap-y-2">
                    <span>Name : {user.name}</span>
                    <span>Email : {user.email}</span>
                    <span>
                        Gender :{" "}
                        <Tag
                            label={user.gender}
                            color={
                                user.gender === GenderEnum.MALE
                                    ? "primary"
                                    : "success"
                            }
                        />
                    </span>
                    <span>
                        Status :{" "}
                        <Tag
                            label={user.status}
                            color={
                                user.status === ActivateStatusEnum.ACTIVE
                                    ? "success"
                                    : "danger"
                            }
                        />
                    </span>
                </div>
            </Card>
        </Slide>
    );
}
