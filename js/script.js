
function preloader() {
  const imagesList = [
     "./img/img-1.jpg",
     "./img/img-2.jpg",
     "./img/img-3.jpg"
  ];
  const images = [];
  for (let i = 0; i < imagesList.length; i++) {
      images[i] = new Image();
      images[i].src = imagesList[i];
  }
  console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
}
window.addEventListener("load", preloader);

const content = {
  solution1: {
      headingContent: "Green Solution 1",
      bodyText: "<h1 class='solution-h'>Innovative Financing and Incentives</h1><br><ul><li class='solution-1'>Government Subsidies and Tax Credits: By providing subsidies for green energy projects and offering tax credits to both producers and consumers of green energy, governments can lower the cost barriers. These financial incentives make investments in renewable energy sources like solar, wind, and geothermal more attractive to businesses and homeowners alike.</li><br><li class='solution-1'>Green Bonds and Loans: Encourage the issuance of green bonds and specialized loans with lower interest rates for projects that contribute to environmental sustainability. This approach can mobilize private sector investment in green energy projects by offering attractive returns and reduced financial risk.</li></ul>",
      imgUrl: "./img/2.jpg",
      imgAlt: "Green Energy Solution 1"
  },
  solution2: {
      headingContent: "Green Solution 2",
      bodyText: "<h1 class='solution-h'>Technological Advancements and Efficiency Improvements</h1><br><ul><li class='solution-1'>Research and Development (R&D): Investing in R&D to innovate new green technologies or improve existing ones can lead to more efficient energy production, storage, and consumption mechanisms. Breakthroughs in battery technology, for example, could significantly reduce the cost of storing renewable energy, making it more competitive with fossil fuels.</li><br><li class='solution-1'>Economies of Scale: As more green energy projects are developed, the industry can benefit from economies of scale, which reduces the cost per unit of energy produced. This can be achieved by standardizing technology, increasing production capacity, and streamlining supply chains.</li></ul>",
      imgUrl: "./img/3.jpg",
      imgAlt: "Green Energy Solution 2"
  },
  solution3: {
      headingContent: "Green Solution 3",
      bodyText: "<h1 class='solution-h'>Regulatory Reforms and Market Support</h1><br><ul><li class='solution-1'>Feed-in Tariffs and Power Purchase Agreements (PPAs): Implementing policies that guarantee a fixed, attractive price for green energy producers can encourage investment in renewable energy sources. Feed-in tariffs and PPAs provide long-term security for investors and help integrate renewable energy into the national grid more efficiently.</li><br><li class='solution-1'>Deregulation and Open Markets: By removing barriers to entry and promoting competition within the green energy sector, governments can stimulate innovation and reduce costs. Facilitating the entry of new players can disrupt traditional energy markets, driving down prices and accelerating the transition to a green energy economy.</li></ul>",
      imgUrl: "./img/4.jpg",
      imgAlt: "Green Energy Solution 3"
  }
};

document.querySelectorAll("button").forEach((button, index) => {
  button.addEventListener("click", function() {
      document.getElementById("active-button").removeAttribute("id");
      this.id = "active-button";

      const contentKeys = Object.keys(content);
      const currentContent = content[contentKeys[index]];
      const dynamicContent = document.getElementById("dynamic-content");
      dynamicContent.innerHTML = `<h2>${currentContent.headingContent}</h2>
                                  <img src="${currentContent.imgUrl}" alt="${currentContent.imgAlt}">
                                  <p>${currentContent.bodyText}</p>`;
  });
});

document.querySelector("button").click();
