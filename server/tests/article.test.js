import chai from 'chai';
import chaiHttp from 'chai-http';
import index from '../index';

chai.should();
chai.use(chaiHttp);

describe('articles', () => {
    it('should get all articles' , () => {
        chai
        .request(index)
        .get('/api/article')
        .then((res) => {
          res.should.have.status(200);
          res.body.user.should.be.a('array');
        })
        .catch((error) => {
            console.log(error)
        });
    });
    it('should add single article' , () => {
        const id = "5f69b45536f1672e2c737d7d"
        chai
        .request(index)
        .get('/api/aricle/'+ id)
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
        })
        .catch((error) => {
            console.log(error)
        });
    });
    it('should update article' , () => {
        const id = "5f686e395b97322a1cc58923"
        chai
        .request(index)
        .get('/api/aricle/'+ id)
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
        })
        .catch((error) => {
            console.log(error)
        });
    });
    it('should delete article' , () => {
        const id = "5f686f42a5e9d62ac05e53e3"
        chai
        .request(index)
        .get('/api/aricle/'+ id)
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
        })
        .catch((error) => {
            console.log(error)
        });
    });



})
