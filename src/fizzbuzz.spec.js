import fizzbuzz from './fizzbuzz';
describe('fizzbuzz', () => {
    it('deberia entrar 1 y retornar 1', () => {
        expect(fizzbuzz(1)).toEqual("1");
    });
    it('deberia entrar 3 y retornar fizz', () => {
        expect(fizzbuzz(3)).toEqual("fizz");
    });
});
