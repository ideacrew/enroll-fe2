import {
  roundDown,
  calcPremiums,
  findAppPremium,
  findAdjPremium,
  values,
} from './calcResults';
import { DataState } from './data.reducer';

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
    'findAdjPremium($input, $calcPremium)',
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
});
