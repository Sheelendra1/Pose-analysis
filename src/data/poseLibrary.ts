import { YogaPose } from '../types';

export const poseLibrary: YogaPose[] = [
  {
    id: 'mountain',
    name: 'Mountain Pose',
    sanskritName: 'Tadasana',
    description: 'A foundational standing pose that improves posture, balance, and body awareness.',
    difficulty: 'beginner',
    category: 'standing',
    benefits: [
      'Improves posture',
      'Strengthens thighs, knees, and ankles',
      'Increases body awareness',
      'Reduces flat feet'
    ],
    imageUrl: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    keyPoints: [
      'Stand with feet together or hip-width apart',
      'Ground through all four corners of your feet',
      'Engage your thighs and lift your kneecaps',
      'Lengthen your spine and roll your shoulders back and down',
      'Bring your hands to heart center or let them hang by your sides'
    ],
    commonMistakes: [
      'Locking the knees',
      'Hunching the shoulders',
      'Tilting the pelvis too far forward or backward',
      'Distributing weight unevenly on the feet'
    ]
  },
  {
    id: 'downward-dog',
    name: 'Downward-Facing Dog',
    sanskritName: 'Adho Mukha Svanasana',
    description: 'An energizing pose that stretches and strengthens the entire body.',
    difficulty: 'beginner',
    category: 'inversion',
    benefits: [
      'Stretches the hamstrings, calves, and shoulders',
      'Strengthens the arms, shoulders, and legs',
      'Relieves back pain',
      'Calms the mind and reduces stress'
    ],
    imageUrl: 'https://images.pexels.com/photos/6698513/pexels-photo-6698513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    keyPoints: [
      'Start on hands and knees, then lift hips up and back',
      'Create an inverted V shape with your body',
      'Press hands firmly into the mat with fingers spread wide',
      'Keep shoulders away from ears and rotate upper arms outward',
      'Engage your core and press your heels toward the floor'
    ],
    commonMistakes: [
      'Rounding the spine',
      'Putting too much weight on the wrists',
      'Letting the shoulders creep up toward the ears',
      'Keeping the feet too close together'
    ]
  },
  {
    id: 'warrior-1',
    name: 'Warrior I',
    sanskritName: 'Virabhadrasana I',
    description: 'A powerful standing pose that builds strength and stability.',
    difficulty: 'beginner',
    category: 'standing',
    benefits: [
      'Strengthens legs, shoulders, and back',
      'Opens chest and hips',
      'Improves balance and stability',
      'Builds focus and concentration'
    ],
    imageUrl: 'https://images.pexels.com/photos/5384538/pexels-photo-5384538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    keyPoints: [
      'Step one foot back and turn it out at a 45-degree angle',
      'Bend your front knee to stack over the ankle',
      'Square your hips and chest forward',
      'Raise your arms overhead with palms facing each other',
      'Gaze forward or up at your hands'
    ],
    commonMistakes: [
      'Leaning the torso forward',
      'Not squaring the hips forward',
      'Letting the front knee move inward or over the toes',
      'Tensing the shoulders and neck'
    ]
  },
  {
    id: 'tree',
    name: 'Tree Pose',
    sanskritName: 'Vrksasana',
    description: 'A balancing pose that promotes concentration and steady breathing.',
    difficulty: 'beginner',
    category: 'balancing',
    benefits: [
      'Improves balance and stability',
      'Strengthens the legs and core',
      'Opens the hips',
      'Promotes concentration and focus'
    ],
    imageUrl: 'https://images.pexels.com/photos/8032744/pexels-photo-8032744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    keyPoints: [
      'Begin in Mountain Pose',
      'Shift weight onto one foot',
      'Place the sole of opposite foot on inner thigh or calf (avoid the knee)',
      'Bring hands to heart center or extend overhead',
      'Fix gaze on a steady point for balance'
    ],
    commonMistakes: [
      'Placing foot on the knee joint',
      'Hunching shoulders',
      'Leaning too far to one side',
      'Holding the breath'
    ]
  },
  {
    id: 'chair',
    name: 'Chair Pose',
    sanskritName: 'Utkatasana',
    description: 'A heating pose that strengthens the legs and core while testing endurance.',
    difficulty: 'beginner',
    category: 'standing',
    benefits: [
      'Strengthens thighs, glutes, and spine',
      'Tones abdominal muscles',
      'Increases ankle and calf flexibility',
      'Stimulates heart and diaphragm'
    ],
    imageUrl: 'https://images.pexels.com/photos/8964857/pexels-photo-8964857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    keyPoints: [
      'Start in Mountain Pose',
      'Bend your knees as if sitting in a chair',
      'Reach arms overhead, parallel to each other',
      'Keep your chest lifted and spine long',
      'Draw your tailbone down toward the floor'
    ],
    commonMistakes: [
      'Raising the shoulders toward the ears',
      'Letting knees move forward past the toes',
      'Collapsing the chest',
      'Leaning too far forward'
    ]
  },
  {
    id: 'cobra',
    name: 'Cobra Pose',
    sanskritName: 'Bhujangasana',
    description: 'A gentle backbend that opens the chest and strengthens the spine.',
    difficulty: 'beginner',
    category: 'backbend',
    benefits: [
      'Stretches the chest, shoulders, and abdomen',
      'Strengthens the spine',
      'Opens the heart and lungs',
      'Stimulates abdominal organs'
    ],
    imageUrl: 'https://images.pexels.com/photos/7592729/pexels-photo-7592729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    keyPoints: [
      'Lie on your stomach with hands under shoulders',
      'Keep elbows close to the body',
      'Press the tops of your feet into the floor',
      'Lift your chest while keeping lower ribs on the floor',
      'Keep a slight bend in the elbows'
    ],
    commonMistakes: [
      'Overarching the lower back',
      'Raising the shoulders toward the ears',
      'Straightening the arms too much',
      'Not engaging the legs'
    ]
  }
];