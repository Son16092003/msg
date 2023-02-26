import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat/chat.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './services/user/user.service';
import { UserController } from './controllers/v1/user/user.controller';
import { User, UserSchema } from './schemas/user.schemas';
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://sondt13376:Dts16092003@cluster0.d8706hz.mongodb.net/chat'),
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [AppController, UserController],
  providers: [AppService, ChatGateway, UserService],
})
export class AppModule {}
