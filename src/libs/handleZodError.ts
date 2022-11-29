import { z } from "zod";

export const handleZodError = <T>(result: z.SafeParseError<T>): string => result.error.issues.map(i => i.message).join('; ')