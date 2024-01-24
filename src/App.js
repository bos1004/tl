import logo from './logo.svg';
import Customer from './components/Customer';

const customer = {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birthday' : '760225',
  'gender' : '남자',
  'job' : '직장인',

}


function App() {
  return (
    <Customer 
      id={customer.id}
      image={customer.image}
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}      
    />
  );
}

export default App;
