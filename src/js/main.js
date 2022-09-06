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
    "title": "Financial Situation - Your Taxes",
    "body": `
    <p>
    Inflation is at a <strong>40 YEAR HIGH<strong> and now that we have made real progress
    on restoring financial stability, council must stay focused on municipal
    priorities (infrastructure, roads, garbage, snow removal) in order to keep
    us on track. </strong> </p>
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
}

var myModal = new bootstrap.Modal(document.getElementById("pageModal"), {});

var elements = document.getElementsByClassName("page-modal-trigger");

var myFunction = function() {
    let attribute = this.getAttribute("data-modal-id");
    let data = ModalData[attribute]

    document.getElementById("pageModalTitle").innerText = data["title"]
    document.getElementById("pageModalBody").innerHTML = data["body"]
    myModal.show();
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}
