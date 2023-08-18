/**
 * Interface for the 'Data' data
 */
export interface DataEntity {
  id: string | number; // Primary ID
  exempt: boolean;
  employeeCount: number;
  totalWages: number;
  totalContributions: number;
  result: number;
}
