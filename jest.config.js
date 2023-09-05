module.exports = {
  verbose: true,
  collectCoverageFrom: ['src/**/*.{[jt]s,vue}'],
  coveragePathIgnorePatterns: ['/node_modules/', '/src/types/', '/src/typings/'],
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  testMatch: ['**/tests/unit/**/*.spec.[jt]s'],
  transform: {
    '^.+\\.(ts|tsx)?$': ['ts-jest', { diagnostics: false }],
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '^[^.]+.vue$': '@vue/vue3-jest',
  },
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  setupFiles: ['<rootDir>/jest.init.ts'],
};
