/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DataState } from './data.reducer';

export interface ValEntity {
  wageThreshold: number;
  maxWageThreshold: number;
  avgShopPremium: number;
  nonExemptPercent: number;
  taxExemptPercent: number;
}

export const values: ValEntity = {
  wageThreshold: 28700,
  maxWageThreshold: 58000,
  avgShopPremium: 7655,
  nonExemptPercent: 0.5,
  taxExemptPercent: 0.35,
};

export function calcResults(state: DataState, values: ValEntity): number {
  const avgWages = roundDown((state.wages || 0) / (state.employeeCount || 0));

  const premiums = calcPremiums(
    state.employeeCount || 0,
    values.avgShopPremium,
  );

  const appPremium = findAppPremium(state.premiums || 0, premiums);

  const adjPremium = findAdjPremium(
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

  const fteThresholdApplies: boolean = state.employeeCount! > 10;

  const fteThresholdAdjustment = findFteThresholdAdjustment(
    fteThresholdApplies,
    appPremium,
    state.employeeCount!,
  );

  const totalAdjustment = wageThresholdAdjustment + fteThresholdAdjustment;

  return totalResults(adjPremium, totalAdjustment);
}
export function roundDown(num: number) {
  return Math.floor(num / 1000) * 1000 || 0;
}

export function calcPremiums(
  employeeCount: number,
  avgPremium: number,
): number {
  return employeeCount * avgPremium;
}

export function findAppPremium(
  avgPremium: number,
  employerPremium: number,
): number {
  return avgPremium < employerPremium ? avgPremium : employerPremium;
}

export function findAdjPremium(
  exempt: boolean,
  appPremium: number,
  ePercent: number,
  nonPercent: number,
): number {
  return exempt ? appPremium * ePercent : appPremium * nonPercent;
}

export function findWageThresholdAdjustment(
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

export function findFteThresholdAdjustment(
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

export function totalResults(x: number, y: number): number {
  const value = x - y > 0 ? x - y : 0;
  // Return number to two decimal places
  return Number(value.toFixed(2));
}
