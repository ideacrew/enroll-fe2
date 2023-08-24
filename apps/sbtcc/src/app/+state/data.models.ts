/**
 * Interface for the 'Data' data
 */
export interface DataEntity {
  id: string | number; // Primary ID
  location: number;
  exempt: boolean | null;
  employeeCount: number | null;
  totalWages: number | null;
  premiumContributions: number | null;
  result: number;
}
