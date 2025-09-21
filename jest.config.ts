import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  coverageProvider: 'v8',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/**interface.ts',
    '!src/**/**validator.ts',
    '!src/**/**dto.ts',
    '!src/**/index.ts',
    '!src/infra/**',
  ],
  coverageThreshold: {
    global: {
      lines: 85,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default config