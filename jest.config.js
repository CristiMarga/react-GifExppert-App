module.exports = {
    // testEnvironment: 'jsdom',
    // setupFiles: ['./jest.setup.js']
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest"
     },
}