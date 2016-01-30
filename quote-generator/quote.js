function quotable() {
  var quotes = [
    {quote: "\"You're only given a littles spark of madness.  You mustn't lose it.\"", name: "Robin Williams"},
    {quote: "\"I do well with snakes and I can't dance\"", name: "Robin Williams"},
    {quote: "\"I like coffee because it gives me the illusion that I might be awake\"", name: "Lewis Black"},
    {quote: "\"When it comes to idiots, America's got more than it's fair share. If idiots were energy, it would be a source that would never run out\"", name: "Lewis Black"},
    {quote: "\"Each of us is full of shit in our own special way.  We are all shitty little snowflakes dancing in the universe.\"", name: "Lewis Black"},
    {quote: "\"You cannot escape the responsibility of tomorrow by evading it today\"", name: "Abraham Lincoln"},
    {quote: "\"America will never be destroyed from the outside.  If we falter and lose our freedoms, it will be because we destroyed ourselves.\"", name: "Abraham Lincoln"},
    {quote: "\"Whatever you are, be a good one.\"", name: "Abraham Lincoln"},
    {quote: "\"Step with care and great tact, and remember that Life's a Great Balancing Act.\"", name: "Dr. Seuss"},
    {quote: "\"You grow up the day you have the first real laugh at yourself.\"", name: "Ethel Barrymore"},
    {quote: "\"I buy expensive suits. They just look cheap on me\"", name: "Warren Buffett"},
    {quote: "\"The length of a film should be directly related to the endurance of the human bladder\"", name: "Alfred Hitchcock"},
    {quote: "\"Peace is its own reward\"", name: "Mahatma Gandhi"}
  ];
  var random = quotes[Math.floor(Math.random() * quotes.length)];
    $(".quote").text(random.quote);
    $(".author").text(random.name);

  };
