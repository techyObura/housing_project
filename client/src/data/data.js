export const users = [
  {
    id: "u1",
    role: "landlord",
    name: "John Mwangi",
    email: "john.mwangi@example.com",
    phone: "+254712000111",
    avatar: "/avatars/john.png",
  },
  {
    id: "u2",
    role: "landlord",
    name: "Aisha Karim",
    email: "aisha.karim@example.com",
    phone: "+254713220555",
    avatar: "/avatars/aisha.png",
  },
  {
    id: "u3",
    role: "tenant",
    name: "Brian Otieno",
    email: "brian.otieno@example.com",
    phone: "+254719556677",
    avatar: "/avatars/brian.png",
  },
  {
    id: "u4",
    role: "tenant",
    name: "Lucy Wanjiku",
    email: "lucy.wanjiku@example.com",
    phone: "+254729884422",
    avatar: "/avatars/lucy.png",
  },
  {
    id: "u5",
    role: "housekeeper",
    name: "Samuel Kiprotich",
    email: "sam.kiprotich@example.com",
    phone: "+254700110099",
    avatar: "/avatars/samuel.png",
  },
];

export const listings = [
  // ----------------------------------------------------
  // JOHN MWANGI (u1)
  // ----------------------------------------------------
  {
    id: "l1",
    landlordId: "u1",
    title: "1 Bedroom Apartment – Kileleshwa",
    price: 35000,
    location: "Kileleshwa, Nairobi",
    image: "/properties/kile1.jpg",
    beds: 1,
    baths: 1,

    likes: ["u3", "u4"],

    ratings: [
      { userId: "u3", rating: 4, review: "Great location and very clean." },
      {
        userId: "u4",
        rating: 5,
        review: "Quiet neighborhood. Perfect for WFH.",
      },
    ],

    comments: [
      {
        userId: "u3",
        text: "Is the price negotiable?",
        timestamp: "2025-01-04T13:10:00Z",
      },
      {
        userId: "u1",
        text: "Yes, slightly negotiable.",
        timestamp: "2025-01-04T13:15:00Z",
      },
    ],
  },

  {
    id: "l2",
    landlordId: "u1",
    title: "Studio Apartment – Westlands",
    price: 28000,
    location: "Westlands, Nairobi",
    image: "/properties/west1.jpg",
    beds: 0,
    baths: 1,

    likes: ["u3"],

    ratings: [
      { userId: "u3", rating: 4, review: "Nice studio, close to malls." },
      { userId: "u4", rating: 3, review: "A bit small but worth the price." },
    ],

    comments: [
      {
        userId: "u3",
        text: "Is there parking for one car?",
        timestamp: "2025-01-02T11:00:00Z",
      },
      {
        userId: "u1",
        text: "Yes, one parking slot is included.",
        timestamp: "2025-01-02T11:10:00Z",
      },
    ],
  },

  {
    id: "l3",
    landlordId: "u1",
    title: "2 Bedroom Apartment – Lavington",
    price: 55000,
    location: "Lavington, Nairobi",
    image: "/properties/lav1.jpg",
    beds: 2,
    baths: 2,

    likes: ["u4"],

    ratings: [
      { userId: "u4", rating: 5, review: "Spacious and modern interior." },
      { userId: "u3", rating: 4, review: "A bit pricey but very luxurious." },
    ],

    comments: [
      {
        userId: "u4",
        text: "Does it come fully furnished?",
        timestamp: "2025-01-05T09:30:00Z",
      },
      {
        userId: "u1",
        text: "Yes, fully furnished with high-end appliances.",
        timestamp: "2025-01-05T09:40:00Z",
      },
    ],
  },

  // ----------------------------------------------------
  // AISHA KARIM (u2)
  // ----------------------------------------------------
  {
    id: "l4",
    landlordId: "u2",
    title: "2 Bedroom Apartment – Ruaka",
    price: 40000,
    location: "Ruaka, Kiambu",
    image: "/properties/ruaka1.jpg",
    beds: 2,
    baths: 1,

    likes: ["u4", "u3"],

    ratings: [
      { userId: "u4", rating: 4, review: "Affordable and spacious." },
      {
        userId: "u3",
        rating: 3,
        review: "Far from the city center but quiet.",
      },
    ],

    comments: [
      {
        userId: "u4",
        text: "How secure is the neighborhood?",
        timestamp: "2025-01-03T16:00:00Z",
      },
      {
        userId: "u2",
        text: "Very secure — guards 24/7.",
        timestamp: "2025-01-03T16:10:00Z",
      },
    ],
  },

  {
    id: "l5",
    landlordId: "u2",
    title: "1 Bedroom – Thindigua",
    price: 30000,
    location: "Thindigua, Kiambu",
    image: "/properties/thind1.jpg",
    beds: 1,
    baths: 1,

    likes: ["u3"],

    ratings: [
      { userId: "u3", rating: 5, review: "Modern finishes and good lighting." },
      { userId: "u4", rating: 4, review: "Peaceful area and very clean." },
    ],

    comments: [
      {
        userId: "u3",
        text: "Is water included in rent?",
        timestamp: "2025-01-06T10:30:00Z",
      },
      {
        userId: "u2",
        text: "Yes, water is included.",
        timestamp: "2025-01-06T10:35:00Z",
      },
    ],
  },

  {
    id: "l6",
    landlordId: "u2",
    title: "Bedsitter – Ruiru",
    price: 15000,
    location: "Ruiru, Kiambu",
    image: "/properties/ruiru1.jpg",
    beds: 0,
    baths: 1,

    likes: ["u4"],

    ratings: [
      { userId: "u4", rating: 3, review: "Simple but decent for the price." },
      { userId: "u3", rating: 4, review: "Good connectivity to Thika Road." },
    ],

    comments: [
      {
        userId: "u4",
        text: "Are pets allowed?",
        timestamp: "2025-01-07T08:00:00Z",
      },
      {
        userId: "u2",
        text: "Small pets are allowed.",
        timestamp: "2025-01-07T08:10:00Z",
      },
    ],
  },
];

export const chats = [
  {
    id: "c1",
    between: ["u3", "u1"], // Brian ↔ John
    messages: [
      {
        sender: "u3",
        text: "Hi John, is the Kileleshwa 1-bedroom still available?",
        timestamp: "2025-01-04T10:20:00Z",
      },
      {
        sender: "u1",
        text: "Hi Brian, yes it is available. Would you like to schedule a viewing?",
        timestamp: "2025-01-04T10:25:00Z",
      },
    ],
  },
  {
    id: "c2",
    between: ["u4", "u2"], // Lucy ↔ Aisha
    messages: [
      {
        sender: "u4",
        text: "Good afternoon, I’m interested in the Ruaka 2-bedroom.",
        timestamp: "2025-01-03T14:00:00Z",
      },
      {
        sender: "u2",
        text: "Hello Lucy! I can arrange a viewing tomorrow.",
        timestamp: "2025-01-03T14:05:00Z",
      },
    ],
  },
  {
    id: "c3",
    between: ["u5", "u1"], // Samuel ↔ John
    messages: [
      {
        sender: "u5",
        text: "John, the Lavington apartment cleaning is done.",
        timestamp: "2025-01-04T09:00:00Z",
      },
      {
        sender: "u1",
        text: "Thanks Samuel, great work!",
        timestamp: "2025-01-04T09:10:00Z",
      },
    ],
  },
];

export const posts = [
  {
    id: "p1",
    userId: "u3", // Brian
    content: "Just viewed the Kileleshwa apartment. Super clean and quiet!",
    likes: 12,
    comments: [{ userId: "u1", text: "Glad you liked it!" }],
    timestamp: "2025-01-04T12:00:00Z",
  },
  {
    id: "p2",
    userId: "u4", // Lucy
    content: "Anyone living in Ruaka? How’s the water supply lately?",
    likes: 8,
    comments: [{ userId: "u2", text: "Steady for the last month :)" }],
    timestamp: "2025-01-03T17:30:00Z",
  },
  {
    id: "p3",
    userId: "u5", // Samuel the housekeeper
    content:
      "Finished 3 house cleanings today 💪. Availability open for next week.",
    likes: 20,
    comments: [
      { userId: "u1", text: "Thanks Samuel!" },
      { userId: "u2", text: "You're doing great work!" },
    ],
    timestamp: "2025-01-02T09:50:00Z",
  },
];
