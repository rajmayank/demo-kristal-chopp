// Load Styles
import '../scss/main.scss';


// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";
import {Modal} from "bootstrap";
import * as bootstrap from 'bootstrap';


// Loading bootstrap with optional features
initBootstrap({
  tooltip: false,
  popover: false,
  toasts: false,
  modal: true,
});


const ModalData = {
  "your-taxes": {
    "title": "Financial Situation - Your Taxes",
    "body": `
    <p>
    Inflation is at a <strong>40 YEAR HIGH<strong> and now that we have made real progress
    on restoring financial stability, council must stay focused on municipal
    priorities (infrastructure, roads, garbage, snow removal) in order to keep
    us on track. </p>
    <p>
    I want to keep Norfolk affordable for seniors and low-income families
    and council members need to rein in impulse purchases outside of the
    budget arising from political pressures and the promotion of Councilors’
    pet projects that are “wants” rather than “needs”. </p>
    <p>
    FACTS MATTER! I stand by my voting record – I’ve fought harder against
    unnecessary spending than anyone on council bar none but I am but one
    vote. (p.s. I was the ONLY one on council against paid parking!)
    </p>
    `
  },
  "building-department": {
    "title": "Planning and Building Department",
    "body": `<p>We have an <strong>all new planning team</strong> that faced many challenges over the past two years of covid. I'm encouraged with some of the positive changes I've seen but <strong>REAL CHANGE</strong> takes time and it takes support and sound policy direction from council.
<p>This next council must be <strong>BOLDER</strong> in order <strong>to cut red tape and change outdated policies</strong> in order to <strong>streamline and speed up </strong>applications, and ensure all are provided clear upfront information about requirements.
<p>Delays impact our economic development. It affects the supply of our housing. It costs all tax payers in deferred tax revenue and it discourages outside investment in Norfolk.<p>`
  },
  "infrastructure": {
    "title": "Infrastructure",
    "body": `
    <p>We continue to have massive infrastructure challenges in Norfolk. The
    dam was dealt with, the causeway is scheduled for completion this fall, but
    the water and wastewater challenges we continue to face are momentous
    and the without doubt the largest issue ever faced by Norfolk that will
    require more than $250 million to address.</p>
    <p>
    ***Note: water and wastewater is not funded by the tax levy.
    It is funded only by those on the municipal system.</p>
    <p>
    <strong>As the architect that brought this once talked about solution to life
    and got us to laying our first piece of pipe, I am best situated to see it
    through its critical first phases and to continue the ongoing discussions
    I have been having with the province for funding, because without
    funding a full regional water solution simply is not possible. </strong> 
    </p>
    `
  },
  "advocated-fiercely":{
    "title": "I advocated fiercely with higher levels of government and was SUCCESSFUL in getting them",
    "body": `
      <ul>
        <li>To commit to bring <strong>fibre internet to nearly 9100 homes/businesses/farms</strong> in Norfolk not already serviced by 50 mbps!! Build-out has commenced. Fully complete in 2023.</li>
        <li>To ensure the Indwell housing project (Norfolk Inn)<strong> did NOT cost our local taxpayers </strong> despite council voting to fund $250k/yr for 20yrs.</li>
        <li>Getting the province to commit to <strong>fully fund</strong> & finally deal with the leaking forestry farm gas well that erupted in 2015. Countless presentations to Ministers over past 3 yrs.</li>
      </ul>  
    `
  },
  "campaigned-2018":{
    "title": "I campaigned in 2018 on REBUILDING our financial position and DELIVERED",
    "body": `
    <ul>
      <li>Turned a lemon into lemonade: Sold the HUB lands for nearly <strong>$1 million in profit for taxpayers PLUS purchaser to donate 1.5 acres to H-N Housing Corp. for affordable housing</strong> project.</li>
      <li>Made very <strong>difficult but necessary decisions</strong> to make cutbacks to staff and facilities.</li>
      <li>Sold surplus assets (land & buildings) <strong>to rebuild depleted reserve accounts</strong>.</li>
      <li>Raised development charges to ensure current tax payers don't <strong>continue to pay for future growth</strong>.</li>
    </ul>  
    `
  },
  "campaigned-transpency":{
    "title": "I campaigned on TRANSPARENCY and YOU GOT IT",
    "body": `
    <ul>
      <li>Instituted quarterly variance reporting to ensure county departments stay <strong>within their budget</strong>.</li>
      <li>New policy 2019 - <strong>all auditor's notes must be publicly posted</strong> and we released all previous years.</li>
      <li><strong>Exposed the massive water/wastewater problems</strong> that were buried and ignored while development permits continued to be issued unabated.</li>
      <li>Countless skeletons in the closet were made public. I'm proud that a culture has been created where <strong>staff aren't afraid to bring bad news to council and many financial policies were created to prevent this from re-occuring.</strong></li>
    </ul>  
    `
  },
  "covid":{
    "title": "The unexpected challenge of COVID",
    "body": `
      <p><strong>Instrumental in hiring a fair medical officer of health who uses a balanced, evidence-based approach to support small business, engage with our agricultural community and who lets kids play hockey.</strong></p> 
    `
  },
  "municipal-election":{
    "title": "The municipal election of 2022 is finally underway but in reality the mayoralty of Norfolk has been contested around the council table for the past three years.",
    "body": `
      <p>Four years ago, Norfolk was rudderless and headed for the rocks.<strong>Since 2010, the County had run deficits EVERY SINGLE YEAR except 2012 and our reserve accounts had been COMPLETELY DEPLETED in orderto maintain tax and service levels artificially.</strong></p>
      <img src="images/modal-facts.png" class="img-fluid mb-3"></img>
      <p><strong>In the early days of 2020, just before COVID hit, staff, council and this community, truly began that difficult and painful task of staring down the barrel of our financial reality and the painful changes that it would mean for this community.</strong></p>
      <p>I believe it will take another four years to complete a course correction and finally moor the county in the safe harbour of solvency and prudent policy with an eye to common sense and the long view.</p>
      <p>A vote for Kristal CHOPP is a vote <strong>to end the gamesmanship and politicking</strong> as well as a reminder to council members to put the best interests of Norfolk County in the forefront and keep them there!</p>
      <p> <strong>I'm a proven navigator with a firm hand on the tiller. Together, we can get Norfolk where it needs to be!</strong></p>
    `
  },
}

var myModal = new bootstrap.Modal(document.getElementById("pageModal"), {});

var elements = document.getElementsByClassName("page-modal-trigger");

var myFunction = function() {
    let attribute = this.getAttribute("data-modal-id");
    let data = ModalData[attribute]

    document.getElementById("pageModalTitle").innerText = data["title"]
    document.getElementById("pageModalBody").innerHTML = data["body"] + `<div class="text-center"><button id="close-modal" class="btn brand-btn-secondary rounded-0 mt-2 text-capitalize">Close</button></div>`
    myModal.show();
    
    document.getElementById("close-modal").addEventListener("click", function(){
      myModal.hide();
    })
};


for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}
