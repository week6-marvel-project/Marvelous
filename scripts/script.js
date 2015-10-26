// Locally stored character data



var marvelApp = {};

marvelApp.characterData = [
  {
    "id": 1009282,
    "name": "Doctor Strange",
    "powers": "Energy projection and manipulation, matter transformation, animation of inanimate objects, teleportation, illusion-casting, mesmerism, thought projection, astral projection, dimensional travel, time travel and mental possession.",
    "firstAppearance": "Strange Tales #110 (1963)",
    "description": "As Master of the Mystic Arts and Sorcerer Supreme, Doctor Strange is typically the world's foremost expert on magic, but it wasn't always that way. Earlier in his life, he was an arrogant professional surgeon, but when a car accident took his fine motor skills away from him, he became desperate and searched the globe for a cure. One was offered, not to cure his hands, but instead to cure his soul."
  },
  {
    "id": 1009610,
    "name": "Spider-Man",
    "powers": "Ability to cling to most surfaces, superhuman strength, and roughly 15 times more agile than a regular human. Spider-sense enables him to evade most any injury.",
    "firstAppearance": "Amazing Fantasy #15 (1962)",
    "description": "Peter Parker was bitten by a radioactive spider while in high school, the spider bite caused him to develop powers and abilities similar to that of a spider. He was soon able to crawl up walls and sense imminent danger, and eventually even developed his own method of creating webs to swing from. Upon the death of his Uncle Ben due to Peter's indifference, Peter decided that 'With Great Power there must also come Great Responsibility', and thus became Spider-Man."
  },
  {
    "id": 1009652,
    "name": "Thanos",
    "powers": "Superhuman strength, endurance, reflexes, and agility. His skin is nearly invulnerable, particulary against heat, cold, electricity, radiation, toxins, aging, and disease. Can survive indefinitely without food or water.",
    "firstAppearance": "Iron Man #55 (1973)",
    "description": "Thanos was one of the last sons of A'Lars, progenitor of the second colony of Eternals on Titan, and Sui-San, the last survivor of the original settlement of Eternals on Titan. Born with grey, hide-like skin and a massive body due to being born with the Deviant Syndrome, Thanos was a morose child who became obsessed with the concept of death. Through bionic implementation and long hours of meditation, Thanos augmented his Eternal strengths and powers so that his abilities surpassed those of all other Titanian Eternals."
  },
  {
    "id": 1009187,
    "name": "Black Panther",
    "powers": "T'Challa's senes and physical attributes have been enhanced to superhuman levels by the heart-shaped herb.",
    "firstAppearance": "Fantastic Four Vol. 1 #52 (1966)",
    "description": "T'Challa is a brilliant tactician, strategist, scientist, tracker and a master of all forms of unarmed combat whose unique hybrid fighting style incorporates acrobatics and aspects of animal mimicry. T'Challa being a royal descendent of a warrior race is also a master of armed combat, able to use a variety of weapons but prefers unarmed combat. He is a master planner who always thinks several steps ahead and will go to extreme measures to achieve his goals and protect the kingdom of Wakanda."
  },
  {
    "id": 1009215,
    "name": "Luke Cage",
    "powers": "Superhumanly strong, able to lift/press approximately 25 tons and punch through barriers as thick as four-inch steel plate. His skin is steel-hard and his muscles and bone tissue super-dense; he can withstand conventional handgun fire at a range of four feet and cannot be cut by the sharpest of blades.",
    "firstAppearance": "Hero for Hire #1 (1972)",
    "description": "Born and raised in Harlem, New York, Carl Lucas spent his youth in a gang called The Rivals. With his best friend Willis Stryker, he fought the rival gang the Diablos and committed various petty thefts, often on behalf of deformed crimelord Sonny Caputo a.k.a. Hammer. In and out of juvenile homes throughout his teens, Lucas dreamed of becoming a major New York racketeer until he finally realized how his actions were hurting his family; he sought to better himself as an adult, finding legitimate employment. Meanwhile, Stryker rose through the ranks of crime, but the two men remained friends."
  },
  {
    "id": 1009378,
    "name": "Jessica Jones",
    "powers": "Superhuman strength. Enhanced level of resistance to physical injury. Ability to fly.",
    "firstAppearance": "Alias #1",
    "description": "Jessica Campbell was born and raised in Forrest Hills, New York. She had attended Midtown High School along with Peter Parker, aka Spider-Man, and they had shared several classes together. She developed a crush on Peter, but never told him. She followed him to the 'Experiments in Radio-Activity'. She was about to approach him, but he was bitten by the Radioactive Spider that granted him his super powers and left the building."
  },
  {
    "id": 1010776,
    "name": "Iron Fist",
    "powers": "Superhuman energy. Can heal himself of any injury or illness and project this power to heal others. Can sense mystic energy. Can fuse his consciousness with that of another person.",
    "firstAppearance": "Marvel Premiere #15 (1974)",
    "description": "Daniel Rand is the son of Wendell Rand, who had, as a youth, visited the mystic city of K'un-Lun, which materialized in the Himalayas once a decade; founded roughly a million years ago by extraterrestrials, K'un-Lun was co-ruled by the aliens' descendants and powerful beings called the Dragon Kings, who were themselves subject to the godlike sorcerer Master Khan. Rand had saved the life of K'un-Lun's ruler Lord Tuan, who adopted Rand as his heir, to the resentment of Tuan's son, Yu-Ti."
  },
  {
    "id": 1009365,
    "name": "Inhumans",
    "powers": "Varied",
    "firstAppearance": "Fantastic Four #45, 1965",
    "description": "At the beginning of the Kree-Skrull War, millions of years ago in Earth time, the alien Kree established discovered that sentient life on nearby Earth had genetic potential invested in it by the alien Celestials. Intrigued, the Kree began to experiment on Earth's then-primitive homo sapiens by splicing Eternals DNA into Cro-Magnons. Their test subjects, the Inhumans, went on to form a society of their own, which thrived in seclusion from the rest of humanity and developed advanced technology. Experiments with the mutagenic Terrigen Mist gave them various powers, but also caused lasting genetic damage and deformities. This led to a long-term selective breeding program to try to mitigate the effects of these mutations. Their city Attilan has frequently been relocated and, as of 2005 stories, rests in the oxygen-bearing Blue Area of the Moon."
  }
]

marvelApp.publicKey = '6e1457926542a2c765f64c571114fa4e';


marvelApp.getAndDisplayData = function(charNum){
        $.ajax({
          url: 'http://gateway.marvel.com/v1/public/characters/' + marvelApp.characterData[charNum].id,
          method: 'GET',
          dataType: 'json',
          data: {
            apikey: marvelApp.publicKey
          }
        }).then(function(res) {
          $('.charName h1').text(marvelApp.characterData[charNum].name);
          console.log(marvelApp.characterData[charNum].name);
          $('.charImage').attr('src', res.data.results[0].thumbnail.path + '.' + res.data.results[0].thumbnail.extension);
          $('.charDesc').text(marvelApp.characterData[charNum].description);
          $('.charPower').text(marvelApp.characterData[charNum].powers);
          $('.charAppear').text(marvelApp.characterData[charNum].firstAppearance);
          // console.log("Has appeared in " + res.data.results[0].comics.available + " Marvel comics.")
          marvelApp.getComics(charNum);
        });
};

marvelApp.getComics = function(charNum){ 
    $.ajax({
        url:'http://gateway.marvel.com/v1/public/characters/' + marvelApp.characterData[charNum].id + '/comics',
        method: 'GET',
        dataType: 'json',
        data:{
            apikey: marvelApp.publicKey,
            limit: 10
        }
    }).then(function(res){
        console.log(res.data.count);
      marvelApp.displayComics(res.data.results);
    });
};

marvelApp.displayComics = function(comics) {
    $('.charFlickity').empty();
    $.each(comics, function(i, item) {
        console.log(item.thumbnail.path + '.' + item.thumbnail.extension);
        var comicLink = $('<a>').attr('href', item.urls[0].url).attr('target', "_blank");
        var comicImage = $('<img>').attr('src', item.thumbnail.path + '.' + item.thumbnail.extension).addClass('flickityItem');
        comicLink.append(comicImage);
        $('.charFlickity').append(comicLink);
    });
    $('.charFlickity').flickity({
       cellAlign: 'center',
       imagesLoaded: true,
       contain: true,
       wrapAround: true,
       // lazyLoad: true
    });

};

// marvelApp.displayCharacters = function(characters) {
//     $.each(characters.results, function(i, value){
//                $('.comic-gallery').append(galleryCell); 
//   });
// };

marvelApp.init = function() {
  $('.doctorStrange').on('click', function() {
    marvelApp.getAndDisplayData(0);
    $('.modal').removeClass('hide');
  });
  $('.spiderMan').on('click', function() {
    marvelApp.getAndDisplayData(1);
    $('.modal').removeClass('hide');    
  });
  $('.thanos').on('click', function() {
    marvelApp.getAndDisplayData(2);
    $('.modal').removeClass('hide');
  });
  $('.blackPanther').on('click', function() {
    marvelApp.getAndDisplayData(3);
    $('.modal').removeClass('hide');
  });
  $('.lukeCage').on('click', function() {
    marvelApp.getAndDisplayData(4);
    $('.modal').removeClass('hide').addClass('lukeCageModal');
  });
  $('.jessicaJones').on('click', function() {
    marvelApp.getAndDisplayData(5);
    $('.modal').removeClass('hide');
  });
  $('.ironFist').on('click', function() {
    marvelApp.getAndDisplayData(6);
    $('.modal').removeClass('hide');
  });
  $('.inhumans').on('click', function() {
    marvelApp.getAndDisplayData(7);
    $('.modal').removeClass('hide').addClass('inhumansModal');
  });
  $('.fa-times-circle').on('click', function() {
    $('.modal').addClass('hide');
    location.reload(true);
  });
};

$(function(){
  marvelApp.init();  
});
