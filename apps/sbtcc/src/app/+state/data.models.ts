/**
 * Interface for the 'Data' data
 */
export interface DataEntity {
  id: string | number; // Primary ID
  exempt: boolean | null;
  employeeCount: number | null;
  totalWages: number | null;
  totalContributions: number;
  result: number;
}
