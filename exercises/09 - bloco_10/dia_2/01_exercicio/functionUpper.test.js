const { uppercase } = require('./functionUppercase.js');


 describe('Testando função Uppercase', () => {
    test('Função uppercase', (done) => {
        uppercase('cleber', (str) => {
            expect(str).toBe('CLEBER');
            done();
        })
    });
});