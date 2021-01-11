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
 
     
   describe('Testes da função getUsers ASYNC/AWAIT', () => {
     it('Se retorna um usuario', async () => {
       const user = await getUserName(4);
       expect(user).toEqual('Mark');
     });
 
     it('Se não retorna um usuario', async () =>{
      try{
        await getUserName(7)
      }catch (error) {
        expect(error).toEqual({error: 'User with 7 not found.'});
      }
     });
 
   });
 
  