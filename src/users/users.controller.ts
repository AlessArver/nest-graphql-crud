import { UsersService } from './users.service';
import { User } from './user.entity';
import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

@Crud({
    model: {
        type: User
    }
})
@Controller('users')
export class UsersController implements CrudController<User> {
    constructor(public service: UsersService) {}
}
