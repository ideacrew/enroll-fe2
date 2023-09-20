import {
  roundDown,
  calcPremiums,
  findAppPremium,
  findAdjPremium,
  values,
  findWageThresholdAdjustment,
  findFteThresholdAdjustment,
  calcResults,
} from './calcResults';
import { DataState } from './data.reducer';

const state: DataState = {
  selectedId: 1,
  location: 2,
  taxExempt: true,
  employeeCount: 2,
  wages: 75000,
  premiums: 10000,
  results: 0,
  loaded: true,
  error: null,
  ids: [],
  entities: {},
};

describe('calcResult functions', () => {
  test.each([
    { given: 37500, expected: 37000 },
    { given: 25000, expected: 25000 },
    { given: 100000, expected: 100000 },
    { given: 37500, expected: 37000 },
    // { given: 25000, expected: 25000 },
    // { given: 100000, expected: 100000 },
    { given: 30000, expected: 30000 },
    { given: 27272.7272727273, expected: 27000 },
    // { given: 100000, expected: 100000 },
    { given: 59000, expected: 59000 },
  ])('roundDown($given)', ({ given, expected }) => {
    expect(roundDown(given)).toBe(expected);
  });

  test.each([
    { count: 2, expected: 15310 },
    // { count: 2, expected: 15310 },
    // { count: 2, expected: 15310 },
    // { count: 2, expected: 15310 },
    // { count: 2, expected: 15310 },
    // { count: 2, expected: 15310 },
    { count: 10, expected: 76550 },
    { count: 11, expected: 84205 },
    { count: 26, expected: 199030 },
    { count: 10, expected: 76550 },
  ])('calcPremiums($count, avgShop)', ({ count, expected }) => {
    expect(calcPremiums(count, values.avgShopPremium)).toBe(expected);
  });

  test.each([
    { input: 10000, calcPremium: 15310, expected: 10000 },
    // { input: 10000, calcPremium: 15310, expected: 10000 },
    // { input: 10000, calcPremium: 15310, expected: 10000 },
    // { input: 10000, calcPremium: 15310, expected: 10000 },
    // { input: 10000, calcPremium: 15310, expected: 10000 },
    // { input: 10000, calcPremium: 15310, expected: 10000 },
    { input: 2500, calcPremium: 76550, expected: 2500 },
    { input: 2500, calcPremium: 84205, expected: 2500 },
    { input: 50000, calcPremium: 199030, expected: 50000 },
    { input: 2500, calcPremium: 76550, expected: 2500 },
  ])(
    'findAppPremium($input, $calcPremium)',
    ({ input, calcPremium, expected }) => {
      expect(findAppPremium(input, calcPremium)).toBe(expected);
    },
  );

  // Test findAdjPremium()
  test.each([
    { exempt: true, appPremium: 10000, expected: 3500 },
    // { exempt: true, appPremium: 10000, expected: 3500 },
    // { exempt: true, appPremium: 10000, expected: 3500 },
    { exempt: false, appPremium: 10000, expected: 5000 },
    // { exempt: false, appPremium: 10000, expected: 5000 },
    // { exempt: false, appPremium: 10000, expected: 5000 },
    { exempt: false, appPremium: 2500, expected: 1250 },
    // { exempt: false, appPremium: 2500, expected: 1250 },
    { exempt: false, appPremium: 50000, expected: 25000 },
    // { exempt: false, appPremium: 2500, expected: 1250 },
  ])(
    'findAdjPremium($exempt, $appPremium, taxExemptPercent, nonExemptPercent)',
    ({ exempt, appPremium, expected }) => {
      expect(
        findAdjPremium(
          exempt,
          appPremium,
          values.taxExemptPercent,
          values.nonExemptPercent,
        ),
      ).toBe(expected);
    },
  );

  // Test findWageThresholdAdjustment()
  test.each([
    { wta: true, ap: 10000, aw: 37000, expected: 2891.99 },
    { wta: false, ap: 10000, aw: 25000, expected: 0.0 },
    { wta: true, ap: 10000, aw: 100000, expected: 24843.21 },
    // { wta: true, ap: 10000, aw: 37000, expected: 2891.99 },
    // { wta: false, ap: 10000, aw: 25000, expected: 0.0 },
    // { wta: true, ap: 10000, aw: 100000, expected: 24843.21 },
    { wta: true, ap: 2500, aw: 30000, expected: 113.24 },
    { wta: false, ap: 2500, aw: 27000, expected: 0.0 },
    { wta: true, ap: 50000, aw: 100000, expected: 124216.03 },
    { wta: true, ap: 2500, aw: 59000, expected: 2639.37 },
  ])(
    'findWageThresholdAdjustment($wta, $ap, $aw, wageThreshold)',
    ({ wta, ap, aw, expected }) => {
      expect(
        findWageThresholdAdjustment(wta, ap, aw, values.wageThreshold),
      ).toBe(expected);
    },
  );

  // Test findFteThresholdAdjustment()
  test.each([
    // { applies: false, ap: 10000, ftes: 2, expected: 0.0 },
    // { applies: false, ap: 10000, ftes: 2, expected: 0.0 },
    // { applies: false, ap: 10000, ftes: 2, expected: 0.0 },
    // { applies: false, ap: 10000, ftes: 2, expected: 0.0 },
    // { applies: false, ap: 10000, ftes: 2, expected: 0.0 },
    { applies: false, ap: 10000, ftes: 2, expected: 0.0 },
    { applies: false, ap: 2500, ftes: 10, expected: 0.0 },
    { applies: true, ap: 2500, ftes: 11, expected: 166.67 },
    { applies: true, ap: 50000, ftes: 26, expected: 53333.33 },
    // { applies: false, ap: 2500, ftes: 10, expected: 0.0 },
  ])(
    'findFteThresholdAdjustment($applies, $ap, $ftes)',
    ({ applies, ap, ftes, expected }) => {
      expect(findFteThresholdAdjustment(applies, ap, ftes)).toBe(expected);
    },
  );

  // Calculates results with valid input values
  it('should calculate results with valid input values', () => {
    const state: DataState = {
      selectedId: 1,
      location: 2,
      taxExempt: true,
      employeeCount: 2,
      wages: 75000,
      premiums: 10000,
      results: 0,
      loaded: true,
      error: null,
      ids: [],
      entities: {},
    };
    const result = calcResults(state, values);
    expect(result).toBe(608.01);
  });

  test.each(fullRoundTests())(
    'calcResults(state, values)',
    ({ state, values, expected }) => {
      expect(calcResults(state, values)).toBe(expected);
    },
  );

  function fullRoundTests() {
    return [
      {
        state: {
          ...state,
          taxExempt: true,
          employeeCount: 2,
          wages: 75000,
          premiums: 10000,
        },
        values: values,
        expected: 608.01,
      },
      {
        state: {
          ...state,
          taxExempt: true,
          employeeCount: 2,
          wages: 50000,
          premiums: 10000,
        },
        values: values,
        expected: 3500.0,
      },
      {
        state: {
          ...state,
          taxExempt: true,
          employeeCount: 2,
          wages: 200000,
          premiums: 10000,
        },
        values: values,
        expected: 0,
      },
      {
        state: {
          ...state,
          taxExempt: false,
          employeeCount: 2,
          wages: 75000,
          premiums: 10000,
        },
        values: values,
        expected: 2108.01,
      },
      {
        state: {
          ...state,
          taxExempt: false,
          employeeCount: 2,
          wages: 50000,
          premiums: 10000,
        },
        values: values,
        expected: 5000.0,
      },
      {
        state: {
          ...state,
          taxExempt: false,
          employeeCount: 2,
          wages: 200000,
          premiums: 10000,
        },
        values: values,
        expected: 0,
      },
      {
        state: {
          ...state,
          taxExempt: false,
          employeeCount: 10,
          wages: 300000,
          premiums: 2500,
        },
        values: values,
        expected: 1136.76,
      },
      {
        state: {
          ...state,
          taxExempt: false,
          employeeCount: 11,
          wages: 300000,
          premiums: 2500,
        },
        values: values,
        expected: 1083.33,
      },
      {
        state: {
          ...state,
          taxExempt: false,
          employeeCount: 26,
          wages: 2600000,
          premiums: 50000,
        },
        values: values,
        expected: 0,
      },
      {
        state: {
          ...state,
          taxExempt: false,
          employeeCount: 10,
          wages: 590000,
          premiums: 2500,
        },
        values: values,
        expected: 0,
      },
    ];
  }
});
