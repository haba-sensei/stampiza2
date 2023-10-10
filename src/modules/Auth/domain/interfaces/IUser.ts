import mongoose from "mongoose";

export interface IRole {
    _id?: mongoose.Types.ObjectId;
    typeRole: string;
    role: string;
}

export interface IUser {
    _id?: mongoose.Types.ObjectId;
    email: string;
    password: string;
    mobile: string;
    token?: string;
    role?: any;
    createdAt?: Date
}


