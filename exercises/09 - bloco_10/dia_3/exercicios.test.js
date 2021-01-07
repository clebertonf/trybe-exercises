const functions = require("./exercicios");

describe('Exercicios dia 10.3 Jest', () => {

    test(' Exercicio 01 Testes da Função randomNumber', () => {

        functions.randomNumber = jest.fn().mockReturnValue(10);
    
    
        functions.randomNumber();
    
        expect(functions.randomNumber).toHaveBeenCalled();
        expect(functions.randomNumber).toHaveBeenCalledTimes(1);
    
        expect(functions.randomNumber()).toBe(10);
        expect(functions.randomNumber).toHaveBeenCalledTimes(2);
    });
    
    
    test('Exercicio 02', () => {
    
        const mockRandomNumbers = jest.spyOn(functions, 'randomNumber').mockImplementation((a, b) => a / b);
    
        mockRandomNumbers();
    
        expect(mockRandomNumbers).toHaveBeenCalled();
        expect(mockRandomNumbers).toHaveBeenCalledTimes(3);
        expect(mockRandomNumbers(10,2)).toBe(5);
        expect(mockRandomNumbers).toHaveBeenLastCalledWith(10, 2);
    
    
    });
    
    test('exercicio 03', () => {

        // Modificando implementação
         mockRandomNumbers = jest.spyOn(functions, 'randomNumber')
        .mockImplementation((num1, num2, num3) => {
            return (num1 * num2) * num3;
        });

        mockRandomNumbers(2, 5, 2);
        
        expect(mockRandomNumbers).toHaveBeenCalled();
        expect(mockRandomNumbers).toHaveBeenCalledTimes(5);
        expect(mockRandomNumbers).toHaveBeenLastCalledWith(2 , 5, 2);
        expect(mockRandomNumbers(2, 5 , 2)).toBe(20);

        //Resetando implementação
        mockRandomNumbers.mockReset().mockImplementation((num) => num * 2);

        mockRandomNumbers();

        expect(mockRandomNumbers).toHaveBeenCalled();
        expect(mockRandomNumbers(6)).toBe(12);

    });
});

