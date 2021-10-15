//Select 7 colors
let colors = ['Are we the most advanced form of life in the universe? Or are there other, far more superior life forms out there?',
'Is time only a concept made by humans? Is it something we restrict ourselves with?',
'Why do we all fear death?',
'What is consciousness? And are we sure we are the only ones capable of it?',
'Which is easier: to love or to hate? And why?',
'What is true love?',
'Why do we love to love?',
'Are humans doomed for extinction? If so, what would cause it eventually?',
'What does the world need more: wisdom or intelligence?',
'What would be the ultimate cause of the earth’s destruction?',
'Will the world ever be rid of religion? Or is it something we will always grasp for?',
'What’s your superpower? Our revealing new quiz will help you discover your hidden superpower and unlock your greatest gifts in life. Check it out here.',
'Why do we put so much value in physical beauty?',
'Should humans be completely free to do as they wish? Or do we always need a limit for it?',
'Will the world ever be completely globalized? No nations, different government systems – just one global enterprise?',
'Do we control our own technology or is it controlling us?',
'Why does the concept of power thrill humans so much?',
'Why do we feel the need to control everything?',
'Are we truly autonomous thinkers, or are our thoughts controlled by something else?',
'Has education become too formal? Will the world benefit more from a “free” method of education?',
'What will make the world better: stricter laws or no laws at all?',
'Why do we all have different levels of intellectual capacity?',
'Is immigration a restrictive process we should all get rid of?',
'Why do we have dreams? Do they truly have a deeper meaning? Are they a sign for the future?',
'Is perfection really unachievable? As humans, can we ever achieve perfection?',
'Why do we still have distinctions of rich and poor in our modern world?',
'Is there a meaning to all life? What is it?',
'What does having a good life mean?',
'Why do we lie? Is it something we can live without doing?',
'If humans will go extinct, which animal would replace us as superior beings on this planet?',
'Why do we need validation so much?',
'Would you have rather not tried, than failed?',
'Does such a thing as ‘fate’ exist? Or does everything happen randomly?',
'What should be the goal of humanity?',
'What is the single most important experience we all need to have in our lifetime?',
'Would you rather 100 years of comfort and security, or would you live 50 years full of fun, laughter, and adventure?',
'Simple questions you need to ask yourself all the time',
'When your children grow up, do you want them to be successful, rich, or happy?',
'Have often do you tell people you love, that you love them?',
'Have you cried recently?',
'What was the last fun thing you did, that you lost track of time?',
'If you have a friend who talks to you the way you talk to your family, would you still be friends with them?',
'Do you consider your job as “work” or a privilege?',
'What are you holding on so tightly to, that you need to let go?',
'Who is writing the story of your life?',
'What was the last thing you spent on, that felt truly worth it?',
'What was the most significant thing you did in the last 24 hours?',
'When was the last time you felt most grateful?',
'If your loved ones are in trouble, do they ever come to you for help?',
'What are your goals? Are you doing the necessary things to achieve them?',
'When was the last time you had a deep connection with someone?',
'When was the last time you laughed so hard?',
'Do you often feel gratitude? Or do you mostly feel envious?',
'If you could sum up your life story in one sentence, what would it be?',
'Would you consider yourself normal or interesting?',
'Do you often wish you had more time to do the things you’ve always wanted? If so, how come you haven’t made the time?',
'In one word, what do you live for?',
'What do you need to pay more attention to in your life?',
'Do you expect a lot from people in your life?',
'Are you often disappointed?',
'What is the one thing that overwhelms you?',
'Would you sacrifice yourself for a complete stranger?',
'Questions that will change the way you’re living right now',
'What makes you lose sleep?',
'How many people have you hurt in your life?',
'What was the last good deed you did for someone you didn’t know?',
'Do you usually learn from your mistakes? Or do you beat yourself up about it?',
'If you die suddenly, what will your family find in your belongings? How would they remember you?',
'Are you doing things to be a better you? Or someone people will like better?',
'What choices have you made in your life that you are deeply ashamed of?',
'Are you a supportive friend? Or are you jealous and petty?',
'What are you doing to benefit the world around you?',
'Does your life have meaning?',
'When are you good enough? At which point are you good enough to accept yourself?',
'What is the one thing that stands in between you and complete happiness?',
'If your home catches on fire, and you only have enough time to grab one single thing, what would it be?',
'Have you ever felt like your life is being complicated by unnecessary things? Why is it hard to let them go?',
'How often do your biggest fears come true? Why do you think so?',
'Deep questions to start conversations with yourself',
'What is humanity’s biggest potential waste?',
'When do you feel truly alive? Should you feel more of this? How?',
'Do you currently have a good work-life balance? If not, how can you achieve this?',
'When you’re old and gray, what would you look back to as the greatest achievement of your life?',
'Do you truly know yourself?',
'Are you doing things only because society tells you you should? Or are you doing things because they truly make you happy?',
'What is the meaning of success to you?',
'Do you consider your life’s work worthy enough?',
'If you could turn back time, what choices would you do differently?',
'What do you consider the biggest mistake of your life is?',
'What advice would you give your 8-year old self?',
'If you could measure your success, how high or low will it be right now?',
'What is the most important thing for you: love or success?',
'If you could change your career tomorrow, what would you choose?',
'Would you rather be successful or popular?',
'Which do you crave more riches or power?',
'What is the one thing that drives you?',
'What childhood trauma affects all your choices today?',
'If you can only impart one lesson to your future children, what would it be?',
'Where do you see yourself happiest?',
'Have you made more mistakes in your life than the right choices?',
'Would you ever consider having a plant-based diet?',
'Do you do things with intention? Or are you simply going through the motions of mundane life?',
'Which do you value more in people, kindness or wisdom?',
'If you could be smart or beautiful, which one would you be?',
'Would you rather be more apathetic or more emotional?',
'Is it important to be more selfish in life?',
'Do you consider yourself ambitious? Should you be?',
'Would you rather live fully but die young or live longer but not really living?',
'Would your 13-year old self be proud of you right now?',
'What in do you find most beautiful in the world or in your life right now?',
'What is the ugliest aspect of your life? What can you do to change it?',
'How do you let go of something you love but no longer makes you better?',
'How do you manage stress?',
'If you die tomorrow, would you consider your life well-spent?',
'Deep existential questions',
'What was there before the universe existed?',
'Do you believe in multiple alternate universes?',
'It is theorized that humans only have access to a small percentage of our brain’s capacity. What would happen if we can access all of it?',
'If an alternate universe or more exist, what would the repercussions be of crossing them?',
'How can we get rid of time as a limiting concept?',
'Can we even fathom the depth and vastness of what the meaning of the universe is?',
'Are we from Mars?',
'Why are we the only ones capable of consciousness?',
'What purpose do we humans serve as a species?',
'What is reality?',
'Can we colonize space?',
'Why haven’t we come across extra-terrestrial species yet?',
'Is Mathematics the universal truth? If so, are we the first ones to discover it?',
'Is there an order to the universe or is everything completely random?',
'Are all living beings capable of love? Or is it something only humans feel fully outside of survival?',
'What does it mean to be human?',
'If you were given the chance to travel to another planet without any chance of ever coming back to earth, would you go?',
'If you could invite three people to your family dinner, who would they be? How will the dinner proceed?',
'If you could live anyone else’s life for 24 hours, whose life would you live?',
'If you could live life without any more challenges or obstacles, would you do it?',
'Mind-boggling questions',
'Is the color orange based on the fruit or is the fruit orange named after the color?',
'Do fish ever get thirsty?',
'Which came first, the chicken or the egg?',
'If you pinch yourself and it hurts, are you strong or are you weak?',
'What language do deaf people think in?',
'How old would you be if you didn’t know how old you are?',
'How do you know that your memories are true?',
'If the universe is expanding, what is it expanding to?',
'How many wild birds do you think you’ve seen twice?',
'Where do your thoughts actually originate?',
'How can a “slim chance” and a “fat chance” mean the same thing?',
'What do fish drink?',
'Why do they call it the “restroom” if it’s not for resting?',
'What did the first person who discovered milk think they were doing?',
'Why is it called a building if it’s already built?',
'Why is the slowest part of the day called rush hour?',
'Why do your nose run and your feet smell?',
'Did Noah have woodpeckers in his arc? If so, where did he keep them?',
'Questions that will open your mind',
'Which country will you move to if you have the resources right now?',
'Is there something you’ve always wanted to learn? What’s stopping you?',
'What question would you like to ask someone which you’re afraid of the answer?',
'What parts of your life are you deeply unsatisfied with?',
'What social issue resonates most with you?',
'If you have the ability to never fail, what are the things you would absolutely do?',
'What is the best way to resolve conflict? Do you often do it?',
'Is there any value at all by always having the last word?',
'Questions about morality and ethics',
'Do animals have a moral code?',
'Will the taking of human life ever be justifiable?',
'Is religion the reason for human being’s corruption?',
'What human rights should everyone have? Will these rights change as we age?',
'If you have to defend our entire existence, what would your argument be for our continued survival?',
'Where does the concept of justice come from? Is it man-made or natural to every living being?',
'Do guns kill people or protect them?',
'What is the root of all these psychologically-stemmed attacks to the public?',
'Is our society teaching us the wrong things?',
'Is it our moral responsibility to take care of animals and the earth in general?',
'Are we the biggest threat to our own species?',
'What can we teach our students so our future will have more peace?',
'If we didn’t have any rules, will the world turn into chaos or peace?',
'Do you think euthanasia on human beings should be legal? Why or why not?',
'If animals or plants are discovered to be conscious about their life and their death, will things change? Should they?',
'Is it a good deed if you do it not for kindness but for business?',
'Should there be a death penalty all around the world? Why or why not?',
'Is our concept of “right” really right? What if we have it wrong?',
'What if scientists can accurately know who will likely do a crime? Will you arrest these people even if they haven’t done anything wrong yet?',
'Is it right to deny people from entering your country to protect your interests even if it means death for them?',
'Is it possible to end poverty? If so, how?',
'Is it easier to love or to hate? And why?',
'If you could fix any problem in the world, what would it be and why?',
'Is there a line between helping people and helping them help themselves? How do you find that balance?',
'What is the single most defining event in the history of the human race and why?'];



//change the background of canvas when button is clicked
let button = document.getElementById('button');


let button_next = document.getElementById('button_next');

let button_previous = document.getElementById('button_previous');

let length = parseInt(colors.length)

button_next.addEventListener('click', function(){
    
	var index_holder = document.getElementById('index_holder');
	
    var index = parseInt(index_holder.innerText);
	index = index % length
	index = index+1 
	
	var canvas = document.getElementById('canvas');
	
	var index_holder = document.getElementById('index_holder');
    //grab the canvas
    
	
	canvas.innerText = colors[index] +  "\n"   + index + " out of " + colors.length
	
	index_holder.innerText = index
	
  
})

button_previous.addEventListener('click', function(){
    
	var index_holder = document.getElementById('index_holder');
	
    var index = parseInt(index_holder.innerText);
	index = index % length
	index = index-1 
	
	index = (index >= 0) ? index : length-1;
	
	var canvas = document.getElementById('canvas');
	
	var index_holder = document.getElementById('index_holder');
    //grab the canvas
    
	
	canvas.innerText = colors[index] +  "\n"   + index + " out of " + colors.length
	
	index_holder.innerText = index
	
  
})







button.addEventListener('click', function(){
    //select a random number between 0 - 6
    var index = parseInt((Math.random()*colors.length));
	
	
	var canvas = document.getElementById('canvas');
	
	var index_holder = document.getElementById('index_holder');
    //grab the canvas
    
	
	canvas.innerText = colors[index] +  "\n"   + index + " out of " + colors.length
	
	index_holder.innerText = index
	
  
})
