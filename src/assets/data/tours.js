import tourImg01 from "../images/Agra.jpg";
import tourImg02 from "../images/Goa.jpg";
import tourImg03 from "../images/Paris.jpg";
import tourImg04 from "../images/Canada.jpg";
import tourImg05 from "../images/Bali.jpg";
import tourImg06 from "../images/China.jpg";
import tourImg07 from "../images/Bali.jpg";
import tourImg08 from "../images/Singapore.jpg";
import tourImg09 from "../images/Japan.jpg";

const tours = [
  {
    id: "01",
    title: "Agra, India",
    city: "Agra",
    country: "India",
    distance: 200,
    price: 7999,
    address: "Taj Mahal, Agra",
    maxGroupSize: 8,
    desc: "There are three trips you take to India: the one you think you're going to have-that you plan for; the one you actually have; and the one you live through once you go back Home.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.6,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Goa, India",
    city: "Goa",
    country: "India",
    distance: 250,
    price: 5999,
    address: "Beautiful Beaches, Goa",
    maxGroupSize: 10,
    desc: "There are so many epic captions and quotes on Goa that reflect the vibe of this gorgeous state. Mind you, there are some that don’t vibe well with the locals. Activate beach mode.",
    reviews: [
      {
        name: "Jane Doe",
        rating: 4.8,
      },
    ],
    avgRating: 4.8,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Paris, France",
    city: "Paris",
    country: "France",
    distance: 300,
    price: 21999,
    address: "Eiffel Tower, Paris",
    maxGroupSize: 12,
    desc: "Some will make you chuckle, some may make you wistful, but all of them will make you want to visit Paris!.Part of that reinforced by all the romantic movies that are set in Paris.",
    reviews: [
      {
        name: "Alice Smith",
        rating: 4.5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Toronto, Canada",
    city: "Toronto",
    country: "Canada",
    distance: 100,
    price: 45999,
    address: "Downtown Toronto",
    maxGroupSize: 10,
    desc: "Toronto is a land of endless possibilities and boundless dreams.lets your journey begin.Step into the land of maple leaves and friendly faces, where you'll find a true sense of belonging.",
    reviews: [
      {
        name: "Robert Johnson",
        rating: 4.2,
      },
    ],
    avgRating: 4.2,
    photo: tourImg04,
    featured: false,
  },
  {
    id: "05",
    title: "Bali, Indonesia",
    city: "Bali",
    country: "Indonesia",
    distance: 400,
    price: 7999,
    address: "Beautiful Beaches, Bali",
    maxGroupSize: 8,
    desc: "Bali is truly a magical place to visit – from all the temples to the beautiful beaches, jaw-dropping waterfalls, rice fields, there are so many spectacular places to see the Island of the Gods!!",
    reviews: [
      {
        name: "Emily White",
        rating: 4.7,
      },
    ],
    avgRating: 4.7,
    photo: tourImg05,
    featured: true,
  },
  {
    id: "06",
    title: "Beijing, China",
    city: "Beijing",
    country: "China",
    distance: 500,
    price: 7999,
    address: "Forbidden City, Beijing",
    maxGroupSize: 12,
    desc: "Beijing is that it is the most populous country in the world. Besides being a densely populated country, it also has well-preserved historical places, exotic natural beauty, and unique flora and fauna.",
    reviews: [
      {
        name: "Michael Chen",
        rating: 4.9,
      },
    ],
    avgRating: 4.9,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Manali, Australia",
    city: "Manali",
    country: "Australia",
    distance: 36000,
    price: 36000,
    address: "Snowy Mountains, Australia",
    maxGroupSize: 15,
    desc: "Everyone knows how much Manali means to Us. I try to get back here as much as I can, but normally it’s for work, so I’m in and out and jetlagged and stressed.",
    reviews: [
      {
        name: "Olivia Taylor",
        rating: 4.6,
      },
    ],
    avgRating: 4.6,
    photo: tourImg07 ,
    featured: true,
  },
  {
    id: "08",
    title: "Singapore",
    city: "Singapore",
    country: "Singapore",
    distance: 40000,
    price: 40000,
    address: "Marina Bay, Singapore",
    maxGroupSize: 10,
    desc: "Nobody in Singapore drinks Singapore Slings. It's a really food-crazy culture, where all of this great food is available in a kind of hawker-stand environment",
    reviews: [
      {
        name: "Sophia Lim",
        rating: 4.8,
      },
    ],
    avgRating: 4.8,
    photo: tourImg08,
    featured: false,
  },
  {
    id: "09",
    title: "Tokyo, Japan",
    city: "Tokyo",
    country: "Japan",
    distance: 600,
    price: 54000,
    address: "City Center, Tokyo",
    maxGroupSize: 12,
    desc: "This Japanese proverb teaches the value of patience. Sitting on a rock for a long time makes it warm. Even if it takes a long time, good results will come!",
    reviews: [
      {
        name: "Yuki Tanaka",
        rating: 4.9,
      },
    ],
    avgRating: 4.9,
    photo: tourImg09,
    featured: false,
  },
];

export default tours;
