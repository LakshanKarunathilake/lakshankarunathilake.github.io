VANTA.WAVES({
  el: "#element2",
  color: 0x111111,
  waveHeight: 20,
  shininess: 50,
  waveSpeed: 1.5,
  zoom: 0.75
});

new TypeIt("#introduction", {
  speed: 80,
  startDelay: 900,
  loop: true
})
  .type("I am Lakshan Karunathilake")
  .pause(300)
  .delete(21)
  .pause(250)
  .type(
    "a former <span id='name'>Trainee Software Engineer</span> @ <span id='companyName'>WSO2 Inc</span>."
  )
  .go();
