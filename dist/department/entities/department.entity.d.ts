import { User } from 'src/user/entities/user.entity';
import { Ticket } from 'src/ticket/entities/ticket.entity';
export declare class Department {
    department_id: string;
    department_name: string;
    users: User[];
    tickets: Ticket[];
}
