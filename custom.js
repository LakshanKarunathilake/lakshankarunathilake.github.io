VANTA.WAVES({
  el: "#element2",
  color: 0x111111,
  waveHeight: 20,
  shininess: 50,
  waveSpeed: 1.5,
  zoom: 0.75
});

new TypeIt("#introduction", {
  speed: 50,
  startDelay: 900,
  loop: true
})
  .type("I am Lakshan Karunathilake")
  .pause(300)
  .delete(21)
  .pause(250)
  .type("a former intern at WSO2 Inc")
  .pause(750)
  .options({ speed: 100, deleteSpeed: 75 })
  .delete(8)
  .pause(750)
  .type("<em>planet.</em>")
  .go();
