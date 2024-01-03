import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  const data=[{
    image:'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww',
    title:'Apple Macbook Pro',
    price:'₹1,29,599',
    added:false
    },{
    image:'https://images.unsplash.com/photo-1678958274412-563119ec18ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc3VuZyUyMGdhbGF4eSUyMHMyMyUyMHVsdHJhfGVufDB8fDB8fHww',
    title:'Samsung Galaxy S23 Ultra',
    price:'₹89,599',
    added:false
    },{
    image:'https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91c2V8ZW58MHx8MHx8fDA%3D',
    title:'Logitech G23 Gaming Mouse',
    price:'₹2,599',
    added:false
    },{
      image:'https://images.unsplash.com/photo-1585155784229-aff921ccfa10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D',
      title:'Apple Airpods(1st Gen)',
      price:'₹10,599',
      added:false
    },{
      image:'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D',
      title:'Apple Watch Series 9',
      price:'₹57,099',
      added:false
    },{
      image:'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtleWJvYXJkfGVufDB8fDB8fHww',
      title:'Mechanical Gaming Keyboard',
      price:'₹17,800',
      added:false
    },{
    image:'https://plus.unsplash.com/premium_photo-1683141496040-eeef9702269f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D',
      title:'Wireless Speaker',
      price:'₹2,500',
      added:false
    }];
  
  const [products, setProducts] = useState(data);



    const handleClick=(index)=>{
      setProducts((prev)=>{
        return prev.map((item,itemIndex)=>{
          if(index===itemIndex){
            return {
            ...item,
              added:!item.added
            }
          }
          return item
        })
      })
    }

  return (
    <main>
      <Navbar data={products}/>
      <section className='w-full flex flex-wrap gap-10 px-20'>
      {
        products.map((product,index)=>{
          return(
            <Card cardData={product} handleClick={handleClick} key={index} index={index}/>
          )
        })
      }
      </section>
    </main>
  )
}

export default App
