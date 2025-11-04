import { Department } from 'src/department/entities/department.entity';
import { Role } from 'src/role/entities/role.entity';
import { StaffPerformanceCounter } from 'src/staff-performance/entities/staff-performance.entity';
import { TicketAssignment } from 'src/ticket-assignment/entities/ticket-assignment.entity';
import { Ticket } from 'src/ticket/entities/ticket.entity';
export declare class User {
    user_id: string;
    name: string;
    surname: string;
    password: string;
    email: string;
    role: Role;
    department: Department;
    assigned_at: Date;
    updated_at: Date;
    ticket_requests: Ticket[];
    managed_tickets: Ticket[];
    assigned_tickets: TicketAssignment[];
    staff_performance_counters: StaffPerformanceCounter[];
}
