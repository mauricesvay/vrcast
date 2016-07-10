function generateRoomName() {

    var adjectives = [
        'adaptable', 'adventurous', 'affable', 'affectionate', 'agreeable',
        'ambitious', 'amiable', 'amicable', 'amusing', 'brave', 'bright',
        'broad-minded', 'calm', 'careful', 'charming', 'communicative',
        'compassionate ', 'conscientious', 'considerate', 'convivial', 'courageous',
        'courteous', 'creative', 'decisive', 'determined', 'diligent', 'diplomatic',
        'discreet', 'dynamic', 'easygoing', 'emotional', 'energetic',
        'enthusiastic', 'exuberant', 'fair-minded', 'faithful', 'fearless',
        'forceful', 'frank', 'friendly', 'funny', 'generous', 'gentle', 'good',
        'gregarious', 'hard-working', 'helpful', 'honest', 'humorous',
        'imaginative', 'impartial', 'independent', 'intellectual', 'intelligent',
        'intuitive', 'inventive', 'kind', 'loving', 'loyal', 'modest', 'neat',
        'nice', 'optimistic', 'passionate', 'patient', 'persistent ', 'pioneering',
        'philosophical', 'placid', 'plucky', 'polite', 'powerful', 'practical',
        'pro-active', 'quick-witted', 'quiet', 'rational', 'reliable', 'reserved',
        'resourceful', 'romantic', 'self-confident', 'self-disciplined', 'sensible',
        'sensitive', 'shy', 'sincere', 'sociable', 'straightforward', 'sympathetic',
        'thoughtful', 'tidy', 'tough', 'unassuming', 'understanding', 'versatile',
        'warmhearted', 'willing', 'witty'
    ];

    var animals = [
        'Aardvark', 'Albatross', 'Alligator', 'Alpaca', 'Ant', 'Anteater',
        'Antelope', 'Ape', 'Armadillo', 'Ass', 'Baboon', 'Badger', 'Barracuda',
        'Bat', 'Bear', 'Beaver', 'Bee', 'Bison', 'Boar', 'Buffalo', 'Galago',
        'Butterfly', 'Camel', 'Caribou', 'Cat', 'Caterpillar', 'Cattle', 'Chamois',
        'Cheetah', 'Chicken', 'Chimpanzee', 'Chinchilla', 'Chough', 'Clam', 'Cobra',
        'Cockroach', 'Cod', 'Cormorant', 'Coyote', 'Crab', 'Crane', 'Crocodile',
        'Crow', 'Curlew', 'Deer', 'Dinosaur', 'Dog', 'Dogfish', 'Dolphin', 'Donkey',
        'Dotterel', 'Dove', 'Dragonfly', 'Duck', 'Dugong', 'Dunlin', 'Eagle',
        'Echidna', 'Eel', 'Eland', 'Elephant', 'Elephant seal', 'Elk', 'Emu',
        'Falcon', 'Ferret', 'Finch', 'Fish', 'Flamingo', 'Fly', 'Fox', 'Frog',
        'Gaur', 'Gazelle', 'Gerbil', 'Giant Panda', 'Giraffe', 'Gnat', 'Gnu',
        'Goat', 'Goose', 'Goldfinch', 'Goldfish', 'Gorilla', 'Goshawk',
        'Grasshopper', 'Grouse', 'Guanaco', 'Guinea fowl', 'Guinea pig', 'Gull',
        'Hamster', 'Hare', 'Hawk', 'Hedgehog', 'Heron', 'Herring', 'Hippopotamus',
        'Hornet', 'Horse', 'Human', 'Hummingbird', 'Hyena', 'Jackal', 'Jaguar',
        'Jay', 'Jay, Blue', 'Jellyfish', 'Kangaroo', 'Koala', 'Komodo dragon',
        'Kouprey', 'Kudu', 'Lapwing', 'Lark', 'Lemur', 'Leopard', 'Lion', 'Llama',
        'Lobster', 'Locust', 'Loris', 'Louse', 'Lyrebird', 'Magpie', 'Mallard',
        'Manatee', 'Marten', 'Meerkat', 'Mink', 'Mole', 'Monkey', 'Moose', 'Mouse',
        'Mosquito', 'Mule', 'Narwhal', 'Newt', 'Nightingale', 'Octopus', 'Okapi',
        'Opossum', 'Oryx', 'Ostrich', 'Otter', 'Owl', 'Ox', 'Oyster', 'Panther',
        'Parrot', 'Partridge', 'Peafowl', 'Pelican', 'Penguin', 'Pheasant', 'Pig',
        'Pigeon', 'Pony', 'Porcupine', 'Porpoise', 'Prairie Dog', 'Quail', 'Quelea',
        'Rabbit', 'Raccoon', 'Rail', 'Ram', 'Rat', 'Raven', 'Red deer', 'Red panda',
        'Reindeer', 'Rhinoceros', 'Rook', 'Ruff', 'Salamander', 'Salmon', 'Sand Dollar',
        'Sandpiper', 'Sardine', 'Scorpion', 'Sea lion', 'Sea Urchin',
        'Seahorse', 'Seal', 'Shark', 'Sheep', 'Shrew', 'Shrimp', 'Skunk', 'Snail',
        'Snake', 'Spider', 'Squid', 'Squirrel', 'Starling', 'Stingray', 'Stinkbug',
        'Stork', 'Swallow', 'Swan', 'Tapir', 'Tarsier', 'Termite', 'Tiger', 'Toad',
        'Trout', 'Turkey', 'Turtle', 'Vicugna', 'Viper', 'Vulture', 'Wallaby',
        'Walrus', 'Wasp', 'Water buffalo', 'Weasel', 'Whale', 'Wolf', 'Wolverine',
        'Wombat', 'Woodcock', 'Woodpecker', 'Worm', 'Wren', 'Yak', 'Zebra',
    ];

    var adj = adjectives[_.random(adjectives.length)];
    var noun = animals[_.random(animals.length)];

    return (adj + '-' + noun).replace(/\s/,'').toLowerCase();
}
