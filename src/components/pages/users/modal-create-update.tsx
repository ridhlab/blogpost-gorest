"use client";
import { createUser } from "@/api/users";
import Button from "@/components/shared/button/button";
import RadioGroup from "@/components/shared/input/radio-group";
import TextInput from "@/components/shared/input/text-input";
import Modal from "@/components/shared/modal/modal";
import { ROUTES } from "@/constants/route";
import { ActivateStatusEnum } from "@/enums/activate-status";
import { GenderEnum } from "@/enums/gender";
import { emailRegex } from "@/helpers/regex";
import { parsingRoute } from "@/helpers/route";
import { capitalizeWord } from "@/helpers/string";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { BiPlusCircle } from "react-icons/bi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IProps {
    type: "create" | "edit";
}

export default function ModalCreateUpdate({ type }: IProps) {
    const [open, setOpen] = React.useState(false);
    const refForm = useRef<HTMLFormElement>(null);
    const router = useRouter();

    const closeModal = () => {
        setOpen(false);
        refForm.current?.reset();
    };

    const onSubmit = async (formData: FormData) => {
        const res = await createUser(formData);
        if (res.status === 201) {
            toast.success(res.message);
            closeModal();
            router.push(ROUTES.USERS.INDEX);
        }
        if (res.status === 422) {
            toast.error(res.message);
            res.data.forEach(({ field, message }, index) => {
                setTimeout(() => {
                    toast.error(`${capitalizeWord(field)} : ${message}`);
                }, 500);
            });
        }
    };

    const validationName = (value) => {
        return value.length >= 3
            ? { isValid: true, message: "" }
            : {
                  isValid: false,
                  message: "Name must be min 3 character",
              };
    };

    const validationEmail = (value) => {
        return value.match(emailRegex)
            ? { isValid: true, message: "" }
            : {
                  isValid: false,
                  message: "Email is not valid",
              };
    };

    return (
        <div>
            <Button
                icon={<BiPlusCircle />}
                onClick={() => setOpen(true)}
            ></Button>
            <form action={onSubmit} ref={refForm}>
                <Modal
                    open={open}
                    setOpen={setOpen}
                    title={type === "create" ? "Create User" : "Edit User"}
                    footer={
                        <div className="flex justify-end gap-x-2">
                            <Button variant="outline" onClick={closeModal}>
                                Cancel
                            </Button>
                            <Button htmlType="submit">Save</Button>
                        </div>
                    }
                >
                    <div className="flex flex-col gap-y-2 text-sm">
                        <div className="flex flex-col gap-y-1">
                            <label>Name</label>
                            <TextInput
                                placeholder="Input name"
                                name="name"
                                validation={(val) => validationName(val)}
                            />
                        </div>

                        <div className="flex flex-col gap-y-1">
                            <label>Email</label>
                            <TextInput
                                placeholder="Input email"
                                name="email"
                                validation={(val) => validationEmail(val)}
                            />
                        </div>

                        <div className="flex flex-col gap-y-1">
                            <label>Gender</label>
                            <RadioGroup
                                name="gender"
                                items={[
                                    {
                                        label: capitalizeWord(GenderEnum.MALE),
                                        value: GenderEnum.MALE,
                                    },
                                    {
                                        label: capitalizeWord(
                                            GenderEnum.FEMALE
                                        ),
                                        value: GenderEnum.FEMALE,
                                    },
                                ]}
                            />
                        </div>

                        <div className="flex flex-col gap-y-1">
                            <label>Status</label>
                            <RadioGroup
                                name="status"
                                items={[
                                    {
                                        label: capitalizeWord(
                                            ActivateStatusEnum.ACTIVE
                                        ),
                                        value: ActivateStatusEnum.ACTIVE,
                                    },
                                    {
                                        label: capitalizeWord(
                                            ActivateStatusEnum.INACTIVE
                                        ),
                                        value: ActivateStatusEnum.INACTIVE,
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </Modal>
                <ToastContainer />
            </form>
        </div>
    );
}
