import { DataState } from './data.reducer';

export interface MeValues {
  wageThreshold: number;
  maxWageThreshold: number;
  avgShopPremium: number;
  nonExemptPercent: number;
  taxExemptPercent: number;
}

export const values: MeValues = {
  wageThreshold: 28700,
  maxWageThreshold: 58000,
  avgShopPremium: 7655,
  nonExemptPercent: 0.5,
  taxExemptPercent: 0.35,
};

export function calcResults(state: DataState, values: MeValues): number {
  const avgWages = roundDown((state.wages || 0) / (state.employeeCount || 0));
  const premiums = (state.employeeCount || 0) * values.avgShopPremium;
  const appPremium = findAppPremium(state.premiums || 0, premiums);
  const adjPremium = findAdjPremium(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    state.taxExempt!,
    appPremium,
    values.taxExemptPercent,
    values.nonExemptPercent,
  );
  const wageThresholdApplies: boolean = avgWages > values.wageThreshold;
  const wageThresholdAdjustment = findWageThresholdAdjustment(
    wageThresholdApplies,
    appPremium,
    avgWages,
    values.wageThreshold,
  );

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const fteThresholdApplies: boolean = state.employeeCount! > 10;
  const fteThresholdAdjustment = findFteThresholdAdjustment(
    fteThresholdApplies,
    appPremium,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    state.employeeCount!,
  );

  const totalAdjustment = wageThresholdAdjustment + fteThresholdAdjustment;

  const result =
    adjPremium - totalAdjustment > 0 ? adjPremium - totalAdjustment : 0;

  console.log(wageThresholdApplies);

  return result;
}
function roundDown(num: number) {
  return Math.floor(num / 1000) * 1000 || 0;
}

function findAppPremium(avgPremium: number, employerPremium: number): number {
  return avgPremium < employerPremium ? avgPremium : employerPremium;
}

function findAdjPremium(
  exempt: boolean,
  appPremium: number,
  ePercent: number,
  nonPercent: number,
): number {
  return exempt ? appPremium * ePercent : appPremium * nonPercent;
}

function findWageThresholdAdjustment(
  wageThresholdApplies: boolean,
  appPremium: number,
  avgWages: number,
  wageThreshold: number,
): number {
  if (wageThresholdApplies) {
    const value = appPremium * ((avgWages - wageThreshold) / wageThreshold);
    return Number(value.toFixed(2));
  }
  return 0;
}

function findFteThresholdAdjustment(
  fteThresholdApplies: boolean,
  appPremium: number,
  employeeCount: number,
): number {
  if (fteThresholdApplies) {
    const value = (appPremium * (employeeCount - 10)) / 15;
    return Number(value.toFixed(2));
  }
  return 0;
}
