const characters = [
    {
        id: 'ironman',
        name: 'Iron Man',
        realName: 'Tony Stark',
        bio: 'Genius. Billionaire. Playboy. Philanthropist. The armored Avenger who started it all, using his tech to protect the world.',
        firstMovie: 'Iron Man (2008)',
        firstComic: 'Tales of Suspense #39 (1963)',
        image: 'assets/ironman.png',
        movieImage: 'assets/ironman_movie.png'
    },
    {
        id: 'cap',
        name: 'Captain America',
        realName: 'Steve Rogers',
        bio: 'The First Avenger. A recipient of the Super Soldier serum, fighting for liberty and justice.',
        firstMovie: 'Captain America: The First Avenger (2011)',
        firstComic: 'Captain America Comics #1 (1941)',
        image: 'assets/cap.png',
        movieImage: 'assets/cap_movie.png'
    },
    {
        id: 'thor',
        name: 'Thor',
        realName: 'Thor Odinson',
        bio: 'The God of Thunder. Wielder of Mjolnir and Stormbreaker, sworn protector of the Nine Realms.',
        firstMovie: 'Thor (2011)',
        firstComic: 'Journey into Mystery #83 (1962)',
        image: 'assets/thor.png',
        movieImage: 'assets/thor_movie.png'
    },
    {
        id: 'hulk',
        name: 'Hulk',
        realName: 'Bruce Banner',
        bio: 'A brilliant scientist who transforms into a giant rage monster when angry. The strongest one there is.',
        firstMovie: 'Hulk (2003) / The Incredible Hulk (MCU 2008)',
        firstComic: 'The Incredible Hulk #1 (1962)',
        image: 'assets/hulk.png',
        movieImage: 'assets/hulk_movie.png'
    },
    {
        id: 'spiderman',
        name: 'Spider-Man',
        realName: 'Peter Parker',
        bio: 'Your friendly neighborhood Spider-Man. A high school student bitten by a radioactive spider.',
        firstMovie: 'Iron Man 2 (Cameo) / Captain America: Civil War (2016)',
        firstComic: 'Amazing Fantasy #15 (1962)',
        image: 'assets/spiderman.png',
        movieImage: 'assets/spiderman_movie.png'
    },
    {
        id: 'strange',
        name: 'Doctor Strange',
        realName: 'Stephen Strange',
        bio: 'The Sorcerer Supreme. A former neurosurgeon who guards the world against magical and mystical threats.',
        firstMovie: 'Doctor Strange (2016)',
        firstComic: 'Strange Tales #110 (1963)',
        image: 'assets/strange.png',
        movieImage: 'assets/strange_movie.png'
    },
    {
        id: 'blackwidow',
        name: 'Black Widow',
        realName: 'Natasha Romanoff',
        bio: 'A master spy and assassin. Changed her ledgers to become a key member of the Avengers.',
        firstMovie: 'Iron Man 2 (2010)',
        firstComic: 'Tales of Suspense #52 (1964)',
        image: 'assets/blackwidow.png',
        movieImage: 'assets/blackwidow_movie.png'
    },
    {
        id: 'wasp',
        name: 'Wasp',
        realName: 'Hope van Dyne',
        bio: 'Wielder of the Wasp suit with shrinking and flying capabilities. Partner to Ant-Man.',
        firstMovie: 'Ant-Man (2015)',
        firstComic: 'Tales to Astonish #44 (1963) (Janet)',
        image: 'assets/wasp.png',
        movieImage: 'assets/wasp_movie.png'
    },
    {
        id: 'hawkeye',
        name: 'Hawkeye',
        realName: 'Clint Barton',
        bio: 'The world\'s greatest marksman. He never misses.',
        firstMovie: 'Thor (2011)',
        firstComic: 'Tales of Suspense #57 (1964)',
        image: 'assets/hawkeye.png',
        movieImage: 'assets/hawkeye_movie.png'
    },
    {
        id: 'falcon',
        name: 'Falcon',
        realName: 'Sam Wilson',
        bio: 'A former pararescueman who uses a specialized wing suit. The new Captain America.',
        firstMovie: 'Captain America: The Winter Soldier (2014)',
        firstComic: 'Captain America #117 (1969)',
        image: 'assets/falcon.png',
        movieImage: 'assets/falcon_movie.png'
    },
    {
        id: 'blackpanther',
        name: 'Black Panther',
        realName: "T'Challa",
        bio: 'King of Wakanda. Wielder of the vibranium Black Panther habit. Protector of his nation.',
        firstMovie: 'Captain America: Civil War (2016)',
        firstComic: 'Fantastic Four #52 (1966)',
        image: 'assets/blackpanther.png',
        movieImage: 'assets/black-panther-movie.webp'
    },
    {
        id: 'wintersoldier',
        name: 'Winter Soldier',
        realName: 'Bucky Barnes',
        bio: 'A World War II veteran brainwashed into becoming a legendary assassin. The oldest friend of Captain America.',
        firstMovie: 'Captain America: The First Avenger (2011)',
        firstComic: 'Captain America Comics #1 (1941)',
        image: 'assets/wintersoldiercomic.webp',
        movieImage: 'assets/Winter-Soldier-Bucky-Barnes-movie.webp'
    },
    {
        id: 'warmachine',
        name: 'War Machine',
        realName: 'James Rhodes',
        bio: 'Air Force Colonel and Tony Stark\'s best friend. Pilots the heavily armed War Machine armor.',
        firstMovie: 'Iron Man (2008)',
        firstComic: 'Iron Man #118 (1979)',
        image: 'assets/War-Machine-Comics.webp',
        movieImage: 'assets/war-machine-movie.webp'
    },
    {
        id: 'antman',
        name: 'Ant-Man',
        realName: 'Scott Lang',
        bio: 'Master thief turned hero. Uses Pym Particles to shrink and communicate with ants.',
        firstMovie: 'Ant-Man (2015)',
        firstComic: 'Avengers #181 (1979)',
        image: 'assets/antman.webp',
        movieImage: 'assets/ant-man-movie.webp'
    },
    {
        id: 'thanos',
        name: 'Thanos',
        realName: 'Thanos',
        bio: 'The Mad Titan. Obsessed with bringing balance to the universe by wiping out half of all life.',
        firstMovie: 'The Avengers (2012) (Cameo)',
        firstComic: 'The Invincible Iron Man #55 (1973)',
        image: 'assets/thanos.png',
        movieImage: 'assets/thanos_movie.png'
    },
    {
        id: 'ultron',
        name: 'Ultron',
        realName: 'Ultron',
        bio: 'A sentient AI created to protect the world, who decided the only path to peace was humanity\'s extinction.',
        firstMovie: 'Avengers: Age of Ultron (2015)',
        firstComic: 'Avengers #54 (1968)',
        image: 'assets/ultron.png',
        movieImage: 'assets/ultron_movie.png'
    },
    {
        id: 'loki',
        name: 'Loki',
        realName: 'Loki Laufeyson',
        bio: 'The God of Mischief. Thor\'s adopted brother, a master of magic and deception.',
        firstMovie: 'Thor (2011)',
        firstComic: 'Journey into Mystery #85 (1962)',
        image: 'assets/loki.png',
        movieImage: 'assets/loki_movie.png'
    },
    {
        id: 'hela',
        name: 'Hela',
        realName: 'Hela Odinsdottir',
        bio: 'The Goddess of Death. Thor\'s older sister, seeking to reclaim Asgard and conquer the realms.',
        firstMovie: 'Thor: Ragnarok (2017)',
        firstComic: 'Journey into Mystery #102 (1964)',
        image: 'assets/hela.png',
        movieImage: 'assets/hela_movie.png'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const isDetailsPage = path.includes('character.html');
    const isHeroesPage = path.includes('heroes.html');
    const isVillainsPage = path.includes('villains.html');

    if (isDetailsPage) {
        loadDetailsPage(characters);
    } else if (isHeroesPage) {
        // Filter for heroes
        const villains = ['thanos', 'ultron', 'loki', 'hela'];
        const heroesOnly = characters.filter(c => !villains.includes(c.id));
        loadGridPage(heroesOnly);
    } else if (isVillainsPage) {
        // Filter for villains
        const villains = ['thanos', 'ultron', 'loki', 'hela'];
        const villainsOnly = characters.filter(c => villains.includes(c.id));
        loadGridPage(villainsOnly);
    }
    // Landing page (index.html) does not require JS rendering
});

function loadGridPage(chars) {
    const grid = document.getElementById('character-grid');
    if (!grid) return;

    chars.forEach(char => {
        const card = document.createElement('div');
        card.classList.add('character-card');
        card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${char.image}" alt="${char.name}" loading="lazy">
            </div>
            <div class="card-info">
                <h2>${char.name}</h2>
                <p>${char.realName}</p>
            </div>
        `;
        // Navigate to character.html with ID param
        card.addEventListener('click', () => {
            window.location.href = `character.html?id=${char.id}`;
        });
        grid.appendChild(card);
    });
}

function loadDetailsPage(chars) {
    const params = new URLSearchParams(window.location.search);
    const charId = params.get('id');
    const char = chars.find(c => c.id === charId);

    if (!char) {
        document.body.innerHTML = '<h1 style="color:white; text-align:center; margin-top:50px;">CHARACTER NOT FOUND // ACCESS DENIED</h1>';
        return;
    }

    // Populate Data
    document.title = `Database // ${char.name.toUpperCase()}`;
    document.getElementById('char-name').textContent = char.name;
    document.getElementById('char-id').textContent = `MVL-${Math.floor(Math.random() * 9000) + 1000}`; // Random ID for effect
    document.getElementById('char-bio').textContent = char.bio;
    document.getElementById('char-realname').textContent = char.realName;
    document.getElementById('char-movie').textContent = char.firstMovie;
    document.getElementById('char-comic').textContent = char.firstComic;

    const imgElement = document.getElementById('char-image');
    // Use the explicitly defined movieImage, or fallback to standard image
    imgElement.src = char.movieImage || char.image;
    imgElement.alt = char.name + ' (Movie Version)';
    imgElement.onerror = () => {
        // Fallback if movie image fails to load
        imgElement.src = char.image;
    };
}
