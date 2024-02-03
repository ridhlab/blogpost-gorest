"use client";
import { createUser, updateUser } from "@/api/users";
import Button from "@/components/shared/button/button";
import RadioGroup from "@/components/shared/input/radio-group";
import TextInput from "@/components/shared/input/text-input";
import Modal from "@/components/shared/modal/modal";
import { ROUTES } from "@/constants/route";
import { ActivateStatusEnum } from "@/enums/activate-status";
import { GenderEnum } from "@/enums/gender";
import { capitalizeWord } from "@/helpers/string";
import useForm from "@/hooks/useForm";
import {
    IUserCreateRequest,
    IUserUpdateRequest,
} from "@/interfaces/requests/user";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import { z } from "zod";

interface IProps {
    type: "create" | "edit";
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    defaultValue?: TForm;
    userId?: number;
}

type TForm = Pick<IUserCreateRequest | IUserUpdateRequest, "email" | "name"> & {
    status: string;
    gender: string;
};

const schema = z.object({
    name: z.string().min(4, { message: "Name must be min 4 character" }),
    email: z.string().email({ message: "Email is not valid" }),
    gender: z.nativeEnum(GenderEnum),
    status: z.nativeEnum(ActivateStatusEnum),
});

export default function ModalCreateUpdate({
    type,
    open,
    setOpen,
    defaultValue,
    userId,
}: IProps) {
    const router = useRouter();

    const isEdit = type === "edit";

    const { values, setValues, validationMapping } = useForm<TForm>({
        schema: schema,
        defaultValues: isEdit
            ? (defaultValue as TForm)
            : {
                  name: "",
                  email: "",
                  gender: "",
                  status: "",
              },
    });

    const closeModal = () => {
        setOpen(false);
        setValues({ email: "", gender: "", name: "", status: "" });
    };

    const onSubmit = async (formData: FormData) => {
        const res = isEdit
            ? await updateUser(formData, userId as number)
            : await createUser(formData);
        if (isEdit && res.status === 404) {
            toast.error(res.message);
        }
        if (res.status === 201 || (isEdit && res.status === 200)) {
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

    const onChangeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValues((prev) => ({
            ...prev,
            name: e.target.value,
        }));
    };

    const onChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValues((prev) => ({
            ...prev,
            email: e.target.value,
        }));
    };

    const onChangeGender: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValues((prev) => ({
            ...prev,
            gender: e.target.value,
        }));
    };

    const onChangeStatus: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValues((prev) => ({
            ...prev,
            status: e.target.value,
        }));
    };

    const getValidation = (path: string) => {
        const res = validationMapping.find(
            (validation) => validation.path === path
        );
        return {
            isValid: res?.isValid ?? true,
            message: res?.message ?? "",
        };
    };

    return (
        <form action={onSubmit}>
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
                <div className="flex flex-col gap-y-2">
                    <div className="flex flex-col gap-y-1">
                        <label>Name</label>
                        <TextInput
                            placeholder="Input name"
                            name="name"
                            value={values.name}
                            onChange={onChangeName}
                            validation={getValidation("name")}
                        />
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <label>Email</label>
                        <TextInput
                            placeholder="Input email"
                            name="email"
                            value={values.email}
                            onChange={onChangeEmail}
                            validation={getValidation("email")}
                        />
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <label>Gender</label>
                        <RadioGroup
                            value={values.gender}
                            onChange={onChangeGender}
                            name="gender"
                            items={[
                                {
                                    label: capitalizeWord(GenderEnum.MALE),
                                    value: GenderEnum.MALE,
                                },
                                {
                                    label: capitalizeWord(GenderEnum.FEMALE),
                                    value: GenderEnum.FEMALE,
                                },
                            ]}
                        />
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <label>Status</label>
                        <RadioGroup
                            name="status"
                            value={values.status}
                            onChange={onChangeStatus}
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
        </form>
    );
}
