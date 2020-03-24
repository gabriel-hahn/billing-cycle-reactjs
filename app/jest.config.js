module.exports = {
  roots: [
    '<rootDir>/src/components',
    '<rootDir>/src/pages',
    '<rootDir>/src/store',
    '<rootDir>/src/utils',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupTestFrameworkScriptFile: '<rootDir>/src/setupTests.ts',
};
