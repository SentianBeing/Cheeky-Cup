export const PRODUCT_DATA = {
  name: 'Cheeky Ceremonial Matcha',
  tagline: 'Fun to sip, serious about taste.',
  rating: 4.94,
  reviewCount: 2480,
  origin: 'Kagoshima & Uji, Japan',
  grade: '1st Harvest Ceremonial Grade A',
  netWeight: '30g (~30 Servings)',
  description: 'Stone-ground, shade-grown Japanese tencha leaves chosen by Talia after reviewing 100+ blends. Vibrantly green, velvety smooth, naturally sweet, with 0% bitterness.',
  
  pricingTiers: [
    {
      id: 'single-tin',
      title: 'Single Tin',
      servings: '30 Servings (30g)',
      price: 28,
      originalPrice: 32,
      popular: false,
      badge: 'Bestseller',
      image: '/assets/tin-closeup.png',
      perks: ['100% Ceremonial Grade Tin', 'Airtight UV-safe Gold Liner', 'Talia Sticker Sheet'],
    },
    {
      id: 'starter-bundle',
      title: 'The Ritual Starter Kit',
      servings: 'Tin + Whisk + Spoon',
      price: 46,
      originalPrice: 58,
      popular: true,
      badge: 'Most Popular ✨',
      image: '/assets/starter-bundle.png',
      perks: [
        '1x Cheeky Ceremonial Tin (30g)',
        '1x High-Speed Electric Frother (Pink/Sage)',
        '1x Custom Brass Measure Spoon',
        'Free Cheeky Cam Holographic Stickers'
      ],
    },
    {
      id: 'duo-pack',
      title: 'Double Trouble (Duo Pack)',
      servings: '60 Servings (2x 30g)',
      price: 49,
      originalPrice: 64,
      popular: false,
      badge: 'Best Value (Save 23%)',
      image: '/assets/section-lifestyle.png',
      perks: ['2x Cheeky Ceremonial Tins', 'Free Priority US Shipping', 'Never Run Out of Vibes'],
    }
  ],

  flavorProfile: [
    { label: 'Umami Richness', value: 96, desc: 'Deep, rich, savory notes from 4-week shade cultivation' },
    { label: 'Natural Sweetness', value: 92, desc: 'L-theanine sweetness with zero added sugars' },
    { label: 'Velvety Creaminess', value: 94, desc: 'Ultra-fine stone grind creates instant micro-foam' },
    { label: 'Bitterness / Astringency', value: 4, desc: 'Virtually zero bitterness unlike bitter culinary powder' },
    { label: 'Emerald Vibrancy', value: 100, desc: 'Pure vivid spring green color packed with chlorophyll' }
  ],

  emotionalSupportCups: [
    {
      id: 'iced-cloud',
      name: 'Iced Cloud Matcha Latte',
      personality: '“Romanticizes morning routines & has 45 browser tabs open.”',
      vibe: 'Refreshing & Aesthetic',
      temp: 'Iced (Over Big Cubes)',
      milk: 'Oat Milk + Sweet Vanilla Foam',
      caffeine: '68mg (Sustained Focus, 0 Crash)',
      color: '#84E45B',
      bgColor: '#FFE0F5',
      image: '/assets/matcha-iced-pour.png',
      quote: '“Reset my entire personality before 9 AM.”'
    },
    {
      id: 'hot-whipped',
      name: 'The Talia Signature Whisk',
      personality: '“Gives advice she doesn’t take, but makes the best drink.”',
      vibe: 'Silky Barista Classic',
      temp: 'Warm & Frothy (70°C)',
      milk: 'Steamed Almond / Whole Milk',
      caffeine: '72mg (Clean L-Theanine Zen)',
      color: '#58032A',
      bgColor: '#FFFFF1',
      image: '/assets/whisk-ritual-2.png',
      quote: '“Barista quality without the gatekeeping.”'
    },
    {
      id: 'coconut-spark',
      name: 'Electric Matcha Splash',
      personality: '“Always knows the cool cafe spot before it trends on TikTok.”',
      vibe: 'Hydrating Afternoon Pick-Me-Up',
      temp: 'Chilled Shake',
      milk: 'Raw Coconut Water + Splash of Lemon',
      caffeine: '65mg (Electrolytes + Energy)',
      color: '#E1233C',
      bgColor: '#DBF7C5',
      image: '/assets/matcha-glass.png',
      quote: '“If it doesn’t match my fit, I’m not drinking it.”'
    }
  ],

  ugcPosts: [
    {
      id: 1,
      author: '@chloe.sips',
      image: '/assets/hero-talia.png',
      caption: 'The moment that first sip hits... literally #CaughtTheCheek 🍵💚',
      tag: 'Iced Oat Matcha',
      likes: '14.2k'
    },
    {
      id: 2,
      author: '@mateo.brews',
      image: '/assets/whisk-ritual-1.png',
      caption: 'Finally a matcha that isn’t brown or chalky. Color is electric green fr.',
      tag: 'Morning Ritual',
      likes: '8.9k'
    },
    {
      id: 3,
      author: '/assets/latte-art.png',
      image: '/assets/latte-art.png',
      caption: 'Talia wasn’t lying when she said 0% bitterness. My coffee machine is officially collecting dust.',
      tag: 'Barista Grade',
      likes: '22.1k'
    },
    {
      id: 4,
      author: '@maya.aesthetic',
      image: '/assets/matcha-glass.png',
      caption: 'What’s in my emotional support cup today: 2 scoops Cheeky + oat milk + excessive ice 🧊',
      tag: 'Vibe Check',
      likes: '19.4k'
    }
  ],

  reviews: [
    {
      id: 1,
      name: 'Sienna R.',
      location: 'New York, NY',
      verified: true,
      rating: 5,
      title: 'Actually obsessed, goodbye $9 cafe matchas',
      text: 'I used to spend an embarrassing amount at trendy Soho matcha spots. Cheeky is genuinely brighter, sweeter, and froths up with such thick creaminess. Plus the packaging on my counter is a literal 10/10.',
      date: '2 days ago',
      avatar: '🌸'
    },
    {
      id: 2,
      name: 'Jordan M.',
      location: 'Los Angeles, CA',
      verified: true,
      rating: 5,
      title: 'No jitters, just high vibes and clean focus',
      text: 'Coffee used to give me heart palpitations by 11am. Cheeky gives me this calm, laser-focused energy all afternoon without the afternoon slump. Talia nailed this blend.',
      date: '1 week ago',
      avatar: '✨'
    },
    {
      id: 3,
      name: 'Elena K.',
      location: 'Toronto, Canada',
      verified: true,
      rating: 5,
      title: 'The color alone tells you it’s real ceremonial quality',
      text: 'When you open the tin and it’s that electric neon green, you know you got the good stuff. Super smooth, no grassy aftertaste. The starter bundle whisk is super powerful too!',
      date: '2 weeks ago',
      avatar: '💚'
    },
    {
      id: 4,
      name: 'Marcus P.',
      location: 'Austin, TX',
      verified: true,
      rating: 5,
      title: 'Playful packaging, serious taste.',
      text: 'Most influencer brands are all hype and terrible quality. This is the exact opposite: fun cheeky branding with world-class ceremonial tea inside. Will definitely be subscribing.',
      date: '3 weeks ago',
      avatar: '⚡'
    }
  ],

  faqs: [
    {
      question: 'What makes Cheeky Ceremonial Matcha different from regular matcha?',
      answer: 'Cheeky is 100% first-harvest, shade-grown Tencha from premier organic fields in Kagoshima and Uji, Japan. It is harvested only in early spring when amino acids (L-Theanine) are at their absolute peak, then stone-ground to micro-fine powder. It has zero bitterness, a natural creamy sweetness, and an unmistakable electric green hue.'
    },
    {
      question: 'Will this give me the coffee jitters or an energy crash?',
      answer: 'Nope! While Cheeky contains ~68mg of clean caffeine per serving, it is paired with high levels of natural L-Theanine. This amino acid slows caffeine absorption, delivering 4–6 hours of sustained, calm focus with no jitters, racing heart, or 2 PM crash.'
    },
    {
      question: 'How many servings are in one tin?',
      answer: 'Each 30g tin yields approximately 25 to 30 generous servings (using 1 to 1.5g per cup, about 1/2 to 1 teaspoon). At ~$0.93 per cup, you save over $7 per day compared to cafe matcha lattes.'
    },
    {
      question: 'Do I need fancy tools to make it?',
      answer: 'Not at all! While our Ritual Starter Kit includes an electric frother and precision brass spoon for that cafe micro-foam in 15 seconds, you can also shake it in a mason jar with warm water or use a traditional bamboo whisk.'
    },
    {
      question: 'How should I store my Cheeky matcha tin?',
      answer: 'Keep the tin sealed in a cool, dry place away from direct sunlight. For maximum fresh aroma and vibrant color, you can also store your unopened or opened tins in the refrigerator.'
    },
    {
      question: 'What is Talia’s favorite way to drink Cheeky?',
      answer: 'Talia sips it over tall ice with rich oat milk, a splash of maple, and a light vanilla cold foam dusted with extra Cheeky matcha powder on top! (#CaughtTheCheek)'
    }
  ]
};
