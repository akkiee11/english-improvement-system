const words = [
    [
        'Hey Its nice to meet you',
        'Hi My pleasure to meet you',
        'How are you',
        'I am good and what about you',
        'I am also good', 
        'What do you do for living',
        'I work at local school teaching English And you',
        'I am also an English teacher but I am currently out of work',
        'Sorry to hear that It has been really nice talking to you',
        'Yes It was a great pleasure to meeting you'
  ],
  
  [
       'Can I help you',
       'Yes I want to buy a few black pens please',
       'How many pens you need',
       'Five Please How much Does each cost',
       'Three rupees each',
       'Oh I am not sure if I have enough money',
       'Ok fine',
       'Yes'
  ],
  
  [
      'Hi How are you',
      'I am fine',
      'You look worried Is there any problem You can share it with me',
      'Actually I am worried about my exams There is only one week left for it I think I have not    studied anything I am feeling nervous',
  'Oh Just do your studies',
  'That is my problem I am unable to concentrate',
  'These all happened with me too And hence I started meditating It had a radical effect on my concentration power',
  'Thank you so much for your advice I will surely try to follow it',
  'Ok bye',
  'bye'
  ],
  
  [
  'Hey hi',
  'Hello',
  'How are you',
  'Fine. And what about you',
  'I am also good',
  'I am going to join Basketball club from tomorrow',
  'Nice',
  'Yes, I love Basketball ',
  'What about your hobbies',
  'I like to play Basketball so much',
  'Oh Basketball. Nice.',
  'What about your hobbies',
  'I love playing guitar. I am learning western style in guitar',
  'Oh lovely ',
  'Yup I also love singing ',
  'Nice that is great',
  'Yeah',
  'Ok then bye',
  
  ],


  [

    'Hey, how are you?',
    'I am fine, and what about you?',
    'I am not so good. I am worried about my exams',
    'It is very common. You are serious about it, so you are worried',
    'Dont philosophize, please. I am really afraid as I have no good preparation for English. In a short time it is very difficult for me to make a success in English',
    'I think your English learning method is not so good. You should learn some basic rules of English if you want to do well in English',
    'You are right. Besides, I should improve my writing skill to do well in English',
    'Thats good.Try your best',
    'Yeah, all right',
    'ok then by',
    'bye by'
    
    ],
    
    
    
    [
    
    'Hello!!!',
    'Hey',
    'Where are you going?',
    'I am going to the mayor for requesting him to take necessary step against environment pollution',
    'Environment pollution has become a great problem in our life',
    'You are right. Though environment helps us to exit, We dont bother of it. We are polluting it indiscriminately',
    'People are not aware of it. The throw their waste here and there',
    'Mills and factories are polluting the environment through their toxic chemicals',
    'Too much vehicles are polluting air by smoke and fumes',
    'Farmers use fertilizers and pesticides for more production.But this chemicals get mixed with pond and river water',
    'Every day we use million tons of fuel for cooking and other purposes. These are also responsible for pollution',
    'But we cannot live without cooking food',
    'You are right. But we should be conscious of it',
    'So , what should we do?',
    'We should take care of our environment. Its true that we cannot stop pollution for good',
    'I agree with you. Ok see you later'
    
    ],
    
    
    
    [
    
    'This movie was superb!',
    'Ya...its really nice',
    'Ya.. I really like the action sequences of that him',
    'Fight was ok but I like the comedy scenes of that film',
    'But, fight...was really superb. I like the scene when hero fights with the anti-hero',
    'Ya, that was really nice',
    'Ya..that movie was overall nice',
    'Hmm... I agree with you',
    'Ya. I will come with bat and ball. You go and call some friends',
    'ok'
    
    ],
    
    
    
    [
    
    'Hi bro',
    'Hello bro',
    'I am really very tamed regarding this covid-19',
    'Yes bro! me should all to strictly maintain the precautions',
    'Yes! they only we can be again the same',
    'Yes! and very should maintain social distancing',
    'Yes! and should sanitize their hands many time',
    'You are completely correct friend'
    
    ],
    
    
    
    [
    
    'Cleanliness is one of the most important quality, isnt it?',
    'Yes, I agree with you',
    'It has so many benefits!',
    'True! It makes you attractive. People like befriending only clean and hygenic people',
    'Not only attraction, It helps us stay healthy',
    'During this pandemic cleanliness is the only way to safe from viruses',
    'Yes, we must make it our top priority',
    'I agree with you'
    
    ],
    
    
    
    [
    
    'Hey! how are you?',
    'I am fine. Whats up to you?',
    'I am also fine by the grace of almighty. What are you thinking now?',
    'I am recollecting the incident about how I enjoyed the summer vacation',
    'Would you please describe it?',
    'Yes, why not? I went to my village home at Mymensingh. My heart leapt with joy when I met some known faces waiting for me',
    'Were they very happy to find you among them?',
    'Certainly! They were very happy to find me among them. They welcomed me heartly. I was also pleased with their rustic simplicity'
    
    ],
    
    
    
    [
    
    'Hello, How are you? Its been a long time since we last met',
    'Oh! I have got a new job now and doing great. How about you?',
    'Not too bad',
    'How often do you eat at this cafe?',
    'This is my first time. My friends kept telling me the food was great. So, I decided to try it tonight. What have you been up to?',
    'I have been so busy with my new job that I have not had the time to do much else but otherwise, me and the family are all fine',
    'Well, I hope you and your family have a lovely meal',
    'Yes, you too'
    
    ],
    
    
    
    [
    
    'Hey! What do you like to eat for lunch?',
    'I like to eat hamburgers and pizza',
    'What do you like to eat Inbar?',
    'I eat healthy food. I eat meat,fish,and vegetables',
    'Do you like healthy food?',
    'No, I dont I like junk food. I like chips and chocolate',
    'Yes, I do. I always eat junk food after lunch'
    
    ]
    
    
    
    [
    
    'What did you do last night?',
    'I went to the cinema with my mother',
    'What did you watch?',
    'I enjoyed it very much. It an amazing film',
    'Do you recommend me to see it?',
    'Definitely. You cant miss it',
    'I think its the most beautiful film I have ever seen',
    'I am sure you will like it'
    
    ],
    
    
    
    [
    
    'Hello! I am liya. Who are you?',
    'Hello! I am keya. I am a new student here',
    'Where do you come from,keya?',
    'I come from africa. And you?',
    'I am from india',
    'Ok, thats nice',
    'yeah',
    'bye, see you soon dear',
    'ya, bye by'
    
    ],
    
    
    
    [
    
    'How are you friend?',
    'I am very excited and you?',
    'Fine. But why you are excited?',
    'My favourite team won the world cup football 2018',
    'Do you like football match?',
    'Yes, I like it most',
    'Dont you like it',
    'Of course, I like it',
    'Did you watch the match last night?',
    'sure!'
    
    ],
    
    
    
    [
    
    'What would like to know?',
    'Can you tell me how the telephone banking services work?',
    'You can do all your day-to-day banking over the telephone, 24 hours a day',
    'Thats great. How do I access my account?',
    'Just call the bank, key in your PIN number and listen to the menu of options available',
    'Thank you',
    'Welcome'
    
    ],
    
    
    
    [
    
    'Well Rohit Sharma, I hear you are taking part in the speaking competition',
    'Yes sir. And I came to ask to give me some hints on the art of public speaking',
    'With pleasure, Rohit. Have you prepared your speech?',
    'Yes sir. And now I am learning it by heart',
    'Oh! But that is a great mistake. Always carefully prepare what you want to say, but never learn it off by heart'
    
    ],
    
    
    
    [
    
    'Hi friend, where are you going?',
    'I am going to a book shop',
    'Do you want to buy any book?',
    'Yes, you are right. Very often, I buy different kind of books',
    'like to read books very much',
    'It is your hobby?',
    'Yes, it is my hobby',
    'Which book will you buy today?',
    'I will buy Biswanabai by Golam Mostafa',
    'O i see'
    
    ],
    
    
    
    [
    
    'Excuse me, Sir. Can i take your order?',
    'Yes, just give me a glass of orange juice. Thank you',
    'Make it two glasses of orange juice, please',
    'What did you think about the movie?',
    'I swear I did not expect it to be so lame',
    'Expect what?',
    'The movie that we watched just now. I did not expect that',
    'Yes. I was thinking it would be like as good as jake',
    'Yeah bye'
    
    ],
    
    
    
    [
    
    'Hello, how are you?',
    'What did you say?',
    'Werent you listening? I said How are you?',
    'I am ok, what about you?',
    'Pretty good. Where are you going?',
    'Ahhh, thats my secret! Why do you want to know?',
    'Can you come with me?',
    'Yes'
    
    ],
    
    
    
    [
    
    'Hello my friend. You seem to be looking for something',
    'Yes I am. I want to hear some live music',
    'Live music? Lord knows, there are plenty of them here on 7th street! Of course',
    'Great! How can I get into that place?',
    'If you could donate $1, then I will tell you',
    'Okay, here is $1',
    'God bless you',
    'Yeah by'
    
    ],
    
    
    
    [
    
    'Hi how are you?',
    'Not bad what about you how are you doing?',
    'Fine but really boared during this lockdown!. I wish corona never existed',
    'boaring... but I am having fun out here, without wasting the time that you get at home you can actually learn a lot of thing that may really help you in the future',
    'I have learnt lot of things which has builted responsibility in me',
    'Oh I see. Thats really great',
    'Yeah, Thank you',
    'welcome bye',
    'bye by'
    
    ],
    
    
    
    [
    
    'Well if you are love your passion so much why dont you just quit your job?',
    'What I do for money?',
    'Earn from your passion',
    'Its hobby, no ones gonna pay me to write poems till I turn from amateur to pro',
    'Wow! How can you fail with that kind of attitude',
    'I did tell myself that after few years, I am gonna quit but its hard',
    'Yeah you are right'
    
    ],
    
    
    
    [
    
    'Thats a better idea indeed. I really like your thinking friend',
    'Yes, I also agree with you Arabe',
    'Okay, then lets finish here today I got a go. See you soon',
    'Okay, see you',
    'Okay, see you again. Bye'
    
    ],
    
    
    
    [
    
    'Hello dear, how are you?',
    'Hii! I am doing fine. Thanks. What about you?',
    'I am also fine. Well you have taken your internet connection?',
    'Yes, I have already taken. I am using a mobile SIM for browsing internet',
    'Good, what is your idea about using the internet?',
    'In fact mobile and internet are now an integrated part of our modern life',
    'You are right'
    
    ],
    
    
    
    [
    
    'Hi Friend',
    'Oh, Hi dear',
    'Why are you wearing a mask?',
    'I have become sick because I am sensitive about cleanliness',
    'Its natural due to the rapid increase in pollution',
    'We should maintain cleanliness in our surrounding as well',
    'Yeah, by this it would be beneficial to our country as whole',
    'Yup, that is right'
    
    ],
    
    
    
    [
    
    'Hi, how are you doing?',
    'I am fine. How about yourself?',
    'I am pretty good. Thanks for asking',
    'No problem. So how have you ?',
    'I have been good. I am in school right now',
    'what school do you go to?',
    'I go to PCC',
    'Oh good'
    
    ],
    
    
    
    [
    
    'How are you doing today?',
    'I am doing great. What about you?',
    'I am absolutely lovely, thank you',
    'Everything been good with you?',
    'I havent been better. How about yourself?',
    'I started school recently',
    'Where are you going to school?',
    'I am going to PCC',
    'How do you like it so far?',
    'I like it so far',
    'I wish you luck',
    'Thanks a lot'
    
    ],
    
    
    
    [
    
    'Its an ugly day today',
    'I know. I think it may rain',
    'Its the middle of summer, it shouldnt rain today',
    'That would be weird',
    'Yeah, especially since its ninety degrees outside',
    'I know, it would be horrible if it rained',
    'Yes, it would be',
    'I really wish it wasnt so hot every day',
    'Me too. I cant wait until winter',
    'I like winter too, but sometimes it gets too cold',
    'I had rather be cold than hot',
    'Me too'
    
    ],
    
    
    
    [
    
    'It doesnt look very nice outside today',
    'You are right. I think its going to rain later',
    'In the middle of the summer, it shouldnt be raining',
    'That wouldnt seem right',
    'Considering that its over ninety degrees outsides, that would be weird',
    'Exactly, it wouldnt be nice if it started raining. Its too hot',
    'I know, you are absolutely right',
    'I wish it would cool off one day',
    'Thats how I feel, I want winter to come soon',
    'I enjoy the winter, but it gets really cold sometimes',
    'I know what you mean',
    'Thats exactly how I feel'
    
    ],
    
    
    
    [
    
    'Its such a nice day',
    'Yes, it is',
    'It looks like it may rain soon',
    'Yes, and I hope that it does',
    'Why is that?',
    'I really love how rain clears the air',
    'Me too. It always smells to fresh after it rains',
    'Yes, but I love the night air after it rains',
    'Really? Why is it?',
    'Because you can see the stars perfectly',
    'I really hope it rains today',
    'Yeah, me too'
    
    ],
    
    
    
    [
    
    'Isnt it a nice day?',
    'It really is',
    'It seems that it may rain today',
    'Hopefully it will',
    'How come?',
    'I like how clear the sky gets after it rains',
    'I feel the same way. It smells so good after it rains',
    'Really? Why?',
    'The stars look so much closer after it rains',
    'I really want it to rain today',
    'Yeah, so do I'
    
    ],
    
    
    
    [
    
    'Dont you think its nice out?',
    'Yes, I think so too',
    'I think that its going to rain',
    'I hope that it does rain',
    'You like the rain?',
    'The sky looks so clean after it rains. I love it',
    'I understand',
    'I love most how it is at night after it rains',
    'How come?',
    'You can see the stars to much more clearly after it rains',
    'I would love for it to rain today',
    'I would too',
    
    ],
    
    
    
    [
    
    'Hello, may I speak to Alice please?',
    'This is she. Hows it going?',
    'I have been trying to call you all day',
    'Sorry about that',
    'Its ok',
    'So what were you calling me about?',
    'Oh, I just wanted to see if you wanted to hang out tomorrow',
    'Sure, what did you want to do?',
    'May be we can go see a movie',
    'That sounds like fun. Lets do it',
    'See you then',
    'Goodbye'
    
    ],
    
    
    
    [
    
    'Hi, how are you. Is Alice there?',
    'Speaking. Whats up?',
    'Why havent you answered the phone?',
    'My bad, I had chores to do',
    'Thats all right',
    'What was the reason for your call?',
    'I want to do something tomorrow with you',
    'Sounds good. What did you have in mind?',
    'I was thinking about seeing a movie',
    'Okay, lets go see a movie',
    'Until then',
    'Talk to you later'
    
    ],
    
    
    
    [
    
    'Have ypu seen the new girl in school?',
    'No, I havent',
    'Shes really pretty',
    'Describe her to me',
    'Shes not too tall',
    'Well, how tall is she?',
    'Shes about five feet even',
    'What does she look like, though?',
    'She has pretty light brown eye',
    'I may know which girl you are talking about',
    'So you have seen her around?',
    'Yes, I have'
    
    ],
    
    
    
    [
    
    'Theres a new girl in school, have you seen her yet?',
    'I havent seen her yet?',
    'I think that she is very pretty',
    'Tell me how she looks',
    'Shes kind of short',
    'OK',
    'The first thing eye noticed that her beautiful eyes',
    'OK, I think I will see him soon',
    'Ohk bye'
    
    ],
    
    
    
    [
    
    'Why werent you at school yesterday?',
    'I wasnt really feeling well',
    'What was wrong with yoy?',
    'My stomach was upset',
    'Do you feel better now?',
    'Yeah. I am feeling good now',
    'Ok, thats great',
    'yeah bye'
    
    ],
    
    
    
    [
    
    'What reason do you have for missing school?',
    'I was sick',
    'How were you sick?',
    'I had a stomachache',
    'Did it get any better?',
    'I am still feeling under the weather',
    'Would you like anything fr your stomach?',
    'I took something earlier',
    'Get better',
    'Thanks a lot'
    
    ],
    
    
    
    [
    
    'Did you hear the good news?',
    'No, I havent',
    'I got a promotion at my job',
    'Did you really?',
    'Seriously, I am so excited',
    'Well, congratulations',
    'Thanks',
    'I am happy for you',
    'Really?',
    'Yes'
    
    ],
    
    
    
    [
    
    'Have you heared my good news?',
    'You havent told me anything yet',
    'I got a promotion at work earlier this week',
    'Is that right?',
    'Its the truth. I am Really happy',
    'Congratulations',
    'Thank you'
    
    ],
    
    
    
    [
    
    'You took really nice todays',
    'Thank you. I just got this outfit the other day',
    'Really, where did you get it?',
    'I got it from Macys',
    'Its really nice',
    'Thank you. I just got these shoes today',
    'Really?',
    'Oh I see. thats really nice',
    'Thank you'
    
    ],
    
    
    
    [
    
    'I absolutely love what you are wearing today',
    'You do? I just bought this outfit a couple days ago',
    'Seriously, it looks nice on you. Where did you buy it from?',
    'I bought it from Macys at Shimla',
    'I really like that one',
    'Thank you so much',
    'you are welcome'
    
    ],
    
    
    
    
    [
    
    'Tell me, what do you enjoy doing in your spare time?',
    'I enjoyed drawing and painting',
    'You know how to draw and paint?',
    'Yes, definately',
    'When did you learn how to do that?',
    'I learned back in high school',
    'Oh',
    'Yeah',
    'I wish I had a talent like that',
    'I am sure you have a talent'
    
    ],
    
    
    
    [
    
    'Whats your favourite movie?',
    'Superland',
    'Oh, why is that?',
    'Its the funniest movie that i have ever seen',
    'Thats true. It is a very movie',
    'Yes, I saw that movie',
    'Didnt you laugh through the whole movie? I did',
    'Me too',
    'Yeah bye'
    
    ],
    
    
    
    [
    
    'What type of music do you like to listen to?',
    'I like listening to different kinds of music',
    'Like what, for instance?',
    'I enjoy Rock',
    'I like tha different instruements that they use',
    'Thats good',
    'Yeah'
    
    ],
    
    
    
    [
    
    'What kind of music you listening ?',
    'I listen all kinds of music',
    'What kind?',
    'Rock and sad',
    'Why do you like that type of music?',
    'I like the kinds of instruements that they use',
    'I think thats an amazing',
    'Yeah, you are right'
    
    ],
    
    
    
    [
    
    'What is your favorite kind of music?',
    'I listen various types of music',
    'What genres?',
    'I enjoy listening to both Rand B and Rock',
    'What interest you in that type of music?',
    'I enjoy the different types of music',
    'That is a perfect reason to like a certain kind of music',
    'Thats exactly what I think too'
    
    ],
    
    
    
    [
    
    'Is your phone out of range?',
    'What do you mean?',
    'I tried calling you all night, but I wasnt able to get through',
    'Oh, I was on the phone all night. Sorry about that',
    'Well, you might wanna add call waiting to your phone service if you are always on the phone',
    'I guess so'
    
    ],
    
    
    
    [
    
    'Mom, can we have a picnic this afternoon?',
    'Sure. Where should we have it?',
    'How about the lake?',
    'Thats a great idea',
    'What should we pack for lunch?',
    'I can make sandwiches',
    'Yummy. I love sandwiches',
    'Ok'
    
    ],
    
    
    
    [
    
    'Excuse me, whats you name?',
    'My name is sonal. What is yours?',
    'Simaran',
    'All right',
    'Yeah',
    'You are new at a school?',
    'Yes.I am',
    'Well welcome to our school',
    'Thank you so much'
    
    ],
    
    
    
    [
    
    'Did you hear the news?',
    'What news?',
    'They are building a new lotous downtown',
    'Really?',
    'Yes, I read it in the paper',
    'When will it open?',
    'It should open in next summer',
    'Ok, thats nice'
    
    ],
    
    
    
    
    [
    
    'Have you seen my backpack?',
    'No. Why do you ask?',
    'Because I cant find it',
    'Did you look in your closet?',
    'Yes, It wasnt there',
    'Did you look under the bag',
    'Yes',
    'Ok'
    
    ],
    
    
    
    [
    
    'Whos that?',
    'Thats my little brother',
    'Why is he following us?',
    'He wants to play volleyball with us',
    'Should we let him play?',
    'No, he is too small',
    'Well, he can keep score for us',
    'Yes, I guess thats ok',
    'Call him over',
    'Ok'
    
    ]
    
    ];
    
