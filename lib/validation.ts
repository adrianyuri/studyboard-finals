import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().trim().min(1, "Name is required").max(100),
    email: z.string().trim().email("Input a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
});

export const createGroupSchema = z.object({
    name: z.string().trim().min(1, "Group name is required").max(100),
    subject: z.string().trim().min(1, "Subject is required").max(100),
    memberCount: z.number().int().min(1, "Member count must be at least 1"),
});

export const updateGroupSchema = createGroupSchema.partial();

export const createTaskSchema = z.object({
    title: z.string().trim().min(1, "Task title is required").max(200),
});

export const updateTaskSchema = z.object({
    title: createTaskSchema.shape.title.optional(),
    done: z.boolean().optional(),
});