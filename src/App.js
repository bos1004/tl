import logo from './logo.svg';
import Customer from './components/Customer';

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '홍길동',
    'birthday' : '760225',
    'gender' : '남자',
    'job' : '직장인',
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '이재명',
    'birthday' : '630331',
    'gender' : '남자',
    'job' : '국회의원',
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '윤석열',
    'birthday' : '660205',
    'gender' : '남자',
    'job' : '대통령',
  }
]


function App() {
  return (
    <div> 
      {
        customers.map(c => {
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
          }
        )
      }    
    </div>
  );
}

export default App;
