import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { User } from 'src/schemas/user.schemas';
import { UserService } from 'src/services/user/user.service';

@Controller('v1/user')
export class UserController {

    constructor( private userService: UserService){}

    @Get()
    async getByRoom(@Query('room') room: string) {
        let user = await this.userService.getByRoom(room);
        return user;
    }

    @Get('allMsg')
    async getAllMsg() {
        let  allDataUser= await this.userService.getAll();
        return allDataUser;
    }

    @Post()
    async createMsg(@Body() user: User){
        try{
            return this.userService.create(user);
        }
        catch (e) {
            return e;
        }
    }

    @Put()
    async updateMsg(@Body() user: User){
        try{
            return this.userService.update(user);
        }
        catch (e) {
            return e;
        }
    }
    
    @Delete()
    async deleteMsg(@Body() user: User){
        try{
            return this.userService.delete(user);
        }
        catch (e) {
            return e;
        }
    }
}
