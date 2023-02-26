import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schemas';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async getByRoom(room: string): Promise<User | null>{
        try{
            let data = await this.userModel.findOne({id: room}).exec();
            return data as User;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }

    async getAll(){
        try{
            let data = await this.userModel.find().exec();
            return data;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }

    async create(user: User){
        try{
            let data = await this.userModel.create(user);
            return data as User;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }

    async update(user: User){
        try{
            let data = await this.userModel.findOneAndUpdate(user);
            return data;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }

    async delete(user: User){
        try{
            let data = await this.userModel.findOneAndDelete(user);
            return data;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
}

