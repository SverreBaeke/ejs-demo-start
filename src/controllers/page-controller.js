import { person,navItems } from "../data/data.js";

export const home = (req,res) => {
    res.render('pages/home', {
        title: "Dinosaurs around the world",
        content: "Welcome to the world of dinosaurs",
        navItems,
        
      })
};

export const about = (req,res) => {
    res.render('pages/default', {
        title: "About us",
        message: "We are a group of dinosaur enthusiasts",
        team: [
            "T-Rex",
            "Velociraptor",
            "Stegosaurus",
            "<strong>Premium</strong> Diplodocus",
            
        ],
        navItems
    })
};

export const contact = (req,res) => {
    res.render('pages/contact', {
        title: "Contact",
        message: "Contact us at 09 233 40 89",
        person,
        navItems

    })
};

export const privacy = (req,res) => {
    res.render('pages/default', {
        title: "Privacy policy",
        message: "Dinosaurs are protective of their privacy",
        team: false,
        navItems
    })
};