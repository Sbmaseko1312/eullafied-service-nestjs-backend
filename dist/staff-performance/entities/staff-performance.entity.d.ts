import { User } from '../../user/entities/user.entity';
export declare class StaffPerformanceCounter {
    id: number;
    user_id: string;
    metric_date: Date;
    tickets_resolved: number;
    avg_resolution_seconds: number | null;
    created_at: Date;
    updated_at: Date;
    user: User;
    get avg_resolution_minutes(): number | null;
    get avg_resolution_hours(): number | null;
}
