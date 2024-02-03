import React from "react";
import { z } from "zod";

export default function useForm<T extends Record<string, any>>({
    schema,
    defaultValues,
}: {
    schema: z.ZodObject<z.ZodRawShape>;
    defaultValues: T;
}) {
    const [values, setValues] = React.useState<T>(defaultValues);
    const parseValidation = schema.safeParse(values);

    const validationMapping = Object.keys(values).map((key) => {
        if (parseValidation.success)
            return { path: key, isValid: true, message: "" };
        const pathError = parseValidation.error.issues.find(
            ({ path }) => path[0] === key
        );
        return pathError
            ? { path: key, isValid: false, message: pathError.message }
            : { path: key, isValid: true, message: "" };
    });

    return { values, setValues, validationMapping };
}
