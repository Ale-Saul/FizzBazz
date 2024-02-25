import fizzbuzz from './fizzbuzz';
describe('fizzbuzz', () => {
    it('deberia entrar 1 y retornar 1', () => {
        expect(fizzbuzz(1)).toEqual("1");
    });
    it('deberia entrar 2 y retornar 2', () => {
        expect(fizzbuzz(2)).toEqual("2");
    });
    it('deberia entrar 3 y retornar fizz', () => {
        expect(fizzbuzz(3)).toEqual("fizz");
    });
    it('deberia entrar 5 y retornar buzz', () => {
        expect(fizzbuzz(5)).toEqual("buzz");
    });
    it('deberia entrar 15 y retornar fizzbuzz', () => {
        expect(fizzbuzz(15)).toEqual("fizzbuzz");
    });
});
