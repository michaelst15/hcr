class Player {
    constructor(name, score) {
      this.name = name;
      this.score = score;
    }
  }
  
  class Checker {
    compare(a, b) {
      if (a.score !== b.score) {
        // Jika skor tidak sama, urutkan secara menurun berdasarkan skor
        return b.score - a.score;
      } else {
        // Jika skor sama, urutkan secara menaik berdasarkan nama (alphabetically ascending)
        return a.name.localeCompare(b.name);
      }
    }
  }
  
  // Contoh penggunaan:
  const players = [
    new Player("amy", 100),
    new Player("david", 100),
    new Player("heraldo", 50),
    new Player("aakansha", 75),
    new Player("aleksa", 150)
  ];
  
  const checker = new Checker();
  players.sort(checker.compare);
  
  // Output hasil pengurutan
  for (let player of players) {
    console.log(player.name, player.score);
  }