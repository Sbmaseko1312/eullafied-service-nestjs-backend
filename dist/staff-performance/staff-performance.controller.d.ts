import { StaffPerformanceService } from './staff-performance.service';
import { CreateStaffPerformanceDto } from './dto/create-staff-performance.dto';
import { UpdateStaffPerformanceDto } from './dto/update-staff-performance.dto';
export declare class StaffPerformanceController {
    private readonly staffPerformanceService;
    constructor(staffPerformanceService: StaffPerformanceService);
    create(createStaffPerformanceDto: CreateStaffPerformanceDto): Promise<import("./entities/staff-performance.entity").StaffPerformanceCounter>;
    findAll(): Promise<import("./entities/staff-performance.entity").StaffPerformanceCounter[]>;
    findByUser(userId: string): Promise<import("./entities/staff-performance.entity").StaffPerformanceCounter[]>;
    getCurrentWeekPerformance(userId: string): Promise<import("./entities/staff-performance.entity").StaffPerformanceCounter | null>;
    findByUserAndDateRange(userId: string, startDate: string, endDate: string): Promise<import("./entities/staff-performance.entity").StaffPerformanceCounter[]>;
    getTopPerformers(limit?: number): Promise<import("./entities/staff-performance.entity").StaffPerformanceCounter[]>;
    findOne(userId: string, metricDate: string): Promise<import("./entities/staff-performance.entity").StaffPerformanceCounter>;
    update(userId: string, metricDate: string, updateStaffPerformanceDto: UpdateStaffPerformanceDto): Promise<import("./entities/staff-performance.entity").StaffPerformanceCounter>;
    remove(userId: string, metricDate: string): Promise<import("./entities/staff-performance.entity").StaffPerformanceCounter>;
    recalculateCurrentWeek(): Promise<{
        message: string;
        timestamp: string;
    }>;
}
