import React from "react";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tour from "./Tour";
import Tours from "./Tours";

const App = () => {
  let tourPackages = [
    {
      id: 1,
      name: 'Bali Getaway',
      image: 'https://plus.unsplash.com/premium_photo-1682097719861-19ad002057ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFsaSUyMGhvdGVsfGVufDB8fDB8fHww',
      price: '₹74,000',
      description: 'Escape to the tropical paradise of Bali, where stunning beaches, cultural temples, and vibrant nightlife await you. Enjoy a perfect mix of relaxation and adventure with guided tours, beachside resorts, traditional Balinese cuisine, and exciting water activities.'
    },
    {
      id: 2,
      name: 'Swiss Alps Adventure',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFsaSUyMGhvdGVsfGVufDB8fDB8fHww',
      price: '₹1,24,000',
      description: 'Experience the breathtaking beauty of the Swiss Alps. This package includes scenic train rides, snow-covered peaks, charming alpine villages, and thrilling activities like skiing, hiking, and snowboarding. A dream destination for nature lovers and adventurers.'
    },
    {
      id: 3,
      name: 'Japan Cherry Blossom Tour',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFsaSUyMGhvdGVsfGVufDB8fDB8fHww',
      price: '₹1,08,000',
      description: 'Witness Japan in full bloom during the cherry blossom season. Explore Tokyo, Kyoto, and Nara with guided city tours, temples, traditional tea ceremonies, and vibrant cultural experiences. A visual treat for photographers and peace seekers alike.'
    },
    {
      id: 4,
      name: 'Egypt Historical Wonders',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFsaSUyMGhvdGVsfGVufDB8fDB8fHww',
      price: '₹83,000',
      description: 'Uncover the mysteries of ancient Egypt with visits to the Pyramids of Giza, the Sphinx, and the Nile River. This historical journey includes museum tours, local bazaars, and authentic Egyptian cuisine, perfect for history buffs and culture enthusiasts.'
    },
    {
      id: 5,
      name: 'Maldives Beach Escape',
      image: 'https://images.unsplash.com/photo-1742030173386-5da63ec222bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGVoJTIwTGFkYWtoJTIwUm9hZCUyMFRyaXB8ZW58MHx8MHx8fDA%3D',
      price: '₹99,000',
      description: 'Relax on pristine beaches and swim in crystal-clear waters in the Maldives. Stay in luxurious water villas, enjoy spa treatments, go snorkeling, and witness mesmerizing marine life in this serene and exotic island retreat.'
    },
    {
      id: 6,
      name: 'Goa Beach Vibes',
      image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjcwMjJ8MHxwaG90by1wYWNrYWdlfHx8fGVufDB8fHx8fHw%3D&ixlib=rb-1.2.1&q=80&w=1080',
      price: '₹19,999',
      description: 'Enjoy the vibrant beaches of Goa with a mix of adventure and relaxation. This package includes beach hopping, water sports, night markets, beach parties, and a taste of Goa’s rich Portuguese heritage and delicious seafood cuisine.'
    },
    {
      id: 7,
      name: 'Leh-Ladakh Road Trip',
      image: 'https://images.unsplash.com/photo-1742030173386-5da63ec222bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGVoJTIwTGFkYWtoJTIwUm9hZCUyMFRyaXB8ZW58MHx8MHx8fDA%3D',
      price: '₹24,999',
      description: 'Embark on a thrilling road trip through the rugged terrains of Leh and Ladakh. Witness stunning mountain views, Buddhist monasteries, Pangong Lake, and high-altitude passes on this once-in-a-lifetime Himalayan adventure.'
    },
    {
      id: 8,
      name: 'Kerala Backwaters Retreat',
      image: 'https://plus.unsplash.com/premium_photo-1697730430306-7c8d36cb3722?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VyYWxhJTIwYmFja3dhdGVyfGVufDB8fDB8fHww',
      price: '₹21,499',
      description: 'Drift through the peaceful backwaters of Kerala on a houseboat. Enjoy lush greenery, coconut groves, Ayurvedic treatments, and delicious South Indian meals as you experience the calm and natural charm of “God’s Own Country.”'
    },
    {
      id: 9,
      name: 'Rajasthan Royal Tour',
      image: 'https://images.unsplash.com/photo-1715264500941-27bf30bf46eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFqYXN0aGFuJTIwZGVzZXJ0fGVufDB8fDB8fHww',
      price: '₹23,000',
      description: 'Step into the world of royals with a majestic tour of Rajasthan. Explore Jaipur, Udaipur, and Jodhpur’s forts, palaces, and colorful markets while indulging in folk music, dance, and rich Rajasthani flavors throughout your journey.'
    },
    {
      id: 10,
      name: 'Darjeeling & Sikkim Exploration',
      image: 'https://images.unsplash.com/photo-1593417376544-4c4201061e22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2FzaG1pcnxlbnwwfHwwfHx8MA%3D%3D',
      price: '₹20,500',
      description: 'Discover the scenic charm of the Eastern Himalayas with a tour of Darjeeling and Sikkim. Ride the toy train, sip world-famous tea, visit monasteries, and catch breathtaking views of Kanchenjunga in this peaceful and picturesque escape.'
    },
    {
      id: 11,
      name: 'Kashmir Paradise Tour',
      image: 'https://plus.unsplash.com/premium_photo-1661962707694-3420cb435e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D',
      price: '₹22,000',
      description: 'Explore the serene beauty of Kashmir, often called “Heaven on Earth.” Stay in a houseboat on Dal Lake, roam through tulip gardens, and ski in Gulmarg while enjoying traditional Kashmiri hospitality and breathtaking mountain scenery.'
    },
    {
      id: 12,
      name: 'Thailand Budget Tour',
      image: 'https://plus.unsplash.com/premium_photo-1661962707694-3420cb435e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D',
      price: '₹66,000',
      description: 'Experience the lively beaches, exotic islands, and bustling street markets of Thailand. This budget-friendly tour includes Bangkok’s nightlife, Phuket’s beaches, cultural landmarks, and delicious Thai cuisine perfect for quick getaways.'
    },
    {
      id: 13,
      name: 'Paris & Rome Highlights',
      image: 'https://plus.unsplash.com/premium_photo-1661962707694-3420cb435e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D',
      price: '₹1,58,000',
      description: 'Travel through the romance and history of Europe with this dual-city tour. Visit iconic landmarks like the Eiffel Tower, Colosseum, Vatican City, and more. Enjoy fine wines, local cuisines, art, architecture, and unforgettable memories.'
    }
  ];

  
  let [loading,setLoading]=useState(true)
  

  useEffect(()=>{
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  },[])

 

    return(
      <main id="main">
        {
          loading?<Loading/>:
          // <Tour tourPackages={tourPackages} />
          <Tours tourPackages={tourPackages}  />
        }
        
        
      </main>
    )
}
export default App;
