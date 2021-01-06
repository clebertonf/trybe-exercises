const users = {
   4 : { name: 'Mark' },
   5 : { name: 'Paul' }
    };
    
    const findUserById = (id) => {
      return new Promise((resolve, reject) => {
          if (users[id]) {
            return resolve(users[id]);
          }
    
          return reject({ error: 'User with ' + id + ' not found.' });
      });
    }
    
    const getUserName = (userID) => {
      return findUserById(userID).then(user => user.name);
    }

    
  describe('Testes da função getUsers', () => {
    it('Se retorna um usuario', () => {
      expect.assertions(1);
     return getUserName(4).then(users => {
        expect(users).toEqual('Mark');
      });
    });

    it('Se não retorna um usuario', () =>{
      return getUserName(6).catch(error => {
        expect(error).toEqual({ error: 'User with 6 not found.' })
      });
    });

  });

 