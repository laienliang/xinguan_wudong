module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.test.ts'],
  // 串行执行避免端口冲突
  maxWorkers: 1,
  collectCoverageFrom: [
    // 项目文件名采用目录区分 service/controller，而不是文件名后缀。
    'src/modules/**/service/**/*.ts',
    'src/modules/**/controller/**/*.ts',
    '!src/modules/**/entity/**',
    '!src/modules/**/config.ts',
    '!**/node_modules/**',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html', 'json-summary'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testTimeout: 30000,
  // Midway 测试应用会保留框架级异步句柄，测试完成后由 Jest 结束进程。
  forceExit: true,
  verbose: true,
};
