import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceAnchor from '../components/PlaceAnchor';


const PlacePage = () => {

  // Dummy temporary data for places
  const DUMMY_PLACES = [
    {
      id: 'place1',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },

      creator: 'user1',
    },

    {
      id: 'place2',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      
      creator: 'user2',
    }
  ];

  // Sort places by user-id encoded in placePage route in App
  const userID = useParams().uid;

  const userPlaces = DUMMY_PLACES.filter(
                      place => place.creator === userID
  )

  // Display data for places in placeAnchor comp
  return <PlaceAnchor places={userPlaces} />;

};


export default PlacePage;