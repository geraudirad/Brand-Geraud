import chai from 'chai';
import chaiHttp from 'chai-http';
import index from '../index';

chai.should();
chai.use(chaiHttp);

describe('Users', () => {
    it('should fech all users', () => {
      chai
        .request(index)
        .get('/api/user')
        .then((res) => {
          res.should.have.status(200);
          res.body.user.should.be.a('array');
        })
        .catch((error) => {
          console.log(error)
      });
    });
    it('should add a new user', () => {
        const newUser ={
            name: "terence joseph",
            username: "josephterence123",
            password: "12ggddce"
        }
        chai
        .request(index)
        .post('/api/user')
        .send(newUser)
        .then((res) => {
          res.should.have.status(200);
          res.body.user.should.be.a('array');
        })
        .catch((error) => {
          console.log(error)
      });
    });
    it('should login user' , () => {
        const login ={
            username: "josephterence123",
            password: "12ggddce"
        }
        chai
        .request(index)
        .post('/api/user/login')
        .then((res) => {
          res.should.have.status(200);
          res.body.login.should.be.a('array');
        })
        .catch((error) => {
            console.log(error)
        
    });
    });
});