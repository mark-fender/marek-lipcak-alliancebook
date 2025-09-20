import { createDefaultPreset } from 'ts-jest';

const tsJestTransformCfg = createDefaultPreset().transform;

export const testEnvironment = 'node';
export const transform = {
  ...tsJestTransformCfg,
};
